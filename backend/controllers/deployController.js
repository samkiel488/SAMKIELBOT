const Deployment = require("../models/Deployment");
const { successResponse, errorResponse } = require("../utils/response");
const axios = require("axios");
const { Octokit } = require("@octokit/rest");
const fs = require("fs").promises;
const path = require("path");

// @desc    Deploy a bot
// @route   POST /api/deploy
// @access  Private
const deployBot = async (req, res) => {
  try {
    const { botName, version } = req.body;

    const deployment = await Deployment.create({
      user: req.user.id,
      botName,
      version,
      status: "running",
    });

    successResponse(res, deployment, 201);
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

// @desc    Get user deployments
// @route   GET /api/deploy
// @access  Private
const getDeployments = async (req, res) => {
  try {
    const deployments = await Deployment.find({ user: req.user.id });
    successResponse(res, deployments);
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

// @desc    Update deployment status
// @route   PUT /api/deploy/:id
// @access  Private
const updateDeployment = async (req, res) => {
  try {
    const deployment = await Deployment.findById(req.params.id);

    if (!deployment) {
      return errorResponse(res, "Deployment not found", 404);
    }

    // Check if user owns the deployment
    if (deployment.user.toString() !== req.user.id) {
      return errorResponse(res, "Not authorized", 401);
    }

    const updatedDeployment = await Deployment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    successResponse(res, updatedDeployment);
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

// @desc    Create and deploy a bot with custom WhatsApp number
// @route   POST /api/deploy/create
// @access  Private
const createDeployment = async (req, res) => {
  try {
    const { botNumber } = req.body;

    // Validate botNumber format
    if (!/^\d{10,15}$/.test(botNumber)) {
      return errorResponse(res, "Invalid WhatsApp number format", 400);
    }

    // Create deployment record
    const deployment = await Deployment.create({
      user: req.user.id,
      botNumber,
      status: "deploying",
    });

    // Start deployment process asynchronously
    processDeployment(deployment._id);

    successResponse(res, deployment, 201);
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

// Helper function to handle the deployment process
const processDeployment = async (deploymentId) => {
  try {
    const deployment = await Deployment.findById(deploymentId);
    if (!deployment) return;

    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const owner = "samkiel488";
    const repo = "SAMKIELBOT";
    const baseBranch = "main";

    // Fetch settings.js from GitHub
    const { data: settingsFile } = await octokit.repos.getContent({
      owner,
      repo,
      path: "settings.js",
    });

    const settingsContent = Buffer.from(
      settingsFile.content,
      "base64"
    ).toString("utf-8");

    // Modify bot number in settings.js
    const modifiedSettings = settingsContent.replace(
      /global\.ownernumber\s*=\s*['"`][^'"`]*['"`]/,
      `global.ownernumber = '${deployment.botNumber}'`
    );

    // Create new branch
    const branchName = `blackboxai/bot-${deployment.botNumber}-${Date.now()}`;
    const { data: baseRef } = await octokit.git.getRef({
      owner,
      repo,
      ref: `heads/${baseBranch}`,
    });

    await octokit.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branchName}`,
      sha: baseRef.object.sha,
    });

    // Commit modified settings.js
    const { data: commit } = await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: "settings.js",
      message: `Update bot number to ${deployment.botNumber}`,
      content: Buffer.from(modifiedSettings).toString("base64"),
      branch: branchName,
      sha: settingsFile.sha,
    });

    // Deploy to Render
    const renderResponse = await axios.post(
      "https://api.render.com/v1/services",
      {
        type: "web_service",
        name: `samkiel-bot-${deployment.botNumber}`,
        repo: `https://github.com/${owner}/${repo}`,
        branch: branchName,
        buildCommand: "npm install",
        startCommand: "npm start",
        plan: process.env.RENDER_SERVICE_PLAN || "starter",
        envVars: [{ key: "NODE_ENV", value: "production" }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RENDER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const serviceId = renderResponse.data.id;

    // Update deployment with serviceId
    await Deployment.findByIdAndUpdate(deploymentId, {
      serviceId,
      status: "running",
    });

    // Poll for pairing code from logs
    await pollForPairingCode(deploymentId, serviceId);
  } catch (error) {
    console.error("Deployment error:", error);
    await Deployment.findByIdAndUpdate(deploymentId, {
      status: "failed",
    });
  }
};

// Helper function to poll Render logs for pairing code
const pollForPairingCode = async (deploymentId, serviceId) => {
  const maxAttempts = 30; // 5 minutes with 10s intervals
  let attempts = 0;

  while (attempts < maxAttempts) {
    try {
      const logsResponse = await axios.get(
        `https://api.render.com/v1/services/${serviceId}/logs`,
        {
          headers: {
            Authorization: `Bearer ${process.env.RENDER_API_KEY}`,
          },
        }
      );

      const logs = logsResponse.data;
      const pairingCodeMatch = logs.join("\n").match(/Pairing code: (\d{6})/);

      if (pairingCodeMatch) {
        await Deployment.findByIdAndUpdate(deploymentId, {
          pairingCode: pairingCodeMatch[1],
          status: "running",
        });
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait 10 seconds
      attempts++;
    } catch (error) {
      console.error("Error polling logs:", error);
      attempts++;
    }
  }

  // If no pairing code found after max attempts
  await Deployment.findByIdAndUpdate(deploymentId, {
    status: "failed",
  });
};

module.exports = {
  deployBot,
  getDeployments,
  updateDeployment,
  createDeployment,
};

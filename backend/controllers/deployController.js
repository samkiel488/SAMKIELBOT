const Deployment = require('../models/Deployment');
const { successResponse, errorResponse } = require('../utils/response');

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
      status: 'running',
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
      return errorResponse(res, 'Deployment not found', 404);
    }

    // Check if user owns the deployment
    if (deployment.user.toString() !== req.user.id) {
      return errorResponse(res, 'Not authorized', 401);
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

module.exports = {
  deployBot,
  getDeployments,
  updateDeployment,
};

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { successResponse, errorResponse } = require('../utils/response');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return errorResponse(res, 'User already exists', 400);
    }

    // Create user
    const user = await User.create({
      username,
      email,
      password,
    });

    if (user) {
      successResponse(res, {
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      errorResponse(res, 'Invalid user data', 400);
    }
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      successResponse(res, {
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      errorResponse(res, 'Invalid credentials', 401);
    }
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

// @desc    Verify token
// @route   GET /api/auth/verify
// @access  Private
const verifyToken = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    successResponse(res, user);
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

module.exports = {
  register,
  login,
  verifyToken,
};

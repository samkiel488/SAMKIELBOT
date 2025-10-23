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
    const { fullName, username, email, whatsappNumber, password } = req.body;

    // Validation for required fields
    if (!fullName || !username || !email || !whatsappNumber || !password) {
      return errorResponse(res, 'All fields are required', 400);
    }

    // Additional backend validation for uniqueness (pre-check before MongoDB)
    const existingUser = await User.findOne({
      $or: [
        { email: email.toLowerCase().trim() },
        { username: username.toLowerCase().trim() },
        { whatsappNumber: whatsappNumber.trim() }
      ]
    });

    if (existingUser) {
      if (existingUser.email === email.toLowerCase().trim()) {
        return errorResponse(res, 'Email already exists.', 400, 'email_exists');
      }
      if (existingUser.username === username.toLowerCase().trim()) {
        return errorResponse(res, 'Username already exists.', 400, 'username_exists');
      }
      if (existingUser.whatsappNumber === whatsappNumber.trim()) {
        return errorResponse(res, 'WhatsApp number already exists.', 400, 'whatsappNumber_exists');
      }
    }

    // Create user
    const user = await User.create({
      fullName,
      username,
      email,
      whatsappNumber,
      password,
    });

    if (user) {
      successResponse(res, {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        whatsappNumber: user.whatsappNumber,
        token: generateToken(user._id),
      });
    } else {
      errorResponse(res, 'Invalid user data', 400);
    }
  } catch (error) {
    // Handle duplicate key errors (fallback)
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return errorResponse(res, `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`, 400, `${field}_exists`);
    }
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return errorResponse(res, messages.join(', '), 400, 'validation_error');
    }
    errorResponse(res, 'Registration failed. Please try again.', 500, 'general_error');
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { identifier, password } = req.body; // identifier can be email or username

    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }]
    });

    if (user && (await user.matchPassword(password))) {
      successResponse(res, {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        whatsappNumber: user.whatsappNumber,
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

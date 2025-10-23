const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { errorResponse } = require('./response');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      errorResponse(res, 'Not authorized, token failed', 401);
    }
  }

  if (!token) {
    errorResponse(res, 'Not authorized, no token', 401);
  }
};

module.exports = { protect };

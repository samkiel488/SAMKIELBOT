const successResponse = (res, data, statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    data,
  });
};

const errorResponse = (res, message, statusCode = 500) => {
  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};

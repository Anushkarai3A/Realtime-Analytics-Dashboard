const logger = require('../utils/logger');
const ApiError = require('../utils/ApiError');

/**
 * @description Global error handler middleware
 */
const errorHandler = (err, req, res, next) => {
    let error = err;

    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode || (error.name === 'ValidationError' ? 400 : 500);
        const message = error.message || 'Internal Server Error';
        error = new ApiError(statusCode, message, false, err.stack);
    }

    const { statusCode, message } = error;

    const response = {
        success: false,
        statusCode,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    };

    logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    res.status(statusCode).json(response);
};

module.exports = { errorHandler };

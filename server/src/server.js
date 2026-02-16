const express = require('express');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { initSocket } = require('./socket/socketService');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const logger = require('./utils/logger');

// Route Imports
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Connect to Database
// connectDB(); // Commented out to avoid connection errors if Mongo isn't running locally, but implemented for architecture.

const app = express();
const server = http.createServer(app);

// Initialize Socket.io
initSocket(server);

// Security Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));

// Logging Middleware
app.use(morgan('dev'));

// Body Parser
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// API Routes
app.use('/api/v1/auth', authRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Global Error Handler (Must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = () => {
    server.listen(PORT, () => {
        logger.info(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
};

// Graceful Shutdown Handler
const gracefulShutdown = () => {
    logger.info('SIGTERM/SIGINT received. Shutting down gracefully...');
    server.close(() => {
        logger.info('Process terminated.');
        process.exit(0);
    });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Handle Uncaught Exceptions
// ...
process.on('uncaughtException', (err) => {
    logger.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    logger.error(err.name, err.message);
    process.exit(1);
});

// Handle Unhandled Rejections
process.on('unhandledRejection', (err) => {
    logger.error('UNHANDLED REJECTION! 💥 Shutting down...');
    logger.error(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

startServer();

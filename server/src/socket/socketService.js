const { Server } = require('socket.io');
const analyticsService = require('../services/analyticsService');
const logger = require('../utils/logger');

let io;

/**
 * @description Initializes socket server and starts data emission streams
 */
const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: process.env.CLIENT_URL || '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        logger.info(`Client connected: ${socket.id}`);

        // Start emitting metrics periodically
        const metricsInterval = setInterval(() => {
            const metrics = analyticsService.generateMetrics();
            socket.emit('metrics_update', metrics);
        }, 2000);

        socket.on('disconnect', () => {
            logger.info(`Client disconnected: ${socket.id}`);
            clearInterval(metricsInterval);
        });

        // Initial data push
        socket.emit('metrics_update', analyticsService.generateMetrics());
    });

    return io;
};

const getIO = () => {
    if (!io) {
        throw new Error('Socket.io not initialized');
    }
    return io;
};

module.exports = { initSocket, getIO };

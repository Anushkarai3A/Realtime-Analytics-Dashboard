const mongoose = require('mongoose');
const logger = require('../utils/logger');

/**
 * @description Establishes connection to MongoDB with retry logic
 */
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/analytics', {
            // Options can be added here
        });

        logger.info(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;

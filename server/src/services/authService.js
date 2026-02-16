const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Model remains similar but used differently
const ApiError = require('../utils/ApiError');
const logger = require('../utils/logger');

/**
 * @description Authentication Service - Handles all security and user business logic
 */
class AuthService {
    /**
     * @description Registers a new user
     */
    async register(userData) {
        const { email, password, name } = userData;

        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new ApiError(400, 'User with this email already exists');
        }

        // Note: Password hashing is handled by Mongoose pre-save hook in a professional setup
        const user = await User.create({
            name,
            email,
            password,
        });

        logger.info(`New user registered: ${email}`);
        return this.formatUser(user);
    }

    /**
     * @description Authenticates a user and returns a session token
     */
    async login(email, password) {
        const user = await User.findOne({ email }).select('+password');

        if (!user || !(await user.matchPassword(password))) {
            throw new ApiError(401, 'Invalid credentials');
        }

        logger.info(`User logged in: ${email}`);
        return {
            user: this.formatUser(user),
            token: this.generateToken(user._id),
        };
    }

    /**
     * @description Generates a JWT token
     */
    generateToken(id) {
        return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
            expiresIn: process.env.JWT_EXPIRES_IN || '30d',
        });
    }

    /**
     * @description Formats user object for response (removes sensitive data)
     */
    formatUser(user) {
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role || 'user',
        };
    }
}

module.exports = new AuthService();

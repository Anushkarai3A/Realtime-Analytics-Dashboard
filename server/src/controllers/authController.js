const authService = require('../services/authService');
const asyncHandler = require('../middleware/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');

/**
 * @description Controllers for Auth routes
 */
class AuthController {
    /**
     * @route   POST /api/v1/auth/register
     * @desc    Register a new user
     * @access  Public
     */
    register = asyncHandler(async (req, res) => {
        const user = await authService.register(req.body);
        res.status(201).json(new ApiResponse(201, user, 'User registered successfully'));
    });

    /**
     * @route   POST /api/v1/auth/login
     * @desc    Login user
     * @access  Public
     */
    login = asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const data = await authService.login(email, password);
        res.status(200).json(new ApiResponse(200, data, 'Login successful'));
    });
}

module.exports = new AuthController();

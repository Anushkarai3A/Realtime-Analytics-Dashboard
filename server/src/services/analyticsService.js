const logger = require('../utils/logger');

/**
 * @description Analytics Service handles data generation and processing
 */
class AnalyticsService {
    constructor() {
        this.baseMetrics = {
            users: 1240,
            revenue: 84200,
            incidents: 3,
            uptime: 99.9
        };
    }

    /**
     * @description Generates a new set of metrics with realistic jitter
     */
    generateMetrics() {
        const jitter = (range) => (Math.random() - 0.5) * range;

        return {
            users: Math.floor(this.baseMetrics.users + jitter(50)),
            revenue: Math.floor(this.baseMetrics.revenue + jitter(1000)),
            incidents: Math.max(0, Math.floor(this.baseMetrics.incidents + jitter(1))),
            uptime: Math.min(100, (this.baseMetrics.uptime + jitter(0.1)).toFixed(2)),
            timestamp: new Date().toISOString()
        };
    }

    /**
     * @description Generates time-series data for charts
     */
    generateTimeSeries(points = 20) {
        return Array.from({ length: points }).map((_, i) => ({
            time: `${12 + i}:00`,
            value: Math.floor(Math.random() * 100) + 200,
            load: Math.floor(Math.random() * 40) + 60,
        }));
    }
}

module.exports = new AnalyticsService();

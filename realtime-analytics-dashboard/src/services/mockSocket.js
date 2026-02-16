/**
 * MockSocket Service
 * Simulates a real-time WebSocket connection using an event-driven pattern.
 * Designed to demonstrate handling of stream data in high-performance React apps.
 */
export class MockSocket {
    constructor() {
        this.listeners = new Set();
        this.interval = null;
        this.isConnected = false;
        this.data = {
            activeUsers: 850,
            requestsPerSecond: 45,
            errorRate: 1.2,
            latency: 120,
            history: Array.from({ length: 20 }, (_, i) => ({
                time: i,
                users: 800 + Math.random() * 100,
                requests: 40 + Math.random() * 10,
                errors: 1 + Math.random() * 0.5,
            }))
        };
    }

    /**
     * Initializes the connection and starts the data stream simulation.
     */
    connect() {
        if (this.isConnected) return;
        this.isConnected = true;

        // Simulate real-time data flow
        this.interval = setInterval(() => {
            this._generateNewState();
            this._broadcast();
        }, 2000);
    }

    /**
     * Updates internal state with simulated fluctuations.
     * @private
     */
    _generateNewState() {
        this.data.activeUsers += Math.floor(Math.random() * 15) - 7;
        if (this.data.activeUsers < 0) this.data.activeUsers = 0;

        this.data.requestsPerSecond = Math.floor(35 + Math.random() * 25);
        this.data.errorRate = parseFloat((0.5 + Math.random() * 1.5).toFixed(2));
        this.data.latency = Math.floor(90 + Math.random() * 60);

        const newEntry = {
            time: Date.now(),
            users: this.data.activeUsers,
            requests: this.data.requestsPerSecond,
            errors: this.data.errorRate,
        };

        this.data.history = [...this.data.history.slice(1), newEntry];
    }

    /**
     * Subscribes a consumer to the data stream.
     * @param {Function} callback - Callback function for new data events.
     * @returns {Function} Unsubscribe function.
     */
    subscribe(callback) {
        this.listeners.add(callback);
        // Send initial data immediately upon subscription
        callback(this.data);
        return () => this.listeners.delete(callback);
    }

    /**
     * Broadcasts current state to all subscribers.
     * @private
     */
    _broadcast() {
        this.listeners.forEach((callback) => callback({ ...this.data }));
    }

    /**
     * Terminates the connection and stops the data stream.
     */
    disconnect() {
        this.isConnected = false;
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

export const mockSocket = new MockSocket();

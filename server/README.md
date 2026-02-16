# Professional Analytics Backend (Senior Engineer Refactor)

This backend has been refactored from a beginner-level monolithic structure into a production-ready, Service-Oriented Architecture (SOA).

## 📂 New Folder Structure

- `src/config`: Centralized configuration (Database, environment).
- `src/controllers`: Request handlers. Purely for parsing input and calling services. No business logic.
- `src/services`: The Core Business Logic. Handles data generation, Socket emissions, and complex operations.
- `src/routes`: Clean route definitions mapping endpoints to controllers.
- `src/middleware`: Custom global error handler and async wrappers.
- `src/socket`: Modularized real-time communication logic.
- `src/utils`: Standardized `ApiError`, `ApiResponse`, and `Logger` (Winston).

## ✨ Professional Improvements Made

1.  **Separation of Concerns**: Moved from a giant `server.js` and messy controllers to a strict `Route -> Controller -> Service` flow. This makes the code **scalable** and **testable**.
2.  **Robust Error Handling**: Implemented a global exception handler and a custom `ApiError` class. This prevents server crashes and provides consistent JSON error responses.
3.  **Advanced Logging**: Switched from `console.log` to **Winston**. In production, this allows us to stream logs to files or external dashboards like Datadog/ELK.
4.  **Real-Time Modularization**: Extracted Socket.io logic into its own service, ensuring real-time features don't clutter the HTTP logic.
5.  **Security Best Practices**: Added `helmet` (HTTP headers), `cors`, and `express-rate-limit` (ready to be configured) to harden the server.
6.  **Production Readiness**: Added **Graceful Shutdown** handlers for `SIGTERM` and `SIGINT` to prevent data loss during deployments.

## 🎓 Interview Tips: Explaining this Architecture

If a recruiter asks why you structured the backend this way, use these points:

- **"I used a Service Layer to separate business logic from the transport layer (Express)."** - This shows you understand that Node.js code should be modular and not tied to one specific framework.
- **"I implemented structured logging with Winston."** - This shows you care about observability and debugging in production environments.
- **"I unified the error handling using a global middleware and custom Error classes."** - This demonstrates an understanding of high availability and code maintainability.
- **"The architecture is designed for scalability."** - Explain how easy it is to add a new feature by creating a new Service and Controller without touching existing logic.

## 🚀 Getting Started

1. `cd server`
2. `npm install`
3. `npm run dev`

#  AntiGravity Analytics

**Live Demo:** [https://realtime-analytics-dashboard-dp6m.vercel.app/](https://realtime-analytics-dashboard-dp6m.vercel.app/)

**AntiGravity Analytics** is a high-performance, real-time dashboard designed to visualize complex system metrics with zero latency. It demonstrates a **Service-Oriented Architecture** capable of handling high-throughput data streams while maintaining a silky-smooth, glassmorphic UI.

##  Live Demo Features

- **Real-Time Data Streams**: Powered by **Socket.io**, delivering live updates on active users, revenue, and system health every 2 seconds.
- **Glassmorphism UI**: A futuristic, premium interface built with **Tailwind CSS** and **Framer Motion**.
- **Interactive Visualizations**: Dynamic charts and conversion funnels using **Recharts**.
- **Production-Grade Backend**: A robust Node.js/Express server with:
    - **Service Layer Pattern**: Business logic isolated from controllers.
    - **Winston Logger**: Structured, persistent logging.
    - **Global Error Handling**: Centralized error management for high availability.
    - **Graceful Shutdown**: Safety mechanisms for data integrity.

##  Tech Stack

### Frontend
- **React 18** (Vite)
- **Tailwind CSS** (Styling & Design System)
- **Framer Motion** (Animations)
- **Recharts** (Data Visualization)
- **Socket.io-client** (Real-time Transport)

### Backend
- **Node.js & Express**
- **Socket.io** (WebSockets)
- **Winston** (Logging)
- **Helmet & CORS** (Security)

##  Project Structure

```bash
realtime-analytics-dashboard/
├── src/
│   ├── components/         # Reusable UI components (StatCards, Charts)
│   ├── features/           # Page-level logic (Analytics, Dashboard, Metrics)
│   ├── services/           # API and Socket integrations
│   └── context/            # Global state (Theme, Auth)
server/
├── src/
│   ├── controllers/        # Request handling
│   ├── services/           # Business logic & Data generation
│   ├── socket/             # Dedicated Socket.io manager
│   └── utils/              # Logger, Error classes, Response formatters
```

##  Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1.  **Clone the repository**
    ```bash
    git clone https://github.com/Anushkarai3A/Realtime-Analytics-Dashboard.git
    cd Realtime-Analytics-Dashboard
    ```

2.  **Setup Backend**
    ```bash
    cd server
    npm install
    npm run dev
    ```

3.  **Setup Frontend** (In a new terminal)
    ```bash
    cd realtime-analytics-dashboard
    npm install
    npm run dev
    ```

##  Why This Project?
This project serves as a demonstration of **Senior-Level Engineering Principles**:
- **Separation of Concerns**: Clean architecture separating transport, logic, and data layers.
- **Scalability**: Designed to handle adding real database connections (MongoDB/Postgres) without refactoring the core logic.
- **UX First**: Prioritizing perceived performance and visual hierarchy.

---
*Built by [Anushka]*

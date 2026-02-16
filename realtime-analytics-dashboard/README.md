# ⚡ Real-Time Analytics Dashboard

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-22b5bf?style=for-the-badge&logo=recharts&logoColor=white)](https://recharts.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

A high-performance, interview-ready analytics dashboard built with React and Vite. This project focuses on visual excellence, real-time data synchronization, and senior-level frontend architecture.

## 🚀 Key Features

- **Real-Time Data Streaming**: Robust WebSocket-style simulation for live metrics (Users, Req/s, Latency).
- **Premium Charting**: Interactive area charts with custom tooltips, gradients, and micro-animations.
- **Dynamic Theme System**: Seamless dark/light mode toggle with persistent storage and system preference detection.
- **Performance Optimized**: 
  - Efficient re-renders using optimized React state.
  - Premium **Loading Skeletons** for a jitter-free initial experience.
  - Debounced real-time updates for smooth UI transitions.
- **Professional Layout**: Fully responsive sidebar, glassmorphic navigation, and structured component hierarchy.

## 🛠️ Tech Stack

- **Frontend**: React 18 (Vite)
- **Styling**: Tailwind CSS (with custom design tokens)
- **Visualization**: Recharts
- **State/Data**: React Query + Event-driven Service Layer
- **Animations**: Framer Motion
- **Quality**: Prop-Types for runtime type checking

## 📦 Project Structure

```bash
src/
├── app/            # Global routing and app configuration
├── components/      # Reusable UI components (Charts, Cards, Layout)
├── context/        # Business logic providers (Theme, Auth)
├── features/       # Feature-based pages and logic (Dashboard)
├── services/       # External API and WebSocket service simulations
└── utils/          # Helper functions (cn utility, formatting)
```

## 🚦 Getting Started

1. **Clone and Install**:
   ```bash
   git clone <repository-url>
   cd realtime-analytics-dashboard
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open the Dashboard**:
   Navigate to `http://localhost:5173` to see the live metrics in action.

## 💼 Why this is Technical

- **Event-Driven Architecture**: The data layer uses a subscription model (`MockSocket`) similar to real-world Socket.io or WebSocket implementations.
- **Design Tokens**: Leverages CSS variables mapped to HSL color spaces for a flexible, consistent design system.
- **Skeleton States**: Implements high-fidelity skeletons to solve the "content shift" problem during data fetching.
- **Aesthetic Depth**: Uses glassmorphism, depth-based shadow systems, and custom typography for a high-end SaaS feel.

---

Built with ❤️ by Anush

import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

/**
 * DashboardLayout - The primary layout wrapper for the application.
 * Provides a persistent sidebar and navigation shell.
 */
export function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Sidebar />
            <div className="pl-80 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1 p-8 bg-muted/30">
                    <div className="max-w-7xl mx-auto backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {children || <Outlet />}
                    </div>
                </main>
            </div>
        </div>
    );
}

DashboardLayout.propTypes = {
    children: PropTypes.node,
};

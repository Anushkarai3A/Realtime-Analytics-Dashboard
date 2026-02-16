import React, { useEffect, useState } from 'react';
import { StatCard } from '../../components/dashboard/StatCard';
import { RealTimeChart } from '../../components/charts/RealTimeChart';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCardSkeleton, ChartSkeleton } from '../../components/ui/Skeleton';
import { IncidentList } from './components/IncidentList';
import { mockSocket } from '../../services/mockSocket';
import { Users, Activity, AlertCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Dashboard() {
    const [metrics, setMetrics] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        mockSocket.connect();

        const timer = setTimeout(() => {
            const unsubscribe = mockSocket.subscribe((data) => {
                setMetrics(data);
                setIsLoading(false);
                setIsUpdating(true);
                setTimeout(() => setIsUpdating(false), 500);
            });
            return unsubscribe;
        }, 1200);

        return () => {
            mockSocket.disconnect();
            clearTimeout(timer);
        };
    }, []);

    if (isLoading) {
        return (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex flex-col gap-2">
                    <div className="h-12 w-64 bg-muted animate-pulse rounded-2xl" />
                    <div className="h-4 w-96 bg-muted animate-pulse rounded-lg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => <StatCardSkeleton key={i} />)}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ChartSkeleton />
                    <ChartSkeleton />
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-10 pb-10">
            <PageHeader
                title={<>Live <span className="text-gradient">Analytics</span></>}
                description="Real-time performance monitoring across all global services with high-precision anomaly detection."
            >
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/5 text-emerald-500 text-xs font-bold border border-emerald-500/10 shadow-sm backdrop-blur-md animate-pulse-subtle">
                    <div className={cn(
                        "w-2 h-2 rounded-full shadow-lg transition-all duration-500",
                        isUpdating ? "bg-emerald-400 scale-150 shadow-emerald-500/50" : "bg-emerald-500/40"
                    )}></div>
                    <span className="uppercase tracking-widest">System Operational</span>
                </div>
            </PageHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Active Users"
                    value={metrics.activeUsers.toLocaleString()}
                    change={2.5}
                    trend="up"
                    icon={Users}
                    description="Authenticated users on the platform"
                />
                <StatCard
                    title="System Load"
                    value={`${metrics.requestsPerSecond} rps`}
                    change={12.1}
                    trend="up"
                    icon={Activity}
                    description="Composite requests across all nodes"
                />
                <StatCard
                    title="Error Rate"
                    value={`${metrics.errorRate}%`}
                    change={0.4}
                    trend="down"
                    icon={AlertCircle}
                    description="Failed requests in last rolling window"
                />
                <StatCard
                    title="P99 Latency"
                    value={`${metrics.latency}ms`}
                    change={5.2}
                    trend="down"
                    icon={Clock}
                    description="99th percentile end-to-end response"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <RealTimeChart
                        title="Real-time Traffic"
                        data={metrics.history}
                        dataKey="users"
                        color="#3b82f6"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <RealTimeChart
                        title="System Throughput"
                        data={metrics.history}
                        dataKey="requests"
                        color="#8b5cf6"
                    />
                </motion.div>
            </div>

            <IncidentList />
        </div>
    );
}

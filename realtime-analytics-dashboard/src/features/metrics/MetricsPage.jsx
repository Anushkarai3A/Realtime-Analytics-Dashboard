import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Server, Activity, Database, Cloud, Wifi } from 'lucide-react';

const performanceData = Array.from({ length: 20 }, (_, i) => ({
    time: `10:${i + 10}`,
    cpu: Math.floor(Math.random() * 40) + 30,
    memory: Math.floor(Math.random() * 30) + 40,
}));

const latencyDistribution = [
    { range: '<10ms', count: 450 },
    { range: '10-50ms', count: 1200 },
    { range: '50-100ms', count: 300 },
    { range: '100-300ms', count: 150 },
    { range: '>300ms', count: 20 },
];

const MetricCard = ({ title, value, sub, icon: Icon, color }) => (
    <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-sm glass-morphism relative overflow-hidden">
        <div className={`absolute right-4 top-4 p-3 rounded-2xl bg-${color}-500/10 text-${color}-500`}>
            <Icon className="w-6 h-6" />
        </div>
        <p className="text-muted-foreground font-medium mb-1">{title}</p>
        <h3 className="text-4xl font-black tracking-tight mb-2">{value}</h3>
        <p className={`text-sm font-medium text-${color}-500`}>{sub}</p>
    </div>
);

export default function MetricsPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <PageHeader
                title={<>System <span className="text-gradient">Health</span></>}
                description="Real-time infrastructure telemetry and resource utilization."
            />

            {/* Quick Vitals */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="CPU Usage" value="42%" sub="12 Cores Active" icon={Activity} color="blue" />
                <MetricCard title="Memory" value="6.4 GB" sub="16 GB Total" icon={Database} color="purple" />
                <MetricCard title="Network" value="1.2 Gbps" sub="Ingress/Egress" icon={Wifi} color="emerald" />
                <MetricCard title="Uptime" value="99.99%" sub="30 Days" icon={Server} color="amber" />
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Resource History */}
                <div className="p-8 rounded-[2rem] bg-card/50 border border-border/50 backdrop-blur-xl shadow-xl">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <div className="w-2 h-8 rounded-full bg-blue-500"></div>
                        Resource Consumption (Live)
                    </h3>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                                <XAxis dataKey="time" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '1rem', border: '1px solid hsl(var(--border))' }}
                                />
                                <Line type="monotone" dataKey="cpu" stroke="#3b82f6" strokeWidth={3} dot={false} />
                                <Line type="monotone" dataKey="memory" stroke="#8b5cf6" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Latency Distribution */}
                <div className="p-8 rounded-[2rem] bg-card/50 border border-border/50 backdrop-blur-xl shadow-xl">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <div className="w-2 h-8 rounded-full bg-emerald-500"></div>
                        Latency Distribution
                    </h3>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={latencyDistribution}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                                <XAxis dataKey="range" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip
                                    cursor={{ fill: 'hsl(var(--muted)/0.2)' }}
                                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '1rem', border: '1px solid hsl(var(--border))' }}
                                />
                                <Bar dataKey="count" fill="#10b981" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

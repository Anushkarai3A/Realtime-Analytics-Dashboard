import React from 'react';
import PropTypes from 'prop-types';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

/**
 * RealTimeChart component using Recharts for high-performance area visualizations.
 * Features a custom-styled tooltip and smooth animation transitions.
 */
export function RealTimeChart({ data, dataKey, title, color = "#3b82f6" }) {
    return (
        <div className="w-full h-[360px] p-8 rounded-[2.5rem] bg-card/40 border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 glass-morphism overflow-hidden group">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h3 className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] opacity-70">{title}</h3>
                    <p className="text-lg font-bold mt-1">Live Feed</p>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,0,0,0.1)]" style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}` }}></div>
                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Active</span>
                </div>
            </div>
            <div className="h-[200px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                        <defs>
                            <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="hsl(var(--muted-foreground))"
                            strokeOpacity={0.05}
                        />
                        <XAxis
                            dataKey="time"
                            hide
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fontWeight: 700, fill: "hsl(var(--muted-foreground))", opacity: 0.4 }}
                            width={40}
                        />
                        <Tooltip
                            cursor={{ stroke: color, strokeWidth: 2, strokeDasharray: '6 6' }}
                            contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.8)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                borderRadius: "20px",
                                fontSize: "12px",
                                fontWeight: "800",
                                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                                padding: "12px 16px",
                            }}
                            itemStyle={{ color: color, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                            labelStyle={{ display: 'none' }}
                        />
                        <Area
                            type="monotone"
                            dataKey={dataKey}
                            stroke={color}
                            strokeWidth={4}
                            fillOpacity={1}
                            fill={`url(#color${dataKey})`}
                            isAnimationActive={true}
                            animationDuration={1000}
                            dot={{ r: 0 }}
                            activeDot={{ r: 6, strokeWidth: 3, stroke: "#fff", fill: color }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

RealTimeChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    dataKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
};

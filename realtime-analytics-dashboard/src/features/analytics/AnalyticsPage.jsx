import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, Globe, Smartphone, MousePointer } from 'lucide-react';

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

const funnelData = [
  { name: 'Impressions', value: 45000 },
  { name: 'Visitors', value: 28000 },
  { name: 'Signups', value: 12500 },
  { name: 'Activated', value: 8900 },
  { name: 'Paid', value: 4200 },
];

const devicesData = [
  { name: 'Desktop', value: 65 },
  { name: 'Mobile', value: 25 },
  { name: 'Tablet', value: 10 },
];

const topPages = [
  { path: '/dashboard', views: '24.5k', bounce: '12%', avgTime: '4m 32s' },
  { path: '/analytics', views: '18.2k', bounce: '24%', avgTime: '3m 15s' },
  { path: '/settings', views: '8.4k', bounce: '45%', avgTime: '1m 20s' },
  { path: '/profile', views: '6.1k', bounce: '32%', avgTime: '2m 10s' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader
        title={<>Analytics <span className="text-gradient">Hub</span></>}
        description="Deep-dive into user behavior, conversion funnels, and traffic sources."
      />

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-sm glass-morphism relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Users className="w-24 h-24 text-primary" />
          </div>
          <p className="text-muted-foreground font-medium mb-1">Total Visitors</p>
          <h3 className="text-3xl font-black tracking-tight mb-2">142,893</h3>
          <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold bg-emerald-500/10 w-fit px-3 py-1 rounded-full">
            <ArrowUpRight className="w-4 h-4" />
            <span>12.5% vs last month</span>
          </div>
        </div>
        <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-sm glass-morphism relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <MousePointer className="w-24 h-24 text-purple-500" />
          </div>
          <p className="text-muted-foreground font-medium mb-1">Bounce Rate</p>
          <h3 className="text-3xl font-black tracking-tight mb-2">42.3%</h3>
          <div className="flex items-center gap-2 text-rose-500 text-sm font-bold bg-rose-500/10 w-fit px-3 py-1 rounded-full">
            <ArrowUpRight className="w-4 h-4" />
            <span>3.1% vs last month</span>
          </div>
        </div>
        <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-sm glass-morphism relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Globe className="w-24 h-24 text-blue-500" />
          </div>
          <p className="text-muted-foreground font-medium mb-1">Avg. Session</p>
          <h3 className="text-3xl font-black tracking-tight mb-2">4m 12s</h3>
          <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold bg-emerald-500/10 w-fit px-3 py-1 rounded-full">
            <ArrowUpRight className="w-4 h-4" />
            <span>0.8% vs last month</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Conversion Funnel */}
        <div className="p-8 rounded-[2rem] bg-card/50 border border-border/50 backdrop-blur-xl shadow-xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <div className="w-2 h-8 rounded-full bg-primary/50"></div>
            Conversion Funnel
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={funnelData}>
                <defs>
                  <linearGradient id="colorFunnel" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '1rem', border: '1px solid hsl(var(--border))' }}
                />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorFunnel)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="p-8 rounded-[2rem] bg-card/50 border border-border/50 backdrop-blur-xl shadow-xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <div className="w-2 h-8 rounded-full bg-purple-500/50"></div>
            Device Distribution
          </h3>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={devicesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {devicesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '1rem', border: '1px solid hsl(var(--border))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {devicesData.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-sm font-medium text-muted-foreground">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-xl overflow-hidden shadow-xl">
        <div className="p-8 border-b border-border/50">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <div className="w-2 h-8 rounded-full bg-emerald-500/50"></div>
            Top Performing Pages
          </h3>
        </div>
        <div className="p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/50 text-muted-foreground text-sm uppercase tracking-wider">
                <th className="p-6 font-semibold">Page Path</th>
                <th className="p-6 font-semibold">Views</th>
                <th className="p-6 font-semibold">Bounce Rate</th>
                <th className="p-6 font-semibold">Avg. Time</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((page, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-medium font-mono text-primary">{page.path}</td>
                  <td className="p-6 font-bold">{page.views}</td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-rose-500" style={{ width: page.bounce }}></div>
                      </div>
                      <span className="text-sm">{page.bounce}</span>
                    </div>
                  </td>
                  <td className="p-6 text-muted-foreground">{page.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

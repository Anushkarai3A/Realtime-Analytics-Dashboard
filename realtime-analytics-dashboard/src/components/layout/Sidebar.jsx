import React from 'react';
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Users,
  Activity,
  Zap
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/' },
  { icon: Activity, label: 'Live Metrics', path: '/metrics' },
  { icon: Users, label: 'Analytics', path: '/analytics' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  return (
    <aside className="w-72 h-[calc(100vh-2rem)] m-4 rounded-[2.5rem] border border-border/50 bg-card/60 backdrop-blur-2xl flex flex-col fixed left-0 top-0 shadow-2xl overflow-hidden glass-morphism hidden lg:flex">
      <Link to="/" className="p-8 flex items-center gap-4 hover:opacity-80 transition-opacity">
        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 animate-float">
          <Zap className="w-6 h-6 text-primary-foreground fill-primary-foreground/20" />
        </div>
        <div>
          <span className="font-black text-xl tracking-tight block">ANTIGRAVITY</span>
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Analytics</span>
        </div>
      </Link>

      <nav className="flex-1 px-4 space-y-3 mt-8">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => cn(
              "w-full flex items-center gap-4 px-6 py-4 rounded-[1.5rem] transition-all duration-300 group relative overflow-hidden",
              isActive
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
            )}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon className={cn(
                  "w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110",
                  isActive ? "text-primary-foreground" : "group-hover:text-primary"
                )} />
                <span className="font-bold text-sm relative z-10 tracking-tight">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 mt-auto">
        <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl p-6 border border-primary/10 relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
          <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Workspace</p>
          <p className="text-sm font-bold">Pro Dashboard</p>
          <div className="w-full bg-border/50 rounded-full h-2 mt-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "66%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

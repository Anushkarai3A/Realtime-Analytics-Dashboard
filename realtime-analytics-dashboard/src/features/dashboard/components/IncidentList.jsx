import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

export function IncidentList() {
    return (
        <div className="rounded-[2.5rem] bg-card/40 border border-border/50 p-8 lg:p-10 shadow-sm overflow-hidden relative glass-morphism">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full -ml-32 -mb-32 blur-[80px]"></div>

            <div className="flex items-center justify-between mb-10 relative z-10">
                <div>
                    <h3 className="text-2xl font-bold tracking-tight">Recent Incidents</h3>
                    <p className="text-sm text-muted-foreground mt-1">Anomaly detection alerts from the last 60 minutes.</p>
                </div>
                <button className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    View Full Analysis
                </button>
            </div>

            <div className="space-y-4 relative z-10">
                <AnimatePresence>
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between p-6 rounded-3xl bg-background/40 border border-border/50 hover:border-primary/30 hover:bg-background/60 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center border border-border group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300 shadow-sm">
                                    <Activity className="w-7 h-7 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                                </div>
                                <div>
                                    <p className="text-base font-bold group-hover:text-primary transition-colors">Unusual spike in HTTP 500 errors</p>
                                    <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                                        <span className="font-medium">Service:</span> user-auth-api • <span className="font-medium text-foreground/70">2 mins ago</span>
                                    </p>
                                </div>
                            </div>
                            <div className="px-4 py-1.5 rounded-full bg-rose-500/5 text-rose-500 text-[10px] font-black uppercase tracking-widest border border-rose-500/10 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                                Critical
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

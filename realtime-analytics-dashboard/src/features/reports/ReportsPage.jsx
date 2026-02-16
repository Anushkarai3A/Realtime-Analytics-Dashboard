import React from 'react';
import { BarChart3, FileText, Download, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReportsPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
                        Performance <span className="text-gradient">Reports</span>
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        comprehensive data exports and system performance summaries.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:bg-muted transition-colors font-semibold text-sm">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity font-semibold text-sm">
                        <Download className="w-4 h-4" />
                        Export PDF
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Weekly Summary", date: "Oct 12 - Oct 19", size: "2.4 MB" },
                    { title: "Node Latency Audit", date: "Oct 15, 2023", size: "1.1 MB" },
                    { title: "User Growth Analysis", date: "Oct 01 - Oct 31", size: "4.8 MB" },
                ].map((report, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-[2rem] bg-card/40 border border-border/50 glass-morphism hover:shadow-xl transition-all group cursor-pointer"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg">{report.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{report.date}</p>
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/50">
                            <span className="text-xs font-bold text-muted-foreground">{report.size}</span>
                            <span className="text-xs font-bold text-primary group-hover:underline">Download</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="rounded-[2.5rem] bg-card/40 border border-border/50 p-10 glass-morphism text-center">
                <div className="max-w-md mx-auto">
                    <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BarChart3 className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold">No custom reports yet</h3>
                    <p className="text-muted-foreground mt-2">Generate your first custom data report to see detailed insights here.</p>
                    <button className="mt-8 px-8 py-3 rounded-2xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                        Create New Report
                    </button>
                </div>
            </div>
        </div>
    );
}

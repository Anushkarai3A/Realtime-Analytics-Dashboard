import React from 'react';
import { User, Bell, Shield, Smartphone, Globe, Cloud } from 'lucide-react';

export default function SettingsPage() {
    const sections = [
        { icon: User, title: "Account Settings", desc: "Manage your profile and personal information" },
        { icon: Bell, title: "Notifications", desc: "Configure how you receive alerts and updates" },
        { icon: Shield, title: "Security", desc: "Two-factor authentication and access logs" },
        { icon: Smartphone, title: "Connected Devices", desc: "Manage active sessions and authorized apps" },
        { icon: Globe, title: "Language & Region", desc: "Customize your regional and date format settings" },
        { icon: Cloud, title: "Data & Storage", desc: "Backup settings and data retention policies" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
                    System <span className="text-gradient">Settings</span>
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">
                    Configure your personal preferences and system-wide parameters.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sections.map((section, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-card/40 border border-border/50 glass-morphism hover:bg-background/40 transition-all cursor-pointer group">
                        <div className="flex items-start gap-6">
                            <div className="p-4 rounded-2xl bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                <section.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{section.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{section.desc}</p>
                            </div>
                            <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all">
                                <span className="text-xs">→</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-10 rounded-[2.5rem] border border-red-500/20 bg-red-500/5 glass-morphism">
                <h3 className="text-xl font-bold text-red-500">Danger Zone</h3>
                <p className="text-sm text-muted-foreground mt-1">Irreversible actions that affect your entire account.</p>
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <button className="px-6 py-3 rounded-2xl border border-red-500/50 text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all">
                        Deactivate Account
                    </button>
                    <button className="px-6 py-3 rounded-2xl bg-red-500 text-white font-bold hover:opacity-90 transition-opacity">
                        Delete All Data
                    </button>
                </div>
            </div>
        </div>
    );
}

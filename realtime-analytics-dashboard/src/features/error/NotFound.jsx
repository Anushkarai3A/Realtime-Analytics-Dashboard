import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center p-8">
            <div className="max-w-lg w-full text-center">
                <div className="relative mb-8">
                    <div className="text-[12rem] font-black text-primary/5 select-none leading-none">404</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Ghost className="w-24 h-24 text-primary animate-float" />
                    </div>
                </div>

                <h1 className="text-4xl font-black tracking-tight mb-4">Lost in Space?</h1>
                <p className="text-muted-foreground mb-12 text-lg">
                    The page you are looking for doesn't exist or has been moved to another quadrant.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                    >
                        <Home className="w-5 h-5" />
                        Back to Overview
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-card border border-border font-bold hover:bg-muted transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

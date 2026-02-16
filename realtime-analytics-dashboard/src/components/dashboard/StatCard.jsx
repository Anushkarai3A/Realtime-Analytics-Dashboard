import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

/**
 * StatCard component for displaying key metrics with trend indicators.
 * Designed for readability and premium feel in the analytics dashboard.
 */
export function StatCard({ title, value, change, trend, icon: Icon, description }) {
    const isPositive = trend === 'up';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-7 rounded-[2rem] bg-card/40 border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden group glass-morphism"
        >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

            <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-primary/5 border border-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <Icon className="w-6 h-6" />
                </div>
                <div className={cn(
                    "flex items-center text-[10px] font-black uppercase tracking-tighter px-3 py-1.5 rounded-full border shadow-sm transition-colors duration-500",
                    isPositive
                        ? "text-emerald-500 bg-emerald-500/5 border-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white"
                        : "text-rose-500 bg-rose-500/5 border-rose-500/10 group-hover:bg-rose-500 group-hover:text-white"
                )}>
                    {isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                    {change}%
                </div>
            </div>
            <div className="relative z-10">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">{title}</h3>
                <p className="text-4xl font-black mt-2 tracking-tighter text-foreground group-hover:text-primary transition-colors">{value}</p>
                {description && <p className="text-xs text-muted-foreground mt-3 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{description}</p>}
            </div>
        </motion.div>
    );
}

StatCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    change: PropTypes.number.isRequired,
    trend: PropTypes.oneOf(['up', 'down']).isRequired,
    icon: PropTypes.elementType.isRequired,
    description: PropTypes.string,
};

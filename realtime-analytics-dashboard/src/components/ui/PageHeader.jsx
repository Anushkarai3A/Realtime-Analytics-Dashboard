import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function PageHeader({ title, description, children }) {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className="mb-10 animate-in fade-in slide-in-from-left-4 duration-700">
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-4 px-1">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <React.Fragment key={name}>
                            <ChevronRight className="w-3 h-3 opacity-40" />
                            {isLast ? (
                                <span className="text-primary/80">{name.replace('-', ' ')}</span>
                            ) : (
                                <Link to={routeTo} className="hover:text-primary transition-colors">
                                    {name.replace('-', ' ')}
                                </Link>
                            )}
                        </React.Fragment>
                    );
                })}
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-muted-foreground mt-3 text-lg max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
                {children && (
                    <div className="flex items-center gap-3">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

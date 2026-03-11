import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            // Smoother threshold and debounced-feel scroll
            const offset = window.scrollY;
            if (offset > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navItems = [
        { name: 'Home', href: '/', title: 'Return to the main overview' },
        { name: 'How It Works', href: '/how-it-works', title: 'Understand the system architecture' },
        { name: 'Residential', href: '/residential', title: 'Solutions designed for modern homes' },
        { name: 'Commercial', href: '/commercial', title: 'Centralized cleaning for large facilities' },
        { name: 'Installation', href: '/installation', title: 'See how the system is installed' },
        { name: 'Contact', href: '/contact', title: 'Request information or schedule a visit' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in-out',
                isScrolled
                    ? 'bg-[#353a41]/2 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-0'
                    : 'bg-transparent py-2 lg:py-0',
                // Premium Glass Break for mobile/tablet to prevent overlap text bugs
                'lg:bg-transparent bg-[#0B0F14]/90 backdrop-blur-xl lg:backdrop-blur-none border-b lg:border-none border-white/5'
            )}
        >
            {/* Top Contact Bar - Desktop Only */}
            {!isScrolled && (
                <div className="hidden lg:block bg-blueprint-accent/5 py-2.5 border-b border-white/5">
                    <div className="max-w-[1440px] mx-auto px-xl flex justify-between items-center">
                        <div className="flex items-center gap-8">
                            <a href="tel:+94714811047" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] text-blueprint-text/60 hover:text-blueprint-accent transition-colors uppercase font-sans">
                                <Phone size={12} className="text-blueprint-accent" />
                                +94 71 481 1047
                            </a>
                            <a href="mailto:smartclean.gtl@gmail.com" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] text-blueprint-text/60 hover:text-blueprint-accent transition-colors uppercase font-sans">
                                <Mail size={12} className="text-blueprint-accent" />
                                smartclean.gtl@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-5">
                            <a href="https://www.facebook.com/smartcleansrilanka/" target="_blank" rel="noopener noreferrer" className="text-blueprint-text/40 hover:text-blueprint-accent transition-colors"><Facebook size={14} /></a>
                            <a href="https://www.instagram.com/smartcleanlk/" target="_blank" rel="noopener noreferrer" className="text-blueprint-text/40 hover:text-blueprint-accent transition-colors"><Instagram size={14} /></a>
                            <a href="#" className="text-blueprint-text/40 hover:text-blueprint-accent transition-colors" title="X (Twitter)"><Twitter size={14} /></a>
                            <a href="#" className="text-blueprint-text/40 hover:text-blueprint-accent transition-colors" title="TikTok">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 2.89 3.46 2.67 1.25-.1 2.38-.94 2.79-2.12.19-.58.2-1.18.19-1.79V.02z" />
                                </svg>
                            </a>
                            <a href="#" className="text-blueprint-text/40 hover:text-blueprint-accent transition-colors" title="LinkedIn"><Linkedin size={14} /></a>
                        </div>
                    </div>
                </div>
            )}

            <div className={cn(
                "px-md md:px-xl transition-all duration-500",
                isScrolled ? "h-[70px]" : "h-[85px] lg:h-[95px]"
            )}>
                <div className="h-full max-w-[1440px] mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-sm group flex-shrink-0">
                        {/* Logo SVG - Rendered inline to avoid white-bg issues */}
                        <svg
                            viewBox="0 0 200 200"
                            width="36"
                            height="36"
                            className="h-8 md:h-10 w-auto transition-all duration-300 flex-shrink-0"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="10" />
                            <path
                                d="M 30 140 C 50 60, 120 20, 175 60 C 155 30, 80 40, 60 120 Z"
                                fill="currentColor"
                                opacity="0.9"
                            />
                            <path
                                d="M 50 165 C 75 90, 140 50, 185 90 C 165 55, 95 70, 75 145 Z"
                                fill="currentColor"
                                opacity="0.6"
                            />
                        </svg>
                        <div className="flex flex-col -space-y-1">
                            <span className="text-lg font-bold tracking-tight text-blueprint-text uppercase font-sans">SMART</span>
                            <span className="text-[10px] font-bold tracking-[0.3em] text-blueprint-silver uppercase font-sans">CLEAN</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 lg:gap-14 ml-8">
                        <div className="flex items-center gap-4 lg:gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    title={item.title}
                                    className={cn(
                                        "text-[12px] font-semibold tracking-[0.1em] uppercase transition-all duration-120 font-sans whitespace-nowrap",
                                        location.pathname === item.href
                                            ? "text-blueprint-text"
                                            : "text-blueprint-text/60 hover:text-blueprint-text"
                                    )}
                                >
                                    {item.name}
                                    {location.pathname === item.href && (
                                        <div className="h-[2px] w-full bg-blueprint-accent/40 mt-[2px] rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            title="Schedule a free consultation"
                            className="px-6 py-3 text-[11px] font-bold tracking-widest uppercase rounded-button border border-white/10 text-blueprint-text hover:bg-blueprint-text hover:text-blueprint-bg transition-all duration-140 active:scale-[0.985] font-sans whitespace-nowrap"
                        >
                            Book Site Assessment
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-blueprint-text p-2 hover:bg-white/5 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Moved outside height-constrained container */}
            <div
                className={cn(
                    'fixed inset-0 bg-[#0B0F14] z-[1001] lg:hidden transition-all duration-500 pt-24 px-8 overflow-y-auto',
                    isMobileMenuOpen
                        ? 'translate-x-0 opacity-100 pointer-events-auto'
                        : 'translate-x-full opacity-0 pointer-events-none'
                )}
            >
                <div className="flex flex-col gap-8 text-2xl font-semibold font-sans">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                "transition-colors uppercase tracking-tight",
                                location.pathname === item.href ? "text-blueprint-accent" : "text-blueprint-text/40 hover:text-blueprint-text"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="mt-4 mb-20 px-8 py-5 text-sm font-bold tracking-widest uppercase rounded-button bg-blueprint-accent text-white hover:bg-blueprint-text hover:text-blueprint-bg transition-all duration-140 text-center font-sans shadow-xl inline-block"
                    >
                        Book Site Assessment
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

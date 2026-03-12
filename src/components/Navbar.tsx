import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx, type ClassValue } from 'clsx';

gsap.registerPlugin(ScrollTrigger);
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Use ScrollTrigger to detect scroll reliably even with virtual scroll containers
        const st = gsap.to({}, {
            scrollTrigger: {
                trigger: "body",
                start: "top -5",
                onEnter: () => setIsScrolled(true),
                onLeaveBack: () => setIsScrolled(false),
            }
        });

        return () => {
            if (st.scrollTrigger) st.scrollTrigger.kill();
        };
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
                'fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ease-in-out',
                isScrolled
                    ? 'bg-[#0B0F14] py-2 border-b border-blueprint-accent/50 shadow-[0_8px_48px_rgba(0,0,0,0.95)]'
                    : 'bg-transparent py-8'
            )}
        >
            {/* Top Contact Bar - Completely hidden on scroll for clean minimalism */}
                <div className={cn(
                    "hidden lg:block bg-blueprint-accent/5 py-2 border-b border-white/5 overflow-hidden transition-all duration-500",
                    isScrolled ? "h-0 opacity-0 py-0" : "h-auto opacity-100"
                )}>
                    <div className="max-w-[1440px] mx-auto px-xl flex justify-between items-center">
                        <div className="flex items-center gap-8">
                            <a href="tel:+94714811047" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-blueprint-text/60 hover:text-blueprint-accent transition-colors uppercase font-sans">
                                <Phone size={10} className="text-blueprint-accent" />
                                +94 71 481 1047
                            </a>
                            <a href="mailto:smartclean.gtl@gmail.com" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-blueprint-text/60 hover:text-blueprint-accent transition-colors uppercase font-sans">
                                <Mail size={10} className="text-blueprint-accent" />
                                smartclean.gtl@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-5">
                            <a href="https://www.facebook.com/smartcleansrilanka/" target="_blank" rel="noopener noreferrer" className="text-blueprint-text/40 hover:text-blueprint-accent transition-colors"><Facebook size={12} /></a>
                            <a href="https://www.instagram.com/smartcleanlk/" target="_blank" rel="noopener noreferrer" className="text-blueprint-text/40 hover:text-blueprint-accent transition-colors"><Instagram size={12} /></a>
                            <a href="#" className="text-blueprint-text/40 hover:text-blueprint-accent transition-colors" title="X (Twitter)"><Twitter size={12} /></a>
                            <a href="#" className="text-blueprint-text/40 hover:text-blueprint-accent transition-colors" title="LinkedIn"><Linkedin size={12} /></a>
                        </div>
                    </div>
                </div>

            <div className={cn(
                "px-md md:px-xl transition-all duration-700 mx-auto max-w-[1600px]",
                isScrolled ? "h-[64px]" : "h-[80px] md:h-[90px] lg:h-[110px]"
            )}>
                <div className="h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-5 group flex-shrink-0">
                        {/* Final Logo Implementation */}
                        <div className={cn(
                            "relative flex items-center justify-center transition-all duration-700",
                            isScrolled ? "h-10 w-10" : "h-14 w-14"
                        )}>
                            <img 
                                src="/android-chrome-512x512.png" 
                                alt="SmartClean Logo"
                                className="h-full w-full object-contain transition-all duration-500 transform group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col -space-y-1.5 pt-1">
                            <span className={cn(
                                "font-black tracking-tighter text-blueprint-text uppercase font-sans transition-all duration-700",
                                isScrolled ? "text-xl" : "text-3xl"
                            )}>SMART</span>
                            <span className={cn(
                                "font-bold tracking-[0.5em] text-blueprint-accent uppercase font-sans transition-all duration-700",
                                isScrolled ? "text-[10px]" : "text-[13px]"
                            )}>CLEAN</span>
                        </div>
                    </Link>

                    {/* Navbar Content */}
                    <div className="hidden xl:flex items-center gap-8 2xl:gap-16">
                        <div className="flex items-center gap-6 2xl:gap-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    title={item.title}
                                    className={cn(
                                        "text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 font-sans relative group",
                                        location.pathname === item.href
                                            ? "text-blueprint-text"
                                            : "text-blueprint-text/50 hover:text-blueprint-text"
                                    )}
                                >
                                    {item.name}
                                    <div className={cn(
                                        "absolute -bottom-2 left-0 h-[2px] bg-blueprint-accent transition-all duration-500 rounded-full",
                                        location.pathname === item.href ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"
                                    )} />
                                </Link>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className={cn(
                                "px-8 py-3.5 text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-500 font-sans border rounded-button",
                                isScrolled 
                                    ? "bg-blueprint-accent text-white border-transparent shadow-lg shadow-blueprint-accent/20 scale-95" 
                                    : "bg-transparent text-blueprint-text border-white/20 hover:border-blueprint-accent"
                            )}
                        >
                            Book Site Assessment
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden text-blueprint-text p-3 hover:bg-white/5 rounded-2xl transition-all"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'fixed inset-0 bg-[#06080A]/98 backdrop-blur-3xl z-[2000] xl:hidden transition-all duration-700 ease-in-out px-10 pt-40',
                    isMobileMenuOpen
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-full opacity-0 pointer-events-none'
                )}
            >
                {/* Close Button Inside Overlay */}
                <button
                    className="absolute top-10 right-8 text-blueprint-text/60 hover:text-blueprint-accent p-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <X size={32} />
                </button>

                <div className="flex flex-col gap-10 text-3xl font-bold font-sans">
                    {navItems.map((item, idx) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                "transition-all duration-500 uppercase tracking-tighter transform",
                                isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
                                location.pathname === item.href ? "text-blueprint-accent" : "text-blueprint-text/40 hover:text-blueprint-text"
                            )}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className={cn(
                            "mt-4 px-8 py-5 text-sm font-black tracking-[0.2em] uppercase rounded-button bg-blueprint-accent text-white shadow-2xl shadow-blueprint-accent/20 text-center font-sans transition-all duration-500",
                            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        )}
                        style={{ transitionDelay: '350ms' }}
                    >
                        Book Site Assessment
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

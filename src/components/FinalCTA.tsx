import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.to(glowRef.current, {
            opacity: 0.15,
            scale: 1.2,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <section className="relative h-[80vh] w-full bg-[#0B0F14] flex items-center justify-center overflow-hidden border-t border-white/5">
            {/* Minimal Technical Glow */}
            <div
                ref={glowRef}
                className="absolute w-[600px] h-[600px] bg-blueprint-accent/10 rounded-full blur-[100px] opacity-10 select-none pointer-events-none"
            />

            <div className="relative z-10 text-center space-y-12 px-6 max-w-4xl">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 text-blueprint-accent font-bold tracking-[0.4em] text-[10px] uppercase font-sans mb-4">
                        Final Commitment
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-blueprint-text leading-[1.1] font-sans uppercase">
                        SEE HOW IT <br /><span className="text-blueprint-accent">FITS YOUR HOME</span>
                    </h2>
                    <p className="text-lg md:text-xl text-blueprint-text/40 max-w-2xl mx-auto font-light leading-relaxed font-sans">
                        Schedule a site assessment to explore how a central vacuum system can be integrated into your property.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center justify-center pt-8">
                    <Link
                        to="/contact"
                        className="group flex items-center gap-4 px-12 py-5 bg-blueprint-accent text-blueprint-text font-bold rounded-button hover:bg-blueprint-accent/90 transition-blueprint text-xs tracking-[0.2em] uppercase shadow-2xl active:scale-[0.985]"
                    >
                        Book Site Assessment
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="pt-32 text-[9px] text-blueprint-text/10 uppercase tracking-[1em] font-bold font-sans">
                    SmartClean // Architectural Precision // 2024
                </div>
            </div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </section>
    );
};

export default FinalCTA;

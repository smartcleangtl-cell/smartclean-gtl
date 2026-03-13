import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Shield, Zap, VolumeX } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ExplodedView = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const componentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const components = [
        {
            title: 'Hidden Pipe Network',
            desc: 'Concealed piping becomes part of the building itself, distributing suction through walls and ceilings.',
            icon: <Zap size={24} />,
        },
        {
            title: 'Dust Separation',
            desc: 'Dust and fine particles are transported away from the occupied space instead of being released back.',
            icon: <Shield size={24} />,
        },
        {
            title: 'Central Power Unit',
            desc: 'Installed in a service zone to isolate sound and keep the mechanical core away from living areas.',
            icon: <Settings size={24} />,
        },
        {
            title: 'Room Inlet Access',
            desc: 'Discrete wall inlets provide access to the same centralized suction network from multiple rooms.',
            icon: <VolumeX size={24} />,
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            componentRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: 'top bottom-=50',
                        toggleActions: 'play none none reverse',
                    },
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: i * 0.1,
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full bg-[#0B0F14] py-[100px] px-6 overflow-hidden border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-md relative z-10">
                <div className="col-span-12 text-center space-y-md mb-16">
                    <div className="inline-block px-4 py-1 rounded-full border border-blueprint-accent/30 bg-blueprint-accent/5 text-blueprint-accent text-[11px] font-black tracking-[0.3em] uppercase font-sans">
                        Internal Architecture
                    </div>

                    <h2 className="text-blueprint-text uppercase">
                        A CLEANING SYSTEM<br />
                        <span className="text-blueprint-accent font-bold">INTEGRATED INTO THE BUILDING</span>
                    </h2>

                    <p className="text-lg md:text-xl text-blueprint-text/70 max-w-2xl mx-auto leading-relaxed font-sans">
                        Designed for permanence. The system moves debris completely out of your living environment through a dedicated utility network.
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
                    {components.slice(0, 2).map((comp, i) => (
                        <div
                            key={i}
                            ref={(el) => (componentRefs.current[i] = el)}
                            className="p-8 bg-blueprint-surface/20 backdrop-blur-xl rounded-button border border-white/5 space-y-4 hover:border-blueprint-accent/40 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blueprint-accent/10 flex items-center justify-center text-blueprint-accent">
                                {comp.icon}
                            </div>
                            <h4 className="font-bold text-lg uppercase font-sans text-blueprint-text">
                                {comp.title}
                            </h4>
                            <p className="text-blueprint-text/60 text-sm leading-relaxed font-sans">
                                {comp.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Center visual stack */}
                <div className="col-span-12 lg:col-span-4 h-[320px] sm:h-[400px] lg:h-[480px] order-1 lg:order-2 relative flex items-center justify-center px-4">
                    <div className="relative w-full h-full rounded-button overflow-hidden border border-white/5 bg-blueprint-surface/10 group">
                        {/* Video Background */}
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                        >
                            <source src="/reveal2.mp4" type="video/mp4" />
                        </video>
                        
                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-[#0B0F14]/40" />
                        <div className="absolute inset-0 bg-blueprint-accent/5 mix-blend-overlay" />

                        {/* Labels */}
                        <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blueprint-accent animate-pulse" />
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blueprint-text">Infrastructure Core</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blueprint-accent/40" />
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blueprint-text/60">Distributed Network</span>
                            </div>
                        </div>

                        {/* Scanning Effect */}
                        <div className="absolute inset-x-0 h-[1px] bg-blueprint-accent/30 top-0 animate-[scan_4s_linear_infinite] shadow-[0_0_15px_rgba(79,109,255,0.5)]" />
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 order-3">
                    {components.slice(2, 4).map((comp, i) => (
                        <div
                            key={i + 2}
                            ref={(el) => (componentRefs.current[i + 2] = el)}
                            className="p-8 bg-blueprint-surface/20 backdrop-blur-xl rounded-button border border-white/5 space-y-4 hover:border-blueprint-accent/40 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blueprint-accent/10 flex items-center justify-center text-blueprint-accent">
                                {comp.icon}
                            </div>
                            <h4 className="font-bold text-lg uppercase font-sans text-blueprint-text">
                                {comp.title}
                            </h4>
                            <p className="text-blueprint-text/60 text-sm leading-relaxed font-sans">
                                {comp.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 border-t border-white/5 pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                {[
                    { label: 'System Reach', value: 'Whole Home' },
                    { label: 'Air Handling', value: 'Centralized' },
                    { label: 'Noise Zone', value: 'Remote' },
                    { label: 'Installation', value: 'Integrated' },
                ].map((spec, i) => (
                    <div key={i} className="text-center">
                        <div className="text-[10px] font-black tracking-widest uppercase text-blueprint-accent mb-2">
                            {spec.label}
                        </div>
                        <div className="text-2xl font-bold text-blueprint-text">
                            {spec.value}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExplodedView;
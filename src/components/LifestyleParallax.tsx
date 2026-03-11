import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LifestyleParallax = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const fgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect
            gsap.to(bgRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                y: 100,
            });

            gsap.to(fgRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                y: -100,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-[120vh] w-full bg-[#0B0F14] overflow-hidden border-y border-white/5">
            {/* Background Layer */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 opacity-10 transition-all duration-1000 scale-110 grayscale"
            >
                <img
                    src="/home_interior.png"
                    className="w-full h-full object-cover"
                    alt="Modern Home Interior"
                />
            </div>

            {/* Foreground Content */}
            <div
                ref={fgRef}
                className="relative z-10 h-full flex items-center justify-center p-6"
            >
                <div className="max-w-5xl bg-blueprint-surface/20 backdrop-blur-3xl p-12 md:p-16 rounded-button space-y-md flex flex-col md:flex-row items-center gap-12 shadow-2xl border border-white/5">
                    <div className="flex-1 space-y-md">
                        <div className="text-blueprint-accent font-bold tracking-[0.4em] uppercase text-[9px] font-sans">
                            Acoustic Equilibrium
                        </div>
                        <h2 className="text-blueprint-text uppercase font-light tracking-tighter">
                            CALM THROUGH <br /> <span className="text-blueprint-accent font-bold">PRECISION</span>
                        </h2>
                        <p className="text-lg text-blueprint-text/40 font-light leading-relaxed font-sans">
                            Experience the silent throughput of a system that exhausts
                            particulates outside the living volume. Zero recycled air. Zero structural noise.
                        </p>
                        <ul className="space-y-4 pt-4 font-sans text-blueprint-text/40">
                            <li className="flex items-center gap-4 text-sm group">
                                <span className="w-2 h-[1px] bg-blueprint-accent/40 group-hover:w-4 transition-all" />
                                <span className="group-hover:text-blueprint-text transition-colors">Whisper-quiet operational metrics</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm group">
                                <span className="w-2 h-[1px] bg-blueprint-accent/40 group-hover:w-4 transition-all" />
                                <span className="group-hover:text-blueprint-text transition-colors">100% remediation of indoor allergens</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm group">
                                <span className="w-2 h-[1px] bg-blueprint-accent/40 group-hover:w-4 transition-all" />
                                <span className="group-hover:text-blueprint-text transition-colors">Zero-friction wall integration</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-80 aspect-[3/4] rounded-button overflow-hidden border border-white/5 group shadow-2xl relative bg-blueprint-surface/30">
                        <img
                            src="/inlet_plate.png"
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                            alt="SmartClean Wall Inlet Plate"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0F14] to-transparent opacity-80" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LifestyleParallax;

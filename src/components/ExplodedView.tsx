import React, { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Shield, Zap, VolumeX } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// 3D components removed for clarity per user feedback

const ExplodedView = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const componentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const components = [
        { title: "Hidden Pipe Network", desc: "Anti-static PVC piping integrated into the wall structure, becoming a permanent part of the house.", icon: <Zap size={32} /> },
        { title: "Cyclonic Filtration", desc: "Removes 99.9% of fine dust and allergens, exhausting them outside the living space.", icon: <Shield size={32} /> },
        { title: "Central Power Core", desc: "Located in service areas to isolate all noise and exhaust from your living environment.", icon: <Settings size={32} /> },
        { title: "Wall Inlet Interface", desc: "Sleek, low-profile inlets placed strategically for maximum floor coverage.", icon: <VolumeX size={32} /> },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            componentRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    },
                    x: i % 2 === 0 ? -40 : 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: i * 0.1
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full bg-[#0B0F14] py-[180px] px-6 overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-md relative z-10">

                <div className="col-span-12 lg:col-span-12 text-center space-y-md mb-xxl">
                    <div className="inline-block px-4 py-1 rounded-full border border-blueprint-accent/20 text-blueprint-accent text-[10px] font-bold tracking-[0.3em] uppercase font-sans">
                        Internal Mechanics
                    </div>
                    <h2 className="text-blueprint-text uppercase">A CLEANING SYSTEM <br /><span className="text-blueprint-accent">INTEGRATED INTO YOUR HOME</span></h2>
                    <p className="text-lg md:text-xl text-blueprint-text/40 max-w-2xl mx-auto font-light leading-relaxed font-sans">
                        Unlike portable vacuum cleaners, a central vacuum system becomes part of the building itself.
                        Hidden pipe networks connect each room to a central motor unit located in a garage or service area.
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
                    {components.slice(0, 2).map((comp, i) => (
                        <div
                            key={i}
                            ref={el => componentRefs.current[i] = el}
                            className="p-xl bg-blueprint-surface/40 backdrop-blur-xl rounded-button border border-white/5 space-y-md hover:border-blueprint-accent/30 transition-blueprint group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blueprint-accent/10 flex items-center justify-center text-blueprint-accent">
                                {comp.icon}
                            </div>
                            <h4 className="font-bold text-xl uppercase font-sans text-blueprint-text">{comp.title}</h4>
                            <p className="text-blueprint-text/40 text-sm leading-relaxed font-sans">{comp.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Central Concrete System Visual */}
                <div className="col-span-12 lg:col-span-4 h-[500px] order-1 lg:order-2 relative flex items-center justify-center p-md">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-x-0 top-0 h-1/2 rounded-button bg-blueprint-surface/20 border border-white/5 overflow-hidden group shadow-2xl">
                            <img
                                src="/motor_unit.png"
                                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
                                alt="System Motor Unit"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] to-transparent opacity-60" />
                            <div className="absolute bottom-3 left-4 text-[8px] font-bold tracking-[0.3em] uppercase text-blueprint-accent">Central Power Core // V2</div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-button bg-blueprint-surface/20 border border-white/5 overflow-hidden group shadow-2xl mt-4">
                            <img
                                src="/pipe_diagram.png"
                                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110"
                                alt="Pipe System Diagram"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] to-transparent opacity-60" />
                            <div className="absolute bottom-3 left-4 text-[8px] font-bold tracking-[0.3em] uppercase text-blueprint-accent">Structural Pipe Network // Analysis</div>
                        </div>

                        {/* Connection Lines */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-12 bg-blueprint-accent opacity-40 blur-[1px]" />
                        <div className="absolute top-1/2 left-[calc(50%-10px)] -translate-x-1/2 -translate-y-1/2 w-4 h-[2px] bg-blueprint-accent opacity-40" />
                        <div className="absolute top-1/2 left-[calc(50%+10px)] -translate-x-1/2 -translate-y-1/2 w-4 h-[2px] bg-blueprint-accent opacity-40" />
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 order-3">
                    {components.slice(2, 4).map((comp, i) => (
                        <div
                            key={i + 2}
                            ref={el => componentRefs.current[i + 2] = el}
                            className="p-xl bg-blueprint-surface/40 backdrop-blur-xl rounded-button border border-white/5 space-y-md hover:border-blueprint-accent/30 transition-blueprint group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blueprint-accent/10 flex items-center justify-center text-blueprint-accent">
                                {comp.icon}
                            </div>
                            <h4 className="font-bold text-xl uppercase font-sans text-blueprint-text">{comp.title}</h4>
                            <p className="text-blueprint-text/40 text-sm leading-relaxed font-sans">{comp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Detail Text */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center opacity-20 pointer-events-none">
                <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-blueprint-text">
                    Blueprint SC-TURBINE-0X // Dynamic Simulation v1.4
                </div>
            </div>
        </section>
    );
};

export default ExplodedView;

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import HouseBlueprint from './HouseBlueprint';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="relative h-[250vh] w-full bg-[#0B0F14] overflow-hidden">
            <div className="sticky top-0 h-screen w-full">
                {/* WebGL Layer - Capped DPR at 1.5 for performance */}
                <Canvas
                    shadows
                    dpr={[1, 1.5]}
                    gl={{
                        antialias: true,
                        alpha: true,
                        powerPreference: "high-performance",
                        preserveDrawingBuffer: true
                    }}
                    className="bg-transparent"
                >
                    <ScrollControls pages={2.5} damping={0.2} style={{ scrollbarWidth: 'none' }}>
                        <HouseBlueprint />

                        <Scroll html>
                            {/* DOM Content synced with 3D scroll */}
                            <div className="w-screen">
                                {/* Initial State: Wonder */}
                                <div className="h-screen flex items-center px-6 md:px-xl pt-[100px] lg:pt-[120px]">
                                    <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-md">
                                        <div className="col-span-12 lg:col-span-7 space-y-md">
                                            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-blueprint-accent text-[9px] font-bold tracking-[0.2em] uppercase mb-3 backdrop-blur-sm font-sans">
                                                Cleaning Infrastructure
                                            </div>
                                            <h1 className="text-blueprint-text leading-[1.1] mb-xl font-bold">
                                                BUILT-IN <br />
                                                <span className="text-blueprint-accent">CENTRAL VACUUM</span> <br />
                                                SYSTEMS
                                            </h1>
                                            <p className="text-base md:text-xl text-blueprint-text/60 max-w-xl font-light leading-relaxed font-sans">
                                                Smart Clean provides centralized vacuum systems designed for large residential and commercial properties in Sri Lanka.
                                                Experience quieter cleaning and improved indoor air quality.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4 pt-8">
                                                <button className="px-8 py-4 bg-blueprint-text text-blueprint-bg font-bold rounded-button hover:bg-blueprint-accent hover:text-blueprint-text transition-all duration-140 active:scale-[0.985] shadow-lg text-xs uppercase tracking-widest" title="Schedule a free consultation">
                                                    Book Site Assessment
                                                </button>
                                                <a
                                                    href="/how-it-works"
                                                    className="px-8 py-4 border border-white/10 text-blueprint-text font-bold rounded-button hover:bg-white/5 transition-all duration-140 flex items-center justify-center text-xs uppercase tracking-widest"
                                                    title="Learn about the system design"
                                                >
                                                    Explore How It Works
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Transition State: Understanding */}
                                <div className="h-screen flex items-center px-6 md:px-xl">
                                    <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-md">
                                        <div className="col-start-1 col-span-12 lg:col-start-8 lg:col-span-5 space-y-md">
                                            <h2 className="text-blueprint-text mb-lg font-bold">
                                                ENGINEERED <br />
                                                FOR <span className="text-blueprint-accent">LONGEVITY</span>
                                            </h2>
                                            <p className="text-lg md:text-xl text-blueprint-text/60 font-light leading-relaxed font-sans">
                                                Hidden within your walls, the pipe network facilitates high-velocity airflow directly to the extraction engine.
                                                No portable units. No cords. Just integrated power.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Scroll>
                    </ScrollControls>
                </Canvas>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 animate-pulse pointer-events-none">
                <span className="text-[10px] uppercase tracking-widest font-bold font-sans">Scroll to Discover</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blueprint-accent to-transparent" />
            </div>
        </section>
    );
};

export default Hero;

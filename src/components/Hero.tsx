import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HouseBlueprint from './HouseBlueprint';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollProgress = useRef(0);

    // ── GSAP ScrollTrigger → smooth parallax progress ──────────────────────────
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const trigger = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            onUpdate: (self) => {
                scrollProgress.current = self.progress;
            },
        });

        return () => trigger.kill();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-[110vh] bg-[#0B0F14] overflow-hidden">
            {/* Sticky container for background visual */}
            <div className="absolute inset-0 h-full w-full overflow-hidden">
                {/* ── WebGL Canvas (Background) ── */}
                <Canvas
                    shadows
                    dpr={[1, 1.5]}
                    gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                    className="bg-transparent"
                    style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                >
                    <HouseBlueprint scrollProgress={scrollProgress} />
                </Canvas>

                {/* Soft vignette overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ 
                    zIndex: 2,
                    background: 'radial-gradient(circle at 50% 50%, transparent, rgba(11, 15, 20, 0.4))'
                }} />
            </div>

            {/* ── Main Hero Content ── */}
            <div className="relative z-10 h-full w-full flex items-center px-6 md:px-xl">
                <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-md">
                    <div className="col-span-12 lg:col-span-7 space-y-8">
                        <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-blueprint-accent/30 bg-blueprint-accent/5 backdrop-blur-xl">
                            <div className="w-2 h-2 rounded-full bg-blueprint-accent animate-pulse" />
                            <span className="text-blueprint-accent text-[11px] font-black tracking-[0.3em] uppercase font-sans">
                                The Future of Interior Utilities
                            </span>
                        </div>

                        <h1 className="text-blueprint-text leading-[0.93] font-bold tracking-tighter">
                            CLEANING<br />
                            <span className="text-blueprint-accent">INFRA</span>STRUCTURE<br />
                            REDEFINED
                        </h1>

                        <p className="text-lg md:text-xl text-blueprint-text/80 max-w-lg font-medium leading-relaxed font-sans">
                            No portable units. No cords. Just{' '}
                            <span className="text-blueprint-accent font-bold">integrated power</span>{' '}
                            engineered for the world's most sophisticated residences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-2">
                            <button className="px-10 py-5 bg-blueprint-text text-blueprint-bg font-black rounded-button hover:bg-blueprint-accent hover:text-white transition-all duration-300 text-[11px] uppercase tracking-[0.2em]">
                                Book Site Assessment
                            </button>
                            <Link to="/how-it-works" className="px-10 py-5 border border-white/10 text-blueprint-text font-bold rounded-button hover:bg-white/5 transition-all flex items-center justify-center text-[11px] uppercase tracking-[0.2em]">
                                Explore Engineering
                            </Link>
                        </div>

                        <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/5">
                            {[['Performance', 'Silent Extraction'], ['Air Quality', 'H13 HEPA'], ['Longevity', 'Alloy Piping']].map(([l, v]) => (
                                <div key={l} className="space-y-1">
                                    <p className="text-blueprint-accent text-[10px] font-black tracking-widest uppercase">{l}</p>
                                    <p className="text-blueprint-text text-sm font-medium">{v}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 pointer-events-none" style={{ zIndex: 10 }}>
                <span className="text-[10px] uppercase tracking-widest font-bold font-sans">Discover the system</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blueprint-accent/40 to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
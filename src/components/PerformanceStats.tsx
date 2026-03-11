import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PerformanceStats = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<(HTMLDivElement | null)[]>([]);

    const stats = [
        { value: 12000, suffix: "SQ FT", label: "Volumetric Capacity" },
        { value: 99.99, suffix: "%", label: "Particulate Remediation" },
        { value: 0, suffix: "dB", label: "Acoustic Footprint", note: "Inside living volume" },
        { value: 50, suffix: "+ YEARS", label: "Infrastructure Lifecycle" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            statsRef.current.forEach((el, i) => {
                if (!el) return;
                const targetValue = stats[i].value;
                const countObj = { val: 0 };
                const valueDisplay = el.querySelector('.stat-value');

                gsap.to(countObj, {
                    val: targetValue,
                    duration: 3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    },
                    onUpdate: () => {
                        if (valueDisplay) {
                            valueDisplay.textContent = targetValue % 1 === 0
                                ? Math.floor(countObj.val).toLocaleString()
                                : countObj.val.toFixed(2);
                        }
                    }
                });

                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    scale: 0.98,
                    duration: 1.5,
                    delay: i * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom-=100"
                    }
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-32 px-6 bg-[#0B0F14] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 text-blueprint-accent font-bold tracking-[0.4em] text-[10px] uppercase font-sans">
                            <span className="w-10 h-[1px] bg-blueprint-accent/50" />
                            System Benchmarks
                        </div>
                        <h2 className="text-blueprint-text uppercase font-light tracking-tighter">
                            THERMODYNAMIC <br /> <span className="text-blueprint-accent font-bold">PRECISION</span>
                        </h2>
                    </div>
                    <p className="text-lg text-blueprint-text/40 max-w-sm font-light leading-relaxed font-sans">
                        Operational metrics engineered for institutional performance.
                        Establishing the global standard for architectural airflow systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            ref={el => statsRef.current[i] = el}
                            className="p-10 border border-white/5 bg-blueprint-surface/20 backdrop-blur-3xl rounded-button group hover:border-blueprint-accent/30 transition-all duration-500 shadow-2xl hover:-translate-y-2"
                        >
                            <div className="flex flex-col gap-2">
                                <div className="text-5xl font-bold tracking-tighter text-blueprint-text font-sans">
                                    <span className="stat-value text-blueprint-accent">0</span>{stat.suffix}
                                </div>
                                <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-blueprint-text/20 mb-4 font-sans">{stat.label}</div>
                                {stat.note && (
                                    <div className="text-[11px] text-blueprint-text/40 font-sans opacity-60">{stat.note}</div>
                                )}
                            </div>
                            <div className="w-full h-[1px] bg-white/5 mt-8 group-hover:bg-blueprint-accent/20 transition-all duration-500" />
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center opacity-5 font-bold text-xs tracking-[1em] uppercase font-sans text-blueprint-text">
                    ENGINEERED FOR PERMANENCE // SC-STAT-04
                </div>
            </div>
        </section>
    );
};

export default PerformanceStats;

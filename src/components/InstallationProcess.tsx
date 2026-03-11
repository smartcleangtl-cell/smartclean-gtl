import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardCheck, Layout, Wrench, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InstallationProcess = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    const steps = [
        { title: "Site Analysis", desc: "Expert technical evaluation of architectural layout and volumetric paths.", icon: <ClipboardCheck size={32} /> },
        { title: "Network Design", desc: "Precision trajectory mapping of the anti-static pipe network.", icon: <Layout size={32} /> },
        { title: "Core Integration", desc: "Surgical deployment during construction or structural retrofitting.", icon: <Wrench size={32} /> },
        { title: "System Sync", desc: "Performance calibration and protocol briefing for the facility team.", icon: <GraduationCap size={32} /> },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            itemsRef.current.forEach((el, i) => {
                if (!el) return;
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    },
                    y: 40,
                    opacity: 0,
                    scale: 0.98,
                    duration: 1,
                    ease: "power2.out",
                    delay: i * 0.1
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-32 px-6 bg-[#0B0F14]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-md mb-32">
                    <div className="inline-flex items-center gap-3 text-blueprint-accent font-bold tracking-[0.4em] text-[10px] uppercase font-sans mx-auto">
                        <span className="w-10 h-[1px] bg-blueprint-accent/50" />
                        The Methodology
                    </div>
                    <h2 className="text-blueprint-text uppercase font-light tracking-tighter">
                        THE PATH TO <br /><span className="text-blueprint-accent font-bold">STRUCTURAL PURITY</span>
                    </h2>
                    <p className="text-lg md:text-xl text-blueprint-text/30 max-w-lg mx-auto font-light font-sans tracking-tight">
                        "A sequenced integration into the built environment."
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-[3.5rem] left-0 w-full h-[1px] bg-white/5 hidden lg:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                ref={el => itemsRef.current[i] = el}
                                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 group"
                            >
                                <div className="w-16 h-16 rounded-button bg-blueprint-surface/30 border border-white/5 flex items-center justify-center text-blueprint-accent group-hover:bg-blueprint-accent group-hover:text-blueprint-bg transition-all duration-300 shadow-2xl relative">
                                    <div className="relative z-10 scale-75 md:scale-90 transition-transform group-hover:scale-100">{step.icon}</div>
                                    <div className="absolute inset-0 bg-blueprint-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="space-y-4">
                                    <div className="text-[10px] font-bold text-blueprint-accent/60 tracking-[0.4em] uppercase font-sans">Sequence 0{i + 1}</div>
                                    <h4 className="text-xl font-bold tracking-[0.1em] font-sans uppercase text-blueprint-text">{step.title}</h4>
                                    <p className="text-sm text-blueprint-text/40 leading-relaxed font-sans max-w-[200px] mx-auto lg:mx-0">{step.desc}</p>
                                </div>

                                <div className="hidden lg:block w-2.5 h-2.5 rounded-full bg-white/5 absolute top-[3.25rem] left-6 group-hover:bg-blueprint-accent transition-all shadow-sm" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstallationProcess;

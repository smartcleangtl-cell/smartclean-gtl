import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CleaningDemo = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 50 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        end: "top top",
                        scrub: true,
                    },
                    opacity: 1,
                    y: 0,
                }
            );

            gsap.fromTo(videoRef.current,
                { filter: "grayscale(1) brightness(0.2) blur(10px)", scale: 1.1 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                    },
                    filter: "grayscale(0.6) brightness(0.5) blur(0px)",
                    scale: 1.2,
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[200vh] w-full bg-[#0B0F14] flex flex-col items-center">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center p-6 overflow-hidden">

                <div className="relative z-10 w-full max-w-7xl aspect-video rounded-button overflow-hidden border border-white/5 bg-blueprint-surface/20 backdrop-blur-3xl shadow-2xl group">
                    <video
                        ref={videoRef}
                        src="/Whisk_ewnjzjnjbdz5gzml1syibtytemzjrtl1cdok1sy.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/40 to-transparent flex flex-col items-center justify-center text-center p-12">
                        <div ref={textRef} className="space-y-md">
                            <div className="inline-block px-4 py-1 rounded-full border border-blueprint-accent/20 text-blueprint-accent text-[10px] font-bold tracking-[0.4em] uppercase font-sans mb-4">
                                Adaptive Integration
                            </div>
                            <h2 className="text-blueprint-text uppercase font-light tracking-tighter">
                                EFFORTLESS <br /> <span className="text-blueprint-accent font-bold">ATMOSPHERE</span>
                            </h2>
                            <p className="text-xl text-blueprint-text/40 max-w-2xl mx-auto font-light leading-relaxed font-sans">
                                SmartClean operates as a silent utility. The system activates intuitively,
                                remediating dust and particulates away from the architectural envelope without
                                human intervention.
                            </p>
                        </div>
                    </div>

                    {/* Watermark Protection Overlay */}
                    <div className="absolute bottom-4 right-4 w-24 h-8 bg-[#0B0F14]/80 backdrop-blur-md rounded-sm z-20 pointer-events-none border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blueprint-accent/40 to-transparent opacity-50" />
                </div>

                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center opacity-40 group">
                    <p className="text-blueprint-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-4 font-sans">THE BENCHMARK</p>
                    <p className="text-blueprint-text text-lg font-light font-sans tracking-tight">"A residence that maintains equilibrium, silently."</p>
                </div>
            </div>
        </section>
    );
};

export default CleaningDemo;

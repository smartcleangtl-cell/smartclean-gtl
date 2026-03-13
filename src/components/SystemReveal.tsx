import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, useScroll } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Zap, MousePointer2 } from 'lucide-react';
import * as THREE from 'three';

const SystemReveal = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="relative min-h-screen w-full bg-[#0B0F14] py-24 md:py-[180px] px-6 overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-md items-center">

                {/* Left: Text Content */}
                <div className="col-span-12 md:col-span-5 space-y-md z-10">
                    <div className="inline-flex items-center gap-3 text-blueprint-accent font-bold tracking-[0.3em] text-[12px] uppercase font-sans">
                        <span className="w-10 h-[1px] bg-blueprint-accent/50" />
                        Wall Inlet Interface
                    </div>
                    <h2 className="text-blueprint-text uppercase">
                        DESIGNED FOR <br /> <span className="text-blueprint-accent">REAL HOMES</span>
                    </h2>
                    <p className="text-lg text-blueprint-text/85 font-normal leading-relaxed font-sans">
                        Cleaning should not interrupt daily life. Lightweight hoses connect to wall inlets placed throughout the house.
                        No machine to carry, no cables to drag, and no motor noise inside living spaces.
                    </p>

                    <div className="flex flex-col gap-6 pt-md">
                        <div className="p-xl bg-blueprint-surface/40 backdrop-blur-xl rounded-button border border-white/5 space-y-md hover:border-blueprint-accent/30 transition-blueprint group">
                            <Wind className="text-blueprint-accent" size={24} />
                            <h4 className="font-bold text-xl font-sans text-blueprint-text">Sealed System</h4>
                            <p className="text-[15px] text-blueprint-text/80 font-sans leading-relaxed">Airflow particles only engage when the physical connection is confirmed.</p>
                        </div>
                        <div className="p-xl bg-blueprint-surface/40 backdrop-blur-xl rounded-button border border-white/5 space-y-md hover:border-blueprint-accent/30 transition-blueprint group">
                            <Zap className="text-blueprint-accent" size={24} />
                            <h4 className="font-bold text-xl font-sans text-blueprint-text">Instant Response</h4>
                            <p className="text-[15px] text-blueprint-text/80 font-sans leading-relaxed">Tactile confirmation via cubic easing transitions and material reflectivity.</p>
                        </div>
                    </div>
                </div>

                <div
                    className="col-span-12 md:col-span-7 relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-blueprint-surface/20 border border-white/5 shadow-2xl cursor-pointer group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setIsActive(!isActive)}
                >
                    {/* Video Background */}
                    <div className="absolute inset-0 z-0">
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                        >
                            <source src="/reveal1.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14] via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-[#0B0F14]/40" />
                    </div>

                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <motion.img 
                            src="/snap.png" 
                            alt="SmartClean Central Vacuum Wall Inlet - Modern Interior Design Tech and Building Infrastructure"
                            animate={isActive ? { scale: 1.15 } : { scale: [1, 1.05, 1] }}
                            transition={isActive ? 
                                { type: "spring", stiffness: 300, damping: 20 } : 
                                { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }
                            className="w-[80%] h-auto object-contain drop-shadow-[0_0_30px_rgba(79,109,255,0.4)]"
                        />
                    </div>

                    {/* Interaction Cues */}
                    <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-20">
                        <div className="glass-premium px-6 py-3 rounded-full flex items-center gap-3 animate-bounce bg-white/10 backdrop-blur-2xl border-white/20">
                            <MousePointer2 size={14} className="text-blueprint-accent" />
                            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-blueprint-text">
                                {isActive ? 'System Engaged - Click to Release' : 'Click to Snap Connection'}
                            </span>
                        </div>
                    </div>

                    {/* Technical Annotation */}
                    <div className="absolute top-8 right-8 text-right z-20">
                        <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-blueprint-text/60">
                            Model: SC-INLET-04 <br />
                            Material: Brushed Aluminum <br />
                            State: {isActive ? 'Flow Active' : 'Idle'}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemReveal;

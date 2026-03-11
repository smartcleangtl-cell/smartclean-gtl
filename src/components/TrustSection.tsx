import React from 'react';
import { ShieldCheck, Award, Clock, Users, VolumeX, Wind } from 'lucide-react';

const TrustSection = () => {
    return (
        <section className="relative py-24 md:py-[200px] px-6 bg-[#0B0F14] text-blueprint-text overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Main Trust Message */}
                <div className="grid grid-cols-12 gap-md items-center">
                    <div className="col-span-12 lg:col-span-7 space-y-md">
                        <div className="inline-block px-4 py-1 rounded-full border border-blueprint-accent/20 text-blueprint-accent text-[10px] font-bold tracking-[0.4em] uppercase font-sans">
                            Reliability Protocol
                        </div>
                        <h2 className="text-blueprint-text uppercase">
                            WHY CENTRAL <br /> <span className="text-blueprint-accent">VACUUM SYSTEMS?</span>
                        </h2>
                        <p className="text-lg text-blueprint-text/40 font-light leading-relaxed max-w-2xl font-sans">
                            SmartClean isn't a seasonal appliance. It's a permanent infrastructure investment,
                            engineered to exceed international hygiene standards and withstand decades of operation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                            <div className="space-y-4 group text-center md:text-left">
                                <div className="p-4 bg-blueprint-surface/40 border border-white/5 shadow-2xl w-fit rounded-button group-hover:border-blueprint-accent/30 transition-blueprint mx-auto md:mx-0">
                                    <VolumeX className="text-blueprint-accent" size={28} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-xl leading-tight font-sans text-blueprint-text uppercase">Quieter Cleaning</h4>
                                <p className="text-sm text-blueprint-text/40 font-sans leading-relaxed">The motor unit is located outside the living area, reducing noise inside the home.</p>
                            </div>
                            <div className="space-y-4 group text-center md:text-left">
                                <div className="p-4 bg-blueprint-surface/40 border border-white/5 shadow-2xl w-fit rounded-button group-hover:border-blueprint-accent/30 transition-blueprint mx-auto md:mx-0">
                                    <Wind className="text-blueprint-accent" size={28} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-xl leading-tight font-sans text-blueprint-text uppercase">Cleaner Air</h4>
                                <p className="text-sm text-blueprint-text/40 font-sans leading-relaxed">Dust and allergens are extracted away from the house instead of recirculating.</p>
                            </div>
                            <div className="space-y-4 group text-center md:text-left pt-8">
                                <div className="p-4 bg-blueprint-surface/40 border border-white/5 shadow-2xl w-fit rounded-button group-hover:border-blueprint-accent/30 transition-blueprint mx-auto md:mx-0">
                                    <Clock className="text-blueprint-accent" size={28} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-xl leading-tight font-sans text-blueprint-text uppercase">Long-Term Convenience</h4>
                                <p className="text-sm text-blueprint-text/40 font-sans leading-relaxed">Once installed, the system becomes a permanent cleaning solution built into the structure of the home.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-5 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 group">
                        <img
                            src="/motor_unit.png"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                            alt="SmartClean Central Vacuum Motor Unit"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 text-[9px] text-blueprint-text/20 uppercase tracking-[0.5em] font-bold font-sans">Model: SC-MOTOR-V3 // Sri Lanka</div>
                    </div>
                </div>

                {/* Brand Promises */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-20">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 font-bold tracking-[0.4em] uppercase text-[9px] text-blueprint-accent font-sans">
                            <Clock size={14} /> Permanence
                        </div>
                        <p className="text-sm text-blueprint-text/30 leading-relaxed font-light font-sans">
                            Designed to last as long as the architectural foundation. Our zero-maintenance motor technology ensures seamless multi-decade utility.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 font-bold tracking-[0.4em] uppercase text-[9px] text-blueprint-accent font-sans">
                            <Users size={14} /> Technical Expertise
                        </div>
                        <p className="text-sm text-blueprint-text/30 leading-relaxed font-light font-sans">
                            Certified engineers collaborating directly with architects and structural contractors to ensure system integrity.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 font-bold tracking-[0.4em] uppercase text-[9px] text-blueprint-accent font-sans">
                            <ShieldCheck size={14} /> Global Standards
                        </div>
                        <p className="text-sm text-blueprint-text/30 leading-relaxed font-light font-sans">
                            Every SmartClean installation is validated against international HEPA-standard air purity and noise attenuation protocols.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;

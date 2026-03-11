import { motion } from 'framer-motion';
import ExplodedView from '../components/ExplodedView';
import AirflowLayer from '../components/AirflowLayer';
import { ArrowDown } from 'lucide-react';

const HowItWorks = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B0F14] text-blueprint-text pt-24"
        >
            <section className="py-[120px] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-md items-center mb-32">
                        <div className="col-span-12 lg:col-span-6 space-y-md">
                            <div className="inline-flex items-center gap-3 text-blueprint-accent font-bold tracking-[0.4em] text-[10px] uppercase font-sans">
                                <span className="w-10 h-[1px] bg-blueprint-accent/50" />
                                Technical Foundation
                            </div>
                            <h1 className="text-blueprint-text uppercase">
                                ARCHITECTURE <br /> OF <span className="text-blueprint-accent">PURITY</span>
                            </h1>
                            <p className="text-xl text-blueprint-text/40 font-light leading-relaxed mb-12 font-sans">
                                A hidden network of high-durability infrastructure. Every room
                                is connected through scientific pressure differentials to a central vacuum source.
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-6 relative rounded-button overflow-hidden shadow-2xl border border-white/5 grid grid-rows-2 gap-4 h-[400px]">
                            <div className="relative overflow-hidden rounded-button bg-blueprint-surface/20 border border-white/5">
                                <video
                                    src="/Cinematic_2d_to_3d_transformation_walls_rise_verti_f38ed2c6b9.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F14] to-transparent h-16" />
                                <div className="absolute bottom-3 left-4 text-[9px] text-blueprint-accent/50 uppercase tracking-[0.3em] font-bold font-sans">3D System Simulation</div>
                            </div>
                            <div className="relative overflow-hidden rounded-button bg-blueprint-surface/20 border border-white/5 group">
                                <img
                                    src="/pipe_diagram.png"
                                    alt="Central Vacuum Pipe System Layout Diagram"
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F14] to-transparent h-16" />
                                <div className="absolute bottom-3 left-4 text-[9px] text-blueprint-accent/50 uppercase tracking-[0.3em] font-bold font-sans">Pipe Network Routing Diagram</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-32">
                        <div className="grid grid-cols-12 gap-md">
                            <div className="col-span-12 md:col-span-4 space-y-md p-xl bg-blueprint-surface/40 backdrop-blur-xl rounded-button border border-white/5 group hover:border-blueprint-accent/30 transition-blueprint">
                                <span className="text-blueprint-accent text-sm font-bold tracking-[0.4em] uppercase">01 // Simulation</span>
                                <h3 className="text-2xl font-sans text-blueprint-text uppercase">Structural Analysis</h3>
                                <p className="text-blueprint-text/40 font-light font-sans leading-relaxed">
                                    We analyze the building blueprint to determine optimal inlet coordinates and routing for minimum pressure loss.
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-4 space-y-md p-xl bg-blueprint-surface/40 backdrop-blur-xl rounded-button border border-white/5 group hover:border-blueprint-accent/30 transition-blueprint">
                                <span className="text-blueprint-accent text-sm font-bold tracking-[0.4em] uppercase">02 // Integration</span>
                                <h3 className="text-2xl font-sans text-blueprint-text uppercase">The Pipeline Network</h3>
                                <p className="text-blueprint-text/40 font-light font-sans leading-relaxed">
                                    Anti-static PVC piping is integrated into the wall structure, becoming a permanent part of the building skin.
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-4 space-y-md p-xl bg-blueprint-surface/40 backdrop-blur-xl rounded-button border border-white/5 group hover:border-blueprint-accent/30 transition-blueprint">
                                <span className="text-blueprint-accent text-sm font-bold tracking-[0.4em] uppercase">03 // Operation</span>
                                <h3 className="text-2xl font-sans text-blueprint-text uppercase">Central Power Core</h3>
                                <p className="text-blueprint-text/40 font-light font-sans leading-relaxed">
                                    A high-wattage motor unit is situated in a service area, isolating all noise and filtration exhaust from your environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AirflowLayer />
            <ExplodedView />

            <section className="py-[180px] px-6 bg-[#0B0F14] text-blueprint-text border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center space-y-md">
                    <h2 className="text-blueprint-text uppercase font-light tracking-tighter">
                        SCIENTIFIC <span className="text-blueprint-accent font-bold">DISPLACEMENT</span>
                    </h2>
                    <p className="text-xl text-blueprint-text/40 font-light leading-relaxed font-sans">
                        Traditional machines recirculate micro-particulates back into the local environment.
                        Our central infrastructure ensures 100% volumetric extraction,
                        transporting all dust safely outside the living envelope.
                    </p>
                </div>
            </section>
        </motion.div>
    );
};

export default HowItWorks;

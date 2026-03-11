import { motion } from 'framer-motion';
import LifestyleParallax from '../components/LifestyleParallax';
import CleaningDemo from '../components/CleaningDemo';

const Residential = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B0F14] pt-24 text-blueprint-text"
        >
            <section className="py-[120px] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl mb-32 space-y-md">
                        <div className="inline-flex items-center gap-3 text-blueprint-accent font-bold tracking-[0.4em] text-[10px] uppercase font-sans">
                            <span className="w-10 h-[1px] bg-blueprint-accent/50" />
                            Premium Residential
                        </div>
                        <h1 className="text-blueprint-text uppercase">
                            CENTRAL VACUUM SYSTEMS <br /><span className="text-blueprint-accent">FOR MODERN HOMES</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blueprint-text/40 font-light leading-relaxed font-sans max-w-2xl">
                            Designed for modern Sri Lankan homes and large living spaces.
                            Quiet operation, improved air quality, and effortless cleaning built directly into your house structure.
                        </p>
                    </div>
                </div>
            </section>

            <LifestyleParallax />

            <section className="py-[180px] px-6 bg-[#0B0F14] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-md items-center">
                    <div className="col-span-12 lg:col-span-7 space-y-md">
                        <div className="space-y-md group">
                            <h3 className="text-4xl md:text-5xl font-sans uppercase text-blueprint-text group-hover:text-blueprint-accent transition-blueprint">Seamless <br /> Integration</h3>
                            <p className="text-lg text-blueprint-text/40 font-light leading-relaxed font-sans max-w-md">
                                Retractable Wal-Vac® technology disappears into the structural cavity when not in use.
                                Zero visible footprint. Zero manual transport of equipment.
                            </p>
                        </div>
                        <div className="space-y-md border-t border-white/5 pt-12 group">
                            <h3 className="text-4xl md:text-5xl font-sans uppercase text-blueprint-text group-hover:text-blueprint-accent transition-blueprint">Pure Air <br /> Metrics</h3>
                            <p className="text-lg text-blueprint-text/40 font-light leading-relaxed font-sans max-w-md">
                                By exhausting micro-particulates outside the architectural volume, we achieve 100% elimination of indoor recycled dust.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 relative aspect-[4/5] rounded-button overflow-hidden shadow-2xl border border-white/5 group bg-blueprint-surface/20">
                        <img
                            src="/nitch.jpeg"
                            alt="Modern Architectural Interior in Sri Lanka - Central Vacuum System Integration"
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0F14] to-transparent opacity-80" />
                        <div className="absolute bottom-8 left-8 text-[9px] text-blueprint-text/20 uppercase tracking-[0.5em] font-bold font-sans">
                            Blueprint Visual // SC-RES-01
                        </div>
                    </div>
                </div>
            </section>

            <CleaningDemo />

            <section className="py-[180px] px-6 text-center relative overflow-hidden bg-[#0B0F14]">
                <div className="relative z-10 max-w-4xl mx-auto space-y-md">
                    <div className="inline-block px-4 py-1 rounded-full border border-blueprint-accent/20 text-blueprint-accent text-[10px] font-bold tracking-[0.4em] uppercase font-sans mb-4">
                        Acoustic Isolation
                    </div>
                    <h2 className="text-blueprint-text uppercase font-light tracking-tighter">
                        THE ENGINEERING <br /> OF <span className="text-blueprint-accent font-bold">SILENCE</span>
                    </h2>
                    <p className="text-lg md:text-xl text-blueprint-text/40 font-light leading-relaxed font-sans max-w-2xl mx-auto">
                        Preserve your acoustic environment. Clean the nursery while the residence sleeps.
                        The SmartClean system relocates extraction noise to the utility volume.
                    </p>
                    <div className="pt-12">
                        <button className="px-12 py-5 bg-blueprint-accent text-blueprint-text rounded-button hover:bg-blueprint-accent/90 transition-blueprint font-bold text-xs tracking-[0.2em] uppercase shadow-2xl active:scale-[0.985]">
                            EXPLORE CONFIGURATIONS
                        </button>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blueprint-accent/5 rounded-full blur-[120px] opacity-10 pointer-events-none" />
            </section>
        </motion.div>
    );
};

export default Residential;

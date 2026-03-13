import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PerformanceStats from '../components/PerformanceStats';

const Commercial = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B0F14] pt-24 text-blueprint-text"
        >
            <Helmet>
                <title>Commercial Central Vacuum Infrastructure | SmartClean Sri Lanka</title>
                <meta name="description" content="Industrial-grade cleaning solutions for hotels, hair salons, beauty parlors, clinics, and multi-unit developments. High-output vacuum infrastructure designed for permanence and hygiene." />
                <meta name="keywords" content="commercial vacuum systems, enterprise cleaning tech, building utilities Sri Lanka, hotel cleaning infrastructure, hair salon cleaning, beauty parlor hygiene, dental clinic cleaning, gym vacuum systems, industrial scale vacuum, permanent cleaning solutions, commercial construction tech" />
                <meta property="og:title" content="Commercial Central Vacuum Infrastructure | SmartClean Sri Lanka" />
                <meta property="og:description" content="Distributed suction protocols for enterprise-scale efficiency. Engineered for high-traffic environments." />
            </Helmet>
            <section className="py-[120px] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-md items-center">
                        <div className="col-span-12 lg:col-span-7 space-y-md">
                            <div className="inline-flex items-center gap-3 text-blueprint-accent font-bold tracking-[0.4em] text-[10px] uppercase font-sans">
                                <span className="w-10 h-[1px] bg-blueprint-accent/50" />
                                Enterprise Systems
                            </div>
                            <h1 className="text-blueprint-text uppercase font-light tracking-tighter">
                                COMMERCIAL <br /><span className="text-blueprint-accent font-bold">CLEANING INFRASTRUCTURE</span>
                            </h1>
                            <p className="text-lg md:text-xl text-blueprint-text/40 font-light leading-relaxed mb-10 font-sans max-w-2xl">
                                Robust cleaning solutions for hotels, offices, and multi-unit developments in Sri Lanka.
                                Centralized suction for high-traffic environments requiring maximum efficiency and acoustic control.
                            </p>
                            <div className="grid grid-cols-2 gap-8 text-[9px] tracking-[0.4em] uppercase text-blueprint-text/20 font-bold font-sans">
                                <div className="space-y-3 border-l border-white/5 pl-8">
                                    <p className="text-blueprint-text/40 group-hover:text-blueprint-accent transition-blueprint">Hospitality // Hotels</p>
                                    <p className="text-blueprint-text/40 group-hover:text-blueprint-accent transition-blueprint">Corporate // Offices</p>
                                </div>
                                <div className="space-y-3 border-l border-white/5 pl-8">
                                    <p className="text-blueprint-text/40 group-hover:text-blueprint-accent transition-blueprint">Residential // High-Density</p>
                                    <p className="text-blueprint-text/40 group-hover:text-blueprint-accent transition-blueprint">Retail // Exhibition</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 relative aspect-square rounded-button overflow-hidden bg-blueprint-surface/20 border border-white/5 p-12 flex items-center justify-center group shadow-2xl">
                            <img
                                src="/motor.jpeg"
                                alt="Commercial Central Vacuum Extraction Unit - Industrial Scale Cleaning"
                                className="w-full h-auto object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blueprint-accent/5 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            <PerformanceStats />

            <section className="py-[180px] px-6 bg-[#0B0F14] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-blueprint-text text-center uppercase mb-24 font-light tracking-tighter">
                        ENTERPRISE <span className="text-blueprint-accent font-bold">UTILITY</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-button overflow-hidden shadow-2xl">
                        <div className="p-16 bg-[#0B0F14] space-y-md hover:bg-blueprint-surface/20 transition-all duration-500 group">
                            <h3 className="text-2xl font-bold text-blueprint-accent font-sans uppercase tracking-[0.2em]">Operational Equilibrium</h3>
                            <p className="text-blueprint-text/40 font-light leading-relaxed font-sans text-lg">
                                Eliminate the logistical friction of equipment transport.
                                Distributed inlet protocols ensure 100% floor coverage with zero corridor obstruction.
                            </p>
                        </div>
                        <div className="p-16 bg-[#0B0F14] space-y-md hover:bg-blueprint-surface/20 transition-all duration-500 group border-l border-white/5">
                            <h3 className="text-2xl font-bold text-blueprint-accent font-sans uppercase tracking-[0.2em]">High-Cycle Durability</h3>
                            <p className="text-blueprint-text/40 font-light leading-relaxed font-sans text-lg">
                                Central motor units engineered for 24/7 industrial cycles.
                                Fixed placement reduces mechanical stress and centralizes maintenance logistics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[180px] px-6 text-center bg-[#0B0F14]">
                <div className="max-w-4xl mx-auto space-y-md">
                    <p className="text-xl md:text-2xl text-blueprint-text/30 font-light leading-relaxed font-sans">
                        "The system functions as a core building utility. <br className="hidden md:block" />
                        It is <span className="text-blueprint-text/60 font-medium">permanent, high-output infrastructure</span>."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
                        <button className="px-12 py-5 bg-blueprint-accent text-blueprint-text rounded-button hover:bg-blueprint-accent/90 transition-blueprint font-bold text-xs tracking-[0.2em] uppercase shadow-2xl active:scale-[0.985]">
                            TECHNICAL SPECIFICATIONS
                        </button>
                        <button className="px-12 py-5 border border-white/10 rounded-button text-blueprint-text hover:bg-white/5 transition-blueprint font-bold text-xs tracking-[0.2em] uppercase shadow-sm active:scale-[0.985]">
                            INFRASTRUCTURE QUOTE
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Commercial;

import { motion } from 'framer-motion';
import InstallationProcess from '../components/InstallationProcess';

const Installation = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B0F14] pt-24 text-blueprint-text"
        >
            <section className="py-[120px] px-6">
                <div className="max-w-7xl mx-auto space-y-md">
                    <div className="inline-flex items-center gap-3 text-blueprint-accent font-bold tracking-[0.4em] text-[10px] uppercase font-sans">
                        <span className="w-10 h-[1px] bg-blueprint-accent/50" />
                        Technical Deployment
                    </div>
                    <h1 className="text-blueprint-text uppercase font-light tracking-tighter">
                        PROFESSIONAL <br /><span className="text-blueprint-accent font-bold">INSTALLATION PROCESS</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blueprint-text/40 max-w-2xl font-light leading-relaxed font-sans">
                        From site assessment to system design, we manage the entire integration into your building project.
                        Our engineers ensure a seamless installation during the construction phase or as a structural retrofit.
                    </p>
                </div>
            </section>

            <InstallationProcess />

            <section className="py-[180px] px-6 bg-[#0B0F14] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="space-y-6 group">
                        <h3 className="text-5xl font-bold font-sans uppercase tracking-tighter text-blueprint-accent">01</h3>
                        <h4 className="text-2xl font-bold font-sans uppercase tracking-[0.1em] text-blueprint-text">Phase I: Analysis</h4>
                        <p className="text-blueprint-text/40 font-light font-sans leading-relaxed">
                            Full structural scan of building blueprints to identify optimal routing trajectories and inlet coordinates.
                        </p>
                    </div>
                    <div className="space-y-6 group md:border-l border-white/5 md:pl-12">
                        <h3 className="text-5xl font-bold font-sans uppercase tracking-tighter text-blueprint-accent">02</h3>
                        <h4 className="text-2xl font-bold font-sans uppercase tracking-[0.1em] text-blueprint-text">Phase II: Layout</h4>
                        <p className="text-blueprint-text/40 font-light font-sans leading-relaxed">
                            Deployment of the internal pipe network, utilizing anti-static material for optimized volumetric flow.
                        </p>
                    </div>
                    <div className="space-y-6 group md:border-l border-white/5 md:pl-12">
                        <h3 className="text-5xl font-bold font-sans uppercase tracking-tighter text-blueprint-accent">03</h3>
                        <h4 className="text-2xl font-bold font-sans uppercase tracking-[0.1em] text-blueprint-text">Phase III: Sync</h4>
                        <p className="text-blueprint-text/40 font-light font-sans leading-relaxed">
                            Calibration of the central motor core and validation of systemic pressure integrity across all points.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-[180px] px-6 relative overflow-hidden bg-[#0B0F14]">
                <div className="relative z-10 max-w-5xl mx-auto rounded-button bg-blueprint-surface/20 backdrop-blur-3xl p-12 md:p-20 text-center space-y-md border border-white/5 shadow-2xl">
                    <h2 className="text-blueprint-text uppercase font-light tracking-tighter">
                        NEW BUILDS & <span className="text-blueprint-accent font-bold">STRUCTURAL ADAPTATION</span>
                    </h2>
                    <p className="text-blueprint-text/40 font-light leading-relaxed text-lg md:text-xl font-sans max-w-2xl mx-auto">
                        While optimized for new construction, our engineering team can integrate
                        central vacuum infrastructure into existing structural frameworks with surgical precision.
                    </p>
                    <div className="pt-12">
                        <button className="px-12 py-5 bg-blueprint-accent text-blueprint-text rounded-button hover:bg-blueprint-accent/90 transition-blueprint font-bold text-xs tracking-[0.2em] uppercase shadow-2xl active:scale-[0.985]">
                            FEASIBILITY PROTOCOL
                        </button>
                    </div>
                </div>

                {/* Ambient Depth */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blueprint-accent/5 rounded-full blur-[150px] opacity-10 pointer-events-none" />
            </section>
        </motion.div>
    );
};

export default Installation;

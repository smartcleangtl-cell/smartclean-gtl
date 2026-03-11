import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B0F14] pt-24 min-h-screen relative overflow-hidden text-blueprint-text"
        >
            <section className="py-[120px] px-6 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 lg:gap-32">
                    <div className="lg:w-1/2 space-y-md">
                        <div className="space-y-md">
                            <div className="inline-flex items-center gap-3 text-blueprint-accent font-bold tracking-[0.4em] text-[10px] uppercase font-sans">
                                <span className="w-10 h-[1px] bg-blueprint-accent/50" />
                                Project Briefing
                            </div>
                            <h1 className="text-blueprint-text uppercase font-light tracking-tighter">
                                REQUEST A <br /><span className="text-blueprint-accent font-bold">SITE ASSESSMENT</span>
                            </h1>
                            <p className="text-lg md:text-xl text-blueprint-text/40 font-light leading-relaxed font-sans max-w-xl">
                                Connect with our engineering team to plan your system integration.
                                We provide onsite evaluations across Sri Lanka for both new builds and existing properties.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-blueprint-text/20 uppercase tracking-[0.4em] font-sans">Hub Coordinates</p>
                                <p className="text-lg font-sans text-blueprint-text/60">Colombo, Sri Lanka</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-blueprint-text/20 uppercase tracking-[0.4em] font-sans">Data Uplink</p>
                                <p className="text-lg font-sans text-blueprint-text/60">inquiry@smartclean.lk</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <form className="space-y-10 bg-blueprint-surface/20 backdrop-blur-3xl p-10 md:p-16 rounded-button border border-white/5 shadow-2xl relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Authorized Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint font-sans text-lg text-blueprint-text placeholder:text-white/5" placeholder="Full Name" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Volumetric Scale</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint font-sans text-lg text-blueprint-text placeholder:text-white/5" placeholder="Building sq. ft." />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Sector Logic</label>
                                    <select className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint font-sans text-lg text-blueprint-text appearance-none cursor-pointer">
                                        <option className="bg-[#0B0F14]">Residential</option>
                                        <option className="bg-[#0B0F14]">Commercial</option>
                                        <option className="bg-[#0B0F14]">Hospitality</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Secure Line</label>
                                    <input type="tel" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint font-sans text-lg text-blueprint-text placeholder:text-white/5" placeholder="+94 000 0000" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Implementation Vision</label>
                                <textarea className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint h-32 resize-none font-sans text-lg text-blueprint-text placeholder:text-white/5" placeholder="Describe architectural context" />
                            </div>
                            <button className="w-full py-6 bg-blueprint-accent text-blueprint-text rounded-button hover:bg-blueprint-accent/90 transition-blueprint font-bold uppercase tracking-[0.4em] text-xs shadow-2xl active:scale-[0.985]">
                                TRANSMIT BRIEFING
                            </button>

                            <div className="absolute top-0 right-0 p-8 hidden md:block">
                                <span className="text-[9px] text-blueprint-accent/40 font-bold uppercase tracking-[1em] [writing-mode:vertical-lr] opacity-30">PROCESSED_SECURE</span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blueprint-accent/5 rounded-full blur-[150px] opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[200px] opacity-5 pointer-events-none" />
        </motion.div>
    );
};

export default Contact;

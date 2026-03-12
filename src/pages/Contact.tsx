import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        scale: '',
        sector: 'Residential',
        phone: '',
        vision: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await emailjs.send(
                'service_rjvwsp9',
                'template_fvom56h',
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    scale: formData.scale,
                    sector: formData.sector,
                    vision: formData.vision,
                },
                'ZJG1ZAQeM6ic_4wSv'
            );
            setStatus('success');
        } catch (error) {
            console.error('Email transmission failed:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000); // Reset error after 5s
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

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
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-blueprint-surface/20 backdrop-blur-3xl p-10 md:p-16 rounded-button border border-blueprint-accent/20 text-center space-y-6"
                                >
                                    <CheckCircle2 className="w-16 h-16 text-blueprint-accent mx-auto" />
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold uppercase tracking-widest text-blueprint-text">Briefing Received</h3>
                                        <p className="text-blueprint-text/60 font-sans">Our engineering department will contact you shortly to schedule your site assessment.</p>
                                    </div>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-xs font-bold text-blueprint-accent uppercase tracking-widest hover:text-blueprint-text transition-colors pt-4"
                                    >
                                        Send another update
                                    </button>
                                </motion.div>
                            ) : status === 'error' ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-500/10 backdrop-blur-3xl p-10 md:p-16 rounded-button border border-red-500/20 text-center space-y-6"
                                >
                                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold uppercase tracking-widest text-red-500">Uplink Failed</h3>
                                        <p className="text-blueprint-text/60 font-sans">We couldn't transmit your briefing. Please check your connection and try again.</p>
                                    </div>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-xs font-bold text-blueprint-text uppercase tracking-widest hover:text-white transition-colors pt-4"
                                    >
                                        Return to Form
                                    </button>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-10 bg-blueprint-surface/20 backdrop-blur-3xl p-10 md:p-16 rounded-button border border-white/5 shadow-2xl relative"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Authorized Name</label>
                                            <input
                                                required
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                type="text"
                                                className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint font-sans text-lg text-blueprint-text placeholder:text-white/30"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Uplink Email</label>
                                            <input
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint font-sans text-lg text-blueprint-text placeholder:text-white/30"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Volumetric Scale</label>
                                            <input
                                                name="scale"
                                                value={formData.scale}
                                                onChange={handleChange}
                                                type="text"
                                                className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint font-sans text-lg text-blueprint-text placeholder:text-white/30"
                                                placeholder="Building sq. ft."
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Sector Logic</label>
                                            <select
                                                name="sector"
                                                value={formData.sector}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint font-sans text-lg text-blueprint-text appearance-none cursor-pointer"
                                            >
                                                <option className="bg-[#0B0F14]" value="Residential">Residential</option>
                                                <option className="bg-[#0B0F14]" value="Commercial">Commercial</option>
                                                <option className="bg-[#0B0F14]" value="Hospitality">Hospitality</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Secure Line (Phone)</label>
                                        <input
                                            required
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            type="tel"
                                            className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint font-sans text-lg text-blueprint-text placeholder:text-white/30"
                                            placeholder="+94 000 0000"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/30 font-sans">Implementation Vision</label>
                                        <textarea
                                            name="vision"
                                            value={formData.vision}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blueprint-accent outline-none transition-blueprint h-32 resize-none font-sans text-lg text-blueprint-text placeholder:text-white/30"
                                            placeholder="Describe architectural context"
                                        />
                                    </div>
                                    <button
                                        disabled={status === 'submitting'}
                                        type="submit"
                                        className="w-full py-6 bg-blueprint-accent text-blueprint-text rounded-button hover:bg-blueprint-accent/90 transition-blueprint font-bold uppercase tracking-[0.4em] text-xs shadow-2xl active:scale-[0.985] flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Transmitting...
                                            </>
                                        ) : (
                                            'TRANSMIT BRIEFING'
                                        )}
                                    </button>

                                    <div className="absolute top-0 right-0 p-8 hidden md:block">
                                        <span className="text-[9px] text-blueprint-accent/40 font-bold uppercase tracking-[1em] [writing-mode:vertical-lr] opacity-30">PROCESSED_SECURE</span>
                                    </div>
                                </form>
                            )}
                        </AnimatePresence>
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

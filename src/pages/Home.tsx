import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import SystemReveal from '../components/SystemReveal';
import AirflowLayer from '../components/AirflowLayer';
import TrustSection from '../components/TrustSection';
import FinalCTA from '../components/FinalCTA';
import ExplodedView from '../components/ExplodedView';

const Home = () => {
    useEffect(() => {
        // Ensure all ScrollTriggers are calculated correctly
        ScrollTrigger.refresh();
        window.scrollTo(0, 0); 
    }, []);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B0F14] text-blueprint-text overflow-x-hidden"
        >
            <Hero />
            <ExplodedView />
            <SystemReveal />
            <AirflowLayer />
            <TrustSection />

            <section className="relative w-full bg-[#0B0F14] border-t border-white/5 py-[96px] md:py-[120px] px-6">
                <div className="max-w-7xl mx-auto text-center space-y-md">
                    <div className="inline-block px-4 py-1 rounded-full border border-blueprint-accent/40 bg-blueprint-accent/5 text-blueprint-accent text-[12px] font-bold tracking-[0.4em] uppercase font-sans mb-4">
                        Localized Engineering
                    </div>

                    <h2 className="text-blueprint-text uppercase">
                        DESIGNED FOR
                        <br />
                        <span className="text-blueprint-accent font-bold">
                            MODERN SRI LANKAN HOMES
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-blueprint-text/85 font-normal leading-relaxed font-sans max-w-3xl mx-auto">
                        In a tropical climate where dust accumulation is rapid, Smart Clean provides
                        a permanent cleaning infrastructure designed for larger homes. Our systems are
                        planned for local conditions, long-term use, and the spatial requirements of
                        modern Sri Lankan residential architecture.
                    </p>
                </div>
            </section>

            <FinalCTA />
        </motion.main>
    );
};

export default Home;
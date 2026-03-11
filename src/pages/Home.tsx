import Hero from '../components/Hero';
import SystemReveal from '../components/SystemReveal';
import AirflowLayer from '../components/AirflowLayer';
import TrustSection from '../components/TrustSection';
import FinalCTA from '../components/FinalCTA';
import ExplodedView from '../components/ExplodedView';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B0F14]"
        >
            {/* WONDER: Hero Section with 3D Blueprint */}
            <Hero />

            {/* UNDERSTANDING: Technical Breakdown of the Extraction Engine */}
            <ExplodedView />

            {/* UNDERSTANDING: The User Interface (Wall Inlet) */}
            <SystemReveal />

            {/* RELEVANCE: Pure Airflow Simulation Layer */}
            <AirflowLayer />

            {/* CONFIDENCE: Trust and Reliability */}
            <TrustSection />

            {/* Localized Engineering */}
            <section className="py-[120px] px-6 bg-[#0B0F14] border-t border-white/5">
                <div className="max-w-7xl mx-auto text-center space-y-md">
                    <div className="inline-block px-4 py-1 rounded-full border border-blueprint-accent/20 text-blueprint-accent text-[10px] font-bold tracking-[0.4em] uppercase font-sans mb-4">
                        Localized Engineering
                    </div>
                    <h2 className="text-blueprint-text uppercase">
                        DESIGNED FOR <br /> <span className="text-blueprint-accent font-bold">MODERN SRI LANKAN HOMES</span>
                    </h2>
                    <p className="text-lg md:text-xl text-blueprint-text/40 font-light leading-relaxed font-sans max-w-3xl mx-auto">
                        In a tropical climate where dust accumulation is rapid, SmartClean provides a permanent
                        defense. Our systems are optimized for local power conditions and large residential
                        footprints typical of premium Sri Lankan architecture.
                    </p>
                </div>
            </section>

            {/* CONFIDENCE: Final Conversion Flow */}
            <FinalCTA />
        </motion.div>
    );
};

export default Home;

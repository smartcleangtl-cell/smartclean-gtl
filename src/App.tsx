import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Installation from './pages/Installation';
import Contact from './pages/Contact';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/residential" element={<Residential />} />
                <Route path="/commercial" element={<Commercial />} />
                <Route path="/installation" element={<Installation />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <div className="relative w-full min-h-screen bg-[#0B0F14] text-blueprint-text font-sans">
                <Navbar />

                <main>
                    <AnimatedRoutes />
                </main>

                <footer className="py-24 px-6 border-t border-white/5 bg-[#0B0F14]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-16">
                        <div className="space-y-6">
                            <div className="flex flex-col -space-y-1">
                                <span className="text-xl font-bold tracking-tight text-blueprint-text uppercase font-sans">SMART</span>
                                <span className="text-[11px] font-bold tracking-[0.3em] text-blueprint-silver uppercase font-sans">CLEAN</span>
                            </div>
                            <p className="text-sm text-blueprint-text/40 leading-relaxed font-sans max-w-xs">
                                Smart Clean provides centralized vacuum solutions designed for modern homes and commercial buildings.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/20 font-sans">Navigation</h4>
                                <ul className="space-y-4 text-sm font-sans text-blueprint-text/40">
                                    <li><Link to="/how-it-works" className="hover:text-blueprint-text transition-colors">How It Works</Link></li>
                                    <li><Link to="/residential" className="hover:text-blueprint-text transition-colors">Residential</Link></li>
                                    <li><Link to="/commercial" className="hover:text-blueprint-text transition-colors">Commercial</Link></li>
                                </ul>
                            </div>
                            <div className="space-y-6 pt-10">
                                <ul className="space-y-4 text-sm font-sans text-blueprint-text/40">
                                    <li><Link to="/installation" className="hover:text-blueprint-text transition-colors">Installation</Link></li>
                                    <li><Link to="/contact" className="hover:text-blueprint-text transition-colors">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-text/20 font-sans">Connect</h4>
                            <ul className="space-y-4 text-sm font-sans text-blueprint-text/40">
                                <li>Colombo, Sri Lanka</li>
                                <li>inquiry@smartclean.lk</li>
                                <li>Service available nationwide</li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] text-blueprint-text/20 font-sans uppercase tracking-[0.2em]">© 2024 Smart Clean. Engineered for permanence.</p>
                        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-blueprint-text/20 font-sans">
                            <a href="#" className="hover:text-blueprint-text transition-colors">Privacy</a>
                            <a href="#" className="hover:text-blueprint-text transition-colors">Terms</a>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;

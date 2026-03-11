import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, useScroll } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Zap, MousePointer2 } from 'lucide-react';
import * as THREE from 'three';

const InletModel = ({ active, hovered }: { active: boolean, hovered: boolean }) => {
    const meshRef = useRef<THREE.Group>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * -2
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle parallax shift (< 3 degrees)
            const targetRotX = mousePos.y * 0.05;
            const targetRotY = mousePos.x * 0.05;
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.1);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.1);

            // Camera snap animation simulation (adjust scale/pos)
            if (active) {
                state.camera.position.lerp(new THREE.Vector3(0, 0, 3), 0.1);
            } else {
                state.camera.position.lerp(new THREE.Vector3(0, 0, 5), 0.1);
            }
        }
    });

    return (
        <group ref={meshRef}>
            {/* Inlet Plate */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[2, 2.5, 0.2]} />
                <meshStandardMaterial
                    color="#D1D5D9"
                    metalness={hovered ? 0.9 : 0.7}
                    roughness={0.1}
                    emissive="#4F6DFF"
                    emissiveIntensity={hovered ? 0.1 : 0}
                />
            </mesh>
            {/* The Port */}
            <mesh position={[0, 0, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
                <meshStandardMaterial color="#1B2128" metalness={0.8} />
            </mesh>

            {/* Hose "Snap" Visual */}
            <AnimatePresence>
                {active && (
                    <group position={[0, 0, 1.5]}>
                        <mesh position={[0, 0, -1]} rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.35, 0.35, 1.5, 32]} />
                            <meshStandardMaterial color="#333" roughness={0.5} />
                        </mesh>
                    </group>
                )}
            </AnimatePresence>
        </group>
    );
};

const SystemReveal = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="relative min-h-screen w-full bg-[#0B0F14] py-[180px] px-6 overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-md items-center">

                {/* Left: Text Content */}
                <div className="col-span-12 lg:col-span-5 space-y-md z-10">
                    <div className="inline-flex items-center gap-3 text-blueprint-accent font-bold tracking-[0.3em] text-[12px] uppercase font-sans">
                        <span className="w-10 h-[1px] bg-blueprint-accent/50" />
                        Wall Inlet Interface
                    </div>
                    <h2 className="text-blueprint-text uppercase">
                        DESIGNED FOR <br /> <span className="text-blueprint-accent">REAL HOMES</span>
                    </h2>
                    <p className="text-lg text-blueprint-text/85 font-normal leading-relaxed font-sans">
                        Cleaning should not interrupt daily life. Lightweight hoses connect to wall inlets placed throughout the house.
                        No machine to carry, no cables to drag, and no motor noise inside living spaces.
                    </p>

                    <div className="flex flex-col gap-6 pt-md">
                        <div className="p-xl bg-blueprint-surface/40 backdrop-blur-xl rounded-button border border-white/5 space-y-md hover:border-blueprint-accent/30 transition-blueprint group">
                            <Wind className="text-blueprint-accent" size={24} />
                            <h4 className="font-bold text-xl font-sans text-blueprint-text">Sealed System</h4>
                            <p className="text-[15px] text-blueprint-text/80 font-sans leading-relaxed">Airflow particles only engage when the physical connection is confirmed.</p>
                        </div>
                        <div className="p-xl bg-blueprint-surface/40 backdrop-blur-xl rounded-button border border-white/5 space-y-md hover:border-blueprint-accent/30 transition-blueprint group">
                            <Zap className="text-blueprint-accent" size={24} />
                            <h4 className="font-bold text-xl font-sans text-blueprint-text">Instant Response</h4>
                            <p className="text-[15px] text-blueprint-text/80 font-sans leading-relaxed">Tactile confirmation via cubic easing transitions and material reflectivity.</p>
                        </div>
                    </div>
                </div>

                {/* Right: Interactive 3D Inlet */}
                <div
                    className="col-span-12 lg:col-span-7 relative h-[600px] rounded-[3rem] overflow-hidden bg-blueprint-surface/20 border border-white/5 shadow-2xl cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setIsActive(!isActive)}
                >
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[5, 5, 5]} intensity={2} color="#F6F7F8" />
                        <spotLight position={[-5, 5, 10]} intensity={3} color="#4F6DFF" angle={0.2} />

                        <InletModel active={isActive} hovered={isHovered} />
                    </Canvas>

                    {/* Interaction Cues */}
                    <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none">
                        <div className="glass-premium px-6 py-3 rounded-full flex items-center gap-3 animate-bounce bg-white/10 backdrop-blur-2xl border-white/20">
                            <MousePointer2 size={14} className="text-blueprint-accent" />
                            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-blueprint-text">
                                {isActive ? 'System Engaged' : 'Click to Snap Connection'}
                            </span>
                        </div>
                    </div>

                    {/* Technical Annotation */}
                    <div className="absolute top-8 right-8 text-right">
                        <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-blueprint-text/60">
                            Model: SC-INLET-04 <br />
                            Material: Brushed Aluminum <br />
                            State: {isActive ? 'Flow Active' : 'Idle'}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemReveal;

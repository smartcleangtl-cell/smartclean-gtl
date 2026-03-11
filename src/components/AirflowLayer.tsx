import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const AirflowLayer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')!;
        let animationFrameId: number;
        let particles: Particle[] = [];
        let scrollVelocity = 1;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 1;
                this.speedY = Math.random() * 3 + 2;
                this.opacity = Math.random() * 0.4 + 0.1;
            }

            update(velocity: number) {
                this.y -= this.speedY * velocity;
                if (this.y < 0) {
                    this.y = canvas.height;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                // Technical Blue Accent
                ctx.fillStyle = `rgba(79, 109, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < 150; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update(scrollVelocity);
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        init();
        animate();

        // Link scroll velocity to particles
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
                scrollVelocity = 1 + Math.abs(self.getVelocity() / 400);
            }
        });

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen w-full bg-[#0B0F14] overflow-hidden flex items-center justify-center border-y border-white/5">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none opacity-40"
            />

            <div className="relative z-10 text-center space-y-md px-6 max-w-4xl">
                <div className="inline-block px-4 py-1 rounded-full border border-blueprint-accent/20 text-blueprint-accent text-[9px] font-bold tracking-[0.4em] uppercase mb-4 font-sans bg-blueprint-surface/40 backdrop-blur-xl shadow-2xl">
                    Dynamic Flow Visualization
                </div>
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-blueprint-text font-sans uppercase">
                    KINETIC <br /> <span className="text-blueprint-accent">INFRASTRUCTURE</span>
                </h2>
                <p className="text-lg md:text-xl text-blueprint-text/40 max-w-xl mx-auto font-light leading-relaxed font-sans">
                    Real-time visualization of volumetric displacement. As scroll velocity increases,
                    airflow density adjusts to maintain optimal pressure differentials across the system.
                </p>
            </div>

            {/* Schematic grid overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blueprint-text/20" />
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-blueprint-text/20" />
            </div>

            {/* Tech annotations */}
            <div className="absolute bottom-12 right-12 text-right opacity-20 hidden md:block">
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-blueprint-text">
                    Sensor: FLW-08 <br />
                    Unit: m/s <br />
                    Status: Nominal
                </div>
            </div>
        </div>
    );
};

export default AirflowLayer;

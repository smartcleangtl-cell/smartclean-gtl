import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const AirflowLayer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId = 0;
        let particles: Particle[] = [];
        let flowFactor = 1;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
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
                this.size = Math.random() * 1.2 + 0.4;
                this.speedX = (Math.random() - 0.5) * 0.1;
                this.speedY = Math.random() * 0.6 + 0.3;
                this.opacity = Math.random() * 0.15 + 0.05;
            }

            update(multiplier: number) {
                this.y -= this.speedY * multiplier;
                this.x += this.speedX * multiplier;

                if (this.y < -10) {
                    this.y = canvas.height + 10;
                    this.x = Math.random() * canvas.width;
                }

                if (this.x < -20) this.x = canvas.width + 20;
                if (this.x > canvas.width + 20) this.x = -20;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(120, 175, 255, ${this.opacity})`;
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
            particles.forEach((p) => {
                p.update(flowFactor);
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        init();
        animate();

        window.addEventListener('resize', resize);

        const trigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: (self) => {
                // Flatten the motion - very subtle increase during scroll
                const velocity = Math.abs(self.getVelocity());
                flowFactor = 1 + Math.min(velocity / 2500, 0.5);
            },
        });

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
            trigger.kill();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full bg-[#0B0F14] overflow-hidden flex items-center justify-center border-y border-white/5"
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{ willChange: 'transform' }}
            />

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="relative z-10 text-center space-y-md px-6 max-w-4xl">
                <div className="inline-block px-4 py-1 rounded-full border border-blueprint-accent/35 bg-blueprint-accent/5 text-blueprint-accent text-[12px] font-bold tracking-[0.35em] uppercase mb-4 font-sans backdrop-blur-xl">
                    Distributed Airflow
                </div>

                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-blueprint-text font-sans uppercase">
                    CONTROLLED
                    <br />
                    <span className="text-blueprint-accent">MOVEMENT</span>
                </h2>

                <p className="text-lg md:text-xl text-blueprint-text/80 max-w-xl mx-auto font-normal leading-relaxed font-sans">
                    Air is not recirculated. It is directed through a concealed path, 
                    away from occupied zones, and handled by the central system.
                </p>
            </div>
        </section>
    );
};

export default AirflowLayer;
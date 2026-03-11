import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, PerspectiveCamera, Points, PointMaterial, Image } from '@react-three/drei';
import * as THREE from 'three';

// Motor image aspect ratio from the provided screenshot is approx 2.2 : 1 (landscape)
const MOTOR_ASPECT = 2.2;

const HouseBlueprint = () => {
    const { viewport } = useThree();
    const scroll = useScroll();
    const pointsRef = useRef<THREE.Points>(null);
    const linesRef = useRef<THREE.Group>(null);
    const pipeGroupRef = useRef<THREE.Group>(null);
    const productRef = useRef<THREE.Group>(null);

    const isDesktop = viewport.width > 8; // Three.js world units

    // ---------- House Wireframe ----------
    const houseLines = useMemo(() => {
        const lines: number[][][] = [];
        // Foundation
        lines.push([[-3, 0, -3], [3, 0, -3]]);
        lines.push([[3, 0, -3], [3, 0, 3]]);
        lines.push([[3, 0, 3], [-3, 0, 3]]);
        lines.push([[-3, 0, 3], [-3, 0, -3]]);
        // Walls
        lines.push([[-3, 0, -3], [-3, 2.5, -3]]);
        lines.push([[3, 0, -3], [3, 2.5, -3]]);
        lines.push([[3, 0, 3], [3, 2.5, 3]]);
        lines.push([[-3, 0, 3], [-3, 2.5, 3]]);
        // Upper floor
        lines.push([[-3, 2.5, -3], [3, 2.5, -3]]);
        lines.push([[3, 2.5, -3], [3, 2.5, 3]]);
        lines.push([[3, 2.5, 3], [-3, 2.5, 3]]);
        lines.push([[-3, 2.5, 3], [-3, 2.5, -3]]);
        return lines;
    }, []);

    // ---------- Pipe Network ----------
    const pipes = useMemo(() => [
        { start: [-2, 0.2, -2], end: [-2, 2, -2] },
        { start: [2, 0.2, -2], end: [2, 2, -2] },
        { start: [-2, 0.2, 2], end: [-2, 1, 2] },
        { start: [-2, 0.2, -2], end: [0, 0.2, 0] },
        { start: [2, 0.2, -2], end: [0, 0.2, 0] },
        { start: [-2, 0.2, 2], end: [0, 0.2, 0] },
    ], []);

    // ---------- Particle spawn cloud ----------
    const particleCount = 1800;
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            // Spawn spread around the screen area
            pos[i * 3]     = (Math.random() - 0.5) * 14;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
        }
        return pos;
    }, []);

    // ---------- Motor scale & position helpers ----------
    // Image is landscape 2.2:1. Fit so the width fills ~60% of viewport on desktop,
    // ~90% on mobile — no cropping, full visible.
    const motorW = isDesktop ? viewport.width * 0.55 : viewport.width * 0.9;
    const motorH = motorW / MOTOR_ASPECT;

    // Suction mouth is on the LEFT side (front lens) of the motor image.
    // In world-space: offset approx -motorW/2 in X from the motor centre, same Y.
    const motorX = isDesktop ? 1.8 : 0;
    const motorY = -0.3;
    const motorZ = 2.5;

    // Suction mouth position in world space
    const suctionX = motorX - motorW * 0.48; // left edge of image
    const suctionY = motorY + 0.0;
    const suctionZ = motorZ;

    // ---------- Animation loop ----------
    useFrame((state) => {
        const offset = scroll.offset;
        const t = state.clock.getElapsedTime();

        // Camera - wider fov handled by PerspectiveCamera; gentle parallax drift
        state.camera.position.lerp(
            new THREE.Vector3(
                6 + Math.sin(t * 0.15) * 0.3,
                4 + Math.cos(t * 0.15) * 0.2 + offset * 3,
                6 + offset * 8
            ),
            0.08
        );
        state.camera.lookAt(0, 0, 0);

        // Product fade + gentle bob
        if (productRef.current) {
            const productFade = Math.max(0, 1 - offset * 5);
            // Gentle float bob, no scroll-driven scale-up (prevents zoom)
            productRef.current.position.y = motorY + Math.sin(t * 0.6) * 0.05;
            productRef.current.position.z = motorZ - offset * 4;
            productRef.current.rotation.y = Math.sin(t * 0.4) * 0.04;

            productRef.current.children.forEach((child: any) => {
                if (child.material) child.material.opacity = productFade;
            });
        }

        // Pipe illumination
        if (pipeGroupRef.current) {
            const pipeProgress = Math.max(0, (offset - 0.1) * 3);
            pipeGroupRef.current.children.forEach((child: any, i: number) => {
                const mesh = child as THREE.Line;
                const mat = mesh.material as THREE.LineBasicMaterial;
                const threshold = i / pipeGroupRef.current!.children.length;
                mat.opacity = pipeProgress > threshold ? 0.9 : 0.02;
            });
        }

        // Particles pulled into suction mouth (left lens of the motor)
        if (pointsRef.current) {
            const speed = 0.025 + offset * 0.06;
            const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                const x = pos[i * 3];
                const y = pos[i * 3 + 1];
                const z = pos[i * 3 + 2];

                const dx = suctionX - x;
                const dy = suctionY - y;
                const dz = suctionZ - z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < 0.25 || Math.abs(x) > 12 || Math.abs(y) > 10 || Math.abs(z) > 12) {
                    // Reset particles to a wide cloud around the scene
                    pos[i * 3]     = (Math.random() - 0.5) * 14;
                    pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
                    pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
                } else {
                    // Gravity-well pull — stronger as particles get closer
                    const pull = speed * (1.5 / (dist + 0.8));
                    pos[i * 3]     += dx * pull;
                    pos[i * 3 + 1] += dy * pull;
                    pos[i * 3 + 2] += dz * pull;
                }
            }
            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }

        // House skeleton fades in after scrolling
        if (linesRef.current) {
            const houseOpacity = Math.max(0, Math.min((offset - 0.2) * 5, 0.4));
            linesRef.current.children.forEach((child: any) => {
                (child as THREE.Line).material &&
                    ((child as THREE.Line).material as THREE.LineBasicMaterial).opacity !== undefined &&
                    (((child as THREE.Line).material as THREE.LineBasicMaterial).opacity = houseOpacity);
            });
        }
    });

    return (
        <group>
            {/* Wider FOV ensures full image visible at any viewport */}
            <PerspectiveCamera makeDefault position={[6, 4, 6]} fov={50} />
            <ambientLight intensity={0.9} />
            <pointLight position={[4, 4, 4]} intensity={1.5} color="#4F6DFF" />
            <pointLight position={[-4, 2, 2]} intensity={0.6} color="#ffffff" />

            {/* Motor Unit — full landscape view, no clipping */}
            <group ref={productRef} position={[motorX, motorY, motorZ]}>
                <Image
                    url="/motor transp.png"
                    transparent
                    scale={[motorW, motorH]}
                    side={THREE.DoubleSide}
                />
            </group>

            {/* House Wireframe */}
            <group ref={linesRef}>
                {houseLines.map((line, i: number) => (
                    <line key={i}>
                        <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints(line.map((p) => new THREE.Vector3(p[0], p[1], p[2])))} />
                        <lineBasicMaterial attach="material" color="#D1D5D9" transparent opacity={0} />
                    </line>
                ))}
            </group>

            {/* Pipe Network */}
            <group ref={pipeGroupRef}>
                {pipes.map((pipe, i: number) => (
                    <line key={`pipe-${i}`}>
                        <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints([new THREE.Vector3(...(pipe.start as [number,number,number])), new THREE.Vector3(...(pipe.end as [number,number,number]))])} />
                        <lineBasicMaterial attach="material" color="#4F6DFF" transparent opacity={0.05} linewidth={2} />
                    </line>
                ))}
            </group>

            {/* Suction Particles → converge to the front lens of the motor */}
            <Points ref={pointsRef} positions={positions} stride={3}>
                <PointMaterial
                    transparent
                    color="#7BA8FF"
                    size={0.04}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.7}
                />
            </Points>
        </group>
    );
};

export default HouseBlueprint;

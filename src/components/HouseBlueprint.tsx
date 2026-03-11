import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const HouseBlueprint = () => {
    const scroll = useScroll();
    const pointsRef = useRef<THREE.Points>(null);
    const linesRef = useRef<THREE.Group>(null);
    const pipeGroupRef = useRef<THREE.Group>(null);

    // Generate procedural house skeleton (wireframe look)
    const houseLines = useMemo(() => {
        const lines = [];
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

    // Generate pipe network
    const pipes = useMemo(() => [
        { start: [-2, 0.2, -2], end: [-2, 2, -2], rooms: [1] },
        { start: [2, 0.2, -2], end: [2, 2, -2], rooms: [2] },
        { start: [-2, 0.2, 2], end: [-2, 1, 2], rooms: [3] },
        { start: [-2, 0.2, -2], end: [0, 0.2, 0], central: true },
        { start: [2, 0.2, -2], end: [0, 0.2, 0], central: true },
        { start: [-2, 0.2, 2], end: [0, 0.2, 0], central: true },
    ], []);

    // Particles simulation for airflow
    const particleCount = 1500;
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 6;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 5;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const offset = scroll.offset; // 0 to 1

        // Sequential pipe illumination (0 to 0.2 scroll)
        if (pipeGroupRef.current) {
            const pipeProgress = Math.min(offset * 5, 1);
            pipeGroupRef.current.children.forEach((child, i) => {
                const mesh = child as THREE.Line;
                const mat = mesh.material as THREE.LineBasicMaterial;
                // Threshold illumination
                const threshold = i / pipeGroupRef.current!.children.length;
                mat.opacity = pipeProgress > threshold ? 0.8 : 0.05;
            });
        }

        // Particle speed based on scroll
        if (pointsRef.current) {
            const velocity = 0.01 + offset * 0.05;
            const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < particleCount; i++) {
                // Move towards center [0, 0, 0]
                const x = pos[i * 3];
                const y = pos[i * 3 + 1];
                const z = pos[i * 3 + 2];
                const dist = Math.sqrt(x * x + y * y + z * z);
                if (dist < 0.1) {
                    pos[i * 3] = (Math.random() - 0.5) * 6;
                    pos[i * 3 + 1] = (Math.random() - 0.5) * 5;
                    pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
                } else {
                    pos[i * 3] -= (x / dist) * velocity;
                    pos[i * 3 + 1] -= (y / dist) * velocity;
                    pos[i * 3 + 2] -= (z / dist) * velocity;
                }
            }
            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }

        // House skeleton opacity (faint 5% initially)
        if (linesRef.current) {
            const houseOpacity = 0.05 + Math.min(offset * 2, 0.45);
            linesRef.current.children.forEach((child) => {
                const mesh = child as THREE.Line;
                (mesh.material as THREE.LineBasicMaterial).opacity = houseOpacity;
            });
        }
    });

    return (
        <group>
            <PerspectiveCamera makeDefault position={[8, 5, 8]} fov={40} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#4F6DFF" />

            {/* House Structure */}
            <group ref={linesRef}>
                {houseLines.map((line, i) => (
                    <line key={i}>
                        <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints(line.map(p => new THREE.Vector3(...p)))} />
                        <lineBasicMaterial attach="material" color="#D1D5D9" transparent opacity={0.05} />
                    </line>
                ))}
            </group>

            {/* Pipe Network */}
            <group ref={pipeGroupRef}>
                {pipes.map((pipe, i) => (
                    <line key={`pipe-${i}`}>
                        <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints([new THREE.Vector3(...pipe.start), new THREE.Vector3(...pipe.end)])} />
                        <lineBasicMaterial attach="material" color="#4F6DFF" transparent opacity={0.05} linewidth={2} />
                    </line>
                ))}
            </group>

            {/* Airflow Particles */}
            <Points ref={pointsRef} positions={positions} stride={3}>
                <PointMaterial
                    transparent
                    color="#4F6DFF"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

export default HouseBlueprint;

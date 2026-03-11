import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const VacuumCore = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Create a procedural motor-like shape
    const motorParts = useMemo(() => {
        return [
            { radius: 1, height: 2, pos: [0, 0, 0], color: '#1A1A1A' }, // Main cylinder
            { radius: 1.1, height: 0.2, pos: [0, 0.8, 0], color: '#D4AF37' }, // Gold Ring
            { radius: 0.8, height: 2.2, pos: [0, 0, 0], color: '#222222' }, // Inner core
        ];
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Main Chassis */}
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[1, 1, 2.5, 32]} />
                    <meshStandardMaterial color="#2A2A2A" roughness={0.1} metalness={0.9} />
                </mesh>

                {/* Decorative Gold Ring */}
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[1.05, 1.05, 0.1, 32]} />
                    <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.05} />
                </mesh>

                {/* Suction Area (Inner) */}
                <mesh position={[0, -1.2, 0]}>
                    <cylinderGeometry args={[0.9, 0.7, 0.4, 32]} />
                    <meshStandardMaterial color="#1A1A1A" />
                </mesh>

                {/* Glow/Light effect */}
                <pointLight position={[0, 0.5, 1.5]} intensity={8} color="#D4AF37" />
                <pointLight position={[0, -0.5, -1.5]} intensity={4} color="#FFFFFF" />
            </Float>

            {/* Atmospheric Particles Around Core */}
            <group>
                {Array.from({ length: 30 }).map((_, i) => (
                    <mesh key={i} position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8]}>
                        <sphereGeometry args={[0.01, 8, 8]} />
                        <meshBasicMaterial color="#D4AF37" transparent opacity={0.3} />
                    </mesh>
                ))}
            </group>

            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={3} />
        </group>
    );
};

export default VacuumCore;

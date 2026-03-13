import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, PerspectiveCamera, Image, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function HouseBlueprint() {
    const { viewport } = useThree();
    const scroll = useScroll();

    // References for our parallax layers
    const motorRef = useRef<THREE.Group>(null);
    const bgRef = useRef<any>(null);
    const dustRef = useRef<THREE.Points>(null);

    const isDesktop = viewport.width > 8;

    // Simple, lightweight ambient dust (calculated once, not every frame)
    const dustCount = 300;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
        dustPositions[i * 3] = (Math.random() - 0.5) * 20; // x
        dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
        dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }

    useFrame((state) => {
        // scroll.offset goes from 0 (top) to 1 (bottom)
        const offset = scroll.offset;
        const time = state.clock.getElapsedTime();

        // 1. Smooth Camera breathing
        state.camera.position.x = Math.sin(time * 0.2) * 0.2;
        state.camera.position.y = 4.2 + Math.cos(time * 0.2) * 0.2;
        state.camera.lookAt(isDesktop ? 2 : 0, 0, 0);

        // 2. The Parallax Effect
        // Background moves up slowly
        if (bgRef.current) {
            bgRef.current.position.y = THREE.MathUtils.lerp(-1.5, 3.5, offset);
            if (bgRef.current.material) {
                bgRef.current.material.opacity = THREE.MathUtils.lerp(0.8, 0.2, offset);
                bgRef.current.material.transparent = true;
            }
        }

        // Motor moves up faster (creates depth), shrinks slightly, and fades
        if (motorRef.current) {
            motorRef.current.position.y = THREE.MathUtils.lerp(-0.2, 5.0, offset);
            motorRef.current.position.z = THREE.MathUtils.lerp(3.8, 2.0, offset); // Pushes back
            motorRef.current.scale.setScalar(THREE.MathUtils.lerp(1, 0.8, offset));

            // Fade out the motor as we scroll deep into the site
            const motorFade = Math.max(0, 1 - offset * 2);
            motorRef.current.children.forEach((c) => {
                if ((c as any).material) {
                    (c as any).material.opacity = motorFade;
                    (c as any).material.transparent = true;
                }
            });
        }

        // 3. Gentle Dust Animation
        if (dustRef.current) {
            dustRef.current.rotation.y = time * 0.02;
            dustRef.current.position.y = offset * 2; // Dust rises with scroll
        }
    });

    return (
        <group>
            <PerspectiveCamera makeDefault position={[8, 4.2, 8]} fov={54} />

            <ambientLight intensity={0.8} />
            <pointLight position={[0, 2, 5]} intensity={1.5} color="#4F6DFF" />

            {/* LAYER 1: The Blueprint Background (Deep back) */}
            <group position={[isDesktop ? 2 : 0, -1.5, -4]}>
                <Image
                    ref={bgRef}
                    url="/motor transp.png" // Place your generated image in the public folder
                    transparent
                    scale={[viewport.width * 1.5, viewport.height * 1.5]}
                />
            </group>

            {/* LAYER 2: Ambient Airflow/Dust */}
            <Points ref={dustRef} positions={dustPositions} stride={3}>
                <PointMaterial
                    transparent
                    color="#7FCCFF"
                    size={0.04}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.4}
                />
            </Points>

            {/* LAYER 3: The Motor (Foreground) */}
            {/* Change the X (isDesktop ? 3.5 : 0) to align it perfectly with your text */}
            <group ref={motorRef} position={[isDesktop ? 3.5 : 0, -0.2, 3.8]}>
                <Image
                    url="/motor transp.png"
                    transparent
                    scale={isDesktop ? [6.5, 8.5] : [4.5, 6.0]} // Fixed, stable sizing
                    side={THREE.DoubleSide}
                />
            </group>
        </group>
    );
}
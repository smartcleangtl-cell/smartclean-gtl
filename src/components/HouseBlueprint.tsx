import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Points, PointMaterial, Image } from '@react-three/drei';
import * as THREE from 'three';

// Motor image aspect ratio approx 2.2 : 1
const MOTOR_ASPECT = 2.2;

interface HouseBlueprintProps {
  scrollProgress: React.MutableRefObject<number>;
}

const HouseBlueprint = ({ scrollProgress }: HouseBlueprintProps) => {
  const { viewport } = useThree();
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);
  const pipeGroupRef = useRef<THREE.Group>(null);
  const productRef = useRef<THREE.Group>(null);

  const isDesktop = viewport.width > 8;

  // ---------- House Wireframe ----------
  const houseLines = useMemo(() => {
    const lines: number[][][] = [];
    lines.push([[-3, 0, -3], [3, 0, -3]]);
    lines.push([[3, 0, -3], [3, 0, 3]]);
    lines.push([[3, 0, 3], [-3, 0, 3]]);
    lines.push([[-3, 0, 3], [-3, 0, -3]]);
    lines.push([[-3, 0, -3], [-3, 2.5, -3]]);
    lines.push([[3, 0, -3], [3, 2.5, -3]]);
    lines.push([[3, 0, 3], [3, 2.5, 3]]);
    lines.push([[-3, 0, 3], [-3, 2.5, 3]]);
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
  const particleCount = 1200;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  // ---------- Motor scale & position ----------
  const motorW = isDesktop ? viewport.width * 0.45 : viewport.width * 0.75;
  const motorH = motorW / MOTOR_ASPECT;
  const motorX = isDesktop ? 2.5 : 0;
  const motorY = -0.2;
  const motorZ = -2;

  // ---------- Animation loop ----------
  useFrame((state) => {
    const p = scrollProgress.current;
    const t = state.clock.getElapsedTime();

    // Subtle Camera Parallax
    state.camera.position.lerp(
      new THREE.Vector3(
        5 + Math.sin(t * 0.2) * 0.2,
        3 + Math.cos(t * 0.2) * 0.1 + p * 2.5,
        7 + p * 3
      ),
      0.1
    );
    state.camera.lookAt(0, 0, 0);

    // Motor Idle & Parallax
    if (productRef.current) {
        productRef.current.position.y = motorY + Math.sin(t * 0.5) * 0.05 + p * 0.5;
        productRef.current.rotation.y = Math.sin(t * 0.3) * 0.04;
    }

    // Particles Motion - gentle breeze toward background
    if (pointsRef.current) {
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 2] -= 0.01; // subtle movement inward
        if (pos[i * 3 + 2] < -8) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 2] = 8;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // House & Pipe Opacity - subtle baseline
    if (linesRef.current) {
        linesRef.current.children.forEach((child: any) => {
            if (child.material) child.material.opacity = 0.15 + p * 0.1;
        });
    }
    if (pipeGroupRef.current) {
        pipeGroupRef.current.children.forEach((child: any) => {
            if (child.material) child.material.opacity = 0.1 + p * 0.05;
        });
    }
  });

  return (
    <group>
      <PerspectiveCamera makeDefault position={[5, 3, 7]} fov={50} />
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#4F6DFF" />

      {/* Motor Unit */}
      <group ref={productRef} position={[motorX, motorY, motorZ]}>
        <Image
          url="/motor transp.png"
          transparent
          scale={[motorW, motorH]}
          side={THREE.DoubleSide}
          opacity={0.8}
        />
      </group>

      {/* House Wireframe */}
      <group ref={linesRef}>
        {houseLines.map((line, i: number) => (
          <line key={`house-${i}`}>
            <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints(line.map((p) => new THREE.Vector3(p[0], p[1], p[2])))} />
            <lineBasicMaterial attach="material" color="#4F6DFF" transparent opacity={0.15} />
          </line>
        ))}
      </group>

      {/* Pipe Network */}
      <group ref={pipeGroupRef}>
        {pipes.map((pipe, i: number) => (
          <line key={`pipe-${i}`}>
            <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints([new THREE.Vector3(...pipe.start), new THREE.Vector3(...pipe.end)])} />
            <lineBasicMaterial attach="material" color="#4F6DFF" transparent opacity={0.1} />
          </line>
        ))}
      </group>

      {/* Suction Particles */}
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#7BA8FF"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

export default HouseBlueprint;
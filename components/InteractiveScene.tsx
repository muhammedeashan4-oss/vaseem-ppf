
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function OrbitalObject() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame(({ pointer }, delta) => {
    if (!group.current || !core.current) return;

    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      pointer.y * 0.3,
      3,
      delta
    );

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      pointer.x * 0.45,
      3,
      delta
    );

    core.current.rotation.y += delta * 0.18;
    core.current.rotation.x += delta * 0.1;
  });

  return (
    <group ref={group}>
      <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.25}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.05, 3]} />
          <meshPhysicalMaterial
            color="#a9bac9"
            metalness={0.92}
            roughness={0.19}
            clearcoat={1}
            clearcoatRoughness={0.12}
          />
        </mesh>
      </Float>

      <mesh rotation={[0.8, 0.2, -0.4]}>
        <torusGeometry args={[1.48, 0.012, 12, 180]} />
        <meshStandardMaterial
          color="#8ca9c4"
          metalness={0.9}
          roughness={0.28}
        />
      </mesh>

      <mesh rotation={[1.1, -0.65, 0.5]}>
        <torusGeometry args={[1.7, 0.006, 8, 180]} />
        <meshStandardMaterial
          color="#e0e6ed"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[1.5, 0.75, 0.1]} scale={0.045}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshBasicMaterial color="#dcecff" />
      </mesh>
    </group>
  );
}

export default function InteractiveScene() {
  return (
    <div className="interactive-scene" aria-label="Interactive 3D artwork">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={3} />
        <pointLight position={[-3, -2, 2]} color="#477ba8" intensity={18} />
        <pointLight position={[2, 1, -3]} color="#d7e8ff" intensity={12} />
        <OrbitalObject />
      </Canvas>
    </div>
  );
}

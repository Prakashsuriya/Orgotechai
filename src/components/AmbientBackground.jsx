import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function Particles() {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

const AmbientBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <color attach="background" args={['#040814']} />
      <Particles />
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default AmbientBackground;

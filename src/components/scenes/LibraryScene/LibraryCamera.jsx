import React from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function LibraryCamera() {
  const ref = useRef();
  const { camera } = useThree();

  // simple idle parallax for a gentle scene motion
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    camera.position.x = Math.sin(t / 8) * 0.3;
    camera.position.y = 2.6 + Math.sin(t / 6) * 0.08;
    camera.lookAt(0, 0, 0);
  });

  return <group ref={ref} />;
}

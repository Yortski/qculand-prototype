import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export default function DormStudent({ action = 'typing' }) {
  const group = useRef();
  const { scene, animations } = useGLTF('./models/qcu_student_1.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;

    Object.values(actions).forEach((a) => a.stop());

    const animMap = {
      typing: 'typing',
      success: 'success',
      fail: 'fail',
    };

    const selected = animMap[action] || animMap.typing;
    const currentAction = actions[selected];

    if (currentAction) {
      currentAction.reset().fadeIn(0.2).play();
    }

    return () => {
      if (currentAction) currentAction.fadeOut(0.2);
    };
  }, [action, actions]);

  return (
    <group ref={group} position={[0, -0.5, 0.65]} rotation={[0, 0, 0]} scale={0.025}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('./models/qcu_student_1.glb');

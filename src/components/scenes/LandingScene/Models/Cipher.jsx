import React, { useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Cipher(props) {
  const { scene, animations } = useGLTF('./models/qcu_cipher.glb');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions['Idle']) {
      actions['Idle'].play(); 
    }
  }, [actions]);

  return <primitive object={scene} {...props} />;
}

import React from 'react';
import { useGLTF } from '@react-three/drei';
import Cipher from '../LandingScene/Models/Cipher';

function ClickableCipher({ onClick, ...props }) {
  // wrap the primitive in a group so we can accept pointer events
  return (
    <group
      {...props}
      onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = 'pointer'; }}
      onPointerOut={(e) => { e.stopPropagation(); document.body.style.cursor = 'default'; }}
      onClick={(e) => { e.stopPropagation(); onClick?.(); }}
    >
      <Cipher />
    </group>
  );
}

export default function LibraryModels({ onCipherClick }) {
  // Use the university map as the library background. Adjust scale/position as needed.
  const map = useGLTF('./models/university_map.glb');

  return (
    <>
      <primitive object={map.scene} scale={0.9} position={[0, -0.02, 0]} />

      {/* Place Cipher in the library area — tweak position to fit your map */}
      <ClickableCipher
        scale={0.12}
        position={[0.8, 0, -1.6]}
        rotation={[0, Math.PI * 0.2, 0.05]}
        onClick={onCipherClick}
      />
    </>
  );
}

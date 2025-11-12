import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LibraryCamera from './LibraryCamera';
import LibraryModels from './LibraryModels';
import LibraryUI from './LibraryUI';

export default function LibraryScene() {
  const [cipherOpen, setCipherOpen] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  const handleCipherClick = () => {
    setCipherOpen(true);
  };

  const handleClose = (result) => {
    setCipherOpen(false);
    if (result) setQuizResult(result);
  };

  return (
    <div className="w-full h-full fixed top-0 left-0">
      <Canvas shadows camera={{ position: [0, 3, 8], fov: 55 }}>
        <color attach="background" args={["#cfe7ff"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

        <LibraryCamera />

        <LibraryModels onCipherClick={handleCipherClick} />

        <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
      </Canvas>

      <LibraryUI visible={cipherOpen} onClose={handleClose} />

      {/* Optionally show quiz result */}
      {quizResult && (
        <div className="absolute bottom-6 right-6 bg-white/90 p-3 rounded shadow">
          <div className="text-sm">Last quiz score: {quizResult.score}/{quizResult.total}</div>
        </div>
      )}
    </div>
  );
}

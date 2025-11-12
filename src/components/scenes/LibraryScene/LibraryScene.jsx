import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Shelf({ x, y }) {
  return (
    <group position={[x, y, 0]}> 
      <mesh position={[0, 0.4, 0]}> 
        <boxGeometry args={[0.2, 0.8, 4.6]} />
        <meshStandardMaterial color="#6b4a2a" />
      </mesh>
    </group>
  );
}

function BooksRow({ x, y, count = 10 }) {
  const colors = ['#c94b4b','#4b8bc9','#4bc98b','#c98b4b','#8b4bc9','#c94bb0'];
  return (
    <group position={[x,y, -1.8]}>
      {Array.from({length: count}).map((_, i) => (
        <mesh key={i} position={[ -1.8 + i * 0.36, 0, 0 ]}>
          <boxGeometry args={[0.14, 0.4, 0.25]} />
          <meshStandardMaterial color={colors[i % colors.length]} />
        </mesh>
      ))}
    </group>
  );
}

export default function LibraryScene({ onExit }) {
  return (
    <div className="w-full h-full fixed top-0 left-0">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 55 }}>
        <color attach="background" args={["#dbeeff"]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={0.8} />

        {/* Floor */}
        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[6,6]} />
          <meshStandardMaterial color="#efe6d6" />
        </mesh>

        {/* Walls */}
        <mesh position={[0,1.5,-3]}> 
          <boxGeometry args={[6,3,0.1]} />
          <meshStandardMaterial color="#f3f6fb" />
        </mesh>
        <mesh position={[0,1.5,3]}> 
          <boxGeometry args={[6,3,0.1]} />
          <meshStandardMaterial color="#f3f6fb" />
        </mesh>
        <mesh position={[-3,1.5,0]}> 
          <boxGeometry args={[0.1,3,6]} />
          <meshStandardMaterial color="#f3f6fb" />
        </mesh>
        <mesh position={[3,1.5,0]}> 
          <boxGeometry args={[0.1,3,6]} />
          <meshStandardMaterial color="#f3f6fb" />
        </mesh>

        {/* Left shelves */}
        <Shelf x={-2.6} y={0.6} />
        <BooksRow x={-2.6} y={0.25} count={18} />

        {/* Right shelves */}
        <Shelf x={2.6} y={0.6} />
        <BooksRow x={2.6} y={0.25} count={18} />

        {/* Center table */}
        <mesh position={[0,0.35,0]}> 
          <boxGeometry args={[2.2,0.1,1]} />
          <meshStandardMaterial color="#d9c8b3" />
        </mesh>

        <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
      </Canvas>

      {/* Simple overlay back button */}
      <div className="absolute top-6 left-6 z-50">
        <button onClick={() => onExit?.()} className="px-4 py-2 bg-white rounded shadow">Back</button>
      </div>
    </div>
  );
}

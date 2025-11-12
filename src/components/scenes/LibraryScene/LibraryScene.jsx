import React, { Suspense, lazy, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import LoadingFallback from '../../LoadingFallback';
import ErrorBoundary from '../../ErrorBoundary';
import LibraryPlayer from './LibraryPlayer';
import LibraryPlayerUI from './LibraryPlayerUI';

const LibraryEnvironment = lazy(() => import('./LibraryEnvironment'));
import CipherModel from '../LandingScene/Models/Cipher';
import LibraryUI from './LibraryUI';

export default function LibraryScene({ onExit }) {
	const [showScenarios, setShowScenarios] = useState(false);
	const [showCipherName, setShowCipherName] = useState(false);
	
	const handleCipherClick = useCallback(() => {
		setShowScenarios(true);
	}, []);

	const handleScenarioComplete = useCallback(() => {
		// Handle scenario completion
	}, []);

	const handleFeedback = useCallback((feedback) => {
		// Handle feedback display
	}, []);

	const handleExitLibrary = useCallback(() => {
		setShowScenarios(false);
		if (onExit) onExit();
	}, [onExit]);
	
	return (
		<div className="w-full h-full fixed top-0 left-0">
			<ErrorBoundary>
				<Canvas shadows camera={{ position: [0, 2, 4], fov: 60 }}>
					<color attach="background" args={["#1a1a2e"]} />
					<ambientLight intensity={0.8} />
					<directionalLight position={[5, 10, 5]} intensity={0.6} castShadow />
					<pointLight position={[0, 2, -1.6]} intensity={1.2} color="#ff6b6b" distance={5} />

					<Suspense fallback={<LoadingFallback />}>
						<LibraryEnvironment />
						
						{/* Cipher behind the table */}
						<group 
							position={[0, 0, -5]} 
							rotation={[0, 0, 0]}
							onPointerOver={(e) => { 
								e.stopPropagation(); 
								document.body.style.cursor = 'pointer';
								setShowCipherName(true);
							}}
							onPointerOut={(e) => { 
								e.stopPropagation(); 
								document.body.style.cursor = 'default';
								setShowCipherName(false);
							}}
							onClick={(e) => { e.stopPropagation(); handleCipherClick(); }}
						>
							<CipherModel scale={0.7} />
						</group>
						
						{/* Player with movement */}
						<LibraryPlayer />
					</Suspense>
				</Canvas>
			</ErrorBoundary>

			{/* Cipher name hover indicator */}
			{showCipherName && !showScenarios && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-40">
					<div className="bg-red-900/90 text-red-100 px-6 py-3 rounded-lg shadow-2xl border-2 border-red-700 backdrop-blur-sm">
						<div className="text-2xl font-bold text-center mb-1">🕵️ CIPHER</div>
						<div className="text-xs text-red-300 text-center">Click to interact</div>
					</div>
				</div>
			)}

			{/* Player movement controls UI */}
			{!showScenarios && <LibraryPlayerUI />}
			
			{/* Scenario UI */}
			{showScenarios && (
				<LibraryUI 
					onScenarioComplete={handleScenarioComplete}
					onFeedback={handleFeedback}
					onExitLibrary={handleExitLibrary}
				/>
			)}

			{/* Back button */}
			{!showScenarios && (
				<div className="absolute top-6 left-6 z-50">
					<button 
						onClick={() => onExit?.()} 
						className="px-4 py-2 bg-white/90 rounded shadow hover:bg-white transition-colors"
					>
						← Back
					</button>
				</div>
			)}
		</div>
	);
}

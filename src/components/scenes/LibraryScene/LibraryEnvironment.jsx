import React from 'react';

export default function LibraryEnvironment() {
	return (
		<group>
			{/* Floor - darker, ominous library floor */}
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
				<planeGeometry args={[5, 5]} />
				<meshStandardMaterial color="#3a3a3a" />
			</mesh>

			{/* Walls - dark, corrupted library walls */}
			{/* Back wall */}
			<mesh position={[0, 1.25, -2.5]}>
				<boxGeometry args={[5, 2.5, 0.08]} />
				<meshStandardMaterial color="#2a2a3e" transparent opacity={0.95} />
			</mesh>
			{/* Left wall */}
			<mesh position={[-2.5, 1.25, 0]}>
				<boxGeometry args={[0.08, 2.5, 5]} />
				<meshStandardMaterial color="#2a2a3e" transparent opacity={0.95} />
			</mesh>
			{/* Right wall */}
			<mesh position={[2.5, 1.25, 0]}>
				<boxGeometry args={[0.08, 2.5, 5]} />
				<meshStandardMaterial color="#2a2a3e" transparent opacity={0.95} />
			</mesh>

			{/* Bookshelves along back corners - darker, more ominous */}
			{/* Left back shelf */}
			<group position={[-1.8, 0, -1.5]}>
				<mesh position={[0, 0.8, 0]} castShadow>
					<boxGeometry args={[0.4, 1.6, 1.5]} />
					<meshStandardMaterial color="#3a2a1a" />
				</mesh>
				{/* Books on left shelf - darker colors */}
				{Array.from({ length: 8 }).map((_, i) => (
					<mesh key={`left-${i}`} position={[0.15, 0.4 + (i % 4) * 0.35, -0.6 + i * 0.18]} castShadow>
						<boxGeometry args={[0.12, 0.28, 0.12]} />
						<meshStandardMaterial color={['#6a1e1e', '#2a2a4e', '#1e4b3f', '#4e3a1e'][i % 4]} />
					</mesh>
				))}
			</group>

			{/* Right back shelf */}
			<group position={[1.8, 0, -1.5]}>
				<mesh position={[0, 0.8, 0]} castShadow>
					<boxGeometry args={[0.4, 1.6, 1.5]} />
					<meshStandardMaterial color="#3a2a1a" />
				</mesh>
				{/* Books on right shelf - darker colors */}
				{Array.from({ length: 8 }).map((_, i) => (
					<mesh key={`right-${i}`} position={[-0.15, 0.4 + (i % 4) * 0.35, -0.6 + i * 0.18]} castShadow>
						<boxGeometry args={[0.12, 0.28, 0.12]} />
						<meshStandardMaterial color={['#6a1e1e', '#2a2a4e', '#1e4b3f', '#4e3a1e'][i % 4]} />
					</mesh>
				))}
			</group>

			{/* Table in front of Cipher - darker, corrupted */}
			<group position={[0, 0, -1.0]}>
				{/* Table top */}
				<mesh position={[0, 0.4, 0]} castShadow receiveShadow>
					<boxGeometry args={[1.2, 0.06, 0.6]} />
					<meshStandardMaterial color="#5d3827" />
				</mesh>
				{/* Table legs */}
				<mesh position={[-0.5, 0.2, -0.25]} castShadow>
					<boxGeometry args={[0.06, 0.4, 0.06]} />
					<meshStandardMaterial color="#4a2a1d" />
				</mesh>
				<mesh position={[0.5, 0.2, -0.25]} castShadow>
					<boxGeometry args={[0.06, 0.4, 0.06]} />
					<meshStandardMaterial color="#4a2a1d" />
				</mesh>
				<mesh position={[-0.5, 0.2, 0.25]} castShadow>
					<boxGeometry args={[0.06, 0.4, 0.06]} />
					<meshStandardMaterial color="#4a2a1d" />
				</mesh>
				<mesh position={[0.5, 0.2, 0.25]} castShadow>
					<boxGeometry args={[0.06, 0.4, 0.06]} />
					<meshStandardMaterial color="#4a2a1d" />
				</mesh>
			</group>
		</group>
	);
}

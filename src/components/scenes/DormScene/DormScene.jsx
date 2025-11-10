import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DormEnvironment from './DormEnvironment';
import DormStudent from './DormStudent';
import DormCamera from './DormCamera';
import DormUI from './DormUI';
import { useState } from 'react';

export default function DormScene() {
  const [stage, setStage] = useState(0);
  const [studentAction, setStudentAction] = useState('typing');
  const handleScenarioComplete = () => setStage(stage + 1);

  const handleFeedback = (feedback) => {
    if (feedback.toLowerCase().includes('good') || feedback.toLowerCase().includes('excellent') || feedback.toLowerCase().includes('smart') || feedback.toLowerCase().includes('great')) {
      setStudentAction('success');
    } else {
      setStudentAction('fail');
    }
    setTimeout(() => setStudentAction('typing'), 2000);
  };

  return (
    <div className="w-full h-full fixed top-0 left-0">
      <Canvas shadows camera={{ position: [0, 1.35, 1.95], fov: 55 }}>
        <color attach="background" args={["#bcd5ff"]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <DormEnvironment />
        <DormStudent action={studentAction} />
        <DormCamera stage={stage} />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>

      <DormUI onScenarioComplete={handleScenarioComplete} onFeedback={handleFeedback} />
    </div>
  );
}

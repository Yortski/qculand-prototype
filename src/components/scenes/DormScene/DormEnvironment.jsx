import { useGLTF } from '@react-three/drei';

export default function DormEnvironment() {
  const dorm = useGLTF('./models/qcu_dorm.glb');
  return <primitive object={dorm.scene} scale={1} position={[0, 0, 0]} />;
}

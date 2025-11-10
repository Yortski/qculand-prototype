import React from 'react';
import LandingScene from './components/scenes/LandingScene/LandingScene';
import DormScene from './components/scenes/DormScene/DormScene';
import SceneManager from './components/scenes/SceneManager';
import './styles/index.css';

export default function App() {
  return (
    <div className="w-full h-screen relative bg-black">
        {/* <LandingScene /> */}
        {/* <DormScene/> */}
        <SceneManager/>
    </div>
  );
}

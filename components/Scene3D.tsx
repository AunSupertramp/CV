"use client";

import { Canvas } from '@react-three/fiber'
import { Airplane3D } from './Airplane3D'
import { Environment, Lightformer } from '@react-three/drei'

export default function Scene3D() {
  return (
    <div style={{ height: '200px', width: '50%', margin: 'auto' }}>
      <Canvas>
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.3} />
        
        {/* Directional light to create shadows */}
        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
        
        {/* Spot light for focused illumination */}
        <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={0.5} castShadow />
        
        {/* Environment for realistic reflections */}
        <Environment preset="city">
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
        </Environment>
        
        <Airplane3D />
      </Canvas>
    </div>
  )
}
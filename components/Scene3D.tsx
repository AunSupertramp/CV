"use client";

import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'

const Airplane3D = dynamic(() => import('./Airplane3D'), {
  ssr: false,
});

export default function Scene3D() {
  return (
    <div style={{ height: '200px', width: '50%', margin: 'auto' }}>
      <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
        <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={0.5} castShadow />
        <Environment preset="city">
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
        </Environment>
        <Airplane3D />
      </Canvas>
    </div>
  )
}
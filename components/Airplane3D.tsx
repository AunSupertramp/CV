"use client";

import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, CameraControls } from '@react-three/drei';
import * as THREE from 'three';

export default function Airplane3D(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<CameraControls>(null);
  const { scene, nodes, materials } = useGLTF('/airplane.glb') as any;
  const { camera } = useThree<{ camera: THREE.PerspectiveCamera }>();

  useEffect(() => {
    if (scene && controlsRef.current) {
      console.log('GLB structure:', { scene, nodes, materials });
      
      // Fit camera to object
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / Math.tan(fov/2))/2; 
      
      // Set isometric camera position
      const isometricAngle = Math.PI / 4; // 45 degrees
      const cameraX = cameraZ * Math.cos(isometricAngle);
      const cameraY = cameraZ * Math.sin(isometricAngle);

      // Set camera position and target
      camera.position.set(cameraX, cameraY, cameraZ);
      camera.lookAt(center);
      camera.updateProjectionMatrix();

      // Fit controls
      controlsRef.current.setLookAt(
        cameraX, cameraY, cameraZ,
        center.x, center.y, center.z,
        true
      );
    }
  }, [scene, nodes, materials, camera]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  if (!scene) {
    return <mesh><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="red" /></mesh>;
  }

  return (
    <>
      <CameraControls ref={controlsRef} />
      <group ref={groupRef} {...props}>
        <primitive 
          object={scene} 
          scale={[0.01, 0.01, 0.01]} 
          position={[0, 0, 0]} 
          castShadow 
          receiveShadow 
        />
      </group>
    </>
  );
}

useGLTF.preload('/airplane.glb');
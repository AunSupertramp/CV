"use client";

import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, CameraControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export default function Airplane3D(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<CameraControls>(null);
  const { scene, nodes, materials } = useGLTF('/airplane.glb') as any;
  const { camera, set } = useThree();

  useEffect(() => {
    if (scene && controlsRef.current) {
      console.log('GLB structure:', { scene, nodes, materials });
      
      // Fit camera to object
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      
      // Set isometric camera position
      const aspect = 1; // Assuming a square viewport, adjust if needed
      const distance = maxDim * 2; // Adjust this multiplier as needed for zoom level
      const isometricAngle = Math.PI / 4; // 45 degrees

      const cameraX = distance * Math.cos(isometricAngle);
      const cameraY = distance * Math.sin(isometricAngle);
      const cameraZ = distance;

      // Set camera position and target
      camera.position.set(cameraX, cameraY, cameraZ);
      camera.lookAt(center);
      
      if (camera instanceof THREE.PerspectiveCamera) {
        camera.updateProjectionMatrix();
      }

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
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    );
  }

  return (
    <>
      <PerspectiveCamera makeDefault />
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
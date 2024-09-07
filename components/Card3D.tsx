"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Card3DProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Card3D: React.FC<Card3DProps> = ({ title, icon, children }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className="mb-8 transition-all duration-300 transform-gpu"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          boxShadow: `${-rotation.y}px ${rotation.x}px 20px rgba(0,0,0,0.2)`,
        }}
      >
        <CardHeader>
          <CardTitle className="flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default Card3D;
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface CustomCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, icon, children }) => {
  return (
    <div className="mb-4 group">
      <div className="relative p-0.5 overflow-hidden rounded-xl transition-all duration-300 group-hover:shadow-lg">
        <div className="absolute inset-0 bg-rainbow opacity-0 group-hover:opacity-100 group-hover:animate-rainbow-move"></div>
        <Card className="relative bg-white dark:bg-gray-800 border-transparent rounded-xl overflow-hidden">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center text-lg">
              {icon && <span className="mr-2">{icon}</span>}
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">{children}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomCard;
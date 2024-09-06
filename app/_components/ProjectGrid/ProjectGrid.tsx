"use client";
import React from "react";
import Image from "next/image";

interface ProjectItem {
  text: string;
  imageUrl: string;
  link: string;
}

interface ProjectGridProps {
  content: ProjectItem[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ content }) => {
  return (
    <div className="mt-24 pb-24 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {content.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-64 ">
              <Image
                src={item.imageUrl}
                alt={item.text}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="text-center p-4 sm:p-6 md:p-8 text-lg sm:text-xl md:text-2xl font-semibold">
              {item.text}
            </h1>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;

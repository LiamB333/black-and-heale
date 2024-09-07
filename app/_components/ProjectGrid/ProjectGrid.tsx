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
    <div className="mt-24 pb-24 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {content.map((item, index) => (
          <div
            key={index}
            className="group block shadow-md overflow-hidden relative"
          >
            {/* Image */}
            <div className="relative w-full h-96">
              <Image
                src={item.imageUrl}
                alt={item.text}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Hidden content (title and button) */}
            <div className="absolute bottom-0 left-0 w-full bg-white transition-all duration-300 ease-in-out h-20 group-hover:h-32 p-5 flex flex-col items-center">
              {/* Centered content */}
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                  {item.text}
                </h1>

                {/* Button */}
                <button className="border border-solid border-black text-black py-2 px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:text-[#9CAE47] hover:border-[#9CAE47]">
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;

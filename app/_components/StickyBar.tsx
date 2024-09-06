"use client";
import React, { useState, useEffect } from "react";
import ProjectGrid from "./ProjectGrid/ProjectGrid";

interface StickyBarProps {
  sections: { id: string; label: string }[];
}

interface ProjectItem {
  text: string;
  imageUrl: string;
  link: string;
}

const StickyBar: React.FC<StickyBarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("all");
  const [displayContent, setDisplayContent] = useState<ProjectItem[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for mobile dropdown

  useEffect(() => {
    const contentMap: { [key: string]: ProjectItem[] } = {
      all: [
        {
          text: "Glenmore Retreat",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/all-item1",
        },
        {
          text: "Lochwood Estate",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/all-item2",
        },
        {
          text: "Brackenridge Lodge",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/all-item3",
        },
      ],
      commercial: [
        {
          text: "Carronview Manor",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/commercial1",
        },
        {
          text: "Silverbrook Cabin",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/commercial2",
        },
        {
          text: "Oakwood Chalet",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/commercial2",
        },
      ],
      residential: [
        {
          text: "Cairnhill Retreat",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/cairnhill-retreat",
        },
        {
          text: "Cragview Cottage",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/residential2",
        },
        {
          text: "Birchwood Lodge",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/residential3",
        },
        {
          text: "Glenburn Hall",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/residential4",
        },
        {
          text: "Glenfinnan Lodge",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/residential5",
        },
      ],
      new: [
        {
          text: "Inverloch Cabin",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/newbuild1",
        },
        {
          text: "Lochside House",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/newbuild2",
        },
        {
          text: "Ashwood Villa",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/newbuild2",
        },
      ],
      roofing: [
        {
          text: "Foxhill Bungalow",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/roofing1",
        },
        {
          text: "Hilltop Grange",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/roofing2",
        },
        {
          text: "Oakwood Chalet",
          imageUrl: "/projects/projects-hero.jpg",
          link: "/roofing3",
        },
      ],
    };

    setDisplayContent(contentMap[activeSection] || []);
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="sticky top-0 z-30 bg-white py-6 md:hidden">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full text-md font-semibold bg-gray-100 py-2 px-4 text-left"
          >
            {sections.find((section) => section.id === activeSection)?.label ||
              "Select Section"}{" "}
            <span className="float-right">
              {dropdownOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </span>
          </button>

          {dropdownOpen && (
            <div className=" bg-white shadow-md">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`block px-4 py-3 text-md cursor-pointer hover:bg-gray-100 ${
                    activeSection === section.id ? "font-bold" : ""
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sticky Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-300 py-2 hidden md:block">
        <div className="container mx-auto w-full">
          <div className="flex justify-center text-center space-x-4 sm:space-x-6 md:space-x-10 w-full px-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className="relative px-4 py-2 whitespace-nowrap cursor-pointer text-md font-semibold"
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-[#9CAE47]" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Project Grid Content */}
      <ProjectGrid content={displayContent} />
    </>
  );
};

export default StickyBar;

"use client";
import React, { useEffect, useRef, useState } from "react";

interface SectionNavBarProps {
  sections: { id: string; label: string }[];
}

const SectionNavBar: React.FC<SectionNavBarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const navRef = useRef<HTMLDivElement>(null);
  const headerHeight = 80;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + headerHeight;
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={navRef}
      className="sticky top-0 z-30 bg-white border-b border-gray-300 py-2 transition-all duration-300"
    >
      <div className="container mx-auto flex justify-center text-center space-x-10">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault(); 
              scrollToSection(section.id);
            }}
            className="relative px-4 py-2 cursor-pointer text-md font-semibold"
          >
            {section.label}
            {activeSection === section.id && (
              <span className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-[#9CAE47]" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SectionNavBar;

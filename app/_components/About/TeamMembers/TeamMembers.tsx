"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface TeamMembersProps {
  imageSrc: string;
  fullName: string;
  title: string;
  yearInIndustry: string;
  yearInBH: string;
  role: string;
}

const TeamMembers: React.FC<TeamMembersProps> = ({
  imageSrc,
  fullName,
  title,
  yearInIndustry,
  yearInBH,
  role,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Effect to handle scroll prevention
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="group relative block shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-96">
        <Image
          src={imageSrc}
          alt={fullName}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full bg-white transition-all duration-300 ease-in-out h-20 group-hover:h-32 p-5 flex flex-col items-center">
        <h3 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4 transition-transform duration-300 group-hover:-translate-y-1">
          {fullName}
        </h3>
        <button
          className="border border-solid hover:text-[#9CAE47] hover:border-[#9CAE47] border-black text-black py-2 px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          onClick={openModal}
        >
          View Profile
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="relative bg-white p-8 max-w-2xl w-full h-auto">
            {/* Close button outside of the modal content */}
            <button
              className="absolute -top-5 -right-5 bg-[#9CAE47] text-white rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closeModal}
            >
              <span className="text-3xl pb-1 leading-none">&times;</span>
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-semibold text-left mb-2 border-b border-gray-300 pb-12">
              {fullName}
            </h2>
            <div className="space-y-4">
              {[
                { label: "Job Title", value: title },
                { label: "Years in Industry", value: yearInIndustry },
                { label: "Years at B&H", value: yearInBH },
                { label: "Main Roles", value: role },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start py-2 ${
                    index < 3 ? "border-b border-gray-300" : ""
                  }`}
                >
                  <p className="text-md text-gray-500 font-medium text-left w-1/4">
                    {item.label}
                  </p>
                  <p className="text-lg text-black pl-20 text-left w-3/4">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-300 mt-4 pb-12"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembers;

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
    <div className="relative flex flex-col items-center text-center bg-white p-0 w-full md:w-1/3 lg:w-1/4 mx-4 my-8 shadow-lg overflow-hidden">
      {/* Image section */}
      <div className="relative w-full h-64">
        <Image
          src={imageSrc}
          alt={fullName}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
      {/* Content section */}
      <div className="relative z-20 p-6 ">
        <h3 className="text-2xl font-semibold mb-3">{fullName}</h3>
        <p className="text-lg text-gray-600">{title}</p>
      </div>
      {/* Button section */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10">
        <button
          className="px-4 py-2 bg-[#9CAE47] text-white rounded-full"
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

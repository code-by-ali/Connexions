import React from "react";
import CommonImage from "../common/CommonImage";
import ABMHelpGrid from "@/public/assets/abm-help-grid-icon.svg";

const ABMHelp = () => {
  const items = [
    {
      title: "Setup & Enrolment",
      description:
        "Complete ABM setup, configuration, and initial device enrolment with our certified experts.",
    },
    {
      title: "Device Provisioning",
      description:
        "End-to-end device provisioning services, from procurement to employee handoff.",
    },
    {
      title: "IT Staff Training",
      description:
        "Comprehensive training programs to empower your IT team with ABM expertise.",
    },
    {
      title: "Ongoing Support",
      description:
        "24/7 technical support and ongoing optimization for your ABM environment.",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 flex flex-col items-center gap-8">
      {/* Title */}
      <div className="text-center max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          How Connexions Helps with ABM
        </h2>
        <p className="text-[#4B5563] mt-2 text-sm sm:text-base md:text-lg">
          Expert guidance and support for your Apple Business implementation
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-4 px-4"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-300">
              <div className="w-10 h-10 bg-[#1D1D1F] rounded-full flex items-center justify-center">
                <CommonImage
                  className="w-6 h-6 rounded-full text-white"
                  src={ABMHelpGrid.src || ABMHelpGrid}
                  alt="ABM-Help-Grid"
                />
              </div>
            </div>
            <p className="font-bold text-base sm:text-lg md:text-xl text-primary">
              {item.title}
            </p>
            <p className="text-sm font-normal sm:text-base md:text-lg text-[#4B5563]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ABMHelp;

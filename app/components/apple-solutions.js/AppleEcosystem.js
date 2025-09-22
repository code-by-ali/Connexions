import React from "react";
import { Apple, ChevronRight } from "lucide-react";
import CommonImage from "../common/CommonImage";
import AppleEcosystemIcon from "@/public/assets/apple-ecosystem-top-icon.svg";
import GridIcon1 from "@/public/assets/apple-ecosystem-icon-1.svg";
import GridIcon2 from "@/public/assets/apple-ecosystem-icon-2.svg";
import GridIcon3 from "@/public/assets/apple-ecosystem-icon-3.svg";
import GridIcon4 from "@/public/assets/apple-ecosystem-icon-4.svg";

const AppleEcosystem = () => {
  const ecosystemCards = [
    {
      title: "Deploy in minutes",
      icon: GridIcon1,
      descriptionPrimary: "Complete enterprise deployment. ",
      descriptionSecondary:
        "Solution with custom configurations and dedicated support for large organizations.",
      // Replace with your actual image imports
      imageItems: [
        "placeholder-deploy-1.png", // Replace with actual image
        "placeholder-deploy-2.png", // Replace with actual image
        "placeholder-deploy-3.png", // Replace with actual image
      ],
    },
    {
      title: "Apple Business Manager",
      icon: GridIcon2,
      descriptionPrimary: "Streamlined device procurement, ",
      descriptionSecondary:
        "app distribution, and user management through Apple's centralized platform.",
      imageItems: [
        "placeholder-business-1.png", // Replace with actual image
        "placeholder-business-2.png", // Replace with actual image
      ],
    },
    {
      title: "Applications",
      icon: GridIcon3,

      descriptionPrimary: "Productivity-focused solutions",
      descriptionSecondary:
        "That integrate seamlessly with your  existing workflow and business applicants",
      imageItems: [
        "placeholder-app-1.png", // Replace with actual image
        "placeholder-app-2.png", // Replace with actual image
        "placeholder-app-3.png", // Replace with actual image
        "placeholder-app-4.png", // Replace with actual image
      ],
    },
    {
      title: "Apple Professional Network",
      icon: GridIcon4,

      descriptionPrimary:
        "Access certified Apple experts for specialized consulting, ",
      descriptionSecondary: "implementation, and ongoing support services.",
      imageItems: [
        "placeholder-network-1.png", // Replace with actual image
        "placeholder-network-2.png", // Replace with actual image
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#0F0F0F] rounded-full flex items-center justify-center">
              <CommonImage
                src={AppleEcosystemIcon.src || AppleEcosystemIcon}
                alt={"apple-ecosystem-icon"}
                height={16}
                width={16}
              />
            </div>
            <span className="ml-3 text-base font-medium text-[#0F0F0F">
              Meet Apple
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-4">
            Our Apple Ecosystem.
          </h2>
          <p className="text-lg text-[#535862]">
            Our trusted Apple solutions make your businesses.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ecosystemCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              {/* Card Header */}
              <div className="mb-8">
                <div className="flex items-center mb-4 gap-2 text-[#A6CE39]">
                  <CommonImage
                    height={24}
                    width={24}
                    src={card.icon.src || card.icon}
                  />
                  <h3 className="text-base md:text-lg font-medium">
                    {card.title}
                  </h3>
                  <ChevronRight size={24} />
                </div>
                <p className="leading-relaxed text-lg md:text-xl xl:text-2xl">
                  <span className="text-[#1D1D1F]">
                    {card.descriptionPrimary}
                  </span>
                  <span className="text-[#535862]">
                    {card.descriptionSecondary}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppleEcosystem;

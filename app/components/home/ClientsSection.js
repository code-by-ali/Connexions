import React from "react";
import {
  Users,
  Star,
  Globe,
  Zap,
  Target,
  Sun,
  Compass,
  Box,
  Plus,
  Layers,
  Circle,
  Diamond,
  Lightbulb,
  Hexagon,
  Triangle,
} from "lucide-react";
import CommonImage from "../common/CommonImage";
import ClientsTitleIcon from "@/public/assets/faq-icon.svg";

import ClientIcon1 from "@/public/assets/home-clients-section-icon-1.svg";
import ClientIcon2 from "@/public/assets/home-clients-section-icon-2.svg";
import ClientIcon3 from "@/public/assets/home-clients-section-icon-3.svg";
import ClientIcon4 from "@/public/assets/home-clients-section-icon-4.svg";

import ClientIcon5 from "@/public/assets/home-clients-section-icon-5.svg";
import ClientIcon6 from "@/public/assets/home-clients-section-icon-6.svg";
import ClientIcon7 from "@/public/assets/home-clients-section-icon-7.svg";
import ClientIcon8 from "@/public/assets/home-clients-section-icon-8.svg";

import ClientIcon9 from "@/public/assets/home-clients-section-icon-9.svg";
import ClientIcon10 from "@/public/assets/home-clients-section-icon-10.svg";
import ClientIcon11 from "@/public/assets/home-clients-section-icon-11.svg";
import ClientIcon12 from "@/public/assets/home-clients-section-icon-12.svg";

import ClientIcon13 from "@/public/assets/home-clients-section-icon-13.svg";
import ClientIcon14 from "@/public/assets/home-clients-section-icon-14.svg";
import ClientIcon15 from "@/public/assets/home-clients-section-icon-15.svg";
import ClientIcon16 from "@/public/assets/home-clients-section-icon-16.svg";

const ClientsSection = () => {
  const clientIcons = [
    // Row 1
    [
      ClientIcon1,
      ClientIcon2,
      ClientIcon3,
      ClientIcon4,
      ClientIcon5,
      ClientIcon6,
      ClientIcon7,
      ClientIcon8,
    ],
    // Row 2
    [
      ClientIcon9,
      ClientIcon10,
      ClientIcon11,
      ClientIcon12,
      ClientIcon13,
      ClientIcon14,
      ClientIcon15,
      ClientIcon16,
    ],
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#0F0F0F] rounded-full flex items-center justify-center">
              <CommonImage
                height={16}
                width={16}
                alt="faq-icon"
                src={ClientsTitleIcon.src || ClientsTitleIcon}
              />
            </div>
            <span className="ml-3 text-base font-medium text-[#0F0F0F]">
              Clients
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F0F0F] mb-4">
            See for whom we are working
          </h2>
          <p className="text-base md:text-lg text-[#4E5B6D]">
            We have our network all over India.
          </p>
        </div>

        {/* Client Icons Grid */}
        <div className="space-y-12 bg-[#F8F9FA] py-12 px-12  rounded-3xl">
          {clientIcons.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-8 md:gap-12">
                {row.map((client, iconIndex) => {
                  return (
                    <div
                      key={iconIndex}
                      className="flex items-center justify-center"
                    >
                      <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                        <CommonImage
                          height={32}
                          width={32}
                          src={client.src || client}
                          alt={`client-icon-${iconIndex}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;

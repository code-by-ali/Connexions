import React from "react";

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
  const allClientIcons = [
    ClientIcon1, ClientIcon2, ClientIcon3, ClientIcon4,
    ClientIcon5, ClientIcon6, ClientIcon7, ClientIcon8,
    ClientIcon9, ClientIcon10, ClientIcon11, ClientIcon12,
    ClientIcon13, ClientIcon14, ClientIcon15, ClientIcon16,
  ];

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
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6 bg-[#F5F5F7] pl-1 pr-2 py-1 rounded-full">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0F0F0F] rounded-full flex items-center justify-center flex-shrink-0">
              <CommonImage
                height={14}
                width={14}
                alt="faq-icon"
                src={ClientsTitleIcon.src || ClientsTitleIcon}
                className="sm:w-4 sm:h-4"
              />
            </div>
            <span className="ml-1 sm:ml-2 text-sm sm:text-base font-medium text-[#0F0F0F]">
              Clients
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F0F0F] tracking-[-3px] mb-3 sm:mb-4 px-2">
            See for whom we are working
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4E5B6D] px-4 font-medium tracking-[-0.36px]">
            We have our network all over India.
          </p>
        </div>

        {/* Client Icons Grid */}
        <div className="bg-[#F8F9FA] py-8 sm:py-12 px-4 sm:px-8 lg:px-12 rounded-2xl sm:rounded-3xl overflow-hidden">
          
          {/* Desktop Layout (lg and above) - Original 2 rows of 8 */}
          <div className="hidden lg:block space-y-8 xl:space-y-12">
            {clientIcons.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center">
                <div className="grid grid-cols-8 gap-8 xl:gap-12">
                  {row.map((client, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="flex items-center justify-center"
                    >
                      <div className="w-20 h-20 xl:w-24 xl:h-24 bg-white rounded-xl shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer group">
                        <CommonImage
                          height={32}
                          width={32}
                          src={client.src || client}
                          alt={`client-icon-${rowIndex}-${iconIndex}`}
                          className="w-7 h-7 xl:w-8 xl:h-8 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tablet Layout (md to lg) - 4 rows of 4 */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-4 gap-6 justify-items-center">
              {allClientIcons.map((client, iconIndex) => (
                <div
                  key={iconIndex}
                  className="flex items-center justify-center"
                >
                  <div className="w-18 h-18 bg-white rounded-xl shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer group">
                    <CommonImage
                      height={28}
                      width={28}
                      src={client.src || client}
                      alt={`client-icon-${iconIndex}`}
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout (sm and below) - 3 columns, multiple rows */}
          <div className="block md:hidden">
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              {allClientIcons.map((client, iconIndex) => (
                <div
                  key={iconIndex}
                  className="flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer group">
                    <CommonImage
                      height={24}
                      width={24}
                      src={client.src || client}
                      alt={`client-icon-${iconIndex}`}
                      className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alternative: Single responsive grid approach */}
          <div className="hidden">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 justify-items-center">
              {allClientIcons.map((client, iconIndex) => (
                <div
                  key={iconIndex}
                  className="flex items-center justify-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer group">
                    <CommonImage
                      height={20}
                      width={20}
                      src={client.src || client}
                      alt={`client-icon-${iconIndex}`}
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
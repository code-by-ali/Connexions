import React from "react";
import Marquee from "react-fast-marquee";
import CommonImage from "../common/CommonImage";
import ClientsTitleIcon from "@/public/assets/faq-icon.svg";

import UpdatedClientIcon1 from "@/public/assets/home-clients-section-icon-updated-1.svg";
import UpdatedClientIcon2 from "@/public/assets/home-clients-section-icon-updated-2.svg";
import UpdatedClientIcon3 from "@/public/assets/home-clients-section-icon-updated-3.svg";
import UpdatedClientIcon4 from "@/public/assets/home-clients-section-icon-updated-4.svg";
import UpdatedClientIcon5 from "@/public/assets/home-clients-section-icon-updated-5.svg";
import UpdatedClientIcon6 from "@/public/assets/home-clients-section-icon-updated-6.svg";
import UpdatedClientIcon7 from "@/public/assets/home-clients-section-icon-updated-7.svg";
import UpdatedClientIcon8 from "@/public/assets/home-clients-section-icon-updated-8.svg";
import UpdatedClientIcon9 from "@/public/assets/home-clients-section-icon-updated-9.svg";
import UpdatedClientIcon10 from "@/public/assets/home-clients-section-icon-updated-10.svg";
import UpdatedClientIcon11 from "@/public/assets/home-clients-section-icon-updated-11.svg";

const ClientsSection = () => {
  const allClientIcons = [
    UpdatedClientIcon1,
    UpdatedClientIcon2,
    UpdatedClientIcon3,
    UpdatedClientIcon4,
    UpdatedClientIcon5,
    UpdatedClientIcon6,
    UpdatedClientIcon7,
    UpdatedClientIcon8,
    UpdatedClientIcon9,
    UpdatedClientIcon10,
    UpdatedClientIcon11,
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

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F0F0F] tracking-[-1px] lg:tracking-[-3px] mb-3 sm:mb-4 px-2">
            See for whom we are working
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4E5B6D] px-4 font-medium tracking-[-0.36px]">
            We have our network all over India.
          </p>
        </div>

        {/* Client Icons Marquee */}
        <div className="bg-[#F8F9FA] py-8 sm:py-12 px-4 sm:px-8 lg:px-12 rounded-2xl sm:rounded-3xl overflow-hidden">
          <Marquee speed={40} gradient={false}>
            {allClientIcons.map((client, index) => (
              <div key={index} className="mx-4 sm:mx-6 lg:mx-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer group hover:shadow-md">
                  <CommonImage
                    height={48}
                    width={48}
                    src={client.src || client}
                    alt={`client-icon-${index}`}
                    className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
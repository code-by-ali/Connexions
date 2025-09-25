"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import CommonImage from "../common/CommonImage";
import AppleEcosystemIcon from "@/public/assets/apple-ecosystem-top-icon.svg";
import GridIcon1 from "@/public/assets/apple-ecosystem-icon-1.svg";
import GridIcon2 from "@/public/assets/apple-ecosystem-icon-2.svg";
import GridIcon3 from "@/public/assets/apple-ecosystem-icon-3.svg";
import GridIcon4 from "@/public/assets/apple-ecosystem-icon-4.svg";

import GridCardImg1 from "@/public/assets/apple-ecosystem-card-img-1.svg";
import GridCardImg3 from "@/public/assets/apple-ecosystem-card-img-3.svg";
import GridCardImg4 from "@/public/assets/apple-ecosystem-card-img-4.svg";

import MiniCardIcon1 from "@/public/assets/apple-ecosytem-mini-card-icon-1.svg";
import MiniCardIcon2 from "@/public/assets/apple-ecosytem-mini-card-icon-2.svg";
import MiniCardIcon3 from "@/public/assets/apple-ecosytem-mini-card-icon-3.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const AppleEcosystem = () => {
  // Extra data renderers
  const AdditionalDataCard1 = () => (
    <div>
      <CommonImage src={GridCardImg1.src || GridCardImg1} alt={"card-1"} />
    </div>
  );

  const AdditionalDataCard2 = () => {
    // Dummy data for cards
    const dummyCards = [
      {
        id: 1,
        title: "Deals in Progress",
        icon: MiniCardIcon1,
        dataMain: "42",
        dataChange: "+64%",
        secondaryData: (
          <span>
            vs <span className="text-primary font-bold">36</span> last month
          </span>
        ),
      },
      {
        id: 2,
        title: "Stalled Deals",
        icon: MiniCardIcon2,
        dataMain: "12",
        dataChange: "-2",
        secondaryData: (
          <span>
            vs <span className="text-primary font-bold">14</span> last week
          </span>
        ),
      },
      {
        id: 3,
        title: "New Leads",
        icon: MiniCardIcon3,
        dataMain: "194",
        dataChange: "+21.5%",
        secondaryData: (
          <span>
            vs <span className="text-primary font-bold">160</span> last month
          </span>
        ),
      },
    ];

    const CardTemplate = ({ card }) => {
      return (
        <div className="border border-gray-100 bg-[#FDFDFD] rounded-2xl flex flex-col p-4 gap-4">
          <p className="flex gap-2 text-[#535862] text-sm font-normal items-center">
            <span>
              <CommonImage src={card.icon.src || card.icon} alt={"card-icon"}  height={20} width={20}/>
            </span>
            <span>{card.title}</span>
          </p>
          <div className="flex gap-2 items-end">
            <span className="text-primary text-3xl font-bold">53</span>
            <span className="border border-[#E9EAEB] text=[#535862] rounded-full text-sm  font-normal flex items-center py-1 px-2">
              +64%
            </span>
          </div>
          <p className="text-sm text-[#535862] font-normal">{card.secondaryData}</p>
        </div>
      );
    };

    return (
      <div className="w-full flex flex-col gap-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2,
            },
          }}
        >
          {dummyCards.map((card) => (
            <SwiperSlide key={card.id}>
              <CardTemplate card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2,
            },
          }}
        >
          {dummyCards.map((card) => (
            <SwiperSlide key={card.id}>
              <CardTemplate card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  const AdditionalDataCard3 = () => (
    <div>
      <CommonImage src={GridCardImg3.src || GridCardImg3} alt={"card-3"} />
    </div>
  );

  const AdditionalDataCard4 = () => (
    <div>
      <CommonImage src={GridCardImg4.src || GridCardImg4} alt={"card-4"} />
    </div>
  );

  // Card data
  const ecosystemCards = [
    {
      title: "Deploy in minutes",
      icon: GridIcon1,
      descriptionPrimary: "Complete enterprise deployment. ",
      descriptionSecondary:
        "Solution with custom configurations and dedicated support for large organizations.",
      AdditionalData: AdditionalDataCard1,
    },
    {
      title: "Apple Business Manager",
      icon: GridIcon2,
      descriptionPrimary: "Streamlined device procurement, ",
      descriptionSecondary:
        "app distribution, and user management through Apple's centralized platform.",
      AdditionalData: AdditionalDataCard2,
    },
    {
      title: "Applications",
      icon: GridIcon3,
      descriptionPrimary: "Productivity-focused solutions ",
      descriptionSecondary:
        "that integrate seamlessly with your existing workflow and business applications.",
      AdditionalData: AdditionalDataCard3,
    },
    {
      title: "Apple Professional Network",
      icon: GridIcon4,
      descriptionPrimary:
        "Access certified Apple experts for specialized consulting, ",
      descriptionSecondary: "implementation, and ongoing support services.",
      AdditionalData: AdditionalDataCard4,
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-[#0F0F0F] rounded-full flex items-center justify-center">
              <CommonImage
                src={AppleEcosystemIcon.src || AppleEcosystemIcon}
                alt={"apple-ecosystem-icon"}
                height={16}
                width={16}
              />
            </div>
            <span className="ml-3 text-base font-medium text-[#0F0F0F] tracking-tight">
              Meet Apple
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-[-1.5px] mb-4">
            Our Apple Ecosystem.
          </h2>
          <p className="text-lg text-[#535862] font-normal tracking-tighter">
            Comprehensive Apple solutions for modern businesses
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ecosystemCards.map((card, index) => {
            const ExtraComponent = card.AdditionalData; // assign function
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#E9EAEB]"
              >
                {/* Card Header */}
                <div className="mb-8">
                  <div className="flex items-center mb-4 gap-2 text-[#A6CE39]">
                    <CommonImage
                      height={24}
                      width={24}
                      src={card.icon.src || card.icon}
                    />
                    <h3 className="text-base md:text-lg font-medium tracking-tight">
                      {card.title}
                    </h3>
                    <ChevronRight size={20} />
                  </div>
                  <p className="leading-relaxed text-lg md:text-xl xl:text-2xl tracking-[-1.01px] font-normal">
                    <span className="text-[#1D1D1F]">
                      {card.descriptionPrimary}
                    </span>
                    <span className="text-[#535862]">
                      {card.descriptionSecondary}
                    </span>
                  </p>
                </div>

                {/* Render extra data if exists */}
                {ExtraComponent && <ExtraComponent />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppleEcosystem;

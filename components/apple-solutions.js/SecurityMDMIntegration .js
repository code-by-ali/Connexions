"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Shield, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import CardBg1 from "@/public/assets/mdm-card-bg-1.svg";
import CardBg2 from "@/public/assets/mdm-card-bg-2.svg";
import CardBg3 from "@/public/assets/mdm-card-bg-3.svg";
import CardBg4 from "@/public/assets/mdm-card-bg-4.svg";
import TitleIcon from "@/public/assets/faq-icon.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommonImage from "../common/CommonImage";

const SecurityMDMIntegration = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const integrationCards = [
    {
      category: "ABM + MDM Integrations",
      title: "Easy to use. Easy to love.",
      background: "bg-gradient-to-br from-red-400 via-orange-400 to-green-500",
      textColor: "text-white",
      backgroundImage: CardBg1,
    },
    {
      category: "Endpoint Security",
      title: "Go fast. Go far.",
      background: "bg-gray-800",
      textColor: "text-white",
      backgroundImage: CardBg2,
    },
    {
      category: "Remote Actions",
      title: "Dream team.",
      background: "bg-gradient-to-br from-purple-300 to-purple-400",
      textColor: "text-white",
      backgroundImage: CardBg3,
    },
    {
      category: "Compliance",
      title: "Mac runs favourite apps.",
      background: "bg-gray-600",
      textColor: "text-white",
      backgroundImage: CardBg4,
    },
    {
      category: "Device Management",
      title: "Complete control.",
      background: "bg-gradient-to-br from-blue-400 to-teal-400",
      textColor: "text-white",
      backgroundImage: CardBg1,
    },
  ];

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="bg-[#FAFAFA] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-[#0F0F0F] rounded-full flex items-center justify-center">
              <CommonImage
                height={16}
                width={16}
                src={TitleIcon.src || TitleIcon}
                alt={"seamless-icon"}
              />
            </div>
            <span className="ml-3 text-base font-medium text-[#0F0F0F] tracking-[-0.45px]">
              Seamless Integration
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-4 tracking-[-1.5px]">
            Security and MDM Integration
          </h2>
          <p className="text-lg text-[#535862] font-normal tracking-[-0.3px]">
            Enterprise-grade security that works seamlessly
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative mb-8">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
            className="security-swiper"
          >
            {integrationCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative ${card.background} rounded-2xl h-100 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Background Image using CommonImage */}
                  {card.backgroundImage && (
                    <div className="absolute inset-0">
                      <CommonImage
                        src={card.backgroundImage.src || card.backgroundImage}
                        alt={`${card.category} background`}
                        className="w-full h-full object-cover rounded-2xl"
                        style={{ objectFit: "cover" }}
                      />
                      {/* Dark overlay for better text readability */}
                      <div className="absolute inset-0 rounded-2xl"></div>
                    </div>
                  )}

                  {/* Plus Icon - Top Right */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-8 h-8 bg-[#333336] bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-8">
                    <div>
                      <p
                        className={`text-sm md:text-base font-bold tracking-[-0.37px] mb-2 text-[#F5F5F7] `}
                      >
                        {card.category}
                      </p>
                      <h3
                        className={`text-xl md:text-2xl font-bold text-[#F5F5F7] tracking-[0.2px] leading-8`}
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={slidePrev}
            disabled={isBeginning}
            className={`w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all border border-primary ${
              isBeginning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft
              className={`w-7 h-7 ${
                isBeginning ? "text-[#86868B]" : "text-[#1D1D1F]"
              }`}
            />
          </button>
          <button
            onClick={slideNext}
            disabled={isEnd}
            className={`w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all border border-primary ${
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight
              className={`w-7 h-7 ${
                isEnd ? "text-[#86868B]" : "text-[#1D1D1F]"
              }`}
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        .security-swiper {
          padding-bottom: 20px;
        }
        .security-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default SecurityMDMIntegration;

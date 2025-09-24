"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Info, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import CommonImage from "../common/CommonImage";

import CardBg1 from "@/public/assets/home-about-us-card-img-1.svg";
import CardBg2 from "@/public/assets/home-about-us-card-img-2.svg";
import CardBg3 from "@/public/assets/home-about-us-card-img-3.svg";
import CardBg4 from "@/public/assets/home-about-us-card-img-4.svg";
import TitleIcon from "@/public/assets/faq-icon.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutUsShowcase = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const showcaseCards = [
    {
      title: "Getting Started",
      subtitle: "Easy to use. Easy to love.",

      textColor: "text-white",
      backgroundImage: CardBg1,
    },
    {
      title: "Performance and Battery Life",
      subtitle: "Go fast. Go far.",
      textColor: "text-white",
      backgroundImage: CardBg2,
    },
    {
      title: "Mac and iPhone",
      subtitle: "Dream team.",

      textColor: "text-primary",
      backgroundImage: CardBg3,
    },
    {
      title: "Compatibility",
      subtitle: "Mac runs your favourite apps.",

      textColor: "text-primary",
      backgroundImage: CardBg4,
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
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-start justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <CommonImage
                    height={16}
                    width={16}
                    alt="title-icon"
                    src={TitleIcon.src || TitleIcon}
                  />
                </div>
                <span className="ml-3 text-base font-medium text-primary">
                  About us
                </span>
              </div>

              <p className="text-xl md:text-2xl text-[#4E5B6D] leading-relaxed">
                We started as a small group of passionate creators who believed
                that great ideas deserve the best execution. What began over
                coffee-fueled brainstorming sessions has grown into a thriving
                digital agency dedicated to helping brands stand out.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden md:flex items-center gap-2 mt-16">
              <button
                onClick={slidePrev}
                disabled={isBeginning}
                className={`w-12 h-12 bg-[#D2D2D7A3] rounded-full flex items-center justify-center shadow-lg transition-all border border-gray-200 ${
                  isBeginning
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-xl hover:bg-gray-50"
                }`}
              >
                <ChevronLeft
                  className={`w-8 h-8 ${
                    isBeginning ? "text-gray-400" : "text-gray-600"
                  }`}
                />
              </button>
              <button
                onClick={slideNext}
                disabled={isEnd}
                className={`w-12 h-12 bg-[#D2D2D7A3] rounded-full flex items-center justify-center shadow-lg transition-all border border-gray-200 ${
                  isEnd
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-xl hover:bg-gray-50"
                }`}
              >
                <ChevronRight
                  className={`w-8 h-8 ${
                    isEnd ? "text-gray-400" : "text-gray-600"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
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
            className="showcase-swiper"
          >
            {showcaseCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-2xl min-h-120 overflow-hidden">
                  {/* Background Image fills container completely */}
                  {card.backgroundImage && (
                    <CommonImage
                      src={card.backgroundImage.src || card.backgroundImage}
                      alt={`${card.title} background`}
                      style={{ objectFit: "cover" }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                  {/* Plus Icon - Bottom Right */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <div className="w-8 h-8 bg-primary bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm border-opacity-20">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-start h-full p-6">
                    <div>
                      <p
                        className={`text-base font-medium ${card.textColor} mb-2`}
                      >
                        {card.title}
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`text-xl md:text-2xl font-bold ${card.textColor} leading-tight mb-3`}
                      >
                        {card.subtitle}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Navigation Buttons */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-8">
            <button
              onClick={slidePrev}
              disabled={isBeginning}
              className={`w-12 h-12 bg-[#D2D2D7A3] rounded-full flex items-center justify-center shadow-lg transition-all border border-gray-200 ${
                isBeginning
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-xl hover:bg-gray-50"
              }`}
            >
              <ChevronLeft
                className={`w-8 h-8 ${
                  isBeginning ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </button>
            <button
              onClick={slideNext}
              disabled={isEnd}
              className={`w-12 h-12 bg-[#D2D2D7A3] rounded-full flex items-center justify-center shadow-lg transition-all border border-gray-200 ${
                isEnd
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-xl hover:bg-gray-50"
              }`}
            >
              <ChevronRight
                className={`w-8 h-8 ${
                  isEnd ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .showcase-swiper {
          padding-bottom: 20px;
        }
        .showcase-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default AboutUsShowcase;

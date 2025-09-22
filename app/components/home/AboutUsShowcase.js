"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Info, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import CommonImage from "../common/CommonImage"; // Update this path to your CommonImage location

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
      description:
        "We started as a small group of passionate creators who believed that great ideas deserve the best execution.",
      background: "bg-gradient-to-br from-red-400 via-orange-400 to-green-500",
      textColor: "text-white",
      backgroundImage: "placeholder-getting-started.jpg", // Replace with your actual image
    },
    {
      title: "Performance and Battery Life",
      subtitle: "Go fast. Go far.",
      description:
        "What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency.",
      background: "bg-gray-800",
      textColor: "text-white",
      backgroundImage: "placeholder-performance.jpg", // Replace with your actual image
    },
    {
      title: "Mac and iPhone",
      subtitle: "Dream team.",
      description:
        "Dedicated to helping brands stand out through innovative solutions and creative excellence.",
      background: "bg-gradient-to-br from-purple-300 to-purple-400",
      textColor: "text-white",
      backgroundImage: "placeholder-mac-iphone.jpg", // Replace with your actual image
    },
    {
      title: "Compatibility",
      subtitle: "Mac runs your favourite apps.",
      description:
        "Our mission is to transform ideas into impactful digital experiences that resonate with audiences.",
      background: "bg-gray-100",
      textColor: "text-gray-900",
      backgroundImage: "placeholder-compatibility.jpg", // Replace with your actual image
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
            <div className="max-w-2xl">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-700">
                  About us
                </span>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
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
                className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all border border-gray-200 ${
                  isBeginning
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-xl hover:bg-gray-50"
                }`}
              >
                <ChevronLeft
                  className={`w-5 h-5 ${
                    isBeginning ? "text-gray-400" : "text-gray-600"
                  }`}
                />
              </button>
              <button
                onClick={slideNext}
                disabled={isEnd}
                className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all border border-gray-200 ${
                  isEnd
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-xl hover:bg-gray-50"
                }`}
              >
                <ChevronRight
                  className={`w-5 h-5 ${
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
                <div
                  className={`relative ${card.background} rounded-2xl h-80 overflow-hidden`}
                >
                  {/* Background Image using CommonImage */}
                  {card.backgroundImage && (
                    <div className="absolute inset-0">
                      {/* Placeholder for actual images */}
                      <div
                        className={`w-full h-full ${card.background} rounded-2xl`}
                      ></div>

                      {/* Uncomment and use CommonImage when you have actual images */}
                      {/* <CommonImage
                        src={card.backgroundImage.src || card.backgroundImage}
                        alt={`${card.title} background`}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl"></div> */}
                    </div>
                  )}

                  {/* Plus Icon - Top Right */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-8 h-8 bg-black bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-6">
                    {/* Top Content */}
                    <div>
                      <p
                        className={`text-sm font-medium ${card.textColor} opacity-90 mb-2`}
                      >
                        {card.title}
                      </p>
                    </div>

                    {/* Bottom Content */}
                    <div>
                      <h3
                        className={`text-xl md:text-2xl font-bold ${card.textColor} leading-tight mb-3`}
                      >
                        {card.subtitle}
                      </h3>
                      <p
                        className={`text-sm ${card.textColor} opacity-90 leading-relaxed`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative hello text for first card */}
                  {index === 0 && (
                    <div className="absolute top-1/3 left-6 z-0">
                      <div className="text-6xl font-bold text-white opacity-20 transform -rotate-12">
                        hello
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Navigation Buttons */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-8">
            <button
              onClick={slidePrev}
              disabled={isBeginning}
              className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all border border-gray-200 ${
                isBeginning
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-xl hover:bg-gray-50"
              }`}
            >
              <ChevronLeft
                className={`w-5 h-5 ${
                  isBeginning ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </button>
            <button
              onClick={slideNext}
              disabled={isEnd}
              className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all border border-gray-200 ${
                isEnd
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-xl hover:bg-gray-50"
              }`}
            >
              <ChevronRight
                className={`w-5 h-5 ${
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

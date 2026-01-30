"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HelpfulFeaturesImg1 from "@/public/assets/iphone-17-helpful-feature-img-1.svg";
import HelpfulFeaturesImg2 from "@/public/assets/iphone-17-helpful-feature-img-2.svg";

import { ChevronRight, ChevronLeft } from "lucide-react";
import CommonImage from "../common/CommonImage";

// Example data
const features = [
  {
    img: HelpfulFeaturesImg1,
    title: "eSIM.",
    desc: "A built-in eSIM provides seamless connectivity,flexibility, convenience and better security — perfect for travel.",
    bgColor: "#FFFFFF",
  },
  {
    img: HelpfulFeaturesImg2,
    title: "Crash Detection.",
    desc: "Hardware sensors and advanced motion algorithms can detect a severe car crash and call for help if you can’t.",
    bgColor: "#1D1D1F",
  },
];

const HelpfulFeatures = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
    <div className="w-full bg-[#f5f5f7] py-12">
      <div className="px-4 sm:px-8 lg:px-20 mx-auto">
        {/* Title Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight tracking-[0.13px]">
              Helpful features. <br /> Just in case.
            </h2>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
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
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
          onFromEdge={() => {
            // Reset if user moves away from edges
            setIsBeginning(false);
            setIsEnd(false);
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.25 },
            1024: { slidesPerView: 1.5 },
            1280: { slidesPerView: 1.7 },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl p-4 h-full flex flex-col">
                <div
                  className={`bg-[${feature.bgColor}] w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg mb-4`}
                >
                  <CommonImage
                    src={feature.img.src || feature.img}
                    className="w-autp h-auto object-contain"
                  />
                </div>
                <p className="font-bold tracking-[-0.37px] text-sm md:text-base">
                  <span className="text-primary">{feature.title}</span>
                  <span className="text-[#6E6E73] ml-2">{feature.desc}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={slidePrev}
            disabled={isBeginning}
            className={`w-10 h-10 bg-[#D2D2D7A3] rounded-full flex items-center justify-center border border-gray-200 ${
              isBeginning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft
              className={`w-7 h-7 ${
                isBeginning ? "text-gray-400" : "text-gray-600"
              }`}
            />
          </button>
          <button
            onClick={slideNext}
            disabled={isEnd}
            className={`w-10 h-10 bg-[#D2D2D7A3] rounded-full flex items-center justify-center border border-gray-200 ${
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight
              className={`w-7 h-7 ${isEnd ? "text-gray-400" : "text-gray-600"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpfulFeatures;

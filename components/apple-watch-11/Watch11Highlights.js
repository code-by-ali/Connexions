"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import CommonImage from "../common/CommonImage";
import HighlightsImg1 from "@/public/assets/apple-watch-11-highlights-img-1.svg";
import HighlightsImg2 from "@/public/assets/apple-watch-11-highlights-img-2.svg";
import HighlightsImg3 from "@/public/assets/apple-watch-11-highlights-img-3.svg";
import HighlightsImg4 from "@/public/assets/apple-watch-11-highlights-img-4.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Watch11Highlights = () => {
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

  const highlightSlides = [
    HighlightsImg1,
    HighlightsImg2,
    HighlightsImg3,
    HighlightsImg4,
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Get the highlights.
          </h2>
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
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 1.25,
                spaceBetween: 24,
              },
            }}
            className="highlights-swiper"
          >
            {highlightSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={`rounded-3xl overflow-hidden relative`}>
                  {/* iPhone Image */}
                  <div className="flex justify-center items-center px-8 pb-8">
                    <div className="relative w-full max-w-4xl">
                      {/* Uncomment when you have actual images */}
                      <CommonImage
                        src={slide.src || slide}
                        alt={`iPhone highlight ${index + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
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

export default Watch11Highlights;

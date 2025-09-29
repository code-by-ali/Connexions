"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import CommonImage from "../common/CommonImage";
import CameraSliderImg1 from "@/public/assets/iphone-17-camera-slider-img-1.svg";
import CameraSliderImg2 from "@/public/assets/iphone-17-camera-slider-img-2.svg";
import CameraSliderImg3 from "@/public/assets/iphone-17-camera-slider-img-3.svg";
import CameraSliderImg4 from "@/public/assets/iphone-17-camera-slider-img-4.svg";
import CameraSliderImg5 from "@/public/assets/iphone-17-camera-slider-img-5.svg";
import CameraSliderImg6 from "@/public/assets/iphone-17-camera-slider-img-6.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const CameraSliderSection = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const cameraFeatures = [
    {
      title: "2x Telephoto",
      description:
        "Clean in or zoom out on your subjects with exceptional detail.",
      image: CameraSliderImg1,
    },
    {
      title: "Clean Up",
      description:
        "Removes unwanted objects, people and background distractions from your photos.",
      image: CameraSliderImg2,
    },
    {
      title: "Portrait Mode",
      description:
        "Create professional-quality photos with beautiful depth-of-field effects.",
      image: CameraSliderImg3,
    },
    {
      title: "Night Mode",
      description:
        "Capture stunning low-light photos with incredible detail and clarity.",
      image: CameraSliderImg4,
    },
    {
      title: "Night Mode",
      description:
        "Capture stunning low-light photos with incredible detail and clarity.",
      image: CameraSliderImg5,
    },
    {
      title: "Night Mode",
      description:
        "Capture stunning low-light photos with incredible detail and clarity.",
      image: CameraSliderImg6,
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
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight tracking-[0.13px]">
            Smile. Snap. Share. Repeat.
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
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
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1.8,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 36,
              },
            }}
            className="camera-features-swiper mb-8"
          >
            {cameraFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={`rounded-3xl overflow-hidden h-full`}>
                  {/* Image Section */}
                  <div className="relative h-auto rounded-3xl">
                    {/* Uncomment when you have actual images */}
                    <CommonImage
                      src={feature.image.src || feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="px-2 py-4 sm:py-6 font-bold text-sm md:text-base text-left">
                    <span className={`text-primary`}>{feature.title}. </span>
                    <span className={`text-[#6E6E73] ml-2`}>
                      {feature.description}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

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
                className={`w-7 h-7 ${
                  isEnd ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .camera-features-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default CameraSliderSection;

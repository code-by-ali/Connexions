"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import IOSFeatureImg1 from "@/public/assets/iphone-17-ios-feature-img-1.svg";
import IOSFeatureImg2 from "@/public/assets/iphone-17-ios-feature-img-2.svg";
import IOSFeatureImg3 from "@/public/assets/iphone-17-ios-feature-img-3.svg";
import IOSFeatureImg4 from "@/public/assets/iphone-17-ios-feature-img-4.svg";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CommonImage from "../common/CommonImage";

// Example data
const features = [
  {
    img: IOSFeatureImg1,
    title: "Liquid Glass.",
    desc: "The new iOS design reflects and reacts to what’s beneath in real time, dynamically adapting to your content across apps and devices.",
  },
  {
    img: IOSFeatureImg2,
    title: "A more vibrant Lock Screen.",
    desc: "The time dynamically adapts to your photo wallpaper and notifications, keeping your subject in view. When you move your iPhone, your photo comes to life with a new 3D effect.",
  },
  {
    img: IOSFeatureImg3,
    title: "Call Screening.",
    desc: "Automatically answers unknown callers. Once they’ve given their name and reason for calling, your phone rings and you decide if you want to pick up.",
  },
  {
    img: IOSFeatureImg4,
    title: "Hold Assist.",
    desc: "Keeps track of your place in line and reconnects you when the agent is ready.",
  },
];

const IosFeatureSlider = () => {
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
              iOS 26. New look. <br /> Even more magic.
            </h2>
            {/* <a
              href="#"
              className="text-[#0066CC] text-sm md:text-base mt-2 flex gap-4 items-center font-normal"
            >
              Learn more about iOS 26 <ChevronRight />
            </a> */}
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
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl p-4 h-full flex flex-col">
                <div className="w-full h-auto flex items-center justify-center overflow-hidden rounded-lg mb-4">
                  <CommonImage
                    src={feature.img.src || feature.img}
                    className="w-full h-auto object-contain"
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

export default IosFeatureSlider;

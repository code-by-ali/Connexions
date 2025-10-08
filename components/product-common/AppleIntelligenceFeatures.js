"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AppleIntelligenceImg1 from "@/public/assets/iphone-17-apple-intelligence-img-1.svg";
import AppleIntelligenceImg2 from "@/public/assets/iphone-17-apple-intelligence-img-2.svg";
import AppleIntelligenceImg3 from "@/public/assets/iphone-17-apple-intelligence-img-3.svg";
import AppleIntelligenceImg4 from "@/public/assets/iphone-17-apple-intelligence-img-4.svg";
import AppleIntelligenceImg5 from "@/public/assets/iphone-17-apple-intelligence-img-5.svg";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CommonImage from "../common/CommonImage";

// Example data
const features = [
  {
    img: AppleIntelligenceImg1,
    title: "Visual Intelligence.",
    desc: "Search, ask question and take action with the content on your iPhone screen.",
  },
  {
    img: AppleIntelligenceImg2,
    title: "Live Translation.",
    desc: "Automatically translate texts in Messages, and get live translated captions in FaceTime abd spoken translations in the Phone app.",
  },
  {
    img: AppleIntelligenceImg3,
    title: "Clean Up.",
    desc: "Remove unwanted distractions with a tap.It's a photo editing tool that stays true to the orignal intent of the photo.",
  },
  {
    img: AppleIntelligenceImg4,
    title: "Writing Tools.",
    desc: "Proofread your text and rewrite different versions until the tone and wording are just right, and summarise selected text with a tap.",
  },
  {
    img: AppleIntelligenceImg5,
    title: "Genmoji.",
    desc: "Make a Genmoji right in the keyboard to match any conversation.Want to create a sloth with a light bulb? You got it.Just provide a description.",
  },
];

const AppleIntelligenceFeatures = () => {
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
              Apple Intelligence. <br /> Effortlessly helpful every day.
            </h2>
            {/* <a
              href="#"
              className="text-[#0066CC] text-sm md:text-base mt-2 flex gap-4 items-center font-normal"
            >
              Learn more about Apple Intelligence <ChevronRight />
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl p-4 h-full flex flex-col">
                <div className="w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg mb-4">
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

export default AppleIntelligenceFeatures;

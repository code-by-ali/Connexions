"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BestPlaceImg1 from "@/public/assets/iphone-17-best-place-img-1.svg";
import BestPlaceImg2 from "@/public/assets/iphone-17-best-place-img-2.svg";
import BestPlaceImg3 from "@/public/assets/iphone-17-best-place-img-3.svg";
import BestPlaceImg4 from "@/public/assets/iphone-17-best-place-img-4.svg";
import BestPlaceImg5 from "@/public/assets/iphone-17-best-place-img-5.svg";
import BestPlaceImg6 from "@/public/assets/iphone-17-best-place-img-6.svg";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CommonImage from "../common/CommonImage";

// Example data
const features = [
  {
    img: BestPlaceImg1,
    header: "Apple Trade In",
    title: "Save on a new iPhone with a trade-in",
    desc: "Get up to ₹27100.00-₹64000.00 in credit towards iPhone 17, iPhone Air or iPhone 17 Pro when you trade in iPhone 13 or higher.",
  },
  {
    img: BestPlaceImg2,
    header: "Ways to Buy",
    title: "Monthly payment options are available.",
    desc: "Choose the easy way to finance with convenient monthly payment options.",
  },
  {
    img: BestPlaceImg3,
    header: "Make the most of your iPhone with an online session.",
    title: "Save on a new iPhone with a trade-in",
    desc: "Talk one-to-one with a Specialist to set up your device and discover new features.",
  },
  {
    img: BestPlaceImg4,
    header: "Delivery and Pickup",
    title: "Get flexible delivery and easy pickup",
    desc: "Get free delivery or pickup at your Apple Store.",
  },
  {
    img: BestPlaceImg5,
    header: "Guided Video Shopping",
    title: "Shop live with a Specialist",
    desc: "Let us help you find what you need and answer all your questions, one-to-one over video.",
  },
  {
    img: BestPlaceImg6,
    header: "Apple Store App",
    title: "Explore a shopping experience designed around you.",
    desc: "Shop in the Apple Store app, tailored specifically for you.",
  },
];

const BestPlaceToBuy = () => {
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
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold text-primary leading-tight tracking-[-0.28px]">
              Why Apple is the best. <br />
              place to buy iPhone.
            </h2>
            {/* <a
              href="#"
              className="text-[#0066CC] text-sm md:text-base font-normal mt-2 flex gap-4 items-center"
            >
              Shop iPhone <ChevronRight />
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
              slidesPerView: 2.5,
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
            <SwiperSlide key={index} className="h-full">
              <div className="rounded-3xl p-4 flex flex-col bg-white h-[400px] lg:h-[480px]">
                {/* Content */}
                <div className="flex flex-col gap-4 flex-grow">
                  <p className="text-primary text-sm md:text-base font-bold tracking-[-0.37px]">
                    {feature.header}
                  </p>
                  <p className="text-primary text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px]">
                    {feature.title}
                  </p>
                  <p className="text-primary text-sm md:text-base font-normal tracking-[-0.37px]">
                    {feature.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg mt-4">
                  <CommonImage
                    src={feature.img.src || feature.img}
                    className="w-full h-full object-contain"
                  />
                </div>
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

export default BestPlaceToBuy;

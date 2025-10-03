"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WatchFeatureSliderImg1 from "@/public/assets/apple-watch-features-slider-img-1.svg";
import WatchFeatureSliderImg2 from "@/public/assets/apple-watch-features-slider-img-2.svg";
import WatchFeatureSliderImg3 from "@/public/assets/apple-watch-features-slider-img-3.svg";
import WatchFeatureSliderImg4 from "@/public/assets/apple-watch-features-slider-img-4.svg";
import WatchFeatureSliderImg5 from "@/public/assets/apple-watch-features-slider-img-5.svg";
import { ChevronRight, ChevronLeft } from "lucide-react";
import CommonImage from "../common/CommonImage";
import WatchFeaturesBannerImg from "@/public/assets/apple-watch-features-banner-img.svg";

// Example cards data
const features = [
  {
    img: WatchFeatureSliderImg1,
    title: "Send a message.",
    desc: "Text with just a tap, a swipe or dictation in the Messages app. And when you add personalised backgrounds to your chats on iPhone, you'll see them on Apple Watch too — adding even more personality to the group chat.",
  },
  {
    img: WatchFeatureSliderImg2,
    title: "Make phone calls, minus the phone.",
    desc: "With Apple Watch SE 3, you don't need your phone handy to take or make a call — all you have to do is talk to the wrist.",
  },
  {
    img: WatchFeatureSliderImg3,
    title: "Your watch is your wallet.",
    desc: "You can use the Wallet app with your boarding pass, home key and car key. It's smart.",
  },
  {
    img: WatchFeatureSliderImg4,
    title: "Ping my iPhone.",
    desc: "Can't find your iPhone? Just tap the ping iPhone button to play an audible chime so you can locate it again.",
  },
  {
    img: WatchFeatureSliderImg5,
    title: "More ways to stay connected.",
    desc: "Listen to music, podcasts or audiobooks. Stay in touch with apps you love — all from your wrist.",
  },
];

const WatchFeatures = () => {
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
    <div className="bg-[#F5F5F7] px-4 sm:px-8 lg:px-20 mx-auto py-16">
      <div className="flex flex-col gap-10 ">
        {/* Banner */}
        <CommonImage
          src={WatchFeaturesBannerImg.src || WatchFeaturesBannerImg}
          alt="watch-features-banner"
        />

        {/* Heading + Description */}
        <div className="flex flex-col gap-10 items-center">
          <div className="text-center">
            <p className="text-primary text-lg md:text-xl lg:text-2xl font-bold tracking-[0.22px]">
              On the go
            </p>
            <p className="product-gradient-green-text text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-[-1.44px]">
              Faster connection?
              <br />
              No question.
            </p>
            <p className="text-[#6E6E73] text-lg md:text-xl lg:text-2xl font-bold tracking-[0.22px] max-w-3xl mt-10">
              With Apple Watch SE 3, you can keep in touch with the people and
              things that matter most. Cellular lets you stay connected even
              when you don't have your iPhone nearby. And now with 5G
              capability, you can download apps faster and stream music or
              podcasts at the speed of go go go.
            </p>
          </div>
        </div>

        {/* Swiper Slider */}
        <div>
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
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3.5, spaceBetween: 24 },
            }}
            className="!pb-2"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="rounded-2xl p-6 flex flex-col w-full h-full">
                  {/* Image Container - Fixed Height */}
                  <div className="w-full h-[450px] flex items-center justify-center overflow-hidden rounded-lg mb-4 flex-shrink-0">
                    <CommonImage
                      src={feature.img.src || feature.img}
                      alt={feature.title}
                      className="max-w-full max-h-full object-contain rounded-2xl"
                    />
                  </div>

                  {/* Text Container - Fills Remaining Space */}
                  <div className="flex flex-col flex-1">
                    <p>
                      <span className="font-bold text-primary text-sm md:text-base mb-2 tracking-[-0.37px]">
                        {feature.title}{" "}
                      </span>
                      <span className="text-[#6E6E73] ">{feature.desc}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
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
    </div>
  );
};

export default WatchFeatures;

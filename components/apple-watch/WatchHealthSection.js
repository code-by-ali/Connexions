"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import WatchHealthImage1 from "@/public/assets/watch-health-img-1.svg";
import WatchHealthImage2 from "@/public/assets/watch-health-img-2.svg";
import WatchHealthImage3 from "@/public/assets/watch-health-img-3.svg";
import WatchHealthImage4 from "@/public/assets/watch-health-img-4.svg";
import WatchHealthImage5 from "@/public/assets/watch-health-img-5.svg";
import CommonImage from "../common/CommonImage";

export default function HealthSection() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const healthFeatures = [
    {
      img: WatchHealthImage1,
      title: "Track your daily health status in the Vitals app.",
      desc: "Check on your overnight wrist temperature and other key health metrics, like heart rate, respiratory rate, sleep duration and sleep stages — and get alerts when two or more are outside your typical range.",
    },
    {
      img: WatchHealthImage2,
      title: "Get retrospective ovulation estimates.",
      desc: "By tracking elevated wrist temperature during sleep, Apple Watch can provide you with an estimate of when ovulation likely occurred. This can provide a retrospective estimate of when you likely ovulated, which is useful for family planning.",
    },
    {
      img: WatchHealthImage3,
      title: "Know your sleep score.",
      desc: "Sleep quality is immensely helpful, both for sleep studies, cyclone consistency, body temperature recordings and respiratory rate. All of these factors help Apple Watch SE 3 give you a classification and a score. You'll see how the score is trending over time, so you can enjoy a good night's sleep, and manage your daytime energy too.",
    },
    {
      img: WatchHealthImage4,
      title: "Get a pulse check with the Heart Rate app.",
      desc: "Check your heart rate at any any time with the Heart Rate app.And get notification for a high or low heart rate or an irregular rythm.",
    },
    {
      img: WatchHealthImage5,
      title: "Your go-to Health app.",
      desc: "The Health app helps you organise your important health information in one central and secure place.It also provides interactive charts and advanced trend analysis,so you can view your health data over time.",
    },
  ];

  const slidePrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-[0.22px] text-primary mb-2">
            Health
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-[-1.44px] mb-6">
            <span className="product-gradient-pink-text">
              Stay one
              <br />
              beat ahead.
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-[22px] font-bold tracking-[0.22px] text-[#6E6E73] max-w-2xl leading-tight">
            Get meaningful insights about your health just by wearing your Apple
            Watch SE 3. A new wrist temperature sensor enables deeper insights
            in the Vitals app and retrospective ovulation estimates in the Cycle
            Tracking app. You'll also receive a daily sleep score. It's never
            been easier to live in the know.
          </p>
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
            {healthFeatures.map((feature, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="bg-white rounded-2xl p-6 flex flex-col w-full h-full">
                  {/* Image Container */}
                  <div className="w-full h-[300px] flex items-center justify-center overflow-hidden rounded-lg mb-4 flex-shrink-0">
                    <CommonImage
                      src={feature.img.src || feature.img}
                      alt={feature.title}
                      className="h-auto w-auto object-contain rounded-lg"
                    />
                  </div>

                  {/* Text Container */}
                  <div className="flex flex-col flex-1">
                    <p className="text-sm md:text-base font-bold tracking-[-0.37px] leading-snug">
                      <span className="text-primary">{feature.title} </span>
                      <span className=" text-[#6E6E73] "> {feature.desc}</span>
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
}

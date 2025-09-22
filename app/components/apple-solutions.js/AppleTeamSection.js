"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import {
  Briefcase,
  Cpu,
  PenTool,
  BarChart,
  Settings,
  Layers,
  Users,
  DollarSign,
  Smartphone,
  FileText,
} from "lucide-react";

const AppleTeamSection = () => {
  const categories = [
    { label: "Digital Marketing", icon: Briefcase },
    { label: "Software Engineering", icon: Cpu },
    { label: "Machine Learning", icon: Settings },
    { label: "Graphic Design", icon: PenTool },
    { label: "UX/UI Design", icon: Layers },
  ];

  const categories2 = [
    { label: "UX/UI Design", icon: Layers },
    { label: "Business Analytics", icon: BarChart },
    { label: "AI Tools", icon: Cpu },
    { label: "Project Management", icon: Users },
    { label: "Financial Modeling", icon: DollarSign },
  ];

  const categories3 = [
    { label: "Project Management", icon: Users },
    { label: "Financial Modeling", icon: DollarSign },
    { label: "Mobile Development", icon: Smartphone },
    { label: "Content Creation", icon: FileText },
  ];

  const Pill = ({ Icon, label }) => (
    <div className="inline-flex items-center gap-4 px-5 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-lg font-medium text-[#1D1D1F] hover:shadow-md transition w-auto whitespace-nowrap">
      <Icon size={24} className="text-[#1D1D1F] shrink-0" />
      <span>{label}</span>
    </div>
  );

  const swiperConfig = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: { delay: 0, disableOnInteraction: false },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 flex justify-center">
      <div className="relative bg-[radial-gradient(63%_100%_at_50%_0%,#D4E7F6_0%,#F0F7FC_82.44%,#F6F7F9_100%)] rounded-2xl shadow-md p-10 w-full max-w-6xl text-center overflow-hidden">
        {/* Subtitle */}
        <div className="flex items-center justify-center">
          <p className=" text-center px-4 py-1 ring-4 ring-white text-base text-[#6E6E73] font-medium mb-3 relative z-10 bg-[#F1F7FC] shadow-sm w-max rounded-full">
            What's Drive
          </p>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] mb-10 relative z-10">
          Apple Solutions for Every Team
        </h2>

        {/* Categories Carousel */}
        <div className="relative z-10">
          {/* Row 1 */}
          <Swiper {...swiperConfig} speed={3000} className="mb-6">
            {categories.map((item, i) => (
              <SwiperSlide key={i}>
                <Pill Icon={item.icon} label={item.label} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Row 2 (reverse) */}
          <Swiper
            {...swiperConfig}
            speed={3500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            className="mb-6"
          >
            {categories2.map((item, i) => (
              <SwiperSlide key={i}>
                <Pill Icon={item.icon} label={item.label} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Row 3 */}
          <Swiper {...swiperConfig} speed={3200}>
            {categories3.map((item, i) => (
              <SwiperSlide key={i}>
                <Pill Icon={item.icon} label={item.label} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AppleTeamSection;

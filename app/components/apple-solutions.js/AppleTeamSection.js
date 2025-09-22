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
    { label: "Business Analytics", icon: BarChart },
    { label: "AI Tools", icon: Cpu },
    { label: "Project Management", icon: Users },
    { label: "Financial Modeling", icon: DollarSign },
    { label: "Mobile Development", icon: Smartphone },
    { label: "Content Creation", icon: FileText },
  ];

  const Pill = ({ Icon, label }) => (
    <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-[#1D1D1F] hover:shadow-md transition w-auto whitespace-nowrap">
      <Icon size={16} className="text-gray-600 shrink-0" />
      <span>{label}</span>
    </div>
  );

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 flex justify-center">
<div className="relative bg-[radial-gradient(63%_100%_at_50%_0%,#D4E7F6_0%,#F0F7FC_82.44%,#F6F7F9_100%)] rounded-2xl shadow-md p-10 w-full max-w-6xl text-center overflow-hidden">
        {/* Subtitle */}
        <p className="text-sm text-[#6E6E73] font-medium mb-3 relative z-10">
          What’s Drive
        </p>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] mb-10 relative z-10">
          Apple Solutions for Every Team
        </h2>

        {/* Categories Carousel */}
        <div className="relative z-10">
          {/* Row 1 */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={24}
            loop={true}
            speed={3000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            className="mb-6"
          >
            {categories.map((item, i) => (
              <SwiperSlide key={i} className="!w-auto">
                <Pill Icon={item.icon} label={item.label} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Row 2 (reverse) */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={24}
            loop={true}
            speed={3500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            className="mb-6"
          >
            {categories.map((item, i) => (
              <SwiperSlide key={i} className="!w-auto">
                <Pill Icon={item.icon} label={item.label} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Row 3 */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={24}
            loop={true}
            speed={3200}
            autoplay={{ delay: 0, disableOnInteraction: false }}
          >
            {categories.map((item, i) => (
              <SwiperSlide key={i} className="!w-auto">
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

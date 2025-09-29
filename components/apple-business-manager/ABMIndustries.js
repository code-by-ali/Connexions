"use client";
import React from "react";
import {
  Stethoscope,
  Factory,
  Building2,
  Car,
  Laptop,
  Star,
} from "lucide-react";
import ABMIndustriesIcon1 from "@/public/assets/abm-industries-icon-1.svg";
import ABMIndustriesIcon2 from "@/public/assets/abm-industries-icon-2.svg";
import ABMIndustriesLogo1 from "@/public/assets/abm-industries-logo-1.svg";
import ABMIndustriesLogo2 from "@/public/assets/abm-industries-logo-2.svg";

import CommonImage from "../common/CommonImage";

const industries = [
  { icon: ABMIndustriesIcon1, label: "Healthcare" },
  { icon: ABMIndustriesIcon2, label: "Manufacturing" },
  { icon: ABMIndustriesIcon1, label: "Corporate" },
  { icon: ABMIndustriesIcon2, label: "Automotive" },
  { icon: ABMIndustriesIcon1, label: "IT/ITES" },
];

const reviews = [
  {
    logo: ABMIndustriesLogo1,
    rating: 4.6,
    count: 127,
    text: "Rating by G2 users",
  },
  {
    logo: ABMIndustriesLogo2,
    rating: 4.8,
    count: 932,
    text: "on Google Review",
  },
];

const ABMIndustries = () => {
  return (
    <section className="bg-[#F5F5F7] py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        ABM across Industries
      </h2>
      <p className="text-[#4B5563] mb-10 text-base sm:text-lg md:text-xl">
        Trusted by organizations across diverse sectors
      </p>

      {/* Industries */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {industries.map(({ icon, label }, index) => (
          <div key={index} className="flex items-center gap-2 text-primary">
            <CommonImage
              src={icon.src || icon}
              alt={label}
              className="w-6 h-6"
            />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 w-full max-w-4xl mx-auto mb-12" />

      {/* Reviews */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 rounded-xl ring-4 ring-white bg-[#F2F4F6] shadow-sm w-full md:w-72"
          >
            <CommonImage
              src={review.logo.src || review.logo}
              alt="logo"
              className="w-16 h-16 object-contain p-3 bg-white rounded-2xl"
            />
            <div className="text-left">
              <div className="flex items-center gap-2 text-sm font-medium bg-[#E6E9EE] rounded-full w-max p-1">
                <span className="bg-white rounded-tl-full rounded-bl-full flex gap-1 items-center py-0.5 px-1 text-xs">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  {review.rating}{" "}
                </span>
                <span className="text-[#666666] text-xs">{review.count}</span>
              </div>
              <p className="text-sm text-[#4D4D4D">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ABMIndustries;

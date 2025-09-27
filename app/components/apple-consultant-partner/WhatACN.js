"use client";
import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import ACNImage from "@/public/assets/what-acn-img-1.svg";
import CommonImage from "../common/CommonImage";
import ACNIcon1 from "@/public/assets/what-acn-icon-1.svg";
import ACNIcon2 from "@/public/assets/what-acn-icon-2.svg";
import ACNIcon3 from "@/public/assets/what-acn-icon-3.svg";

const WhatACN = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Title + Description Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            What is Apple Consultant Network (ACN)?
          </h2>

          {/* Right Description */}
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg leading-tight font-normal">
            The Apple Consultants Network is a select group of independent
            technology service providers specially trained and certified by
            Apple. Connexions brings verified expertise in deploying Apple
            solutions, managing Apple ecosystems, and delivering
            business-focused support.
          </p>
        </div>

        {/* Image with overlay */}
        <div className="relative w-full">
          <CommonImage
            src={ACNImage.src || ACNImage}
            alt="Apple Consultant Network Team"
            className="rounded-xl !object-cover !w-full h-[350px] sm:h-[400px] lg:h-[500px]"
          />

          {/* Contact Section - responsive positioning */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 md:left-auto md:right-6 md:bottom-6">
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6">
              {/* Email */}
              <div className="bg-white backdrop-blur-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg">
                {/* Title and Icon Row */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm sm:text-base text-primary font-medium">
                    Email Us
                  </span>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <CommonImage
                      src={ACNIcon1.src || ACNIcon1}
                      height={20}
                      width={20}
                      alt={"acn-icon-email"}
                    />
                  </div>
                </div>
                {/* Description Row */}
                <span className="text-sm sm:text-base text-[#A6CE39] font-normal block">
                  support@connexions.com
                </span>
              </div>

              {/* Phone */}
              <div className="bg-white backdrop-blur-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg">
                {/* Title and Icon Row */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm sm:text-base text-primary font-medium">
                    Phone Call
                  </span>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <CommonImage
                      src={ACNIcon2.src || ACNIcon2}
                      height={20}
                      width={20}
                      alt={"acn-icon-call"}
                    />
                  </div>
                </div>
                {/* Description Row */}
                <span className="text-sm sm:text-base text-[#A6CE39] font-normal block">
                  (+91) 98765-43210
                </span>
              </div>

              {/* WhatsApp */}
              <div className="bg-white/95 backdrop-blur-sm shadow-lg border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg">
                {/* Title and Icon Row */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm sm:text-base text-primary font-medium">
                    WhatsApp
                  </span>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <CommonImage
                      src={ACNIcon3.src || ACNIcon3}
                      height={20}
                      width={20}
                      alt={"acn-icon-call"}
                    />
                  </div>
                </div>
                {/* Description Row */}
                <span className="text-sm sm:text-base text-[#A6CE39] font-normal block">
                  (+91) 99887-66554
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatACN;

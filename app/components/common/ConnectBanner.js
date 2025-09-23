"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import CalendlyCard from "@/public/assets/calendly-card.svg";
import BannerBg from "@/public/assets/connect-banner-bg.svg";
import { InlineWidget } from "react-calendly";
import CommonImage from "./CommonImage";

const ConnectBanner = () => {
  return (
    <div className="relative overflow-hidden mx-4 sm:mx-10 lg:mx-40 p-6 sm:p-8 lg:p-10 bg-primary flex flex-col xl:flex-row justify-between items-center gap-8 rounded-2xl">
      {/* Left Content */}
      <div className="flex flex-col gap-4 sm:gap-6 max-w-full lg:max-w-[500px] text-center lg:text-left relative z-10">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
          Connect with us via Calendly or Email Us
        </p>
        <p className="text-sm sm:text-base text-white leading-relaxed">
          Join thousands of aspiring designers and gain the skills to create
          stunning, user-friendly designs. Don&apos;t wait — your design career
          starts here!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
          <button className="cursor-pointer h-11 px-5 bg-white text-primary rounded-lg flex items-center gap-2 text-sm font-medium w-full sm:w-auto">
            <span>Email Us</span>
            <ArrowRight className="w-5 h-5 bg-primary text-white rounded-sm p-1" />
          </button>

          <button className="cursor-pointer h-11 px-5 bg-white text-primary rounded-lg text-sm font-medium w-full sm:w-auto">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end lg:w-auto relative z-10 !w-[100%] m-5 rounded-lg">
        {/* <InlineWidget
          url="https://calendly.com/codebyali17/30min"
          styles={{
            height: "400px",
            width: "100%",
          }}
          className="w-full xl:min-w-[600px] rounded-lg custom-iframe"
        /> */}
      </div>

      {/* Background Image */}
      <div className="absolute hidden md:flex top-0 left-[25%] sm:left-[30%] lg:left-[35%] pointer-events-none">
        <CommonImage
          src={BannerBg.src || BannerBg}
          width={500}
          height={600}
          alt="banner-bg"
          className="max-w-[250px] sm:max-w-[300px] lg:max-w-[500px] h-auto"
          style={{ objectFit: "fill" }}
        />
      </div>
    </div>
  );
};

export default ConnectBanner;

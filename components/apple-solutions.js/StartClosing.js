"use client";
import React from "react";
import { Zap, Users, XCircle, Star } from "lucide-react";
import StartClosingBannerIcon1 from "@/public/assets/start-closing-icon-1.svg";
import StartClosingBannerIcon2 from "@/public/assets/start-closing-icon-2.svg";
import StartClosingBannerIcon3 from "@/public/assets/start-closing-icon-1.svg";
import CommonImage from "../common/CommonImage";

const StartClosing = () => {
  return (
    <section className="bg-[#1E1E1E] text-white py-20 px-6 flex flex-col items-center text-center">
      {/* Tagline */}
      <div className="flex items-center gap-2 bg-white text-[#A6CE39] rounded-lg px-4 py-2 text-sm md:text-base font-medium mb-6">
        <Zap size={16} className="text-[#A6CE39]" />
        <span>Start Closing Faster</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white tracking-[-1.5px]">
        Ready to close faster? <br />
        <span className="text-[#717680] font-bold">
          Start your free trial today.
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-white text-base md:text-lg font-normal max-w-xl mb-8 tracking-tight">
        Try it free. No contracts, no credit card.
        <br /> Just results, from day one.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <button className="bg-[#A6CE39] text-white px-6 py-3 rounded-full text-sm font-normal transition">
          Explore solution now
        </button>
        <button className="bg-white text-[#1D1D1F] px-6 py-3 rounded-full text-sm font-normal transition">
          Talk to an Expert
        </button>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-6 text-white text-sm font-normal">
        <div className="flex items-center gap-2">
          <CommonImage
            src={StartClosingBannerIcon1.src || StartClosingBannerIcon1}
            alt={"banner-icon-1"}
            height={20}
            width={20}
          />{" "}
          Used by 2,300+ teams
        </div>
        <div className="flex items-center gap-2">
          <CommonImage
            src={StartClosingBannerIcon2.src || StartClosingBannerIcon2}
            alt={"banner-icon-2"}
            height={20}
            width={20}
          />{" "}
          Cancel anytime, no risk
        </div>
        <div className="flex items-center gap-2">
          <CommonImage
            src={StartClosingBannerIcon3.src || StartClosingBannerIcon3}
            alt={"banner-icon-3"}
            height={20}
            width={20}
          />{" "}
          97% user retention after 30 days
        </div>
      </div>
    </section>
  );
};

export default StartClosing;

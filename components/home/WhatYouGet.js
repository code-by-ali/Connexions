"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import FAQIcon from "@/public/assets/faq-icon.svg";
import CommonImage from "../common/CommonImage";
import CinemaIcon from "@/public/assets/what-you-get-icon-1.svg";
import SmileyIcon from "@/public/assets/what-you-get-icon-2.svg";
import CrownIcon from "@/public/assets/what-you-get-icon-3.svg";

import CardImage1 from "@/public/assets/what-you-get-img-1.svg";
import CardImage2 from "@/public/assets/what-you-get-img-2.svg";
import Link from "next/link";

const WhatYouGet = () => {
  return (
    <section className="bg-[#F8F9FA] py-16">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <div className="inline-flex items-center justify-center mb-4 gap-2 bg-white rounded-full px-2 py-1">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <CommonImage
              height={16}
              width={16}
              alt="faq-icon"
              src={FAQIcon.src || FAQIcon}
            />
          </div>
          <p className="text-sm md:text-base text-primary font-medium tracking-tight">
            Latest Updates
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 tracking-[-1.6px] text-primary">
          What You’ll Get From Connexions
        </h2>
        <p className="text-[#BEBEBE] max-w-2xl mx-auto text-sm md:text-base tracking-[-0.51px] font-normal">
          Embrace a realm of possibilities and take charge of your destiny by
          honing new skills that again to there help you fulfill your ambitions.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 px-6 items-stretch">
        {/* Column 1 - two stacked cards */}
        <div className="flex flex-col gap-6">
          {/* Top card */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex md:flex-col lg:flex-row gap-1 justify-between items-start">
              <span className="text-xl md:text-2xl lg:text-2xl tracking-[0px] font-medium text-primary">
                Authorized Reseller
              </span>
              <div className="w-15 h-15 flex items-center justify-center rounded-full border bg-primary">
                <CommonImage
                  src={CinemaIcon.src || CinemaIcon}
                  height={28}
                  width={28}
                  alt={"cinema-icon"}
                />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-medium text-[#A6CE39] text-base md:text-lg lg:text-xl mb-2 tracking-[-1.02px]">
                Certified. Verified. Trusted.
              </h3>
              <p className="text-primary text-sm md:text-base font-normal leading-tight tracking-[-0.51px]">
                As an authorized reseller, Connexions ensures genuine products,
                smooth procurement, and direct access to enterprise-ready
                solutions.
              </p>
            </div>
          </div>

          {/* Bottom card stretched */}
          <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col flex-grow">
            <div className="flex-1 flex items-center justify-center">
              <CommonImage
                src={CardImage1.src || CardImage1}
                alt={"card-img-1"}
              />
            </div>
          </div>
        </div>

        {/* Column 2 - tall card */}
        <div className="bg-white rounded-2xl p-0 shadow-md flex flex-col">
          <div className="flex flex-wrap justify-center gap-3 mb-6 flex-1">
            <CommonImage
              src={CardImage2.src || CardImage2}
              alt={"card-img-2"}
            />
          </div>
          <div className="p-3">
            <h3 className="font-medium text-primary text-xl md:text-2xl mb-2 text-center tracking-[-1.02px]">
              Industry Expertise
            </h3>
            <p className="text-primary text-sm md:text-base tracking-[-0.51px] text-center font-normal">
              From healthcare to manufacturing and IT/ITES, we deliver tailored
              solutions built around sector-specific challenges.
            </p>
            <Link href={"/contact-us"}>
              <button className="cursor-pointer mt-6 mx-auto font-normal flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-sm tracking-tight">
                Join Now <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>

        {/* Column 3 - two stacked cards */}
        <div className="flex flex-col gap-6">
          {/* Top card */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex md:flex-col lg:flex-row justify-between items-start">
              <span className="text-xl md:text-2xl lg:text-2xl font-medium text-primary tracking-[0px]">
                Innovation First
              </span>
              <div className="w-15 h-15 flex items-center justify-center rounded-full bg-primary">
                <CommonImage
                  height={24}
                  width={24}
                  alt={"icon-2"}
                  src={CrownIcon.src || CrownIcon}
                />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-medium text-[#A6CE39] text-base md:text-lg lg:text-xl mb-2 tracking-[-1.02px]">
                Technology That Scales.
              </h3>
              <p className="text-primary text-sm md:text-base font-normal tracking-[-0.51px]">
                We integrate modern IT ecosystems designed for digital
                transformation, sustainability, and long-term scalability.
              </p>
            </div>
          </div>

          {/* Bottom card stretched */}
          <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col flex-grow">
            <div className="w-15 h-15 flex items-center justify-center rounded-full bg-primary">
              <CommonImage
                height={24}
                width={24}
                alt={"icon-2"}
                src={SmileyIcon.src || SmileyIcon}
              />
            </div>
            <div className="mt-6 flex-1">
              <h3 className="font-medium text-primary text-xl md:text-2xl tracking-[-1.02px] mb-2">
                Customer-First Approach
              </h3>
              <p className="text-primary text-sm md:text-base tracking-[-0.51px] font-normal">
                We focus on measurable outcomes and partnerships that extend
                beyond delivery, ensuring enduring value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;

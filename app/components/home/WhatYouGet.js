"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import FAQIcon from "@/public/assets/faq-icon.svg";
import CommonImage from "../common/CommonImage";
import CinemaIcon from "@/public/assets/what-you-get-icon-1.svg";
import SmileyIcon from "@/public/assets/what-you-get-icon-2.svg";
import CardImage1 from "@/public/assets/what-you-get-img-1.svg";
import CardImage2 from "@/public/assets/what-you-get-img-2.svg";
import CardImage3 from "@/public/assets/what-you-get-img-3.svg";
import CardImage4 from "@/public/assets/what-you-get-img-4.svg";
import CardImage5 from "@/public/assets/what-you-get-img-5.svg";

const WhatYouGet = () => {
  return (
    <section className="bg-[#F8F9FA] py-16">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <div className="flex items-center justify-center mb-4 gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <CommonImage
              height={16}
              width={16}
              alt="faq-icon"
              src={FAQIcon.src || FAQIcon}
            />
          </div>
          <p className="text-base md:text-lg text-primary font-medium">
            Latest Updates
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 text-primary">
          What You’ll Get From Connexions
        </h2>
        <p className="text-[#BEBEBE] max-w-2xl mx-auto text-sm md:text-base">
          Embrace a realm of possibilities and take charge of your destiny by
          honing new skills that again to there help you fulfill your ambitions.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 items-stretch">
        {/* Column 1 - two stacked cards */}
        <div className="flex flex-col gap-6">
          {/* Top card */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex justify-between items-start">
              <span className="text-3xl md:text-4xl font-medium text-primary">
                1:1
              </span>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-primary">
                <CommonImage
                  src={CinemaIcon.src || CinemaIcon}
                  height={20}
                  width={20}
                  alt={"cinema-icon"}
                />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-normal text-primary text-xl mb-2">
                Get Mentorship from Senior PMs
              </h3>
              <p className="text-primary text-sm">
                Work closely with expert mentors who’ll guide your growth, give
                actionable feedback, and help you chart your PM career path.
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
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col">
          <div className="flex flex-wrap justify-center gap-3 mb-6 flex-1">
            <CommonImage
              src={CardImage2.src || CardImage2}
              alt={"card-img-2"}
            />
          </div>
          <h3 className="font-normal text-primary text-xl mb-2 text-center">
            Placement Support that Works
          </h3>
          <p className="text-primary text-sm text-center">
            We don’t stop at learning. Get mock interviews, optimized resumes,
            referrals, and job prep till you land the right role.
          </p>
          <button className="mt-6 mx-auto flex items-center justify-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm">
            Join Now <ArrowRight size={16} />
          </button>
        </div>

        {/* Column 3 - two stacked cards */}
        <div className="flex flex-col gap-6">
          {/* Top card */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex justify-between items-start">
              <span className="text-3xl md:text-4xl font-medium text-primary">
                45K+
              </span>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <CommonImage
                  height={20}
                  width={20}
                  alt={"icon-2"}
                  src={SmileyIcon.src || SmileyIcon}
                />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-normal text-primary text-xl mb-2">
                Build Real Products, Not Just Portfolios
              </h3>
              <p className="text-primary text-sm">
                Go beyond theory. Launch zero-to-one projects that show how you
                think, prioritize, and ship like a Product Leader.
              </p>
            </div>
          </div>

          {/* Bottom card stretched */}
          <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col flex-grow">
            <div className="flex justify-between items-start">
              <CommonImage
                src={CardImage3.src || CardImage3}
                alt="julius-image"
              />
              <CommonImage
                src={CardImage4.src || CardImage4}
                alt="missive-image"
              />
            </div>
            <div className="mt-6 flex-1">
              <h3 className="font-normal text-primary text-xl mb-2">
                Master the AI Stack for PMs
              </h3>
              <p className="text-primary text-sm">
                From discovery to delivery — learn and apply AI tools to drive
                product innovation and decision-making.
              </p>
            </div>
            <div className="flex justify-center items-start mt-auto">
              <CommonImage
                src={CardImage5.src || CardImage5}
                alt="openai-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;

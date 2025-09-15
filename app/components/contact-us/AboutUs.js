import React from "react";
import questionIcon from "@/public/assets/contact-about-que-icon.png";
import Image from "next/image";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Top Section */}
      <div className="flex flex-col gap-8 items-center">
        <div className="flex gap-4 items-center">
          <span className="p-4 bg-primary rounded-full">
            <Image
              unoptimized
              alt="question-icon"
              height={14}
              width={14}
              src={questionIcon}
            />
          </span>
          <span className="text-base text-primary">About us</span>
        </div>

        <div className="text-center flex flex-col gap-6 max-w-3xl">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            <span className="text-primary">Real results, real teams:</span>{" "}
            <span className="text-[#717680]">
              How sales leaders use connexions to close.
            </span>
          </p>
          <p className="text-base text-[#717680]">
            See what real users are saying about connexions — across G2,
            Trustpilot and X. We don't filter. We just ship.
          </p>
        </div>
      </div>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 place-items-center">
        {/* First Column - 3 cards */}
        <div className="flex flex-col gap-6 items-center w-full">
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
        </div>

        {/* Second Column - 4 cards */}
        <div className="flex flex-col gap-6 items-center w-full">
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
        </div>

        {/* Third Column - 3 cards */}
        <div className="flex flex-col gap-6 items-center w-full">
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

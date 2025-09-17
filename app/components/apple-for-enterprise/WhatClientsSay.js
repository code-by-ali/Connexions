import React from "react";
import questionIcon from "@/public/assets/contact-about-que-icon.png";
import Image from "next/image";
import AboutUsCard from "../common/AboutUsCard";

const WhatClientsSay = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Top Section */}
      <div className="flex flex-col gap-8 items-center">
        <div className="flex gap-4 items-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold">
            What our Client Say
          </p>
        </div>
      </div>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 place-items-center">
        {/* First Column - 3 cards */}
        <div className="flex flex-col gap-6 items-center w-full">
          <AboutUsCard />
          <AboutUsCard />
          {/* <AboutUsCard /> */}
        </div>

        {/* Second Column - 4 cards */}
        <div className="flex flex-col gap-6 items-center w-full">
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
          {/* <AboutUsCard /> */}
        </div>

        {/* Third Column - 3 cards */}
        <div className="flex flex-col gap-6 items-center w-full">
          <AboutUsCard />
          <AboutUsCard />
          {/* <AboutUsCard /> */}
        </div>
      </div>
    </div>
  );
};

export default WhatClientsSay;

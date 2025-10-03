import React from "react";
import Image from "next/image";
import IphoneGroup from "@/public/assets/iphone-17-all-in-family-img.svg";
import CommonImage from "../common/CommonImage";

const AllInFamily = () => {
  return (
    <section className="bg-[#F5F5F7] py-20 px-6 text-center">
      {/* Small Heading */}
      <p className="text-lg md:text-xl lg:text-2xl text-primary font-bold tracking-[0.2px] mb-3">
        All in the family.
      </p>

      {/* Gradient Headline */}
      <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-1.2px] leading-none mb-10 text-gradient">
        <span className="">All the</span> <span className="">must-haves.</span>
        <br />
        <span className="">All on</span> <span className="">iPhone.</span>
      </h2>

      {/* Grouped Image */}
      <div className="flex justify-center mb-10">
        <CommonImage
          src={IphoneGroup.src || IphoneGroup}
          alt="iPhone Group"
          className="w-full max-w-3xl h-auto"
        />
      </div>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-[#6E6E73] text-base md:text-lg lg:text-xl font-bold tracking-[0.23px]">
        The latest iPhone models come with tons to love. Helpful Apple
        Intelligence features such as visual Intelligence and Writing Tools to
        make your every day easier. Fast, secure connections with{" "}
        <span className="text-primary">
          Wi-Fi 7, Bluetooth 6, 5G connectivity and eSIM.
        </span>
      </p>
    </section>
  );
};

export default AllInFamily;

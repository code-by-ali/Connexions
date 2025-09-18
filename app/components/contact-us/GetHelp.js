import React from "react";
import ContactUsBg from "../../../public/assets/contact-us-bg.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CommonImage from "../common/CommonImage";

const GetHelp = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <CommonImage
        src={ContactUsBg.src || ContactUsBg} // Handle both static imports and direct paths
        alt="Contact Us Background"
        className="w-full h-auto"
        style={{ objectFit: "contain" }}
      />

      {/* Overlay Content */}
      <div
        className="
          flex flex-col gap-6 px-6 py-8
          text-primary
          md:text-white md:absolute md:inset-0 md:justify-center md:items-start md:px-20
        "
      >
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Get help from the <br /> expert consultants.
        </span>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl">
          With lots of unique setups, you can easily build a <br /> company
          without hassle. Setup your next <br />
          consultancy.
        </span>
        <button className="bg-[#A6CE39] text-white flex items-center gap-4 rounded-lg px-4 py-2 text-sm sm:text-base">
          <span>Started now</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default GetHelp;

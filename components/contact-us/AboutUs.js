import React from "react";
import questionIcon from "@/public/assets/contact-about-que-icon.png";
import AboutUsCard from "../common/AboutUsCard";
import CommonImage from "../common/CommonImage";

const AboutUs = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Top Section */}
      <div className="flex flex-col gap-8 items-center">
        <div className="flex gap-4 items-center">
          <span className="p-4 bg-primary rounded-full">
            <CommonImage
              alt="question-icon"
              height={14}
              width={14}
              src={questionIcon.src || questionIcon}
            />
          </span>
          <span className="text-base text-primary">About us</span>
        </div>

        <div className="text-center flex flex-col gap-6 max-w-3xl">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            <span className="text-primary">Real results, real teams.</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

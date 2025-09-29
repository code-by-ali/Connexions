import React from "react";
import Avatar from "@/public/assets/contact-about-avatar.png";
import ReviewIcon1 from "@/public/assets/contact-about-review-1-svg.svg";
import CommonImage from "./CommonImage";

const AboutUsCard = () => {
  return (
    <div className="border border-[#FDFDFD] rounded-lg w-full max-w-sm p-4 flex flex-col gap-4 shadow-[0px_0px_2px_0px_#00000040]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <CommonImage
            width={32} 
            height={32} 
            src={Avatar.src || Avatar} 
            alt="avatar" 
          />
          <div className="flex flex-col justify-start">
            <span className="font-medium">Marcus B.</span>
            <span className="text-xs text-gray-500">@mb_saas_ae</span>
          </div>
        </div>
        <CommonImage 
          width={24} 
          height={24} 
          src={ReviewIcon1.src || ReviewIcon1} 
          alt="review" 
        />
      </div>

      <p className="text-base text-[#535862] leading-relaxed">
        Connexions deal room cut our internal back-and-forth by half. It's
        Slack, but for closing.
      </p>
    </div>
  );
};

export default AboutUsCard;
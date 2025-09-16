import React from "react";
import Image from "next/image";
import ReviewIcon1 from "@/public/assets/contact-about-review-1-svg.svg";
import ReviewIcon2 from "@/public/assets/contact-about-review-2-svg.svg";
import ReviewIcon3 from "@/public/assets/contact-about-review-3-svg.svg";
import StarRating from "@/public/assets/star-rating-svg.svg";

const Rating = () => {
  return (
    <div className="flex flex-row gap-10 justify-center items-center flex-wrap py-4 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="border border-[#FDFDFD] shadow-[0px_0px_2px_0px_#00000040] py-4 px-6 rounded-lg flex flex-row items-center gap-2">
        <Image
          src={ReviewIcon1}
          width={40}
          height={40}
          unoptimized
          alt="review-icon-1"
        />
        <div className="flex flex-col gap-2">
          <Image
            src={StarRating}
            width={100}
            height={20}
            unoptimized
            alt="star-rating"
          />
          <p className="text-sm">
            <span className="text-primary">4.6</span>
            <span className="text-[#535862]">/5 based on reviews</span>
          </p>
        </div>
      </div>

      <div className="border border-[#FDFDFD] shadow-[0px_0px_2px_0px_#00000040] py-4 px-6 rounded-lg flex flex-row items-center gap-2">
        <Image
          src={ReviewIcon2}
          width={40}
          height={40}
          unoptimized
          alt="review-icon-2"
        />
        <div className="flex flex-col gap-2">
          <Image
            src={StarRating}
            width={100}
            height={20}
            unoptimized
            alt="star-rating"
          />
          <p className="text-sm">
            <span className="text-primary">4.6</span>
            <span className="text-[#535862]">/5 based on reviews</span>
          </p>
        </div>
      </div>

      <div className="border border-[#FDFDFD] shadow-[0px_0px_2px_0px_#00000040] py-4 px-6 rounded-lg flex flex-row items-center gap-2">
        <Image
          src={ReviewIcon3}
          width={40}
          height={40}
          unoptimized
          alt="review-icon-3"
        />
        <div className="flex flex-col gap-2">
          <Image
            src={StarRating}
            width={100}
            height={20}
            unoptimized
            alt="star-rating"
          />
          <p className="text-sm">
            <span className="text-primary">4.6</span>
            <span className="text-[#535862]">/5 based on reviews</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rating;

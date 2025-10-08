import { ChevronRight } from "lucide-react";
import React from "react";
import AppleAirpodsNoiseCancellationIcon from "@/public/assets/apple-airpods-keep-exploring-noise-cancellation-icon.svg";
import AppleAirpodsTwoPeopleIcon from "@/public/assets/apple-airpods-keep-exploring-two-people-icon.svg";
import AppleAirpodsSpatialIcon from "@/public/assets/apple-airpods-keep-exploring-spatial-audio-icon.svg";
import AppleAirpodsHeartIcon from "@/public/assets/apple-airpods-keep-exploring-heart-icon.svg";
import AppleAirpodsEarIcon from "@/public/assets/apple-airpods-keep-exploring-ear-icon.svg";
import AppleAirpodsTranslateIcon from "@/public/assets/apple-airpods-keep-exploring-translate-icon.svg";
import AppleAirpodsH2Icon from "@/public/assets/apple-airpods-keep-exploring-h2-icon.svg";

import AppleAirpodsPro3 from "@/public/assets/apple-airpods-keep-exploring-img-1.svg";
import AppleAirpods4 from "@/public/assets/apple-airpods-keep-exploring-img-2.svg";

import CommonImage from "../common/CommonImage";
import Link from "next/link";

const KeepExploringAirpods = () => {
  return (
    <div className="pt-4 sm:pb-20 md:pb-40 lg:pb-60 bg-[#F5F5F7] flex flex-col gap-6 items-center lg:px-20">
      {/* Compare banner */}
      {/* <div className="bg-[#E8E8EDB8] px-3 py-1 inline-flex gap-4 items-center rounded-full">
        <span>Compare all iPhone models</span>
        <span className="p-1 bg-[#0071E3] rounded-full">
          <ChevronRight className="text-white" />
        </span>
      </div> */}

      {/* Heading row */}
      <div className="w-full flex flex-col gap-4 px-4 md:flex-row justify-between items-start md:items-center ">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-[-0.28px] md:px-0 md:gap-0">
          Keep exploring iPhone.
        </p>
        {/* <div className="flex gap-4 items-center font-normal text-[#0066CC]">
          <span className="text-sm md:text-base">Explore all iPhone</span>
          <ChevronRight />
        </div> */}
      </div>

      {/* Comparison grid */}
      <div className="bg-[#F5F5F7] lg:bg-white w-full rounded-3xl mt-5 md:mt-10 px-4 pb-5 md:pb-10 lg:pb-30">
        <div className="flex flex-row justify-between md:justify-center items-start gap-4 md:gap-10">
          {/* iPhone 17 */}
          <div className="py-5 md:py-10 flex flex-col gap-4 items-start text-left md:items-center md:text-center max-w-[500px]">
            <CommonImage
              src={AppleAirpodsPro3.src || AppleAirpodsPro3}
              className="h-auto w-auto"
            />
            <p className="text-primary text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px]">
              Airpods Pro 3
            </p>
            <p className="text-primary font-normal text-sm md:text-base tracking-[-0.37px]">
              The world’s best in-ear Active Noise Cancellation, with heart rate
              sensing during workouts.
            </p>
            <div className="flex flex-col gap-2 mt-4 items-start md:items-center text-sm md:text-base tracking-[-0.37px] h-[90px] md:h-auto">
              <p className="text-[#424245] px-4 py-2">Currently Viewing</p>
            </div>

            <hr className="my-4 border-[#D2D2D7] w-full" />

            <div className="flex flex-col gap-4 items-start md:items-center text-xs font-normal tracking-[-0.12px]">
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={41}
                  src={
                    AppleAirpodsNoiseCancellationIcon.src ||
                    AppleAirpodsNoiseCancellationIcon
                  }
                  alt="icon-1.1"
                />
                <p>Up to 4x more Active Noise Cancellation</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={35}
                  src={
                    AppleAirpodsTwoPeopleIcon.src || AppleAirpodsTwoPeopleIcon
                  }
                  alt="icon-1.2"
                />
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={36}
                  src={AppleAirpodsSpatialIcon.src || AppleAirpodsSpatialIcon}
                  alt="icon-1.3"
                />
                <p>Personalised Spatial Audio with dynamic head tracking</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={40}
                  src={AppleAirpodsHeartIcon.src || AppleAirpodsHeartIcon}
                  alt="icon-1.4"
                />
                <p>High and low heart rate notifications</p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={42}
                  src={AppleAirpodsEarIcon.src || AppleAirpodsEarIcon}
                  alt="icon-1.4"
                />
                <p>Up to 18 hours</p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={42}
                  src={
                    AppleAirpodsTranslateIcon.src || AppleAirpodsTranslateIcon
                  }
                  alt="icon-1.4"
                />
                <p>Up to 18 hours</p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={42}
                  src={AppleAirpodsH2Icon.src || AppleAirpodsH2Icon}
                  alt="icon-1.4"
                />
                <p>Up to 18 hours</p>
              </div>
            </div>
          </div>

          {/* iPhone 17 Air */}
          <div className="py-5 md:py-10 flex flex-col gap-4 items-start text-left md:items-center md:text-center max-w-[500px]">
            <CommonImage
              src={AppleAirpods4.src || AppleAirpods4}
              className="h-auto w-auto"
            />
            <p className="text-primary text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px]">
              Airpods 4
            </p>
            <p className="text-primary font-normal text-sm md:text-base tracking-[-0.37px]">
              The next evolution of sound, comfort and noise control.
            </p>

            <div className="flex flex-col gap-2 mt-4 items-start md:items-center text-sm md:text-base tracking-[-0.37px] h-[90px] md:h-auto">
              <Link
                href={"https://www.apple.com/in/airpods-4/"}
                target="_blank"
                className="text-white bg-[#0066CC] px-4 py-2 rounded-full"
              >
                Learn More
              </Link>
            </div>

            <hr className="my-4 border-[#D2D2D7] w-full" />

            <div className="flex flex-col gap-4 items-start md:items-center text-xs font-normal tracking-[-0.12px]">
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={41}
                  src={
                    AppleAirpodsNoiseCancellationIcon.src ||
                    AppleAirpodsNoiseCancellationIcon
                  }
                  alt="icon-2.1"
                />
                <p>Active Noise Cancellation</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={35}
                  src={
                    AppleAirpodsTwoPeopleIcon.src || AppleAirpodsTwoPeopleIcon
                  }
                  alt="icon-2.2"
                />
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={36}
                  src={AppleAirpodsSpatialIcon.src || AppleAirpodsSpatialIcon}
                  alt="icon-2.3"
                />
                <p>Personalised Spatial Audio with dynamic head tracking</p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={40}
                  src={AppleAirpodsHeartIcon.src || AppleAirpodsHeartIcon}
                  alt="icon-2.4"
                />
                <p>---</p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={46}
                  src={AppleAirpodsEarIcon.src || AppleAirpodsEarIcon}
                  alt="icon-2.4"
                />
                <p>Up to 24 hours</p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={46}
                  src={
                    AppleAirpodsTranslateIcon.src || AppleAirpodsTranslateIcon
                  }
                  alt="icon-2.4"
                />
                <p>Up to 24 hours</p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={46}
                  src={AppleAirpodsH2Icon.src || AppleAirpodsH2Icon}
                  alt="icon-2.4"
                />
                <p>Up to 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepExploringAirpods;

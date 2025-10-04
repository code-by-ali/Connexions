import { ChevronRight } from "lucide-react";
import React from "react";
import AppleWatchCaseIcon from "@/public/assets/apple-watch-keep-exploring-case-icon.svg";
import AppleWatchFaceIcon from "@/public/assets/apple-watch-keep-exploring-face-icon.svg";
import AppleWatchChipIcon from "@/public/assets/apple-watch-keep-exploring-chip-icon.svg";
import AppleWatchHeartIcon from "@/public/assets/apple-watch-keep-exploring-heart-icon.svg";
import KeepExploringBatteryIcon from "@/public/assets/iphone-17-keep-exploring-battery-icon.svg";

import KeepExploringWatchSE3Image from "@/public/assets/apple-watch-keep-exploring-img-1.svg";
import KeepExploringWatchSeriesImage from "@/public/assets/apple-watch-keep-exploring-img-2.svg";

import CommonImage from "../common/CommonImage";

const KeepExploringWatch = () => {
  return (
    <div className="pt-4 sm:pb-20 md:pb-40 lg:pb-60 bg-[#F5F5F7] flex flex-col gap-6 items-center lg:px-20">
      {/* Compare banner */}
      <div className="bg-[#E8E8EDB8] px-3 py-1 inline-flex gap-4 items-center rounded-full">
        <span>Compare all iPhone models</span>
        <span className="p-1 bg-[#0071E3] rounded-full">
          <ChevronRight className="text-white" />
        </span>
      </div>

      {/* Heading row */}
      <div className="w-full flex flex-col gap-4 px-4 md:flex-row justify-between items-start md:items-center ">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-[-0.28px] md:px-0 md:gap-0">
          Keep exploring iPhone.
        </p>
        <div className="flex gap-4 items-center font-normal text-[#0066CC]">
          <span className="text-sm md:text-base">Explore all iPhone</span>
          <ChevronRight />
        </div>
      </div>

      {/* Comparison grid */}
      <div className="bg-[#F5F5F7] lg:bg-white w-full rounded-3xl mt-5 md:mt-10 px-4 pb-5 md:pb-10 lg:pb-30">
        <div className="flex flex-row justify-between md:justify-center items-start gap-4 md:gap-10">
          {/* iPhone 17 */}
          <div className="py-5 md:py-10 flex flex-col gap-4 items-start text-left md:items-center md:text-center max-w-[500px]">
            <CommonImage
              src={KeepExploringWatchSE3Image.src || KeepExploringWatchSE3Image}
              className="h-auto w-auto"
            />
            <p className="text-primary text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px]">
              Apple Watch SE 3
            </p>
            <p className="text-primary font-normal text-sm md:text-base tracking-[-0.37px]">
              Essential health features at a great value.
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
                  src={AppleWatchCaseIcon.src || AppleWatchCaseIcon}
                  alt="icon-1.1"
                />
                <p>44 mm or 40 mm aluminium case</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={35}
                  src={AppleWatchFaceIcon.src || AppleWatchFaceIcon}
                  alt="icon-1.2"
                />
                <p>Always-On Retina display</p>
                <p>Up to 1,000 nits</p>
                <p>—</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={36}
                  src={AppleWatchChipIcon.src || AppleWatchChipIcon}
                  alt="icon-1.3"
                />
                <p>S10 chip</p>
                <p>Double tap and wrist flick gestures</p>
                <p>On-device Siri</p>
                <p>Find iPhone</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={40}
                  src={AppleWatchHeartIcon.src || AppleWatchHeartIcon}
                  alt="icon-1.4"
                />
                <p>—</p>
                <p>High and low heart rate notifications</p>
                <p>Irregular rhythm notifications</p>
                <p>Low cardio fitness notifications</p>
                <p>—</p>
                <p>Sleep score</p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={42}
                  src={KeepExploringBatteryIcon.src || KeepExploringBatteryIcon}
                  alt="icon-1.4"
                />
                <p>Up to 18 hours</p>
                <p>Up to 32 hours in Low Power Mode</p>
                <p>Fast charging</p>
              </div>
            </div>
          </div>

          {/* iPhone 17 Air */}
          <div className="py-5 md:py-10 flex flex-col gap-4 items-start text-left md:items-center md:text-center max-w-[500px]">
            <CommonImage
              src={
                KeepExploringWatchSeriesImage.src ||
                KeepExploringWatchSeriesImage
              }
              className="h-auto w-auto"
            />
            <p className="text-primary text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px]">
              Apple Watch Series 11
            </p>
            <p className="text-primary font-normal text-sm md:text-base tracking-[-0.37px]">
              The ultimate watch for a healthy life.
            </p>

            <div className="flex flex-col gap-2 mt-4 items-start md:items-center text-sm md:text-base tracking-[-0.37px] h-[90px] md:h-auto">
              <p className="text-white bg-[#0066CC] px-4 py-2 rounded-full">
                Learn More
              </p>
            </div>

            <hr className="my-4 border-[#D2D2D7] w-full" />

            <div className="flex flex-col gap-4 items-start md:items-center text-xs font-normal tracking-[-0.12px]">
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={41}
                  src={AppleWatchCaseIcon.src || AppleWatchCaseIcon}
                  alt="icon-2.1"
                />
                <p>46 mm or 42 mm aluminium or titanium case</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={35}
                  src={AppleWatchFaceIcon.src || AppleWatchFaceIcon}
                  alt="icon-2.2"
                />
                <p>Wide-angle Always-On Retina display</p>
                <p>Up to 2,000 nits</p>
                <p>Brighter when viewed at an angle</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={36}
                  src={AppleWatchChipIcon.src || AppleWatchChipIcon}
                  alt="icon-2.3"
                />
                <p>S10 chip</p>
                <p>Double tap and wrist flick gestures</p>
                <p>On-device Siri</p>
                <p>Precision Finding for iPhone</p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={40}
                  src={AppleWatchHeartIcon.src || AppleWatchHeartIcon}
                  alt="icon-2.4"
                />
                <p>ECG app</p>
                <p>High and low heart rate notifications</p>
                <p>Irregular rhythm notifications</p>
                <p>Low cardio fitness notifications</p>
                <p>Blood Oxygen app</p>
                <p>Sleep score</p>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={46}
                  src={KeepExploringBatteryIcon.src || KeepExploringBatteryIcon}
                  alt="icon-2.4"
                />
                <p>Up to 24 hours</p>
                <p>Up to 38 hours in Low Power Mode</p>
                <p>Fast charging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepExploringWatch;

import React from "react";
import AppleOfferImg from "@/public/assets/apple-offers-1.svg";
import AppleOfferIcon1 from "@/public/assets/apple-offers-icon-1.svg";
import AppleOfferIcon2 from "@/public/assets/apple-offers-icon-2.svg";
import AppleOfferIcon3 from "@/public/assets/apple-offers-icon-3.svg";
import CommonImage from "../common/CommonImage";

const AppleOffers = () => {
  return (
    <div className="py-10 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-10 items-center">
      {/* Title Section */}
      <div className="flex flex-col gap-4 text-center max-w-2xl">
        <p className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          What Apple Offers for Work
        </p>
        <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl">
          Enterprise grade solutions designed for modern businesses
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Card 1 */}
        <div className="flex flex-col gap-4 px-4 py-4 shadow-2xl rounded-2xl w-full sm:w-[300px] md:w-[340px] lg:w-[370px] min-h-[360px] lg:h-[420px] bg-white">
          <div className="flex gap-4 items-center">
            <CommonImage
              width={28}
              height={28}
              src={AppleOfferIcon1.src || AppleOfferIcon1}
              alt="icon"
            />
            <p className="text-base sm:text-lg font-bold text-primary">
              End-to-End Enterprise Readiness
            </p>
          </div>
          <div className="text-sm sm:text-base font-normal text-primary flex flex-col gap-2">
            <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">
              Full lifecycle management, from procurement to support.
            </p>
            <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">
              Zero-touch deployment with Apple Business Manager
            </p>
            <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">
              Mobile device Management (MDM) integrations
            </p>
          </div>
          <div className="mt-auto">
            <CommonImage
              src={AppleOfferImg.src || AppleOfferImg}
              alt="offer-img"
              className="rounded-xl object-contain"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4 px-4 py-4 shadow-2xl rounded-2xl w-full sm:w-[300px] md:w-[340px] lg:w-[370px] min-h-[360px] lg:h-[420px] bg-white">
          <div className="flex gap-4 items-center">
            <CommonImage
              width={28}
              height={28}
              src={AppleOfferIcon2.src || AppleOfferIcon2}
              alt="icon"
            />
            <p className="text-base sm:text-lg font-bold text-primary">
              Security at Every Layer
            </p>
          </div>
          <div className="text-sm sm:text-base font-normal text-primary flex flex-col gap-2">
            <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">
              File Vault encryption, secure boot & biometric access
            </p>
            <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">
              VPN & single sign-on (SSO) support
            </p>
            <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">
              Device & network compliance enforcement
            </p>
          </div>
          <div className="mt-auto">
            <CommonImage
              src={AppleOfferImg.src || AppleOfferImg}
              alt="offer-img"
              className="rounded-xl object-contain"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-4 px-4 py-4 shadow-2xl rounded-2xl w-full sm:w-[300px] md:w-[340px] lg:w-[370px] min-h-[360px] lg:h-[420px] bg-white">
          <div className="flex gap-4 items-center">
            <CommonImage
              width={28}
              height={28}
              src={AppleOfferIcon3.src || AppleOfferIcon3}
              alt="icon"
            />
            <p className="text-base sm:text-lg font-bold text-primary">
              Employee Centric Experience
            </p>
          </div>
          <div className="text-sm sm:text-base font-normal text-primary flex flex-col gap-2">
            <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">
              Full lifecycle management, from procurement to support.
            </p>
            <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">
              Zero-touch deployment with Apple Business Manager
            </p>
            <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">
              Mobile device Management (MDM) integrations
            </p>
          </div>
          <div className="mt-auto">
            <CommonImage
              src={AppleOfferImg.src || AppleOfferImg}
              alt="offer-img"
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleOffers;

"use client";
import React from "react";
import {
  Users,
  ShieldCheck,
  XCircle,
  MoveRight,
  ChevronRight,
} from "lucide-react";
import CommonImage from "../common/CommonImage";
import TalkToExpertIcon from "@/public/assets/talk-to-expert-icon.svg";
import CTAIcon1 from "@/public/assets/apple-solutions-cta-icon-1.svg";
import CTAIcon2 from "@/public/assets/apple-solutions-cta-icon-2.svg";
import CTAIcon3 from "@/public/assets/apple-solutions-cta-icon-3.svg";
import TitleIcon from "@/public/assets/apple-solutions-cta-title-icon.svg";

const AppleCTA = () => {
  return (
    <section className="bg-white text-center py-10 px-6 flex flex-col items-center">
      {/* Announcement Pill */}
      <div className="flex items-center gap-10 bg-[#FAFAFA] text-blue-600 rounded-full px-3 py-1 text-sm font-normal mb-6">
        <span>iPhone 17 is here</span>
        <div className="border-l-1 border-[#E9EAEB] pl-4">
          <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary">
            <CommonImage
              src={TitleIcon.src || TitleIcon}
              height={12}
              width={12}
              alt={"arrow-right"}
            />
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 text-[#1D1D1F]">
        Empower Your Workspace:{" "}
        <span className="text-[#717680] font-bold">
          with <br /> the Apple Ecosystem at Work
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-[#535862] text-lg font-normal tracking-tighter max-w-2xl mb-8">
        From seamless device deployment to enterprise-grade security, Connexions
        delivers Apple-tailored for your business
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <button className="flex cursor-pointer items-center gap-2 bg-[#1D1D1F] text-white px-6 py-3 rounded-full text-sm transition font-normal">
          Explore solution now{" "}
          <span>
            <ChevronRight height={20} width={20} />
          </span>
        </button>
        <button className="flex cursor-pointer items-center gap-2 bg-white border border-[#D5D7DA] text-[#1D1D1F] px-6 py-3 rounded-full text-sm transition font-normal">
          Talk to an Expert{" "}
          <span>
            <CommonImage
              height={20}
              width={20}
              src={TalkToExpertIcon.src || TalkToExpertIcon}
              alt={"cta-icon"}
            />
          </span>
        </button>
      </div>

      {/* Trust Signals */}
      <div className="flex flex-wrap justify-center gap-6 text-[#535862] text-sm font-normal">
        <div className="flex items-center gap-2">
          <CommonImage
            src={CTAIcon1.src || CTAIcon1}
            alt={"cta-icon-1"}
            height={20}
            width={20}
          />
          Trusted by 2,300+ teams
        </div>
        <div className="flex items-center gap-2">
          <CommonImage
            src={CTAIcon2.src || CTAIcon2}
            alt={"cta-icon-2"}
            height={20}
            width={20}
          />{" "}
          Secure & GDPR-Compliant
        </div>
        <div className="flex items-center gap-2">
          <CommonImage
            src={CTAIcon3.src || CTAIcon3}
            alt={"cta-icon-3"}
            height={20}
            width={20}
          />{" "}
          Cancel anytime, no risk
        </div>
      </div>
    </section>
  );
};

export default AppleCTA;

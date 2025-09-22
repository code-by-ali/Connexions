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

const AppleCTA = () => {
  return (
    <section className="bg-white text-center py-10 px-6 flex flex-col items-center">
      {/* Announcement Pill */}
      <div className="flex items-center gap-10 shadow-sm bg-[#FAFAFA] text-blue-600 rounded-full px-3 py-1 text-sm font-medium mb-6">
        <span>iPhone 17 is here</span>
        <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-primary">
          <MoveRight width={12} height={12} />
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-[#1D1D1F]">
        Empower Your Workspace:{" "}
        <span className="text-[#717680] font-bold">
          with <br /> the Apple Ecosystem at Work
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-[#535862] text-base max-w-2xl mb-8">
        From seamless device deployment to enterprise-grade security, Connexions
        delivers Apple-tailored for your business
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <button className="flex items-center gap-2 bg-[#1D1D1F] hover:bg-gray-900 text-white px-6 py-3 rounded-full text-sm transition">
          Explore solution now{" "}
          <span>
            <ChevronRight height={20} width={20} />
          </span>
        </button>
        <button className="flex items-center gap-2 bg-white border border-gray-300 text-[#1D1D1F] px-6 py-3 rounded-full text-sm transition">
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
      <div className="flex flex-wrap justify-center gap-6 text-[#535862] text-xs">
        <div className="flex items-center gap-2">
          <CommonImage
            src={CTAIcon1.src || CTAIcon1}
            alt={"cta-icon-1"}
            height={16}
            width={16}
          />
          Trusted by 2,300+ teams
        </div>
        <div className="flex items-center gap-2">
          <CommonImage
            src={CTAIcon2.src || CTAIcon2}
            alt={"cta-icon-2"}
            height={16}
            width={16}
          />{" "}
          Secure & GDPR-Compliant
        </div>
        <div className="flex items-center gap-2">
          <CommonImage
            src={CTAIcon3.src || CTAIcon3}
            alt={"cta-icon-3"}
            height={16}
            width={16}
          />{" "}
          Cancel anytime, no risk
        </div>
      </div>
    </section>
  );
};

export default AppleCTA;

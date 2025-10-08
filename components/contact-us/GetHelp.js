import React from "react";
import ContactUsBg from "@/public/assets/contact-us-bg.png";
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
          max-w-3xl
        "
      >
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Get help from the <br /> expert consultants.
        </span>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl">
          Whether you're exploring enterprise IT solutions, planning a
          large-scale deployment, or need expert consultation, Connexions is
          here to support you, Our team helps organisation simplify technology
          adoption, optimize workflows, and achieve seamless integration.
        </span>
      </div>
    </div>
  );
};

export default GetHelp;

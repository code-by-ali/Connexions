"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import CommonImage from "../common/CommonImage";
import AppleEcosystemIcon from "@/public/assets/apple-ecosystem-top-icon.svg";
import GridIcon1 from "@/public/assets/apple-ecosystem-icon-1.svg";
import GridIcon2 from "@/public/assets/apple-ecosystem-icon-2.svg";
import GridIcon3 from "@/public/assets/apple-ecosystem-icon-3.svg";
import GridIcon4 from "@/public/assets/apple-ecosystem-icon-4.svg";

import Grid1Icon1 from "@/public/assets/apple-ecosystem-grid-1-icon-1.svg";
import Grid1Icon2 from "@/public/assets/apple-ecosystem-grid-1-icon-2.svg";
import Grid1Icon3 from "@/public/assets/apple-ecosystem-grid-1-icon-3.svg";
import Grid1Icon4 from "@/public/assets/apple-ecosystem-grid-1-icon-4.svg";

import MiniCardIcon1 from "@/public/assets/apple-ecosytem-mini-card-icon-1.svg";
import MiniCardIcon2 from "@/public/assets/apple-ecosytem-mini-card-icon-2.svg";
import MiniCardIcon3 from "@/public/assets/apple-ecosytem-mini-card-icon-3.svg";
import MiniCardIcon4 from "@/public/assets/apple-ecosytem-mini-card-icon-4.svg";
import MiniCardIcon5 from "@/public/assets/apple-ecosytem-mini-card-icon-5.svg";

import Marquee from "react-fast-marquee";
import Link from "next/link";

const AppleEcosystem = () => {
  // Extra data renderers
  const AdditionalDataCard1 = () => {
    const features = [
      { icon: Grid1Icon1, label: "Device Enrollment" },
      { icon: Grid1Icon2, label: "App & Content Distribution" },
      { icon: Grid1Icon3, label: "Role-based Access" },
      { icon: Grid1Icon4, label: "Seamless MDM Integration" },
    ];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-3 sm:p-4 border border-[#E9EAEB]"
          >
            <div className="bg-[#F5F5F5] rounded-lg p-2 flex flex-row md:flex-col xl:flex-row gap-1 sm:gap-2 items-center md:items-start xl:items-center">
              {/* Icon container */}
              <div className="rounded-lg p-1 flex items-center justify-center flex-shrink-0">
                <CommonImage
                  src={feature.icon.src || feature.icon}
                  alt={feature.label}
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </div>

              {/* Label */}
              <p className="bg-white text-[#1D1D1F] rounded-lg text-xs lg:text-sm font-medium leading-tight px-2 py-1 flex-1 md:w-full xl:flex-1">
                {feature.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const AdditionalDataCard2 = () => {
    // Dummy data for cards
    const dummyCards = [
      {
        id: 1,
        title: "Cost savings",
        icon: MiniCardIcon1,
        dataMain: "40%",
        dataChange: "",
        secondaryData: <span>Lower IT costs</span>,
      },
      {
        id: 2,
        title: "Faster ROI",
        icon: MiniCardIcon4,
        dataMain: "3X",
        dataChange: "",
        secondaryData: <span>Return in Investment</span>,
      },
      {
        id: 3,
        title: "Adoption Rate",
        icon: MiniCardIcon5,
        dataMain: "$367,898",
        dataChange: "",
        secondaryData: (
          <span>
            <span className="text-primary font-bold">$320,071 </span> last year
          </span>
        ),
      },
    ];

    const dummyCards2 = [
      {
        id: 1,
        title: "Enterprise Security",
        icon: MiniCardIcon2,
        dataMain: "99.9%",
        dataChange: "",
        secondaryData: <span>Data Security</span>,
      },
      {
        id: 2,
        title: "Productivity Boost",
        icon: MiniCardIcon3,
        dataMain: "70%",
        dataChange: "",
        secondaryData: <span>Higher productivity</span>,
      },
      {
        id: 3,
        title: "Enterprise Security",
        icon: MiniCardIcon2,
        dataMain: "99.9%",
        dataChange: "",
        secondaryData: <span>Data Security</span>,
      },
      {
        id: 4,
        title: "Productivity Boost",
        icon: MiniCardIcon3,
        dataMain: "70%",
        dataChange: "",
        secondaryData: <span>Higher productivity</span>,
      },
    ];

    const CardTemplate = ({ card }) => {
      return (
        <div className="border border-gray-100 bg-[#FDFDFD] rounded-2xl min-w-[240px] flex flex-col p-4 gap-4">
          <p className="flex gap-2 text-[#535862] text-sm font-normal items-center">
            <span>
              <CommonImage
                src={card.icon.src || card.icon}
                alt={"card-icon"}
                height={20}
                width={20}
              />
            </span>
            <span>{card.title}</span>
          </p>
          <div className="flex gap-2 items-end">
            <span className="text-primary text-3xl font-bold">
              {card.dataMain}
            </span>
          </div>
          <p className="text-sm text-[#535862] font-normal">
            {card.secondaryData}
          </p>
        </div>
      );
    };

    return (
      <div className="w-full flex flex-col gap-8">
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <Marquee>
            {dummyCards.map((card) => (
              <div className="mx-4">
                <CardTemplate card={card} />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <Marquee direction="right">
            {dummyCards2.map((card) => (
              <div className="mx-4">
                <CardTemplate card={card} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    );
  };

  const AdditionalDataCard3 = () => {
    const features = [
      {
        title: "Collaboration",
        desc: "Work effortlessly across Mac, iPad, and iPhone with apps your teams already love.",
      },
      {
        title: "Security",
        desc: "Enterprise-grade protection with built-in encryption, privacy, and zero-trust management.",
      },
      {
        title: "Flexibility",
        desc: "Support for remote, hybrid, and on-site teams with secure mobility solutions.",
      },
      {
        title: "Integration",
        desc: "Easily connect with existing apps like Slack, Zoom, and Microsoft 365.",
      },
      {
        title: "Performance",
        desc: "Unmatched power and battery life designed for business productivity.",
      },
    ];

    return (
      <div className="bg-white rounded-2xl p-6 flex flex-col gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="bg-[#FDFDFD] border border-[#E9EAEB] rounded-xl p-2 w-full sm:w-4/5 flex flex-col">
              <h4 className="text-[#1D1D1F] text-xs md:text-sm font-bold">
                {feature.title}
              </h4>
              <p className="text-[#535862] text-xs md:text-sm font-normal">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const AdditionalDataCard4 = () => {
    const features = [
      {
        title: "Expert Guidance",
        desc: "Get specialized consulting from Apple-certified professionals.",
      },
      {
        title: "Tailored Solutions",
        desc: "Get specialized consulting from Apple-certified professionals.",
      },
      {
        title: "Seamless Integration",
        desc: "Deploy Apple devices with existing workflows, apps, and IT.",
      },
      {
        title: "Ongoing Support",
        desc: "Continuous assistance for updates, troubleshooting, and upgrades.",
      },
    ];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#FDFDFD] border border-[#E9EAEB] rounded-xl p-6 flex flex-col gap-2"
          >
            <h4 className="text-[#1D1D1F] text-xs md:text-sm font-bold">
              {feature.title}
            </h4>
            <p className="text-[#535862] text-xs md:text-sm font-normal leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    );
  };

  // Card data
  const ecosystemCards = [
    {
      title: "Apple for Enterprise",
      link: "/apple-for-enterprise",
      icon: GridIcon1,
      descriptionPrimary:
        "Empower your workforce with a secure, seamless ecosystem.",
      descriptionSecondary:
        "Drive efficiency, cut costs, and unlock productivity at scale.",
      AdditionalData: AdditionalDataCard1,
    },
    {
      title: "Apple Business Manager",
      icon: GridIcon2,
      link: "/apple-business-manager",
      descriptionPrimary:
        "Simplify how your organization deploys, manages, and secures Apple devices at scale. With Apple Business Manager (ABM), IT teams can configure devices instantly while employees enjoy a seamless out-of-the-box experience.",
      descriptionSecondary: "",
      AdditionalData: AdditionalDataCard2,
    },
    {
      title: "Apple @ work",
      icon: GridIcon3,
      link: "/apple-for-work",
      descriptionPrimary: "Seamless tools for modern workplaces.",
      descriptionSecondary:
        "Boost productivity, empower teams, and simplify IT with Apple's ecosystem.",
      AdditionalData: AdditionalDataCard3,
    },
    {
      title: "Apple Consultant Network",
      icon: GridIcon4,
      link: "/apple-consultant-partner",
      descriptionPrimary:
        "Certified Apple experts helping your business integrate, secure, and scale with tailored Apple solutions. ",
      descriptionSecondary:
        "From consulting to ongoing support, we're with you every step of the way.",
      AdditionalData: AdditionalDataCard4,
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-[#0F0F0F] rounded-full flex items-center justify-center">
              <CommonImage
                src={AppleEcosystemIcon.src || AppleEcosystemIcon}
                alt={"apple-ecosystem-icon"}
                height={16}
                width={16}
              />
            </div>
            <span className="ml-3 text-base font-medium text-[#0F0F0F] tracking-tight">
              Meet Apple
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-[-1.5px] mb-4">
            Our Apple Ecosystem.
          </h2>
          <p className="text-lg text-[#535862] font-normal tracking-tighter">
            Comprehensive Apple solutions for modern businesses
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ecosystemCards.map((card, index) => {
            const ExtraComponent = card.AdditionalData; // assign function
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[#E9EAEB]"
              >
                {/* Card Header */}
                <div className="mb-8">
                  <div className="flex items-center mb-4 gap-2 text-[#A6CE39]">
                    <CommonImage
                      height={24}
                      width={24}
                      src={card.icon.src || card.icon}
                    />
                    <Link href={card.link}>
                      <h3 className="text-base md:text-lg font-medium tracking-tight">
                        {card.title}
                      </h3>
                    </Link>
                    <ChevronRight size={20} />
                  </div>
                  <p className="leading-relaxed text-lg md:text-xl xl:text-2xl tracking-[-1.01px] font-normal">
                    <span className="text-[#1D1D1F]">
                      {card.descriptionPrimary}
                    </span>
                    <span className="text-[#535862]">
                      {card.descriptionSecondary}
                    </span>
                  </p>
                </div>

                {/* Render extra data if exists */}
                {ExtraComponent && <ExtraComponent />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppleEcosystem;

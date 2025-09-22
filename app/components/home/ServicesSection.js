"use client";
import React from "react";
import {
  Monitor,
  Headphones,
  Server,
  Briefcase,
  Smartphone,
  RefreshCcw,
  Settings,
  Gift,
} from "lucide-react";
import FAQIcon from "@/public/assets/faq-icon.svg";
import CommonImage from "../common/CommonImage";
import ServicesSectionIcon1 from "@/public/assets/services-section-grid-icon-1.svg";
import ServicesSectionIcon2 from "@/public/assets/services-section-grid-icon-2.svg";
import ServicesSectionIcon3 from "@/public/assets/services-section-grid-icon-3.svg";
import ServicesSectionIcon4 from "@/public/assets/services-section-grid-icon-4.svg";
import ServicesSectionIcon5 from "@/public/assets/services-section-grid-icon-5.svg";
import ServicesSectionIcon6 from "@/public/assets/services-section-grid-icon-6.svg";
import ServicesSectionIcon7 from "@/public/assets/services-section-grid-icon-7.svg";
import ServicesSectionIcon8 from "@/public/assets/services-section-grid-icon-8.svg";

const services = [
  {
    icon: ServicesSectionIcon1,
    title: "Device Procurement & Mobility Solutions",
    tags: ["TAG1", "TAG2", "TAG3"],
    description:
      "Seamless sourcing, configuration, and delivery of devices with enterprise-grade mobility management to keep your teams connected anywhere.",
  },
  {
    icon: ServicesSectionIcon2,
    title: "AV & VC Solutions",
    tags: ["TAG1", "TAG2", "TAG3"],
    description:
      "Transform communication with advanced audio-visual and video conferencing setups — built for clarity, collaboration, and scale.",
  },
  {
    icon: ServicesSectionIcon3,
    title: "End-to-End IT Enablement",
    tags: ["TAG1", "TAG2", "TAG3"],
    description:
      "From infrastructure to applications, we deliver complete IT enablement so your business can innovate without limits.",
  },
  {
    icon: ServicesSectionIcon4,
    title: "Workspace Automation",
    tags: ["TAG1", "TAG2", "TAG3"],
    description:
      "Smart tools and integrated systems that simplify workflows, enhance productivity, and create future-ready workplaces.",
  },
  {
    icon: ServicesSectionIcon5,
    title: "Zero-Touch Deployment",
    tags: ["TAG1", "TAG2", "TAG3"],
    description:
      "Deploy devices straight to employees, pre-configured and secure, with no IT desk involvement required.",
  },
  {
    icon: ServicesSectionIcon6,
    title: "Lifecycle Management",
    tags: ["TAG1", "TAG2", "TAG3"],
    description:
      "Optimize the entire journey of your IT assets — from procurement and usage to upgrades, trade-ins, and recycling.",
  },
  {
    icon: ServicesSectionIcon7,
    title: "Custom Enterprise Solutions",
    tags: ["TAG1", "TAG2", "TAG3"],
    description:
      "Tailored IT strategies and solutions designed to meet the unique needs of enterprises and large organizations.",
  },
  {
    icon: ServicesSectionIcon8,
    title: "Sustainable Corporate Gifting Solutions",
    tags: ["TAG1", "TAG2", "TAG3"],
    description:
      "Eco-friendly, branded gifting options that align with sustainability goals while building lasting employee and client connections.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#F8F9FA] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm">
            <CommonImage
              height={16}
              width={16}
              alt="faq-icon"
              src={FAQIcon.src || FAQIcon}
            />
          </div>
          <p className="ml-2 text-base text-primary">Services</p>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-12">
          Services from connexions
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E4E7EB] p-6 flex flex-col items-start text-left"
            >
              <div className="bg-[#F4F6FA] w-12 h-12 rounded-full mb-4 flex items-center justify-center">
                <CommonImage
                  src={service.icon.src || service.icon}
                  height={24}
                  width={24}
                  alt={service.title}
                />
              </div>
              <h3 className="text-lg font-semibold text-[#0F0F0F] mb-2">
                {service.title}
              </h3>
              <div className="flex flex-wrap gap-4 mb-3">
                {service.tags.map((tag, tIdx) => (
                  <p
                    key={tIdx}
                    className="text-xs font-normal flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-[#A6CE39] rounded-full"></span>
                    <span className="text-[#0F0F0F]">{tag}</span>
                  </p>
                ))}
              </div>
              <p className="text-sm text-[#565F6B] ">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="px-6 py-3 rounded-xl bg-primary text-base text-white font-medium transition">
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

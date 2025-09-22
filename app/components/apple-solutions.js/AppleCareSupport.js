import React from "react";
import { Check, Shield } from "lucide-react";
import TitleIcon from "@/public/assets/faq-icon.svg";
import CommonImage from "../common/CommonImage";

const AppleCareSupport = () => {
  const supportPackages = [
    {
      title: "Apple Care",
      features: [
        "Extended warranty",
        "Priority support",
        "Hardware protection",
      ],
    },
    {
      title: "Warranty",
      features: ["Standard coverage", "Repair services", "Parts replacement"],
    },
    {
      title: "On-site support",
      features: [
        "Technicians visits",
        "Installation help",
        "Training sessions",
      ],
    },
    {
      title: "Enterprise Helpdesk",
      color: "text-green-600",
      features: ["24/7 availability", "Remote assistance", "Account Manager"],
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1D1D1F] rounded-full flex items-center justify-center">
              <CommonImage
                height={16}
                width={16}
                src={TitleIcon.src || TitleIcon}
                alt={"seamless-icon"}
              />
            </div>
            <span className="ml-3 text-sm font-medium text-[#1D1D1F]">
              Apple Care
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-4">
            Apple Care & Support Packages
          </h2>
          <p className="text-lg text-[#535862]">
            Comprehensive support for your Apple devices
          </p>
        </div>

        {/* Support Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportPackages.map((package_, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-sm border border-[#F4F4F4] rounded-2xl"
            >
              <h3 className={`text-lg font-semibold mb-8 text-[#A6CE39]`}>
                {package_.title}
              </h3>

              <div className="space-y-4">
                {package_.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#36B971]" />
                    </div>
                    <span className="text-[#1D1D1F] text-sm md:text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppleCareSupport;

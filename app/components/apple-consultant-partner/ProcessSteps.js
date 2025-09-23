"use client";
import React from "react";
import { CircleCheckBig, Monitor } from "lucide-react"; // you can replace with your own icons if needed

const ProcessSteps = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Discovery Call & Assessment",
      icon: <Monitor className="w-5 h-5 text-white" />,
    },
    {
      step: "Step 2",
      title: "Custom Apple Ecosystem Plan",
      icon: <Monitor className="w-5 h-5 text-white" />,
    },
    {
      step: "Step 3",
      title: "Deployment & MDM Intergration",
      icon: <Monitor className="w-5 h-5 text-white" />,
    },
    {
      step: "Step 4",
      title: "Deployment & MDM Intergration",
      icon: <Monitor className="w-5 h-5 text-white" />,
    },
    {
      step: "Publish",
      title: "User Training & Onboarding",
      icon: <CircleCheckBig className="w-5 h-5 text-white" />,
      highlight: true,
    },
  ];

  return (
    <div className="bg-[#f9f9fb] px-4 sm:px-8 md:px-12 lg:px-20 py-12 flex flex-col gap-10">
      {/* Title */}
      <div className="flex flex-col gap-3 items-center text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          The process we follow
        </p>
        <p className="text-[#4B5563] text-base md:text-lg max-w-3xl">
          Transform your Apple device management with powerful enterprise grade
          capabilities
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-wrap justify-center items-start gap-8">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-3 w-[180px]"
          >
            {/* Circle with step */}
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-full border ${
                item.highlight
                  ? "border-[#A6CE39] bg-white text-[#A6CE39]"
                  : "border-gray-300 bg-white text-primary"
              }`}
            >
              <span
                className={` p-2 rounded-full ${
                  item.highlight ? "bg-[#A6CE39]" : "bg-primary"
                }`}
              >
                {item.icon}
              </span>
              <span className="text-sm">{item.step}</span>
            </div>

            {/* Title */}
            <p className="text-sm sm:text-base font-semibold text-primary">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;

"use client";
import React from "react";
import { CircleCheckBig, Monitor } from "lucide-react"; 
import StepIcon1 from "@/public/assets/process-steps-icon-1.svg"
import StepIcon2 from "@/public/assets/process-steps-icon-2.svg"
import StepIcon3 from "@/public/assets/process-steps-icon-3.svg"
import StepIcon4 from "@/public/assets/process-steps-icon-4.svg"
import StepIcon5 from "@/public/assets/process-steps-icon-5.svg"
import CommonImage from "../common/CommonImage";

const ProcessSteps = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Discovery Call & Assessment",
      icon: <CommonImage className="w-4 h-4" src={StepIcon1.src||StepIcon1} alt={"step-icon-1"}/>,
    },
    {
      step: "Step 2",
      title: "Custom Apple Ecosystem Plan",
      icon: <CommonImage className="w-4 h-4" src={StepIcon2.src||StepIcon2} alt={"step-icon-1"}/>,
    },
    {
      step: "Step 3",
      title: "Deployment & MDM Intergration",
      icon: <CommonImage className="w-4 h-4" src={StepIcon3.src||StepIcon3} alt={"step-icon-1"}/>,
    },
    {
      step: "Step 4",
      title: "Deployment & MDM Intergration",
      icon: <CommonImage className="w-4 h-4" src={StepIcon4.src||StepIcon4} alt={"step-icon-1"}/>,
    },
    {
      step: "Publish",
      title: "User Training & Onboarding",
      icon: <CommonImage className="w-4 h-4" src={StepIcon5.src||StepIcon5} alt={"step-icon-1"}/>,
      highlight: true,
    },
  ];

  return (
    <div className="bg-[#F5F5F7] px-4 sm:px-8 md:px-12 lg:px-20 py-12 flex flex-col gap-10">
      {/* Title */}
      <div className="flex flex-col gap-3 items-center text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          The process we follow
        </p>
        <p className="text-[#4B5563] text-base md:text-lg max-w-3xl font-normal">
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
                  ? "border-[#A6CE39]  text-[#A6CE39]"
                  : "border-[#E0E0E0]  text-primary"
              }`}
            >
              <span
                className={` p-2 rounded-full ${
                  item.highlight ? "bg-[#A6CE39]" : "bg-primary"
                }`}
              >
                {item.icon}
              </span>
              <span className="text-base font-normal">{item.step}</span>
            </div>

            {/* Title */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;

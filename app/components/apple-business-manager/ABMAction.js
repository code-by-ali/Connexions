"use client";
import React, { useState } from "react";
import CommonImage from "../common/CommonImage";
import ABMActionImg1 from "@/public/assets/abm-action-img-1.svg";
import ABMActionImg2 from "@/public/assets/abm-action-img-2.svg";
import ABMActionImg3 from "@/public/assets/abm-action-img-3.svg";
import ABMActionImg4 from "@/public/assets/abm-action-img-4.svg";
import ABMActionIcon1 from "@/public/assets/abm-action-icon-1.svg";
import ABMActionIcon2 from "@/public/assets/abm-action-icon-2.svg";
import ABMActionIcon3 from "@/public/assets/abm-action-icon-3.svg";
import ABMActionIcon4 from "@/public/assets/abm-action-icon-4.svg";

const ABMAction = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      id: "01",
      icon: (
        <CommonImage
          height={24}
          width={24}
          src={ABMActionIcon1.src || ABMActionIcon1}
          alt={"abm-action-icon-1"}
        />
      ),
      actionImage: ABMActionImg1,
      title: "Procurement",
      label: "Procurement",
      description:
        "Purchase Apple devices through authorized resellers with automatic ABM assignment",
    },
    {
      id: "02",
      icon: (
        <CommonImage
          height={24}
          width={24}
          src={ABMActionIcon2.src || ABMActionIcon2}
          alt={"abm-action-icon-2"}
        />
      ),
      actionImage: ABMActionImg2,
      title: "Enrollment",
      label: "Enrollment",
      description:
        "Devices automatically enrol in your MDM solution when first powered on ",
    },
    {
      id: "03",
      icon: (
        <CommonImage
          height={24}
          width={24}
          src={ABMActionIcon3.src || ABMActionIcon3}
          alt={"abm-action-icon-3"}
        />
      ),
      actionImage: ABMActionImg3,

      title: "Deployment",
      label: "Deployment",
      description:
        "Apps, Settings and configurations are automatically applied to each device",
    },
    {
      id: "04",
      icon: (
        <CommonImage
          height={24}
          width={24}
          src={ABMActionIcon4.src || ABMActionIcon4}
          alt={"abm-action-icon-4"}
        />
      ),
      actionImage: ABMActionImg4,
      title: "Management",
      label: "Management",
      description:
        "Ongoing device management, updates and compliance monitoring",
    },
  ];

  const currentStep = workflowSteps[activeStep];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            ABM in Action
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            From procurement to management, see how ABM streamlines your entire
            workflow
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-12">
          {workflowSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <button
                onClick={() => setActiveStep(index)}
                className={`flex cursor-pointer outline-none items-center justify-between w-full sm:w-auto min-w-[200px] px-4 py-3 rounded-lg transition-all duration-200  ${
                  activeStep === index
                    ? "bg-[#F5F5F7] text-primary"
                    : "bg-white text-gray-700 hover:bg-[#F5F5F7]"
                }`}
              >
                <div className="flex items-center gap-3">
                  {step.icon}
                  <span className="font-medium text-base sm:text-lg">
                    {step.label}
                  </span>
                </div>
                <span
                  className={`text-base sm:text-lg font-medium ${
                    activeStep === index ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {step.id}
                </span>
              </button>
            </React.Fragment>
          ))}
        </div>
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Content (1/3) */}
          <div className="lg:col-span-1 flex flex-col justify-center space-y-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#D1D5DD]">
              {currentStep.id}.
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {currentStep.title}
              </h3>
              <p className="text-base sm:text-lg text-[#4B5563] mb-6 leading-relaxed">
                {currentStep.description}
              </p>
              <button className="bg-primary text-sm md:text-base text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image (2/3) */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-[#F5F5F7]">
              <CommonImage
                src={currentStep.actionImage.src || currentStep.actionImage}
                alt={`abm-action-img-${currentStep.id}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABMAction;

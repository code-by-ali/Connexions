"use client";
import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const StillHaveQuestions = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const questionsData = [
    {
      question: "What makes Apple devices suitable for business environments?",
      answer: (
        <>
          Apple devices are built with performance, security, and seamless user
          experience at their core. From macOS to iOS, every Apple product
          integrates effortlessly with business workflows, offers advanced
          security features, and supports tools like MDM (Mobile Device
          Management), making them ideal for work.
        </>
      ),
    },
    {
      question: "Can Apple devices be managed remotely in bulk?",
      answer:
        "Yes. Apple Business Manager and MDM tools enable simple and secure remote device management. IT teams can deploy, configure, and manage Apple devices across locations without physically handling each one — perfect for scaling teams or hybrid models.",
    },
    {
      question: "How secure are Apple products for enterprise use?",
      answer:
        "Apple leads the industry in device security. Features like built-in encryption, Touch ID/Face ID, secure boot processes, and app sandboxing ensure that data stays protected — both on-device and across networks.",
    },
    {
      question:
        "Do Apple devices work with Microsoft Office and other business apps?",
      answer:
        "Absolutely. Apple devices are fully compatible with Microsoft 365, Zoom, Slack, Google Workspace, and more. You get the same productivity apps your team already uses, optimized for performance and design on Apple hardware.",
    },
    {
      question: "What services does Connexions provide with Apple solutions?",
      answer:
        "We offer consultation, deployment, configuration, and ongoing support. As an Authorised Apple Reseller, Connexions ensures smooth onboarding, employee training, warranty management, and enterprise-grade service tailored to your needs.",
    },
    {
      question:
        "Can we integrate Apple solutions into our existing IT infrastructure?",
      answer:
        "Yes. Apple works well in mixed environments. Whether you’re integrating with Windows servers, cloud-based tools, or legacy systems, Apple devices can be configured to fit within your IT ecosystem with minimal friction.",
    },
    {
      question: "What kind of support do you offer post-deployment?",
      answer:
        "We offer dedicated after-sales support, AMC, and device lifecycle management. From troubleshooting to hardware repairs, software updates, or onboarding new users, Connexions ensures your Apple experience remains smooth and business-focused.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-[#FAFAFA] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="items-center justify-center mb-6 gap-2 bg-white inline-flex p-1 rounded-3xl ">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <p className="text-base font-medium text-primary tracking-[-0.45px]">
              Still Have Questions
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 tracking-[-1.5px]">
            Still have questions?
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#717680] mb-6 tracking-[-1.5px]">
            We've got you covered.
          </p>
          <p className="text-base md:text-lg font-normal text-[#535862] tracking-[-0.3px]">
            If it's not covered here, reach out or <br />
            Just try Apple for yourself.
          </p>
        </div>

        {/* Questions List */}
        <div className="space-y-1 p-4 bg-white rounded-2xl">
          {questionsData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full outline-none py-6 px-2 text-left flex items-center justify-between transition-colors group"
              >
                <div
                  className={`flex items-center gap-1 tracking-tighter ${
                    openIndex == index ? "text-[#A6CE39]" : "text-[#1D1D1F]"
                  }`}
                >
                  <span className="text-base font-medium">
                    {index + 1}. {item.question}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <div
                    className={`transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-[#717680]" />
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div className="pb-6 px-2">
                  <div className=" pr-8">
                    <p className="text-[#535862] text-base font-normal leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StillHaveQuestions;

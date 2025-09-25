"use client";
import React, { useState } from "react";
import { HelpCircle, X, Plus } from "lucide-react";
import FAQIcon from "@/public/assets/faq-icon.svg";
import CommonImage from "../common/CommonImage";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqData = [
    {
      question: "What is a Connexions?",
      answer:
        "We pride ourselves in our 'client-first' mindset. We aim to provide cutting-edge solutions designed to empower your team with a special emphasis on superior customer care.",
    },
    {
      question: "What services do we provide?",
      answer:
        "We provide comprehensive business solutions including consulting, technology implementation, customer support systems, and strategic planning services tailored to your specific needs.",
    },
    {
      question: "Can I use multiple services at the same time?",
      answer:
        "Yes, absolutely! Our services are designed to work together seamlessly. You can combine multiple services to create a comprehensive solution that meets all your business requirements.",
    },
    {
      question: "How customizable are the setups?",
      answer:
        "Our setups are highly customizable to match your specific business needs. We work closely with you to understand your requirements and tailor our solutions accordingly.",
    },
    {
      question: "What tools do the connexions integrate with?",
      answer:
        "We integrate with a wide range of popular business tools including CRM systems, project management platforms, communication tools, and various third-party applications to ensure seamless workflow.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-[#F8F9FA] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4 gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <CommonImage
                height={16}
                width={16}
                alt="faq-icon"
                src={FAQIcon.src || FAQIcon}
              />
            </div>
            <p className="text-sm md:text-base text-primary font-medium tracking-tight">
              FAQ
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4 tracking-[-3px]">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-[#4E5B6D] font-medium tracking-[-0.36px]">
            Do you want to learn more about us, let's go the blog page.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${openIndex === index?"bg-white":"bg-transparent"} border border-[#E4E4E4] overflow-hidden rounded-2xl`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full outline-none px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="text-base md:text-lg font-medium text-primary pr-8 tracking-[-0.36px]">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  <div
                    className={`transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <Plus className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-4">
                    <p className="text-[#4E5B6D] leading-relaxed text-base md:text-lg tracking-[-0.36px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Help Center Button */}
        <div className="text-center mt-12">
          <button className="bg-primary outline-none cursor-pointer text-white px-6 py-3 rounded-xl text-base font-medium">
            Help Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

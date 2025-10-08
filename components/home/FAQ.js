"use client";
import React, { useState } from "react";
import { HelpCircle, X, Plus } from "lucide-react";
import FAQIcon from "@/public/assets/faq-icon.svg";
import CommonImage from "../common/CommonImage";
import Link from "next/link";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqData = [
    {
      question:
        "How does Connexions simplify Apple and Samsung deployments for enterprises?",
      answer:
        "We take the complexity out of large-scale deployments. With zero-touch enrollment, Apple Business Manager (ABM), Samsung Knox, and seamless MDM integration, your devices arrive pre-configured and ready to use. IT saves time, employees get started faster, and your business scales with ease.",
    },
    {
      question:
        "What industries does Connexions serve with enterprise-ready IT solutions?",
      answer:
        "We partner with organizations across Healthcare & Life Sciences, Corporate Enterprises, Automotive, Manufacturing & Industrial, and IT/ITES. Each solution is tailored to industry-specific needs, ensuring technology empowers your teams and delivers measurable business outcomes.",
    },
    {
      question:
        "Why choose Connexions over other enterprise solution providers?",
      answer:
        "Because we are more than a reseller. As an authorized enterprise partner for Apple and Samsung, we deliver end-to-end solutions — from procurement and deployment to training, support, and lifecycle management. Our customer-first approach ensures technology adoption is smooth, scalable, and aligned with your strategy.",
    },
    {
      question:
        "What support and services can enterprises expect after deployment?",
      answer:
        "Our commitment doesn't end at delivery. Connexions offers AppleCare for Business, extended warranties, trade-in programs, device recycling, AMC, and 24/7 enterprise support. We help you protect your investment while keeping your workforce productive and connected.",
    },
    {
      question:
        "How does Connexions ensure security and scalability for modern businesses?",
      answer:
        "With zero-trust security frameworks, built-in Apple and Samsung encryption, secure mobile device management, and scalable deployment models, we safeguard your data while ensuring your technology grows with your enterprise. Security and productivity go hand in hand with Connexions.",
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
              className={`${
                openIndex === index ? "bg-white" : "bg-transparent"
              } border border-[#E4E4E4] overflow-hidden rounded-2xl`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full outline-none cursor-pointer px-6 py-4 text-left flex items-center justify-between"
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
                  <div className="pt-0">
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
          <Link href={"/contact-us"}>
            <button className="bg-primary outline-none cursor-pointer text-white px-6 py-3 rounded-xl text-base font-medium">
              Help Center
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

"use client";
import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const StillHaveQuestions = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const questionsData = [
    {
      question: "Is there a free trial?",
      answer:
        "Yes — when you sign up, you'll get instant access to a 14-day free trial of our Growth plan. You don't need a credit card, and you can explore all premium features including automations, AI call summaries, and integrations. After the trial, you'll have the option to upgrade or continue on the free Starter tier — no interruption to your account.",
    },
    {
      question: "What happens after my trial ends?",
      answer:
        "After your 14-day free trial ends, you can choose to upgrade to a paid plan to continue using premium features, or you'll be automatically moved to our free Starter plan which includes basic functionality and limited features.",
    },
    {
      question: "Can I cancel or change plans anytime?",
      answer:
        "Yes, you can cancel or change your plan at any time. If you cancel a paid plan, you'll continue to have access to premium features until the end of your billing period, after which you'll be moved to the free plan.",
    },
    {
      question: "What integrations does Connexions support?",
      answer:
        "Connexions integrates with popular tools including Slack, Microsoft Teams, Google Workspace, Salesforce, HubSpot, Zoom, and many other business applications to streamline your workflow.",
    },
    {
      question: "How does Connexions keep my data secure?",
      answer:
        "We use enterprise-grade security including end-to-end encryption, secure data centers, regular security audits, and comply with industry standards like SOC 2 and GDPR to protect your data.",
    },
    {
      question: "Can I add more teammates later?",
      answer:
        "Absolutely! You can add or remove team members at any time. Billing is prorated automatically, so you only pay for what you use when you add new users mid-billing cycle.",
    },
    {
      question: "Who is Connexions built for?",
      answer:
        "Connexions is designed for growing businesses, sales teams, customer support teams, and any organization looking to improve their communication and workflow efficiency with powerful collaboration tools.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6 gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <p className="text-base text-primary font-medium">
              Still Have Questions
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
            Still have questions?
          </h2>
          <p className="text-xl md:text-2xl text-[#717680] mb-6">
            We've got you covered.
          </p>
          <p className="text-base text-[#535862]">
            If it's not covered here, reach out or <br />
            Just try Apple for yourself.
          </p>
        </div>

        {/* Questions List */}
        <div className="space-y-1">
          {questionsData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full outline-none py-6 px-2 text-left flex items-center justify-between hover:bg-[#FDFDFD] transition-colors group"
              >
                <div
                  className={`flex items-center gap-4 ${
                    openIndex == index ? "text-[#A6CE39]" : "text-[#1D1D1F]"
                  }`}
                >
                  <span className="font-medium text-lg">{index + 1}.</span>
                  <span className="text-lg font-medium">{item.question}</span>
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
                  <div className="ml-10 pr-8">
                    <p className="text-[#535862] leading-relaxed">
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

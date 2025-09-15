import { MoveRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import timelineImg1 from "../../../public/assets/contact-page-timeline-1.png";
import timelineImg2 from "../../../public/assets/contact-page-timeline-2.png";
import timelineImg3 from "../../../public/assets/contact-page-timeline-3.png";

const steps = [
  {
    id: "01",
    title: "Simple Booking",
    desc: "Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.",
    img: timelineImg1,
  },
  {
    id: "02",
    title: "Tailored Strategy",
    desc: "We analyze your goals and create a customized strategy designed to offer measurable success for your business.",
    img: timelineImg2,
  },
  {
    id: "03",
    title: "Continuous Support",
    desc: "From implementation to optimization, we provide ongoing guidance to ensure long-term growth for you and your business.",
    img: timelineImg3,
  },
];

const ContactTimeline = () => {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Top Section */}
      <div className="flex flex-col gap-6 items-center mb-20">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#A6CE39] rounded-full"></span>
          <span className="text-lg text-[#A6CE39]">How it works</span>
        </div>

        <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
          A proven process to achieve <br /> your biggest goals
        </h2>

        {/* Button */}
        <button className="bg-[#A6CE39] rounded-full px-4 py-1 flex gap-4 items-center text-base">
          <span className="text-white">Get in touch </span>
          <span className="p-3 bg-white rounded-full text-primary">
            <MoveRight size={14} />
          </span>
        </button>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 hidden md:block"></div>

        <div className="flex flex-col gap-20 relative">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 relative"
            >
              {/* Image */}
              <div
                className={`flex justify-center ${
                  idx % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"
                }`}
              >
                <Image
                  src={step.img}
                  alt={step.title}
                  width={420}
                  height={280}
                  className="rounded-lg w-full max-w-md object-cover"
                />
              </div>

              {/* Text */}
              <div
                className={`flex flex-col gap-4 max-w-md ${
                  idx % 2 === 0 ? "order-2 md:order-2 text-left" : "order-2 md:order-1 md:text-right"
                }`}
              >
                {/* Step circle (only on larger screens to align with line) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-6 bg-[#A6CE39] text-white w-12 h-12 items-center justify-center rounded-full font-semibold shadow-md">
                  {step.id}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
                <span className="text-primary underline cursor-pointer text-sm sm:text-base">
                  Discover More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactTimeline;

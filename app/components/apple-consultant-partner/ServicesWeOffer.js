"use client";
import React from "react";
import Image from "next/image";
import Iphone from "@/public/assets/services-we-offer-img.svg"; // replace with your actual path

const ServicesWeOffer = () => {
  const leftServices = [
    {
      title: "Apple Deployment Strategy",
      description: "Analyze your spending patterns and receive tips to cut"
    },
    {
      title: "Zero-touch provisioning setup",
      description: "Get instant notifications on transactions, low balances and bill"
    },
    {
      title: "Mobile Device Management (MDM) Consultation",
      description: "Make informed financial decisions with detailed analytics"
    }
  ];

  const rightServices = [
    {
      title: "Custom app & workflow integration",
      description: "Set and maintain budgets effortlessly, with automated tracking"
    },
    {
      title: "Ongoing Remote & on-site support",
      description: "Set financial goals and monitor your progress with updates"
    },
    {
      title: "Apple Care & enterprise support planning",
      description: "Feel more in control of your money with tools that simplify"
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16 px-4">
        Service we <span className="text-black">Offer</span>
      </h2>

      {/* Desktop/Laptop Layout (1024px and above) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 items-center relative">
          {/* Left Side */}
          <div className="flex flex-col items-end space-y-16">
            {leftServices.map((service, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-4 text-right ${
                  idx === 1 ? 'mr-20' : ''
                }`}
              >
                <div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                    {service.description}
                  </p>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex-shrink-0 mt-1"></div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center relative">
            {/* Decorative concentric circles */}
            <div className="absolute w-[500px] h-[500px] rounded-full border border-gray-200 opacity-40"></div>
            <div className="absolute w-[650px] h-[650px] rounded-full border border-gray-100 opacity-30"></div>
            <div className="absolute w-[800px] h-[800px] rounded-full border border-gray-100 opacity-20"></div>

            <Image
              src={Iphone}
              alt="iPhone"
              className="w-[350px] object-contain relative z-10"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start space-y-16">
            {rightServices.map((service, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-4 text-left ${
                  idx === 1 ? 'ml-20' : ''
                }`}
              >
                <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout (below 1024px) */}
      <div className="lg:hidden max-w-4xl mx-auto px-4">
        <div className="flex flex-col space-y-12">
          
          {/* Left Services */}
          <div className="space-y-6">
            {leftServices.map((service, idx) => (
              <div key={idx} className="flex items-start gap-4 text-left">
                <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center relative py-8 overflow-hidden">
            {/* Responsive decorative circles */}
            <div className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-full border border-gray-200 opacity-40"></div>
            <div className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-gray-100 opacity-30"></div>
            <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] rounded-full border border-gray-100 opacity-20"></div>

            <Image
              src={Iphone}
              alt="iPhone"
              className="w-[200px] sm:w-[250px] md:w-[300px] object-contain relative z-10"
            />
          </div>

          {/* Right Services */}
          <div className="space-y-6">
            {rightServices.map((service, idx) => (
              <div key={idx} className="flex items-start gap-4 text-right">
                <div className="flex-1">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex-shrink-0 mt-1"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;
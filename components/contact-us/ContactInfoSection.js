"use client";

import { Hammer, Phone, Mail, MapPin } from "lucide-react";
import CommonImage from "../common/CommonImage";
import RightSectionImg from "@/public/assets/contact-info-section-img.svg";
import MagicIcon from "@/public/assets/section-header-magic-icon.svg";

export default function ContactInfoSection() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 md:px-10 lg:px-20 gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center max-w-7xl">
          {/* Left Side - Content */}
          <div className="w-full max-w-xl mx-auto lg:mx-0 lg:col-span-3">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8 lg:mb-12">
              <CommonImage
                src={MagicIcon.src || MagicIcon}
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-[#444444]">
                Let's Build Something Together
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
              We'd love to learn about your goals.
            </h2>
            <p className="text-3xl md:text-4xl font-medium mb-12 lg:mb-16 leading-tight">
              Visit our office or connect online
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-[#FBFBFB] p-6 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="pt-2">
                  <p className="text-xl md:text-2xl font-medium text-[#444444] mb-1">
                    Call us at
                  </p>
                  <a href="tel:+918149882686" className="text-lg font-medium">
                    (+91) 8149882686
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-[#FBFBFB] p-6 rounded-2xl lg:ml-16">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="pt-2">
                  <p className="text-xl md:text-2xl font-medium text-[#444444] mb-1">
                    Email us on
                  </p>
                  <a
                    href="mailto:nikhil@connexionsmobile.com"
                    className="text-lg font-medium"
                  >
                    nikhil@connexionsmobile.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-[#FBFBFB] p-6 rounded-2xl lg:ml-32">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="pt-2">
                  <p className="text-xl md:text-2xl font-medium text-[#444444] mb-1">
                    Address
                  </p>
                  <p className="text-lg font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden md:aspect-[4/3] lg:aspect-auto lg:h-[600px]">
              <CommonImage
                src={RightSectionImg.src || RightSectionImg}
                alt="Office workspace with laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

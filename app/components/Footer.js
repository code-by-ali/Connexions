import React from "react";
import { Mail, Twitter, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/assets/connextions-logo-black-cropped.png";
import xLogo from "@/public/assets/x-icon.png";
import metaLogo from "@/public/assets/meta-icon.png";
import linkedInLogo from "@/public/assets/linkedin-icon.png";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] px-4 sm:px-8 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Brand and Newsletter */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                unoptimized
                width={180}
                height={80}
                src={Logo}
                alt="Logo"
                className="h-auto w-auto max-h-[50px]"
              />
            </div>

            {/* Mission Statement */}
            <p className="text-base sm:text-lg text-[#505050] leading-relaxed max-w-md">
              Together, we can make a real impact in work space around the
              world.
            </p>

            {/* Newsletter Subscription */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 border outline-none border-gray-200 rounded-lg text-sm focus:outline-none"
                />
              </div>
              <button className="px-6 py-3 bg-primary outline-none cursor-pointer text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Donation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Programs
                  </a>
                </li>
              </ul>
            </div>

            {/* More */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary mb-4">
                More
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Blogs details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Policy Links */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary mb-4">
                Legal & Policy Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Links */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm sm:text-base text-[#505050]">
            Copyright © 2025 Connexions. All Rights Reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#">
              <Image unoptimized height={20} width={20} src={xLogo} />
            </a>
            <a href="#">
              <Image unoptimized height={20} width={20} src={metaLogo} />
            </a>
            <a href="#">
              <Image unoptimized height={20} width={20} src={linkedInLogo} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

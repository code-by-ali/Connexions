import React from "react";
import { Mail, Twitter, Facebook, Linkedin } from "lucide-react";
import Logo from "@/public/assets/connextions-logo-black-cropped.png";
import xLogo from "@/public/assets/x-icon.png";
import metaLogo from "@/public/assets/meta-icon.png";
import linkedInLogo from "@/public/assets/linkedin-icon.png";
import InstagramIcon from "@/public/assets/instagram-icon.svg";
import CommonImage from "./CommonImage";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] px-4 sm:px-8 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Brand and Newsletter */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <CommonImage
                width={180}
                height={80}
                src={Logo.src || Logo}
                alt="Logo"
                className="h-auto w-auto max-h-[50px]"
              />
            </div>

            {/* Mission Statement */}
            <p className="text-base sm:text-lg text-[#505050] leading-relaxed max-w-md">
              Shaping the Future of Work, Together. Join a growing community of
              businesses embracing seamless, secure, and scalable technology
              solutions designed for the modern workspace.
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/apple-macbooks"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    MacBooks
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Apple Links */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary mb-4">
                Apple
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/apple-solutions"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Apple Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/apple-for-enterprise"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Apple for Enterprise
                  </a>
                </li>
                <li>
                  <a
                    href="/apple-for-work"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Apple for Work
                  </a>
                </li>
                <li>
                  <a
                    href="/apple-business-manager"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Apple Business Manager
                  </a>
                </li>
                <li>
                  <a
                    href="/apple-consultant-partner"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Apple Consultant Partner
                  </a>
                </li>
              </ul>
            </div>

            {/* New Launches Links */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary mb-4">
                New Launches
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/iphone-17"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    iPhone 17
                  </a>
                </li>
                <li>
                  <a
                    href="/iphone-17pro"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    iPhone 17 Pro
                  </a>
                </li>
                <li>
                  <a
                    href="/iphone-17air"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    iPhone 17 Air
                  </a>
                </li>
                <li>
                  <a
                    href="/apple-watch"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Apple Watch SE3
                  </a>
                </li>
                <li>
                  <a
                    href="/apple-airpods"
                    className="text-sm sm:text-base text-[#505050] hover:text-primary transition-colors"
                  >
                    Apple Airpods Pro 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Links */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm sm:text-base text-[#505050]">
            Copyright © 2025 Connexions. All Rights Reserved
          </p>

          {/* Social Media Icons */}
          {/* <div className="flex space-x-4">
            <a href="#">
              <CommonImage
                height={20}
                width={20}
                src={xLogo.src || xLogo}
                alt="x-logo"
              />
            </a>
            <a href="#">
              <CommonImage
                height={20}
                width={20}
                src={metaLogo.src || metaLogo}
                alt="meta-logo"
              />
            </a>
            <a href="#">
              <CommonImage
                height={20}
                width={20}
                src={linkedInLogo.src || linkedInLogo}
                alt="linkedin-logo"
              />
            </a>
            <a href="#">
              <CommonImage
                height={20}
                width={20}
                src={InstagramIcon.src || linkedInLogo}
                alt="linkedin-logo"
              />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

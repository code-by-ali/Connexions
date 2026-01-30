"use client";

import { useState } from "react";
import { Layers, ChevronDown, User, Mail, MessageSquare } from "lucide-react";
import MagicIcon from "@/public/assets/section-header-magic-icon.svg";
import CommonImage from "../common/CommonImage";

export default function ContactFormWithMap() {
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 md:px-10 lg:px-20 gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Form */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8 lg:mb-12">
              <CommonImage
                src={MagicIcon.src || MagicIcon}
                className="w-5 h-5"
              />
              <span className="text-sm text-[#444444] font-medium">
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 lg:mb-12 leading-tight">
              We're here to
              <br />
              help you
            </h1>

            {/* Form */}
            <div className="space-y-6">
              {/* Name and Purpose Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-normal mb-2 text-[#444444]"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Full Name"
                      className="w-full pl-11 pr-4 py-3 text-primary border border-[#999999] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="purpose"
                    className="block text-base font-normal mb-2 text-[#444444]"
                  >
                    Purpose
                  </label>
                  <div className="relative">
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999] pointer-events-none" />
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-primary border border-[#999999] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select Your Purpose...</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Support</option>
                      <option value="sales">Sales</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-normal mb-2 text-[#444444]"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="w-full pl-11 pr-4 py-3 text-primary border border-[#999999] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Inquiry Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-normal mb-2 text-[#444444]"
                >
                  Inquiry Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#999999]" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly what you're looking for..."
                    rows="4"
                    className="w-full pl-11 pr-4 py-3 text-primary border border-[#999999] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-primary text-white px-8 py-3 rounded-full cursor-pointer font-medium"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6118508124!2d72.71637033388484!3d19.082177517429477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

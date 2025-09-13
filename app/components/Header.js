"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/connextions-logo-black-cropped.png";
import { ChevronDown, Grid2x2, Search, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="px-4 sm:px-8 lg:px-20 py-6 flex flex-col gap-4 border-b border-gray-200">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            unoptimized
            width={180}
            height={80}
            src={Logo}
            alt="Logo"
            className="h-auto w-auto max-h-[50px]"
          />
        </div>

        {/* Search + Button (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex border border-[#E7EAEE] rounded-sm">
            <input
              className="rounded-tl-sm text-xs rounded-bl-sm w-[250px] lg:w-[400px] px-2 text-[#5C728E] outline-none"
              placeholder="What are you looking for?"
            />
            <button className="bg-primary text-secondary rounded-tr-sm rounded-br-sm px-4 lg:px-6 py-2 lg:py-3">
              <Search size={14} />
            </button>
          </div>
          <button className="bg-primary text-secondary rounded-sm px-4 lg:px-6 py-2 text-sm font-light">
            Contact us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Bottom Nav */}
      <div
        className={`flex-col md:flex md:flex-row md:items-center md:justify-between text-sm gap-4 md:gap-0 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {/* Left */}
        <div className="flex items-center gap-2 px-2 md:px-0">
          <Grid2x2 size={14} />
          <span>BROWSE ALL CATEGORIES</span>
        </div>

        {/* Middle Nav */}
        <div>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 relative">
            {[
              { label: "Home" },
              { label: "Services", dropdown: ["Consulting", "Support", "Cloud"] },
              { label: "Apple", dropdown: ["Mac", "iPhone", "iPad"] },
              { label: "Partners", dropdown: ["Microsoft", "AWS", "Google"] },
              { label: "Resources", dropdown: ["Blog", "Case Studies", "Docs"] },
              { label: "Sustainability" },
            ].map((item) => (
              <li
                key={item.label}
                className="relative flex flex-col cursor-pointer"
              >
                <div
                  className="flex items-center gap-1"
                  onClick={() =>
                    item.dropdown && toggleDropdown(item.label)
                  }
                >
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown size={14} />}
                </div>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg text-sm p-2 w-40 z-50">
                    {item.dropdown.map((sub) => (
                      <li
                        key={sub}
                        className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="px-2 md:px-0">
          <span className="underline cursor-pointer">Buy and Try</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

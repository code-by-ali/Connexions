"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/public/assets/connextions-logo-black-cropped.png";
import { ChevronDown, Grid2x2, Search, Menu, X } from "lucide-react";
import CommonImage from "./CommonImage";
import FacebookIcon from "@/public/assets/facebook-icon.svg";
import XIcon from "@/public/assets/x-icon.svg";
import InstagramIcon from "@/public/assets/instagram-icon.svg";
import LinkedinIcon from "@/public/assets/linkedin-icon.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null); // Close any open dropdown
    setMenuOpen(false); // Close mobile menu if open
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      dropdown: [
        { label: "Consulting", href: "#" },
        { label: "Support", href: "#" },
        { label: "Cloud", href: "#" },
      ],
    },
    {
      label: "Apple",
      dropdown: [
        { label: "Apple for Enterprise", href: "/apple-for-enterprise" },
        { label: "Apple for Work", href: "/apple-for-work" },
        { label: "Apple Business Manager", href: "/apple-business-manager" },
        {
          label: "Apple Consultant Partner",
          href: "/apple-consultant-partner",
        },
      ],
    },
    {
      label: "Partners",
      dropdown: [
        { label: "Microsoft", href: "#" },
        { label: "AWS", href: "#" },
        { label: "Google", href: "#" },
      ],
    },
    {
      label: "Resources",
      dropdown: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Docs", href: "#" },
      ],
    },
    { label: "Sustainability", href: "#" },
  ];

  return (
    <>
      <div className="w-full px-4 sm:px-8 lg:px-20 py-4 bg-[#222] text-white flex flex-col sm:flex-row gap-3 justify-between items-center">
        <div className="flex items-center gap-5 cursor-pointer">
          <CommonImage
            width={14}
            height={14}
            src={FacebookIcon.src || FacebookIcon}
            alt="fb"
            // className="h-auto w-auto max-h-[50px]"
          />
          <CommonImage
            width={14}
            height={14}
            src={XIcon.src || XIcon}
            alt="fb"
            // className="h-auto w-auto max-h-[50px]"
          />
          <CommonImage
            width={14}
            height={14}
            src={InstagramIcon.src || InstagramIcon}
            alt="fb"
            // className="h-auto w-auto max-h-[50px]"
          />
          <CommonImage
            width={14}
            height={14}
            src={LinkedinIcon.src || LinkedinIcon}
            alt="fb"
            // className="h-auto w-auto max-h-[50px]"
          />
        </div>
        <div className="flex items-center *: gap-5 text-white font-medium text-xs sm:text-sm">
          <span>Call: (123) 123-4567</span>
          <div className="w-px bg-white/50 h-5"></div>
          <span>Email: example@gmail.com</span>
        </div>
      </div>
      <div
        ref={navRef}
        className="px-4 sm:px-8 lg:px-20 py-6 flex flex-col gap-4 border-b border-gray-200"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={"/"} passHref onClick={handleLinkClick}>
              <CommonImage
                width={180}
                height={80}
                src={Logo.src || Logo}
                alt="Logo"
                className="h-auto w-auto max-h-[50px]"
              />
            </Link>
          </div>

          {/* Search + Button (Desktop Only) */}
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
            <Link href="/contact-us" passHref onClick={handleLinkClick}>
              <button className="bg-primary cursor-pointer text-secondary rounded-sm px-4 lg:px-6 py-2 text-sm font-light">
                Contact us
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={20} className="outline-none" />
            ) : (
              <Menu size={20} className="outline-none" />
            )}
          </button>
        </div>

        {/* Bottom Nav */}
        <div className="hidden md:block text-sm">
          {/* Tablet Only (768–1024px): Two Rows */}
          <div className="block lg:hidden">
            {/* Row 1: Browse + Buy */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Grid2x2 size={14} />
                <span>BROWSE ALL CATEGORIES</span>
              </div>
              <div>
                <Link
                  href="#"
                  className="underline cursor-pointer"
                  onClick={handleLinkClick}
                >
                  Buy and Try
                </Link>
              </div>
            </div>

            {/* Row 2: Navigation */}
            <div className="flex justify-center">
              <ul className="flex gap-6 flex-wrap">
                {navItems.map((item) => (
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
                      <Link href={item.href || "#"} onClick={handleLinkClick}>
                        {item.label}
                      </Link>
                      {item.dropdown && <ChevronDown size={14} />}
                    </div>

                    {item.dropdown && openDropdown === item.label && (
                      <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg text-sm p-2 w-40 z-50">
                        {item.dropdown.map((sub, index) => (
                          <li
                            key={sub.label}
                            className={`px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                              index !== item.dropdown.length - 1
                                ? "border-b border-gray-100"
                                : ""
                            }`}
                          >
                            <Link href={sub.href} onClick={handleLinkClick}>
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop Only (>1024px): One Row */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-2">
              <Grid2x2 size={14} />
              <span>BROWSE ALL CATEGORIES</span>
            </div>

            {/* Center */}
            <ul className="flex gap-8 flex-wrap">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative flex flex-col cursor-pointer"
                >
                  <div
                    className="flex items-center gap-1"
                    onClick={() => item.dropdown && toggleDropdown(item.label)}
                  >
                    <Link href={item.href || "#"} onClick={handleLinkClick}>
                      {item.label}
                    </Link>
                    {item.dropdown && <ChevronDown size={14} />}
                  </div>

                  {item.dropdown && openDropdown === item.label && (
                    <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg text-sm p-2 w-40 z-50">
                      {item.dropdown.map((sub, index) => (
                        <li
                          key={sub.label}
                          className={`px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                            index !== item.dropdown.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                        >
                          <Link href={sub.href} onClick={handleLinkClick}>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Right */}
            <div>
              <Link
                href="#"
                className="underline cursor-pointer"
                onClick={handleLinkClick}
              >
                Buy and Try
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden flex-col text-sm gap-4 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {/* Search + Button (Mobile Only, inside menu) */}
          <div className="flex flex-col gap-4 px-2">
            <div className="flex border border-[#E7EAEE] rounded-sm">
              <input
                className="rounded-tl-sm text-xs rounded-bl-sm w-full px-2 text-[#5C728E] outline-none"
                placeholder="What are you looking for?"
              />
              <button className="bg-primary text-secondary rounded-tr-sm rounded-br-sm px-4 py-2">
                <Search size={14} />
              </button>
            </div>
            <Link href="/contact-us" passHref onClick={handleLinkClick}>
              <button className="bg-primary cursor-pointer text-secondary rounded-sm px-4 py-2 text-sm font-light w-full">
                Contact us
              </button>
            </Link>
          </div>

          {/* Browse Categories */}
          <div className="flex items-center gap-2 px-2">
            <Grid2x2 size={14} />
            <span>BROWSE ALL CATEGORIES</span>
          </div>

          {/* Mobile Nav Menu */}
          <div>
            <ul className="flex flex-col gap-4 relative">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative flex flex-col cursor-pointer"
                >
                  <div
                    className="flex items-center gap-1"
                    onClick={() => item.dropdown && toggleDropdown(item.label)}
                  >
                    <Link href={item.href || "#"} onClick={handleLinkClick}>
                      {item.label}
                    </Link>
                    {item.dropdown && <ChevronDown size={14} />}
                  </div>

                  {item.dropdown && openDropdown === item.label && (
                    <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg text-sm p-2 w-40 z-50">
                      {item.dropdown.map((sub, index) => (
                        <li
                          key={sub.label}
                          className={`px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                            index !== item.dropdown.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                        >
                          <Link href={sub.href} onClick={handleLinkClick}>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Buy and Try */}
          <div className="px-2">
            <Link
              href="#"
              className="underline cursor-pointer"
              onClick={handleLinkClick}
            >
              Buy and Try
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

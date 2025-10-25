"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/connextions-logo-black-cropped.png";
import {
  ChevronDown,
  ChevronRight,
  Grid2x2,
  Search,
  Menu,
  X,
} from "lucide-react";
import CommonImage from "./CommonImage";
import FacebookIcon from "@/public/assets/facebook-icon.svg";
import XIcon from "@/public/assets/x-icon.svg";
import InstagramIcon from "@/public/assets/instagram-icon.svg";
import LinkedinIcon from "@/public/assets/linkedin-icon.svg";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setOpenNestedDropdown(null);
  };

  const toggleNestedDropdown = (menu) => {
    setOpenNestedDropdown(openNestedDropdown === menu ? null : menu);
  };

  const handleLinkClick = (hasDropdown = false) => {
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
    if (!hasDropdown) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setOpenNestedDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Helper function to check if nav item is active
  const isNavItemActive = (item) => {
    if (item.href && pathname === item.href) {
      return true;
    }
    if (item.dropdown) {
      return item.dropdown.some((sub) => {
        if (sub.href && pathname === sub.href) {
          return true;
        }
        if (sub.nested) {
          return sub.nested.some((nested) => pathname === nested.href);
        }
        return false;
      });
    }
    return false;
  };

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Apple",
      dropdown: [
        { label: "Apple Solutions", href: "/apple-solutions" },
        { label: "Apple for Enterprise", href: "/apple-for-enterprise" },
        { label: "Apple for Work", href: "/apple-for-work" },
        { label: "Apple Business Manager", href: "/apple-business-manager" },
        {
          label: "Apple Consultant Partner",
          href: "/apple-consultant-partner",
        },
      ],
    },
    { label: "MacBooks", href: "/apple-macbooks" },
    {
      label: "New Launch",
      dropdown: [
        { label: "iPhone 17", href: "/iphone-17" },
        { label: "iPhone 17 Pro", href: "/iphone-17pro" },
        { label: "iPhone 17 Air", href: "/iphone-17air" },
        { label: "Apple Watch SE3", href: "/apple-watch" },
        { label: "Apple Airpods Pro 3", href: "/apple-airpods" },
      ],
    },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      {/* Top Social + Contact Bar */}
      <div className="w-full px-4 sm:px-8 lg:px-20 py-4 bg-[#222] text-white flex flex-col sm:flex-row gap-3 justify-between items-center">
        <div className="flex items-center gap-5 cursor-pointer">
          <Link
            href={"https://www.facebook.com/share/1DQySs4f9D/?mibextid=wwXIfr"}
            target="_blank"
          >
            <CommonImage
              width={14}
              height={14}
              src={FacebookIcon.src || FacebookIcon}
              alt="fb"
            />
          </Link>
          <Link
            href={
              "https://www.instagram.com/connexions.pune?igsh=MTdnc3hwamJteTdtZw=="
            }
            target="_blank"
          >
            <CommonImage
              width={14}
              height={14}
              src={InstagramIcon.src || InstagramIcon}
              alt="ig"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3 text-white text-xs sm:text-sm">
          <a href="tel:+918149882686" className="hover:underline">
            Call: +91-8149882686
          </a>
          <div className="w-px bg-white/50 h-5"></div>
          <a
            href="mailto:nikhil@connexionsmobile.com"
            className="hover:underline"
          >
            Email: nikhil@connexionsmobile.com
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div
        ref={navRef}
        className="px-4 sm:px-8 lg:px-20 py-6 flex flex-col gap-4"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={"/"} passHref onClick={() => handleLinkClick(false)}>
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
                className="rounded-tl-sm rounded-bl-sm w-[250px] lg:w-[400px] px-2 text-[#5C728E] text-xs outline-none"
                placeholder="What are you looking for?"
              />
              <button className="bg-primary text-secondary rounded-tr-sm rounded-br-sm px-4 lg:px-6 py-2 lg:py-3">
                <Search size={14} />
              </button>
            </div>
            <Link
              href="/contact-us"
              passHref
              onClick={() => handleLinkClick(false)}
            >
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

        {/* Desktop / Tablet Nav */}
        <div className="hidden md:block text-sm">
          {/* Tablet: Two Rows */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Grid2x2 size={14} />
                <span>BROWSE ALL CATEGORIES</span>
              </div>
              <div>
                <Link
                  href="/contact-us"
                  target="_blank"
                  className="underline"
                  onClick={() => handleLinkClick(false)}
                >
                  Buy and Try
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <ul className="flex gap-6 flex-wrap">
                {navItems.map((item) => {
                  const isActive = isNavItemActive(item);
                  return (
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
                        <Link
                          href={item.href || "#"}
                          className={`${
                            isActive ? "text-[#A6CE39] underline" : "text-black"
                          }`}
                          onClick={() => handleLinkClick(!!item.dropdown)}
                        >
                          {item.label}
                        </Link>
                        {item.dropdown && (
                          <ChevronDown
                            size={14}
                            className={isActive ? "text-[#A6CE39]" : ""}
                          />
                        )}
                      </div>
                      {item.dropdown && openDropdown === item.label && (
                        <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded text-sm p-2 w-40 z-50">
                          {item.dropdown.map((sub, index) => (
                            <li
                              key={sub.label}
                              className={`relative px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                                index !== item.dropdown.length - 1
                                  ? "border-b border-gray-100"
                                  : ""
                              }`}
                            >
                              {sub.nested ? (
                                <>
                                  <div
                                    className="flex items-center justify-between"
                                    onMouseEnter={() =>
                                      setOpenNestedDropdown(sub.label)
                                    }
                                  >
                                    <span>{sub.label}</span>
                                    <ChevronRight size={14} />
                                  </div>
                                  {openNestedDropdown === sub.label && (
                                    <ul className="absolute left-full top-0 ml-1 bg-white border border-gray-200 rounded-md text-sm p-2 w-40 z-50">
                                      {sub.nested.map(
                                        (nestedItem, nestedIndex) => (
                                          <li
                                            key={nestedItem.label}
                                            className={`px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                                              nestedIndex !==
                                              sub.nested.length - 1
                                                ? "border-b border-gray-100"
                                                : ""
                                            }`}
                                          >
                                            <Link
                                              href={nestedItem.href}
                                              className={
                                                pathname === nestedItem.href
                                                  ? "text-[#A6CE39]"
                                                  : ""
                                              }
                                              onClick={() =>
                                                handleLinkClick(false)
                                              }
                                            >
                                              {nestedItem.label}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={sub.href}
                                  className={
                                    pathname === sub.href
                                      ? "text-[#A6CE39]"
                                      : ""
                                  }
                                  onClick={() => handleLinkClick(false)}
                                >
                                  {sub.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Desktop: One Row */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Grid2x2 size={14} />
              <span>BROWSE ALL CATEGORIES</span>
            </div>
            <ul className="flex gap-8 flex-wrap">
              {navItems.map((item) => {
                const isActive = isNavItemActive(item);
                return (
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
                      <Link
                        href={item.href || "#"}
                        className={`${
                          isActive ? "text-[#A6CE39]" : "text-primary"
                        }`}
                        onClick={() => handleLinkClick(!!item.dropdown)}
                      >
                        {item.label}
                      </Link>
                      {item.dropdown && (
                        <ChevronDown
                          size={14}
                          className={isActive ? "text-[#A6CE39]" : ""}
                        />
                      )}
                    </div>
                    {item.dropdown && openDropdown === item.label && (
                      <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md text-sm p-2 w-40 z-50">
                        {item.dropdown.map((sub, index) => (
                          <li
                            key={sub.label}
                            className={`relative px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                              index !== item.dropdown.length - 1
                                ? "border-b border-gray-100"
                                : ""
                            }`}
                          >
                            {sub.nested ? (
                              <>
                                <div
                                  className="flex items-center justify-between"
                                  onMouseEnter={() =>
                                    setOpenNestedDropdown(sub.label)
                                  }
                                >
                                  <span>{sub.label}</span>
                                  <ChevronRight size={14} />
                                </div>
                                {openNestedDropdown === sub.label && (
                                  <ul className="absolute left-full top-0 ml-1 bg-white border border-gray-200 rounded-md text-sm p-2 w-40 z-50">
                                    {sub.nested.map(
                                      (nestedItem, nestedIndex) => (
                                        <li
                                          key={nestedItem.label}
                                          className={`px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                                            nestedIndex !==
                                            sub.nested.length - 1
                                              ? "border-b border-gray-100"
                                              : ""
                                          }`}
                                        >
                                          <Link
                                            href={nestedItem.href}
                                            className={
                                              pathname === nestedItem.href
                                                ? "text-[#A6CE39]"
                                                : ""
                                            }
                                            onClick={() =>
                                              handleLinkClick(false)
                                            }
                                          >
                                            {nestedItem.label}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link
                                href={sub.href}
                                className={
                                  pathname === sub.href ? "text-[#A6CE39]" : ""
                                }
                                onClick={() => handleLinkClick(false)}
                              >
                                {sub.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div>
              <Link
                href="/contact-us"
                target="_blank"
                className="underline"
                onClick={() => handleLinkClick(false)}
              >
                Buy and Try
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex-col text-sm gap-4 transition-all duration-300 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {/* Search + Button */}
          <div className="flex flex-col gap-4 px-2">
            <div className="flex border border-[#E7EAEE] rounded-sm">
              <input
                className="rounded-tl-sm rounded-bl-sm w-full px-2 text-[#5C728E] text-xs outline-none"
                placeholder="What are you looking for?"
              />
              <button className="bg-primary text-secondary rounded-tr-sm rounded-br-sm px-4 py-2">
                <Search size={14} />
              </button>
            </div>
            <Link
              href="/contact-us"
              passHref
              onClick={() => handleLinkClick(false)}
            >
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

          {/* Nav Items - Mobile with Active State */}
          <ul className="flex flex-col gap-4 px-2">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item);
              return (
                <li key={item.label} className="flex flex-col">
                  {item.dropdown ? (
                    <>
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span className={isActive ? "text-[#A6CE39]" : ""}>
                          {item.label}
                        </span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          } ${isActive ? "text-[#A6CE39]" : ""}`}
                        />
                      </div>

                      <ul
                        className={`overflow-hidden transition-all duration-300 ${
                          openDropdown === item.label
                            ? "max-h-96 mt-2"
                            : "max-h-0"
                        }`}
                      >
                        {item.dropdown.map((sub) => (
                          <li
                            key={sub.label}
                            className="border-b border-gray-100"
                          >
                            {sub.nested ? (
                              <div className="flex flex-col">
                                <div
                                  className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={() =>
                                    toggleNestedDropdown(sub.label)
                                  }
                                >
                                  <span>{sub.label}</span>
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${
                                      openNestedDropdown === sub.label
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </div>
                                <ul
                                  className={`overflow-hidden transition-all duration-300 ${
                                    openNestedDropdown === sub.label
                                      ? "max-h-96"
                                      : "max-h-0"
                                  }`}
                                >
                                  {sub.nested.map((nestedItem) => (
                                    <li
                                      key={nestedItem.label}
                                      className="pl-6 pr-3 py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-100"
                                    >
                                      <Link
                                        href={nestedItem.href}
                                        className={
                                          pathname === nestedItem.href
                                            ? "text-[#A6CE39]"
                                            : ""
                                        }
                                        onClick={() => handleLinkClick(false)}
                                      >
                                        {nestedItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                <Link
                                  href={sub.href}
                                  className={
                                    pathname === sub.href
                                      ? "text-[#A6CE39]"
                                      : ""
                                  }
                                  onClick={() => handleLinkClick(false)}
                                >
                                  {sub.label}
                                </Link>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`cursor-pointer ${
                        isActive ? "text-[#A6CE39]" : ""
                      }`}
                      onClick={() => handleLinkClick(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Buy and Try */}
          <div className="px-2 mt-2">
            <Link
              href="/contact-us"
              target="_blank"
              className="underline"
              onClick={() => handleLinkClick(false)}
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

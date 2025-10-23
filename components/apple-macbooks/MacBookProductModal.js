"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { X, ChevronDown } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import CommonImage from "../common/CommonImage";

// Import your product images
import MacAirIcon1 from "@/public/assets/modal-mac-air-icon-1.svg";
import MacAirIcon2 from "@/public/assets/modal-mac-air-icon-2.svg";
import MacAirIcon3 from "@/public/assets/modal-mac-air-icon-3.svg";
import MacAirIcon4 from "@/public/assets/modal-mac-air-icon-4.svg";
import MacAirIcon5 from "@/public/assets/modal-mac-air-icon-5.svg";
import MacAirIcon6 from "@/public/assets/modal-mac-air-icon-6.svg";

import MacAirImg1 from "@/public/assets/modal-mac-air-img-1.png";

import MacBookProImg1 from "@/public/assets/modal-macbook-pro-img-1.png";

import IMacImg1 from "@/public/assets/modal-imac-img-1.png";

import MacMiniImg from "@/public/assets/modal-mac-mini-img-1.png";

import MacStudioImg from "@/public/assets/modal-mac-studio-img-1.png";

import MacProImg from "@/public/assets/modal-mac-pro-img-1.png";

// Product details data
const productDetailsData = {
  1: {
    name: "MacBook Air",
    description:
      "A stunning all-in-one desktop for creativity and productivity.",
    price:
      "From ₹7492.00/mo. with instant cashback* and no-cost EMI or ₹99900.00",
    images: [MacAirImg1],
    colors: ["#C8D8E0", "#2E3642", "#F0E4D3", "#E3E4E5"],
    specs: [
      {
        icon: <CommonImage src={MacAirIcon1.src || MacAirIcon1} />,
        description:
          "Lightweight and less than two centimetres thin, so you can take MacBook Air anywhere you go",
      },
      {
        icon: <CommonImage src={MacAirIcon2.src || MacAirIcon2} />,
        description:
          "The powerful 10-core CPU and up to 10-core GPU of the Apple M4 chip keep things running smoothly",
      },
      {
        icon: <CommonImage src={MacAirIcon3.src || MacAirIcon4} />,
        description:
          "Up to 18 hours of battery life, so you can leave your charger at home",
      },
      {
        icon: <CommonImage src={MacAirIcon4.src || MacAirIcon4} />,
        description:
          "The 13.6-inch Liquid Retina display supports 1 billion colors",
      },
      {
        icon: <CommonImage src={MacAirIcon5.src || MacAirIcon5} />,
        description:
          "The 12MP Centre stage camera keeps you centred in the frame during video calls, even as you move around",
      },
      {
        icon: <CommonImage src={MacAirIcon6.src || MacAirIcon6} />,
        description:
          "Built for Apple Intelligence. Personal, Private, Powerful",
      },
    ],
  },
  2: {
    name: "MacBook Pro",
    description:
      "The ultimate notebook for demanding workflows, delivering breakthrough performance and all-day battery life.",
    price:
      "From ₹12492.00/mo. with instant cashback* and no-cost EMI or ₹159900.00",
    images: [MacBookProImg1],
    colors: ["#C8D8E0", "#2E3642", "#F0E4D3", "#E3E4E5"],
    specs: [
      {
        icon: <CommonImage src={MacAirIcon2.src || MacAirIcon2} />,
        description:
          "Powered by the M4 Pro and M4 Max chips for extreme performance and efficiency",
      },
      {
        icon: <CommonImage src={MacAirIcon3.src || MacAirIcon4} />,
        description:
          "Up to 22 hours of battery life — the longest ever in a Mac notebook",
      },
      {
        icon: "🖥️",
        description:
          "Brilliant Liquid Retina XDR display with exceptional contrast and color accuracy",
      },
      {
        icon: <CommonImage src={MacAirIcon6.src || MacAirIcon6} />,
        description:
          "Built for Apple Intelligence. Personal, Private, Powerful",
      },
    ],
  },
  3: {
    name: "iMac",
    description:
      "A vibrant all-in-one desktop that's bursting with personality and power — now with the M4 chip.",
    price:
      "From ₹10492.00/mo. with instant cashback* and no-cost EMI or ₹139900.00",
    images: [IMacImg1],
    colors: [],
    specs: [
      {
        icon: "🖥️",
        description:
          "24-inch 4.5K Retina display with over 11 million pixels and 1 billion colors",
      },
      {
        icon: <CommonImage src={MacAirIcon2.src || MacAirIcon2} />,
        description:
          "Powered by the Apple M4 chip for incredible speed and efficiency",
      },
      {
        icon: "📷",
        description:
          "1080p FaceTime HD camera, studio-quality mics, and six-speaker sound system",
      },
      {
        icon: <CommonImage src={MacAirIcon6.src || MacAirIcon6} />,
        description:
          "Built for Apple Intelligence. Personal, Private, Powerful",
      },
    ],
  },
  4: {
    name: "Mac Mini",
    description:
      "The most affordable way to get the power of Apple silicon in a compact desktop form.",
    price:
      "From ₹6660.00/mo. with instant cashback* and no-cost EMI or ₹89900.00",
    images: [MacMiniImg],
    colors: [],
    specs: [
      {
        icon: <CommonImage src={MacAirIcon2.src || MacAirIcon2} />,
        description:
          "M4 or M4 Pro chip for lightning-fast performance and multitasking",
      },
      {
        icon: "🍃",
        description:
          "Silent, energy-efficient performance that's built to last",
      },
      {
        icon: "🖥️",
        description:
          "Connect up to two displays and a range of high-speed devices with Thunderbolt 4",
      },
    ],
  },
  5: {
    name: "Mac Studio",
    description:
      "A creative powerhouse that combines performance, connectivity, and modularity — made for professionals.",
    price:
      "From ₹20825.00/mo. with instant cashback* and no-cost EMI or ₹266900.00",
    images: [MacStudioImg],
    colors: [],
    specs: [
      {
        icon: <CommonImage src={MacAirIcon2.src || MacAirIcon2} />,
        description:
          "M4 Max or M4 Ultra chip for groundbreaking performance and efficiency",
      },
      {
        icon: "🖥️",
        description:
          "Supports up to six Pro Display XDRs for expansive workflows",
      },
      {
        icon: "🎥",
        description:
          "Designed for video editing, 3D rendering, music production, and AI development",
      },
    ],
  },
  6: {
    name: "Mac Pro",
    description:
      "The most powerful Mac ever — designed for extreme performance, scalability, and professional workflows.",
    price:
      "From ₹45825.00/mo. with instant cashback* and no-cost EMI or ₹586900.00",
    images: [MacProImg],
    colors: [],
    specs: [
      {
        icon: <CommonImage src={MacAirIcon2.src || MacAirIcon2} />,
        description:
          "Built around the M4 Ultra chip for ultimate power and efficiency",
      },
      {
        icon: "🍃",
        description:
          "Quiet, energy-efficient, and beautifully built from the ground up",
      },
    ],
  },
};

const MacBookProductModal = ({ selectedProduct, onClose, onSelectProduct }) => {
  const swiperRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isDropdownOpen]);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (!selectedProduct) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const productData = productDetailsData[selectedProduct.id];

  // Handle modal close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleProductChange = (id, name) => {
    onSelectProduct({ id, name });
    setIsDropdownOpen(false);
    setCurrentImageIndex(0);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-0 sm:p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-full h-full sm:h-auto sm:rounded-3xl sm:max-w-5xl sm:max-h-[90vh] overflow-hidden flex flex-col">
        {/* Close Button - Desktop only (top right) */}
        <button
          onClick={onClose}
          className="hidden lg:block absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header with Product Selector */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 border-b border-gray-200">
          {/* Mobile/Tablet: Dropdown with Close Button */}
          <div className="flex lg:hidden items-center justify-between w-full gap-3">
            <div className="relative flex-1" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors cursor-pointer w-full justify-between"
              >
                <span className="text-sm sm:text-base font-medium text-primary truncate">
                  {productData.name}
                </span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform flex-shrink-0 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 max-h-[320px] overflow-y-auto z-20">
                  {Object.entries(productDetailsData).map(([id, data]) => (
                    <button
                      key={id}
                      onClick={() =>
                        handleProductChange(parseInt(id), data.name)
                      }
                      className={`w-full text-left px-4 py-2.5 text-sm sm:text-base transition-colors cursor-pointer ${
                        selectedProduct.id === parseInt(id)
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {data.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Close Button - Mobile/Tablet */}
            <button
              onClick={onClose}
              className="flex-shrink-0 bg-gray-50 hover:bg-gray-100 rounded-full p-2 text-gray-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop: Full Product List */}
          <div className="hidden lg:flex items-center justify-center gap-2 w-full">
            {Object.entries(productDetailsData).map(([id, data]) => (
              <button
                key={id}
                onClick={() => handleProductChange(parseInt(id), data.name)}
                className={`cursor-pointer px-4 py-2 rounded-full text-base font-normal whitespace-nowrap transition-colors ${
                  selectedProduct.id === parseInt(id)
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-[#6E6E73] hover:bg-gray-200"
                }`}
              >
                {data.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
            {/* Left Side - Image Swiper */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation]}
                  onSlideChange={(swiper) => {
                    setCurrentImageIndex(swiper.activeIndex);
                  }}
                  className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px]"
                >
                  {productData.images.map((image, idx) => (
                    <SwiperSlide
                      key={idx}
                      className="flex items-center justify-center"
                    >
                      <div className="w-full h-full flex items-center justify-center p-6 sm:p-8 md:p-10">
                        <CommonImage
                          src={image.src || image}
                          alt={`${productData.name} ${idx + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Pagination Dots */}
              {productData.images.length > 1 && (
                <div className="flex items-center justify-center gap-2 py-2">
                  {productData.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => swiperRef.current?.swiper.slideTo(idx)}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                        currentImageIndex === idx
                          ? "bg-gray-900 w-6"
                          : "bg-gray-400 hover:bg-gray-600"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Available Colors */}
              {productData.colors.length > 0 && (
                <div className="flex flex-col items-center justify-center gap-2 py-2">
                  <p className="text-xs sm:text-sm font-normal text-gray-600">
                    Available in {productData?.colors?.length} colors
                  </p>
                  <div className="flex gap-2 items-center">
                    {productData.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full cursor-pointer border-2 border-gray-200 hover:border-gray-400 transition-colors"
                        style={{ backgroundColor: color }}
                        aria-label={`Color option ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Specifications */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Title, Price and Buy Button */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1.5 sm:mb-2">
                      {productData.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-primary leading-relaxed">
                      {productData.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Specifications List */}
              <div className="space-y-3 sm:space-y-4">
                {productData.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 sm:gap-4 group items-center"
                  >
                    <div className="flex-shrink-0 text-xl sm:text-2xl w-7 sm:w-8">
                      {spec.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base text-primary font-medium leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional spacing for mobile to prevent content cut-off */}
              <div className="h-4 lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookProductModal;

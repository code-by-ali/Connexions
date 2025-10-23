"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { X, ChevronDown } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import CommonImage from "../common/CommonImage";

// Import your product images
import ProductImg1 from "@/public/assets/apple-macbook-product-img-1.svg";
import ProductImg2 from "@/public/assets/apple-macbook-product-img-2.svg";
import ProductImg3 from "@/public/assets/apple-macbook-product-img-3.svg";
import ProductImg4 from "@/public/assets/apple-macbook-product-img-4.svg";
import ProductImg5 from "@/public/assets/apple-macbook-product-img-5.svg";
import ProductImg6 from "@/public/assets/apple-macbook-product-img-6.svg";

import MacAirIcon1 from "@/public/assets/modal-mac-air-icon-1.svg";
import MacAirIcon2 from "@/public/assets/modal-mac-air-icon-2.svg";
import MacAirIcon3 from "@/public/assets/modal-mac-air-icon-3.svg";
import MacAirIcon4 from "@/public/assets/modal-mac-air-icon-4.svg";
import MacAirIcon5 from "@/public/assets/modal-mac-air-icon-5.svg";
import MacAirIcon6 from "@/public/assets/modal-mac-air-icon-6.svg";

// Product details data
const productDetailsData = {
  1: {
    name: "MacBook Air",
    description:"",
    price:
      "From ₹7492.00/mo. with instant cashback* and no-cost EMI or ₹99900.00",
    images: [ProductImg1, ProductImg2],
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
    description:"",
    price:
      "From ₹7492.00/mo. with instant cashback* and no-cost EMI or ₹99900.00",
    images: [ProductImg2, ProductImg3],
    colors: ["#C8D8E0", "#2E3642", "#F0E4D3", "#E3E4E5"],
    specs: [
      {
        icon: "⚡",
        title: "M4 Max chip",
        description:
          "up to 12-core CPU and up to 20-core GPU for exceptional performance",
      },
      {
        icon: "🔋",
        title: "Extended battery",
        description: "Up to 33 hours of battery life for all-day productivity",
      },
      {
        icon: "🖥️",
        title: "XDR display",
        description:
          "16-inch Liquid Retina XDR display with extreme brightness",
      },
    ],
  },
  3: {
    name: "iMac",
    description:"",
    price:
      "From ₹7492.00/mo. with instant cashback* and no-cost EMI or ₹99900.00",
    images: [ProductImg3, ProductImg4],
    colors: ["#C8D8E0", "#2E3642", "#F0E4D3", "#E3E4E5"],
    specs: [
      {
        icon: "⚡",
        title: "Professional performance",
        description: "M3, M3 Pro, or M3 Max chip options",
      },
      {
        icon: "🖥️",
        title: "14-inch display",
        description: "Liquid Retina XDR with incredible brightness",
      },
    ],
  },
  4: {
    name: "Mac Mini",
    description:"",
    price:
      "From ₹7492.00/mo. with instant cashback* and no-cost EMI or ₹99900.00",
    images: [ProductImg4, ProductImg5],
    colors: ["#C8D8E0", "#2E3642", "#F0E4D3", "#E3E4E5"],
    specs: [
      {
        icon: "🖥️",
        title: "4.5K display",
        description: "Stunning Retina display with vibrant colors",
      },
      {
        icon: "🎨",
        title: "10 colors",
        description: "Choose from 10 beautiful color options",
      },
    ],
  },
  5: {
    name: "Mac mini",
    description:"",
    price:
      "From ₹7492.00/mo. with instant cashback* and no-cost EMI or ₹99900.00",
    images: [ProductImg5, ProductImg6],
    colors: ["#C8D8E0", "#2E3642", "#F0E4D3", "#E3E4E5"],
    specs: [
      {
        icon: "📦",
        title: "Ultra-compact",
        description: "Powerful desktop in a tiny form factor",
      },
      {
        icon: "⚡",
        title: "M4 chip",
        description: "Exceptional performance in a small package",
      },
    ],
  },
  6: {
    name: "Mac Studio",
    description:"",
    price:
      "From ₹7492.00/mo. with instant cashback* and no-cost EMI or ₹99900.00",
    images: [ProductImg6, ProductImg1],
    colors: ["#C8D8E0", "#2E3642", "#F0E4D3", "#E3E4E5"],
    specs: [
      {
        icon: "🎬",
        title: "Professional workstation",
        description: "For creators and professionals",
      },
      {
        icon: "⚡",
        title: "Maximum performance",
        description: "M4 Max and M4 Ultra chip options",
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
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {productData.price}
                    </p>
                  </div>
                  <button className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 cursor-pointer rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium transition-colors shadow-sm">
                    Buy
                  </button>
                </div>
              </div>

              {/* Specifications List */}
              <div className="space-y-3 sm:space-y-4">
                {productData.specs.map((spec, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-4 group">
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

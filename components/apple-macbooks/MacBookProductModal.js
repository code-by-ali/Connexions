"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

// Product details data
const productDetailsData = {
  1: {
    name: "MacBook Air",
    price:
      "From ₹7492.00/mo. with instant cashback* and no-cost EMI or ₹99900.00",
    images: [ProductImg1, ProductImg2],
    colors: ["#C8D8E0", "#2E3642", "#F0E4D3", "#E3E4E5"],
    specs: [
      {
        icon: "⚡",
        title: "Powerful 10-core CPU",
        description:
          "and up to 10-core GPU of the Apple M3 chip keeps things smooth",
      },
      {
        icon: "🔋",
        title: "All-day battery life",
        description:
          "Up to 18 hours of battery life, so you can leave your charger at home",
      },
      {
        icon: "🖥️",
        title: "Stunning display",
        description:
          "The 13.6-inch Liquid Retina display supports 1 billion colours",
      },
      {
        icon: "📷",
        title: "Camera & speakers",
        description:
          "12MP Center Stage camera keeps you centered in the frame during video calls, even as you move around",
      },
      {
        icon: "🎯",
        title: "Apple Intelligence",
        description:
          "Built-in Apple Intelligence: Personal, private, powerful.",
      },
    ],
  },
  2: {
    name: "MacBook Pro",
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

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col">
        {/* Product Selector Tabs */}
        <div className="flex items-center justify-center gap-2 p-4 border-b border-gray-200 min-h-20 overflow-x-auto">
          {Object.entries(productDetailsData).map(([id, data]) => (
            <button
              key={id}
              onClick={() =>
                onSelectProduct({ id: parseInt(id), name: data.name })
              }
              className={`cursor-pointer px-4 py-2 rounded-full text-base md:text-lg font-normal whitespace-nowrap ${
                selectedProduct.id === parseInt(id)
                  ? "bg-primary text-white"
                  : "bg-white text-[#6E6E73]"
              }`}
            >
              {data.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Side - Image Swiper */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-lg overflow-hidden aspect-square">
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation]}
                  onSlideChange={(swiper) => {
                    setCurrentImageIndex(swiper.activeIndex);
                  }}
                  className="h-[40vh] w-full"
                >
                  {productData.images.map((image, idx) => (
                    <SwiperSlide
                      key={idx}
                      className="flex items-center justify-center"
                    >
                      <div className="w-full h-full flex items-center justify-center p-8">
                        <CommonImage
                          src={image.src || image}
                          alt={`${productData.name} ${idx + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-2">
                  {productData.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => swiperRef.current?.swiper.slideTo(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImageIndex === idx
                          ? "bg-gray-900"
                          : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Available Colors*/}
                <div className="mt-8 flex flex-col items-center justify-center gap-2">
                  <p className="text-xs md:text-sm font-normal text-gray-600">Available in {productData?.colors?.length} colors</p>
                  <div className="flex gap-1 items-center">
                    {productData.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Specifications */}
            <div className="flex flex-col gap-4">
              {/* Title and Description */}
              <div className="flex flex-col md:flex-row gap-4 items-center w-full justify-between">
                <div className="">
                  <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                    {productData.name}
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">
                    {productData.price}
                  </p>
                </div>
                <div>
                  <button className="px-4 py-2 cursor-pointer rounded-full bg-blue-600 text-white text-sm md:text-base font-normal">
                    Buy
                  </button>
                </div>
              </div>

              {/* Specifications List */}
              <div className="space-y-4 mb-6">
                {productData.specs.map((spec, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex-shrink-0 text-xl md:text-2xl">
                      {spec.icon}
                    </div>
                    <div>
                      {/* <p className="font-semibold text-gray-900 text-sm md:text-base">
                        {spec.title}
                      </p> */}
                      <p className="text-sm md:text-base text-primary font-medium">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black cursor-pointer"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  );
};

export default MacBookProductModal;

"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ProductSliderImg1 from "@/public/assets/apple-macbook-product-slider-img-1.svg";
import ProductSliderImg2 from "@/public/assets/apple-macbook-product-slider-img-2.svg";
import ProductSliderImg3 from "@/public/assets/apple-macbook-product-slider-img-3.svg";
import ProductSliderImg4 from "@/public/assets/apple-macbook-product-slider-img-4.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CommonImage from "../common/CommonImage";

// Card Component
const ProductCard = ({ image, name, colors, pricing, price, alt }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden h-full flex flex-col">
      {/* Product Name */}
      <div className="px-4 pt-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
          {name}
        </h3>
      </div>

      {/* Image Container */}
      <div className="aspect-square bg-white flex items-center justify-center overflow-hidden mx-4 my-3 rounded-lg">
        <div className="w-full h-full flex items-center justify-center p-4">
          <CommonImage src={image.src || image} alt={alt} />
        </div>
      </div>

      {/* Colors */}
      <div className="px-4 mb-3">
        <div className="flex items-center justify-center gap-2">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className="w-4 h-4 rounded-full cursor-pointer"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Price and Button */}
      <div className="px-4 pb-4 flex items-center justify-between gap-6 mt-auto">
        <span className="text-sm font-normal text-primary tracking-[-0.22px]">
          {pricing}
        </span>
        <button className="bg-[#0071E3] text-white rounded-full px-4 py-2 text-sm font-normal tracking-[-0.22px] cursor-pointer">
          Buy
        </button>
      </div>
    </div>
  );
};

// Main Component
const MacBookProductsSlider = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const productsData = [
    {
      image: ProductSliderImg1,
      name: "MacBook Air",
      colors: ["#C8D8E0", "#2E3642", "#F0E4D3", "#E3E4E5"],
      pricing:
        "From ₹7492.00/mo. with instant cashback* and no-cost EMI or ₹99900.00",
      alt: "MacBook Air",
    },
    {
      image: ProductSliderImg2,
      name: "MacBook Pro",
      colors: ["#2E2C2E", "#E3E4E5"],
      pricing:
        "From ₹13325.00/mo. with instant cashback* and no-cost EMI or ₹169900.00",
      alt: "MacBook Pro",
    },
    {
      image: ProductSliderImg3,
      name: "iMac",
      colors: [
        "#557ead",
        "#837fb3",
        "#de5f7d ",
        "#edd142",
        "#e3714b",
        "#3e935c",
      ],
      pricing:
        "From ₹10825.00/mo. with instant cashback* and no-cost EMI or ₹134900.00",
      alt: "iMac",
    },
    {
      image: ProductSliderImg4,
      name: "Mac mini",
      colors: ["#2E2C2E", "#E3E4E5"],
      pricing:
        "From ₹4658.00/mo. with instant cashback* and no-cost EMI or ₹59900.00",
      alt: "Mac mini",
    },
  ];

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <h2 className="macbook-gradient-text">Setup and support.</h2>
            <p className="text-[#6A696D] mt-2">
              Expert help for the festive season.
            </p>
          </div>

          {/* Swiper Slider */}
          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSwiper={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="product-cards-swiper"
            >
              {productsData.map((product, index) => (
                <SwiperSlide key={index} className="h-auto flex">
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    colors={product.colors}
                    pricing={product.pricing}
                    price={product.price}
                    alt={product.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-end mt-8 px-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={slidePrev}
                  disabled={isBeginning}
                  className={`w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center ${
                    isBeginning ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <ChevronLeft
                    className={`w-5 h-5 ${
                      isBeginning ? "text-gray-400" : "text-gray-600"
                    }`}
                  />
                </button>
                <button
                  onClick={slideNext}
                  disabled={isEnd}
                  className={`w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center ${
                    isEnd ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <ChevronRight
                    className={`w-5 h-5 ${
                      isEnd ? "text-gray-400" : "text-gray-600"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .product-cards-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .product-cards-swiper .swiper-slide {
          display: flex;
          align-items: stretch;
        }
        .product-cards-swiper .swiper-slide > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default MacBookProductsSlider;

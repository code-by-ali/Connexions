"use client";
import React, { useState } from "react";
import ProductImg1 from "@/public/assets/apple-macbook-product-img-1.svg";
import ProductImg2 from "@/public/assets/apple-macbook-product-img-2.svg";
import ProductImg3 from "@/public/assets/apple-macbook-product-img-3.svg";
import ProductImg4 from "@/public/assets/apple-macbook-product-img-4.svg";
import ProductImg5 from "@/public/assets/apple-macbook-product-img-5.svg";
import ProductImg6 from "@/public/assets/apple-macbook-product-img-6.svg";
import CommonImage from "../common/CommonImage";

export default function MacBookProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "MacBook Air", image: ProductImg1, isNew: false },
    { id: 2, name: "MacBook Pro", image: ProductImg2, isNew: true },
    { id: 3, name: "MacBook Pro", image: ProductImg3, isNew: false },
    { id: 4, name: "MacBook Pro", image: ProductImg4, isNew: false },
    { id: 5, name: "MacBook Pro", image: ProductImg5, isNew: true },
    { id: 6, name: "MacBook Pro", image: ProductImg6, isNew: false },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] py-12">
      <div className="flex flex-wrap justify-center items-end gap-8 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            {/* Image aligned bottom */}
            <button
              onClick={() => setSelectedProduct(product)}
              className="w-16 h-16 flex items-end justify-center hover:scale-110 transition-transform duration-300"
            >
              <CommonImage src={product.image.src || product.image} />
            </button>

            {/* Product name */}
            <p className="text-xs md:text-sm font-normal text-primary/80 text-center">
              {product.name}
            </p>

            {/* New label below name */}
            <p className="text-[10px] font-normal text-[#B64400] text-center">
              {product.isNew ? "New" : "\u00A0"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

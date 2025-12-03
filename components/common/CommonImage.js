"use client"; // Add this directive
import Image from 'next/image';
import { useState } from 'react';

const CommonImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  style = {},
  loading = "lazy",
  fill = false, // New prop for responsive images
  sizes = "(max-width: 768px) 100vw, 50vw",
  ...props
}) => {
  // Default dimensions for SVGs/media assets
  const [defaultWidth, defaultHeight] = [800, 600]; // Adjust based on your SVGs
  
  return fill ? (
    // Responsive fill mode (no width/height needed)
    <div className="relative w-full h-64" style={{ height: '16rem' }}> {/* Adjust height */}
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        style={{
          objectFit: "contain",
          ...style,
        }}
        priority={loading === "eager"}
        {...props}
      />
    </div>
  ) : (
    // Fixed size mode
    <Image
      src={src}
      alt={alt}
      width={width || defaultWidth}
      height={height || defaultHeight}
      loading={loading}
      className={className}
      style={{
        objectFit: "contain",
        ...style,
      }}
      sizes={sizes}
      priority={loading === "eager"}
      {...props}
    />
  );
};

export default CommonImage;

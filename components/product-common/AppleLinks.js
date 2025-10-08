import Link from "next/link";
import React from "react";

const AppleLinks = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-24">
      <div className="max-w-3xl mr-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
          iPhone
        </h2>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500 font-medium">Explore iPhone</p>
            <Link href="/iphone-17pro" className="font-semibold text-base">
              iPhone 17 Pro
            </Link>
            <Link href="/iphone-17air" className="font-semibold text-base">
              iPhone Air
            </Link>
            <Link href="/iphone-17" className="font-semibold text-base">
              iPhone 17
            </Link>
            <Link href="/apple-airpods" className="font-semibold text-base">
              Apple Airpods Pro 3
            </Link>
            <Link href="/apple-watch" className="font-semibold text-base">
              Apple Watch SE3
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleLinks;

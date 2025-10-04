import React from "react";

const WatchLinks = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-24">
      <div className="max-w-3xl mr-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
          Apple Watch
        </h2>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500 font-medium">Explore Watch</p>
            <a href="#" className="font-semibold text-base">
              Explore All Apple Watch
            </a>
            <a href="#" className="font-semibold text-base">
              Apple Watch Series 11
            </a>
            <a href="#" className="font-semibold text-base">
              Apple Watch SE 3
            </a>
            <a href="#" className="font-semibold text-base">
              Apple Watch Ultra 3
            </a>
            <a href="#" className="font-semibold text-base">
              Apple Watch Nike
            </a>
            <a href="#" className="text-base text-gray-700">
              Compare Watch
            </a>
            <a href="#" className="text-base text-gray-700">
              Why Apple Watch
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500 font-medium">Shop Watch</p>
            <a href="#" className="font-semibold text-base">
              Shop Apple Watch
            </a>
            <a href="#" className="font-semibold text-base">
              Apple Watch Straps
            </a>
            <a href="#" className="font-semibold text-base">
              Apple Watch Accessories
            </a>
            <a href="#" className="font-semibold text-base">
              Ways to Buy
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500 font-medium">More from Watch</p>
            <a href="#" className="font-semibold text-base">
              Apple Watch Support
            </a>
            <a href="#" className="font-semibold text-base">
              AppleCare
            </a>
            <a href="#" className="font-semibold text-base">
              watchOS 26
            </a>
            <a href="#" className="font-semibold text-base">
              Apple Watch For Your Kids
            </a>
            <a href="#" className="font-semibold text-base">
              Apps by Apple
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchLinks;

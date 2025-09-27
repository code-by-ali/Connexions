import React from "react";

const IphoneLinks = () => {
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
            <a href="#" className="font-semibold text-base">Explore All iPhone</a>
            <a href="#" className="font-semibold text-base">iPhone 17 Pro</a>
            <a href="#" className="font-semibold text-base">iPhone Air</a>
            <a href="#" className="font-semibold text-base">iPhone 17</a>
            <a href="#" className="font-semibold text-base">iPhone 16</a>
            <a href="#" className="font-semibold text-base">iPhone 16e</a>
            <a href="#" className="text-base text-gray-700">Compare iPhone</a>
            <a href="#" className="text-base text-gray-700">Switch from Android</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500 font-medium">Shop iPhone</p>
            <a href="#" className="font-semibold text-base">Shop iPhone</a>
            <a href="#" className="font-semibold text-base">iPhone Accessories</a>
            <a href="#" className="font-semibold text-base">Apple Trade In</a>
            <a href="#" className="font-semibold text-base">Ways to Buy</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500 font-medium">More from iPhone</p>
            <a href="#" className="font-semibold text-base">iPhone Support</a>
            <a href="#" className="font-semibold text-base">AppleCare</a>
            <a href="#" className="font-semibold text-base">iOS 26</a>
            <a href="#" className="font-semibold text-base">Apple Intelligence</a>
            <a href="#" className="font-semibold text-base">Apps by Apple</a>
            <a href="#" className="font-semibold text-base">iPhone Privacy</a>
            <a href="#" className="font-semibold text-base">iCloud+</a>
            <a href="#" className="font-semibold text-base">Wallet</a>
            <a href="#" className="font-semibold text-base">Siri</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IphoneLinks;

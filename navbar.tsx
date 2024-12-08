// components/NikeAirMaxPulse.tsx
import Image from "next/image";
import React from 'react'

const NikeAirMaxPulse = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/Vector.png" alt="Nike Logo" width={60} height={20} />
        </div>
        {/* Navigation */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-black">New & Featured</a>
          <a href="#" className="hover:text-black">Men</a>
          <a href="#" className="hover:text-black">Women</a>
          <a href="#" className="hover:text-black">Kids</a>
          <a href="#" className="hover:text-black">Sale</a>
          <a href="#" className="hover:text-black">SNKRS</a>
        </nav>
        {/* Options */}
        <div className="flex space-x-4 items-center">
          <a href="#" className="text-gray-600 hover:text-black">Find a Store |</a>
          <a href="#" className="text-gray-600 hover:text-black">Help |</a>
          <a href="#" className="text-gray-600 hover:text-black">Join Us |</a>
          <a href="#" className="text-gray-600 hover:text-black">Sign In |</a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto relative">
            <div className="text-black text-2xl font-bold mb-1 text-center"> Hello Nike App
                <div className="text-black text-0 font-normal mb-1 text-center">Download  the app to access everything Nike. Get Your Great</div>
            </div>
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/Air max plus.png"
              alt="Nike Air Max Pulse"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg"
            />
            {/* Overlay Logo */}
            <div className="absolute top-4 left-4 text-white font-bold text-lg bg-black bg-opacity-50 px-3 py-1 rounded-full">
              Air Max PULSE
            </div>
          </div>
          {/* Description */}
          <div className="mt-6 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              NIKE AIR MAX PULSE
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air
              Max Pulse—designed to push you past your limits and help you go to
              the max.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 text-center border-t border-gray-200 text-gray-600 text-sm">
        &copy; 2024 Nike, Inc. All Rights Reserved.
      </footer>
    </div>
  );
};

export default NikeAirMaxPulse;

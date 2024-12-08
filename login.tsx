import React from "react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white flex justify-between items-center px-6 py-4 border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Nike Logo" width={60} height={20} />
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
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-600">Join Us</a>
          <a href="#" className="hover:text-gray-600">Sign In</a>
        </div>
      </header>

      {/* Main Login Section */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-md w-full bg-white shadow-md p-8 rounded-lg">
          <h1 className="text-2xl font-semibold mb-6">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm text-gray-800">
                <input type="checkbox" className="text-black focus:ring-black" />
                <span>Keep me signed in</span>
              </label>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Not a Member? <a href="#" className="text-black underline">Join Us</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">FIND A STORE</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-800">BECOME A MEMBER</a></li>
              <li><a href="#" className="hover:text-gray-800">GROUP PURCHASE</a></li>
              <li><a href="#" className="hover:text-gray-800">STUDENT DISCOUNTS</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">GET HELP</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Order Status</a></li>
              <li><a href="#" className="hover:text-gray-800">Delivery</a></li>
              <li><a href="#" className="hover:text-gray-800">Returns</a></li>
            </ul>
          </div>
          {/* Add additional columns as needed */}
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;

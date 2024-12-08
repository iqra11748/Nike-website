import React from "react";

const NikeMembership = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div>
            <img src="/Vector.png" alt="Nike Logo" className="w-20" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">
              New & Featured
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">
              Men
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">
              Women
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">
              Kids
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">
              Sale
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">
              SNKRS
            </a>
          </nav>

          {/* Right-side Options */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">
              Join Us
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">
              Sign In
            </a>
          </div>
        </div>
      </header>

      {/* Signup Form Section */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Become a Nike Member
          </h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Create your Nike Member profile and get access to the very best of Nike products, inspiration, and community.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="gender" value="male" className="mr-2" />
                Male
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="female" className="mr-2" />
                Female
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Join Us
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Already a member? <a href="#" className="text-black font-medium">Sign in</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-6 px-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Find a Store</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Stores</a></li>
              <li><a href="#" className="hover:underline">Nike Apps</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Get Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Order Status</a></li>
              <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">About Nike</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs mt-4">&copy; 2024 Nike, Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default NikeMembership;

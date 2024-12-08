import React from "react";

const ShoppingCart = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b shadow">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div>
            <img src="/Vector.png" alt="Nike Logo" className="w-20" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">New & Featured</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">Men</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">Women</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">Kids</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">Sale</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">SNKRS</a>
          </nav>

          {/* User Options */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">Search</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">Help</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">Account</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Bag Section */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-2xl font-bold mb-6">Bag</h1>
            {/* Item 1 */}
            <div className="flex items-center justify-between bg-white p-4 shadow rounded mb-4">
              <img src="/shirt.png" alt="Shirt" className="w-16 h-16 rounded" />
              <div className="flex-1 mx-4">
                <h2 className="font-medium text-gray-800">Nike Dri-FIT ADV TechKnit Ultra</h2>
                <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-600">Size: L | Quantity: 1</p>
              </div>
              <p className="font-bold">₹ 3,895.00</p>
            </div>
            {/* Item 2 */}
            <div className="flex items-center justify-between bg-white p-4 shadow rounded mb-4">
              <img src="/shoes.3.png" alt="Shoes" className="w-16 h-16 rounded" />
              <div className="flex-1 mx-4">
                <h2 className="font-medium text-gray-800">Nike Air Max 97 SE</h2>
                <p className="text-sm text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-sm text-gray-600">Size: 8 | Quantity: 1</p>
              </div>
              <p className="font-bold">₹ 16,995.00</p>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 shadow rounded">
              <h2 className="text-xl font-bold mb-4">Summary</h2>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
              <button className="w-full mt-6 bg-black text-white py-2 rounded hover:bg-gray-800">
                Member Checkout
              </button>
            </div>
          </div>
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

export default ShoppingCart;
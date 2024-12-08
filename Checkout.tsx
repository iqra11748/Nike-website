import React from "react";

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b shadow">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <img
            src="/Vector.png"
            alt="Nike Logo"
            className="h-6"
          />
          {/* Contact Info */}
          <span className="text-gray-600 text-sm">000 800 100 9538</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 flex-grow">
        <h1 className="text-2xl font-bold mb-6">
          How would you like to get your order?
        </h1>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Section */}
            <div className="flex-grow">
              <p className="text-sm text-gray-600 mb-4">
                Customs regulations for India require a copy of the recipient’s
                KYC. The address on the KYC needs to match the shipping address.
                The KYC will be stored securely and used solely for the purpose
                of clearing customs (including sharing it with customs
                officials) for all orders and returns.
              </p>
              <button className="w-full text-left border border-gray-300 rounded-lg p-4 mb-6">
                Deliver It
              </button>
              <form className="space-y-4">
                {/* Name Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                </div>
                {/* Address Section */}
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Address Line 3"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                  <input
                    type="text"
                    placeholder="Locality"
                    className="w-full border border-gray-300 rounded-lg p-3"
                  />
                </div>
                <select
                  className="w-full border border-gray-300 rounded-lg p-3"
                  defaultValue="India"
                >
                  <option>India</option>
                  <option>USA</option>
                  <option>Canada</option>
                </select>
                {/* Contact Section */}
                <h2 className="font-bold text-lg mt-6">What's your contact information?</h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                {/* PAN Section */}
                <h2 className="font-bold text-lg mt-6">What's your PAN?</h2>
                <input
                  type="text"
                  placeholder="PAN"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="savePan" className="rounded" />
                  <label htmlFor="savePan" className="text-sm text-gray-600">
                    Save PAN details to Nike Profile
                  </label>
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="terms" className="rounded mt-1" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I have read and consent to{" "}
                    <a
                      href="#"
                      className="text-blue-500 hover:underline"
                    >
                      privacy policies
                    </a>
                  </label>
                </div>
                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                  Continue
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6 shadow w-full lg:w-1/3">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Delivery/Shipping</span>
                <span>Free</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Arrives Mon, 27 Mar - Wed, 12 Apr
              </p>
              <div className="mt-4">
                <img
                  src="/shirt.png"
                  alt="Product"
                  className="w-full rounded-md mb-4"
                />
                <img
                  src="/shoes.3.png"
                  alt="Product"
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs">
            © 2024 Nike, Inc. All Rights Reserved. | Privacy Policy | Terms of Use
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;

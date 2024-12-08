import React from 'react';
import Image from 'next/image';

const ProductDetail = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
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
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="flex justify-center">
            <Image
              src="/product.png"
              alt="Nike Air Force 1"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
            <p className="text-gray-600 mb-4">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its “inside-out”-inspired construction,
              including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette.
            </p>
            <p className="text-gray-600 mb-4">
              Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture
              of materials and aged midsole aesthetic give this release an artisan finish.
            </p>
            <p className="text-2xl font-semibold mb-4">₹ 8,695.00</p>
            <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 p-6 mt-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-white font-bold mb-2">Get Help</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Order Status</a></li>
              <li><a href="#" className="hover:text-white">Delivery</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">About Nike</h3>
            <ul>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-500 text-sm">
          &copy; 2024 Nike, Inc. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default ProductDetail;


import React from "react";

const Hero = () => {
  return (
    <div className="bg-white">
      {/* Best of Air Max */}
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Best of Air Max</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Nike Air Max Pulse",
              price: "₹13,995",
              type: "Women's Shoes",
              img: "/shoes 1.png",
            },
            {
              title: "Nike Air Max Pulse",
              price: "₹13,995",
              type: "Men's Shoes",
              img: "/shoes.2.png",
              
            },
            {
              title: "Nike Air Max 97 SE",
              price: "₹16,995",
              type: "Men's Shoes",
              img: "/shoes.3.png",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.img} alt={item.title} className="mx-auto mb-4" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.type}</p>
              <p className="font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="relative bg-gray-50">
        <img
          src="/runing.png"
          alt="Featured"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-4xl font-bold">STEP INTO WHAT FEELS GOOD</h2>
          <p className="mt-4">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded">
            Find Your Shoe
          </button>
        </div>
      </section>

      {/* Gear Up */}
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Gear Up</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Nike Dri-FIT ADV TechKnit Ultra",
              price: "₹3,995",
              type: "Men's Short-Sleeve Running Top",
              img: "/shirt.png",
            },
            {
              title: "Nike Dri-FIT Challenger",
              price: "₹2,495",
              type: "Men's 18cm (approx.) 2-in-1 Shorts",
              img: "/Image (18).png",
            },
            {
              title: "Nike Dri-FIT ADV Run Division",
              price: "₹5,295",
              type: "Women's Long-Sleeve Running Top",
              img: "/Image (13).png",
            },
            {
              title: "Nike Fast",
              price: "₹3,795",
              type: "Women's Mid-Rise 7/8 Running Leggings",
              img: "/Image (14).png",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.img} alt={item.title} className="mx-auto mb-4" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.type}</p>
              <p className="font-bold">{item.price}</p>
            </div> 
            
        

            

          
          )
        )
          }
        </div>
      </section>
    </div>
  );
};

export default Hero;


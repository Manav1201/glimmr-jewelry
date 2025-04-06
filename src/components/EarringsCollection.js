import React, { useState } from "react";
import studsImg from "../assets/studs.png";
import dropsImg from "../assets/drops.png";
import hoopsImg from "../assets/hoops.png";
import jhumkasImg from "../assets/jhumkas.png";

const products = [
  { name: "Golden Studs", price: 1200, img: studsImg },
  { name: "Diamond Drops", price: 2200, img: dropsImg },
  { name: "Silver Hoops", price: 1800, img: hoopsImg },
  { name: "Traditional Jhumkas", price: 2500, img: jhumkasImg },
];

const EarringsCollection = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [maxPrice, setMaxPrice] = useState(3000);

  const filteredProducts = products.filter((p) => p.price <= maxPrice);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100"} min-h-screen transition-all duration-500 p-6`}>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-extrabold tracking-tight">✨ Earrings Collection</h2>
        <label className="flex items-center gap-2">
          <span className="text-sm font-medium">{darkMode ? "Dark" : "Light"} Mode</span>
          <input
            type="checkbox"
            className="w-10 h-5 rounded-full bg-gray-300 appearance-none checked:bg-purple-600 relative transition duration-300"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </label>
      </div>

      <div className="mb-8">
        <label className="block font-semibold mb-2 text-lg">Max Price: ₹{maxPrice}</label>
        <input
          type="range"
          min="500"
          max="3000"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full accent-purple-600"
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((p, i) => (
          <div
            key={i}
            className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4"
          >
            <img src={p.img} alt={p.name} className="w-full h-48 object-contain rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">₹{p.price}</p>
            <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow hover:shadow-md transition duration-300">
              Try in AR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarringsCollection;

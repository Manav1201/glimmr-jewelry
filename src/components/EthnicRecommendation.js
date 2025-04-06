// src/components/EthnicRecommendation.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";

const outfitImages = {
  studs: [
    "https://i.pinimg.com/originals/02/20/1f/02201f9d91a2673c999927cad6469cc5.jpg",
    "https://i.pinimg.com/736x/0c/d6/e5/0cd6e5d1ef05ffb4d00f2b4653141d0c.jpg",
    "https://i.pinimg.com/originals/b1/4e/0e/b14e0ea39536963a4537e38cd0f202f5.jpg"
  ],
  jhumkas: [
    "https://i.pinimg.com/originals/b2/c1/3c/b2c13c75cfdbb49c324457c98fd8b5f6.jpg",
    "https://i.pinimg.com/736x/68/5f/6f/685f6ff2a1bd6c7687cfd56c9ae10f62.jpg",
    "https://i.pinimg.com/originals/2c/07/88/2c0788e2254dd16758be4f2d5b8bcb58.jpg"
  ],
  hoops: [
    "https://i.pinimg.com/originals/d0/15/f0/d015f0e7b1fc68c7a211b20284d0ae47.jpg",
    "https://i.pinimg.com/originals/36/7d/e4/367de4d54d611ef10be93a31e9b2b9f4.jpg",
    "https://i.pinimg.com/originals/bb/1e/37/bb1e3728a1b6cb52001203bcbb194842.jpg"
  ]
};

const EthnicRecommendation = () => {
  const [selected, setSelected] = useState("studs");

  return (
    <div className="p-6 bg-pink-50 rounded-2xl shadow-lg mt-16">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
        AI Recommendations: Ethnic Outfits for Your Earrings
      </h2>

      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(outfitImages).map((type) => (
          <Button
            key={type}
            className={`capitalize ${
              selected === type ? "bg-pink-700" : "bg-pink-300"
            }`}
            onClick={() => setSelected(type)}
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {outfitImages[selected].map((img, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img}
              alt={`Outfit ${index}`}
              className="w-full h-72 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EthnicRecommendation;


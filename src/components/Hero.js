// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Discover Your Perfect Jewelry</h2>
        <p className="mb-8">Explore our exclusive collection and find the piece that speaks to you.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded">Get Started</button>
          <button className="border border-white text-white px-6 py-3 rounded">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
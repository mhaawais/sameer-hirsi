"use client";

import React from 'react';

const ChooseUs = () => {
  return (
    <div className="bg-black w-full py-20 px-6 lg:px-32 text-center">
      <h2 className="text-myred text-4xl lg:text-5xl font-bold mb-16">
        Why You Must Read My Book
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card 1 */}
        <div className="bg-black hover:bg-[#3c1111] p-10 border-2 border-myred rounded-2xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 ease-in-out min-h-[230px]">
          <p className="text-5xl mb-4">🌍</p>
          <p className="text-lg font-semibold text-white text-center">
            Cultural or Soulful Depth
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black hover:bg-[#3c1111] p-10 border-2 border-myred rounded-2xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 ease-in-out min-h-[230px]">
          <p className="text-5xl mb-4">💡</p>
          <p className="text-lg font-semibold text-white text-center">
            Values and Emotions
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-black hover:bg-[#3c1111] p-10 border-2 border-myred rounded-2xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 ease-in-out min-h-[230px]">
          <p className="text-5xl mb-4">🔥</p>
          <p className="text-lg font-semibold text-white text-center">
            Soul-Level Resonance
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-black hover:bg-[#3c1111] p-10 border-2 border-myred rounded-2xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 ease-in-out min-h-[230px]">
          <p className="text-5xl mb-4">🌟</p>
          <p className="text-lg font-semibold text-white text-center">
            Inspiration
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

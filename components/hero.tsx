import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-black text-white py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left px-2 animate-slideIn">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-myred mb-2">
            OUT NOW —
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 leading-tight font-custom">
            "Every clue hides a lie. Every ally has a secret. And the truth... is beyond reach."
          </h1>

          <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-5 max-w-xl mx-auto md:mx-0">
            A city haunted by secrets. A team in sophomore chasing shadows through murder scenes, coded messages, and vanishing victims. Each case is more twisted than the last yet somehow, they all lead back to something far more sinister. Beyond Reach isn’t just a series it’s a ticking clock, and the truth is running out of time.
          </p>

          <Link
            href="https://www.amazon.com/BEYOND-REACH-POINT-ZERO-Part-ebook/dp/B0F94HC3FP"
            target="_blank"
          >
            <button className="bg-myred text-white uppercase text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/50 shadow-2xl hover:bg-opacity-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:scale-105 transition-all duration-300 ease-in-out">
              Get the Book
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center animate-slideInRight">
          <Image
            src="/assets/images/1.JPG"
            alt="Book Cover"
            width={500}
            height={700}
            priority
            className="rounded-xl w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

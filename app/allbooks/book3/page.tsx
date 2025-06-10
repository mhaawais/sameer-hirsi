import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Book - Critical Point | Sameer Hirsi", 
  description: "Book: Critical Point - By Sameer Hirsi. About Bringing the trilogy to a dramatic, unforgettable peak.",
};

const Book3 = () => {
  return (
    <section>
      <Header />
      <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
            BOOKS
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200">
              BOOK
            </p>
          </div>
        </div>
      </div>

      <div className='w-full bg-black px-6 md:px-10 lg:px-20 py-12'>
        <div className="container mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-myred text-center pb-8 underline hover:text-white transition duration-200">
            CRITICAL POINT - BEYOND REACH III
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Image Container - Larger */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="bg-black p-4 rounded-md w-full max-w-[500px]">
                <Image
                  src="/assets/images/2nd.JPG"
                  alt="Book Cover"
                  width={800}  // Increased size
                  height={1000} // Maintained aspect ratio
                  className="w-full h-auto rounded-md object-contain shadow-lg"
                  priority
                />
              </div>
            </div>
            
            {/* Text Container */}
            <div className="w-full lg:w-1/2 text-white space-y-6 flex flex-col items-center">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed">
                  After the storms of betrayal, and the pursuit of elusive truth, Beyond Reach – Critical Point brings the trilogy to a dramatic, unforgettable peak. Jack Wilson has reached the edge. But what waits beyond it? Sameer Hirsi delivers a high-octane, emotionally charged finale that ties together the tangled threads woven throughout Point Zero and Destiny Point.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  The revelations are explosive. The consequences are real. The system they once served may never look the same again. But even as the dust settles and long-awaited truths come to light, not everything is as final as it seems.
                </p>
              </div>

              {/* Centered Button */}
              <div className="w-full flex justify-center pt-6">
                <Link 
                  href={""} 
                  className="bg-myred hover:bg-red-700 text-white font-bold py-4 px-10 rounded-md 
                            text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 
                            shadow-lg hover:shadow-red-500/50 text-center min-w-[250px]"
                >
                  GET THE BOOK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Book3;
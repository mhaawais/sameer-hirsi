import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Book - Destiny Point | Sameer Hirsi", 
  description: "Book: Destiny Point - By Sameer Hirsi. About buried truths erupt into chaos.",
};

const Book2 = () => {
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
            DESTINY POINT - BEYOND REACH II
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
                  In this intense second part of the Beyond Reach series by Sameer Hirsi, the fragments of the past start forming a picture but it's darker, more intentional, and far more dangerous than anyone could have imagined. But clarity doesn’t bring peace it brings chaos. Every choice made in Point Zero now returns with razor-sharp consequences, dragging long-buried shadows into the harsh light of day.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  In Destiny Point, the stakes escalate as buried truths erupt into chaos. Every decision from the past returns with ruthless precision, shaking trust and testing loyalties. By the time we reach Critical Point, the trilogy hits a dramatic crescendo forcing characters to confront justice, reckon with betrayal, and redefine their futures. With razor-sharp storytelling, unforgettable characters, and twists that refuse to let go, Beyond Reach is not just a story it’s an unraveling of everything you thought you knew.
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

export default Book2;
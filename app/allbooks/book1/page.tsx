import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Book - Beyond Reach Point Zero | Sameer Hirsi", 
  description: "Book: Beyond Reach Point Zero - By Sameer Hirsi. About gripping blend of psychological suspense, political intrigue, and emotional depth.",
};

const Book1 = () => {
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
            BEYOND REACH POINT ZERO
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Image Container - Larger */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="bg-black p-4 rounded-md w-full max-w-[500px]">
                <Image
                  src="/assets/images/E-book.JPG"
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
                   The Beyond Reach series by Sameer Hirsi is a gripping blend of psychological suspense, political intrigue, and emotional depth that spans a powerful installment. It begins with Point Zero, where Judge Jack Wilson wakes up in a hospital with no memory only to discover he's at the center of a mysterious crash and a tangled web of secrets. As timelines shift between present danger and youthful ambition at Stanford, readers are drawn into a world where identity, justice, and love collide.  
                 </p>

                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="italic">Beyond Reach Point Zero</span> is not just a picture book. It's a family masterpiece, a father-daughter collaboration born from real moments, real photos, and real love. Created by Sameer Hirsi harming and colorful journey blends laughter, imagination, and the magic of togetherness into every page.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  What began as a fun experiment turned into a heartfelt legacy. This book isn't about perfection, it's about presence. It's about a dad who turned screen time into dream time. And in doing so, he gave his daughter the tools to express herself.
                </p>

                <p className="text-lg md:text-xl leading-relaxed">
                  Part One introduces us to Judge Jack Wilson, who, after a near-fatal car crash, finds himself facing the terrifying reality of memory loss. The woman claiming to be his wife, Katarina a brilliant detective reveals that the crash might not have been accidental. As Jack fights to reconstruct his past, Katarina dives into a dangerous investigation that could shake their world.
                </p>
              </div>

              {/* Centered Button */}
              <div className="w-full flex justify-center pt-6">
                <Link 
                  href={"https://www.amazon.com/BEYOND-REACH-POINT-ZERO-Part-ebook/dp/B0F94HC3FP"} 
                  className="bg-myred hover:bg-red-700 text-white font-bold py-4 px-10 rounded-md 
                            text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 
                            shadow-lg hover:shadow-red-500/50 text-center min-w-[250px]"
                >
                  GET THE BOOK HERE
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

export default Book1;
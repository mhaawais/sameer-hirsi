import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Book - Critical Point | Sameer Hirsi",
  description:
    "Book: Critical Point - By Sameer Hirsi. About Bringing the trilogy to a dramatic, unforgettable peak.",
};

const Book3 = () => {
  return (
    <section>
      <Header />

      {/* Top Section - Breadcrumb */}
      <div className="relative w-full bg-white py-4 sm:py-6 md:py-8 lg:py-10">
        <div className="container mx-auto flex flex-col justify-center items-center px-4 text-center">
          <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-black border-t-2 border-b-2 border-myred py-2 mb-2">
            BOOKS
          </h2>
          <div className="flex items-center gap-2 text-black text-base md:text-lg font-semibold">
            <Link
              href="/"
              className="hover:text-myred underline transition duration-200"
            >
              HOME
            </Link>
            <FaChevronRight className="text-myred" />
            <span className="hover:text-myred transition duration-200">
              BOOK-III
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            BEYOND REACH - CRITICAL POINT(III)
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={"https://www.amazon.com/gp/product/B0DY71MDGL?ref_=dbs_mng_crcw_0&storeType=ebooks"}
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/5.jpg"
                  alt="Book Cover"
                  width={300}
                  height={450}
                  className="w-full h-auto rounded-md object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Book Description */}
            <div className="w-full lg:w-1/2 text-white space-y-6 flex flex-col items-start">
              <p className="text-base md:text-lg leading-relaxed">
                In the thrilling conclusion to the series, the team must
                confront their own demons and doubts as they work to solve the
                case. The pressure is immense, and with the killer still on the
                loose, every moment counts. They must draw on all their
                expertise and experience to stay focused, unravel the mystery,
                and bring justice to the victims.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                As the investigation reaches its climax, tensions run high and
                the stakes are at their peak. Just when they believe they have
                it all figured out, a shocking revelation emerges—one that
                challenges everything they thought they knew and threatens to
                upend the entire case.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/gp/product/B0DY71MDGL?ref_=dbs_mng_crcw_0&storeType=ebooks"
                  target="_blank"
                  className="inline-block bg-myred hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-red-400/50 text-center"
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

export default Book3;

// import React from 'react';
// import { FaChevronRight } from 'react-icons/fa';
// import Link from 'next/link';
// import Header from '@/components/header';
// import Footer from '@/components/footer';
// import type { Metadata } from "next";
// import Image from 'next/image';

// export const metadata: Metadata = {
//   title: "Book - Critical Point | Sameer Hirsi",
//   description: "Book: Critical Point - By Sameer Hirsi. About Bringing the trilogy to a dramatic, unforgettable peak.",
// };

// const Book3 = () => {
//   return (
//     <section>
//       <Header />
//       <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
//         <div className="container mx-auto flex flex-col justify-center items-center px-4">
//           <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
//             BOOKS
//           </h2>
//           <div className="flex items-center gap-3">
//             <Link href="/">
//               <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
//                 HOME
//               </p>
//             </Link>
//             <FaChevronRight className="text-myred text-lg md:text-xl" />
//             <p className="text-lg md:text-xl font-bold text-myred transition duration-200">
//               BOOK-III
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className='w-full bg-black px-6 md:px-10 lg:px-20 py-12'>
//         <div className="container mx-auto">
//           <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-myred text-center pb-8 underline hover:text-white transition duration-200">
//             CRITICAL POINT - BEYOND REACH III
//           </h2>

//           <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
//             {/* Image Container - Larger */}
//             <div className="w-full lg:w-1/2 flex justify-center">
//               <div className="bg-black p-4 rounded-md w-full max-w-[500px]">
//                 <Image
//                   src="/assets/images/5.jpg"
//                   alt="Book Cover"
//                   width={800}  // Increased size
//                   height={1000} // Maintained aspect ratio
//                   className="w-full h-auto rounded-md object-contain shadow-lg"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Text Container */}
//             <div className="w-full lg:w-1/2 text-white space-y-6 flex flex-col items-center">
//               <div className="space-y-6">
//                 <p className="text-lg md:text-xl leading-relaxed">
//                   After the storms of betrayal, and the pursuit of elusive truth, Beyond Reach – Critical Point brings the trilogy to a dramatic, unforgettable peak. Jack Wilson has reached the edge. But what waits beyond it? Sameer Hirsi delivers a high-octane, emotionally charged finale that ties together the tangled threads woven throughout Point Zero and Destiny Point.
//                 </p>

//                 <p className="text-lg md:text-xl leading-relaxed">
//                   The revelations are explosive. The consequences are real. The system they once served may never look the same again. But even as the dust settles and long-awaited truths come to light, not everything is as final as it seems.
//                 </p>
//               </div>

//               {/* Centered Button */}
//               <div className="w-full flex justify-center pt-6">
//                 <Link
//                   href={""}
//                   className="bg-myred hover:bg-red-700 text-white font-bold py-4 px-10 rounded-md
//                             text-xl md:text-2xl transition-all duration-300 transform hover:scale-105
//                             shadow-lg hover:shadow-red-500/50 text-center min-w-[250px]"
//                 >
//                   GET THE BOOK
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </section>
//   );
// };

// export default Book3;

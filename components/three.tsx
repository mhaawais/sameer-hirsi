"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Three = () => {
  const books = [
    { src: '/assets/images/1.JPG', link: '/allbooks/book1' },
    { src: '/assets/images/3.jpg', link: '/allbooks/book2' },
    { src: '/assets/images/5.jpg', link: '/allbooks/book3' },
  ];

  return (
    <section className="bg-black py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-8 border-b-4 border-myred inline-block pb-2">
          BOOKS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link href={book.link} className="block w-full max-w-[280px]">
                <div className="relative w-full h-[360px]">
                  <Image
                    src={book.src}
                    alt={`Book ${index + 1}`}
                    width={320}
                    height={360}
                    className="rounded-lg object-contain w-full h-full shadow-md transition-transform duration-300 hover:scale-105 bg-black"
                  />
                </div>
              </Link>

              <Link href={book.link}>
                <button className="bg-myred text-white py-2 px-6 mt-4 rounded-full text-base font-medium transition-transform duration-300 hover:scale-110 hover:bg-[#b32d37] shadow-sm">
                  Read more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Three;













// "use client";
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// const Three = () => {
//   const books = [
//     { src: '/assets/images/1.JPG', link: '/allbooks/book1' },
//     { src: '/assets/images/3.jpg', link: '/allbooks/book2' },
//     { src: '/assets/images/5.jpg', link: '/allbooks/book3' },
//     // { src: '/assets/images/building1.jpg', link: '/allbooks/book4' },
//   ];

//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     if (inView) setHasAnimated(true);
//   }, [inView]);

//   return (
//     <section className="bg-black py-3 px-8">
//       <div ref={ref} className={`max-w-5xl mx-auto -mt-4 -mb-4 ${
//             hasAnimated ? 'animate-slideIn' : 'opacity-0'
//           }`}>
//         <h2 className="text-white text-4xl font-bold my-2 border-b-4 border-myred pb-3 w-fit mx-auto">
//           BOOKS
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 my-12">
//           {books.map((book, index) => (
//             <div
//               key={index}
//               className="relative aspect-[3/4] flex flex-col items-center"
//             >

//              <Link href={book.link} className="relative w-full aspect-[3/4] block">
//                 <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 shadow-white/60 perspective-300 group"> {/* Added perspective and group */}
//                  <Image
//                    src={book.src}
//                    alt={`Book ${index + 1}`}
//                    fill
//                    className="object-cover transition-transform duration-500 ease-in-out group-hover:rotateY-2 group-hover:scale-105"
//                    style={{ transform: 'perspective(1000px) rotateY(2deg)' }}
//                   />
//                 </div>
//              </Link>

//                {/*<Link href={book.link} className="relative w-full aspect-[3/4] block">
//                 <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-115 hover:-translate-y-3 border-2 border-myred rounded-lg shadow-lg shadow-white/60 
//                   sm:scale-100 scale-90">
//                   <Image
//                     src={book.src}
//                     alt={`Book ${index + 1}`}
//                     fill
//                     className="object-cover rounded-lg"
//                     style={{ transform: 'perspective(1000px) rotateY(2deg)' }}
//                   />
//                 </div>
//               </Link>*/}


//               <Link href={book.link}>
//                 <button
//                   className="bg-myred text-white py-3 px-8 rounded-full text-base font-medium cursor-pointer mt-10 transition-all duration-300 ease-in-out hover:bg-[#b32d37] hover:scale-110 hover:ring-1 hover:ring-white shadow-sm shadow-white/20"
//                 >
//                   Read more
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Three;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AuthorIntro = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <section className="flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side - Image with Animation */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center bg-black h-[50vh] lg:h-screen">
        <div ref={ref}
          className={`relative w-56 h-72 sm:w-72 sm:h-88 lg:w-[22rem] lg:h-[30rem] transition-all duration-700 ${
            hasAnimated ? 'animate-slideIn' : 'opacity-0'
          }`}
        >
          <Image 
            src="/assets/images/E-book.JPG" 
            alt="Author portrait" 
            width={448}
            height={576}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
        </div>
      </div>

      {/* Right Side - Content with Animation */}
      <div className="w-full lg:w-1/2 bg-black flex flex-col justify-center p-6 sm:p-10 lg:p-14">
        <h3 className={`text-myred text-lg sm:text-xl font-semibold uppercase tracking-wider transition-all duration-700 ${
          hasAnimated ? 'animate-slideInRight' : 'opacity-0'
        }`}>
          MEET SAMEER —— 
        </h3>

        <h2 className={`text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2 transition-all duration-700 ${
          hasAnimated ? 'animate-slideInRight' : 'opacity-0'
        }`}>
          SAMEER HIRSI<br />
          <span className="text-xl sm:text-2xl lg:text-3xl">Author, Writer, Innovater, Thinker</span>
        </h2>

        <p className={`text-gray-300 text-base sm:text-lg mt-6 leading-relaxed max-w-prose transition-all duration-700 ${
          hasAnimated ? 'animate-slideInRight' : 'opacity-0'
        }`}>
          <b>Sameer Hirsi</b> is a rising voice in the world of mystery and thriller fiction. Born in Somalia and raised in the quiet village of Qoryooley, Sameer now lives in Seattle, Washington, where he continues to write stories that explore the hidden depths of human nature and the unexpected turns life can take. At just 20 years old, and entering his senior year of high school this fall, Sameer is already carving a place for himself in the literary world with his debut novel, <strong>Beyond Reach</strong>.
        
        </p>

        <Link
          href="/author"
          className={`mt-8 px-6 py-3 bg-myred hover:bg-onhover text-white font-semibold rounded-full border-2 border-red-500 shadow-lg hover:border-red-700 transition-all duration-300 w-fit ${
            hasAnimated ? 'animate-slideInRight' : 'opacity-0'
          }`}
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default AuthorIntro;


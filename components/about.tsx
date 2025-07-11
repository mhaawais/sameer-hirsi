"use client";

import Image from 'next/image';
import Link from 'next/link';

const AuthorIntro = () => {
  return (
    <section className="flex flex-col lg:flex-row overflow-hidden bg-black">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center h-[40vh] lg:h-screen px-4 py-8">
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-[22rem] lg:h-[30rem]">
          <Image
            src="/assets/images/author-4.jpeg"
            alt="Author image"
            width={448}
            height={576}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-10 lg:p-16">
        <h3 className="text-myred text-lg sm:text-xl font-semibold uppercase tracking-wider mb-2">
          MEET SAMEER ——
        </h3>

        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          SAMEER HIRSI
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium mt-1">
          Author, Writer, Innovator, Thinker
        </p>

        <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed max-w-prose">
          <strong>Sameer Hirsi</strong> is a rising voice in the world of mystery and thriller fiction. Born in Somalia and raised in the quiet village of Qoryooley, Sameer now lives in Seattle, Washington, where he continues to write stories that explore the hidden depths of human nature and the unexpected turns life can take.
          <br /><br />
          At just 20 years old, and entering his senior year of high school this fall, Sameer is already carving a place for himself in the literary world with his debut novel, <strong>Beyond Reach</strong>.
        </p>

        <Link href="/author">
          <button className="mt-8 px-6 py-3 bg-myred text-white font-semibold rounded-full border-2 border-myred hover:bg-transparent hover:text-myred transition-all duration-300 w-fit">
            Explore More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AuthorIntro;



import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Author - Sameer Hirsi", 
  description: "Learn more about Sameer Hirsi, author of 'Beyond Reach Point Zero', Discover her journey of mission, strength, and purpose.",
};

const Author = () => {
  return (
    <section>
      <Header />
      <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
            AUTHOR
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200">
              AUTHOR
            </p>
          </div>
        </div>
      </div>

      {/* About Marry Section */}
      <div className="bg-black py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Image + First Two Paragraphs Side-by-Side */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Image */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <Image
                src="/assets/images/E-book.JPG"
                alt="Marypee"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Title + First Paragraphs  drop-shadow-[0_0_20px_theme('colors.myred')] */}
            <div className="w-full lg:w-2/3">
              <h4 className="text-myred text-xl md:text-2xl font-bold tracking-wide mb-2 uppercase">
                ABOUT SAMEER —— 
              </h4>
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-left ">
                SAMEER HIRSI : A Storyteller, Motivator or a Philosopher
              </h2>
              <div className="text-white text-base md:text-lg space-y-6 leading-relaxed">
                <p className="tracking-tight">
                  <b>Sameer Hirsi</b> is a rising voice in the world of mystery and thriller fiction. Born in Somalia and raised in the quiet village of Qoryooley, Sameer now lives in Seattle, Washington, where he continues to write stories that explore the hidden depths of human nature and the unexpected turns life can take. At just 20 years old, and entering his senior year of high school this fall, Sameer is already carving a place for himself in the literary world with his debut novel, <strong>Beyond Reach</strong>.
                </p>
                <p className="tracking-tight">
                  For Sameer, writing has always been more than just a hobby it’s been a way to process the world and connect with others on a deeper level. Growing up, he found comfort and inspiration in the pages of mystery novels, often captivated by the way a well-crafted story could both challenge the mind and stir the imagination. Authors like Stephen King and Jenna Rose sparked his fascination with suspenseful storytelling and helped shape the dark, gripping narrative voice he brings to his own work.
                </p>

                {/* <p className="tracking-tight text-myred font-bold italic">
                  "Every time I write, I discover something new," he says, “It’s a conversation with myself before it’s shared with the world.”
                </p> */}
              </div>
            </div>
          </div>

          {/* Remaining Paragraphs Below Image */}
          <div className="w-full text-white text-base md:text-lg space-y-6 leading-relaxed mt-4">
            <p className="tracking-tight">
              Beyond Reach is the product of Sameer’s love for intricate plots, complex characters, and those deliciously unpredictable twists that leave readers breathless. His writing style is fast-paced and immersive, designed to pull you in and keep you there, turning pages long into the night. Drawing from his previous experience writing twist-filled stories, he has refined a voice that is suspenseful, engaging, and constantly pushing toward the unexpected.
            </p>
            <p className="tracking-tight">
              When he’s not plotting his next mystery, Sameer enjoys playing soccer and volleyball activities that help him stay grounded, clear his mind, and return to his writing desk with renewed focus. For him, sports offer the perfect balance to the often-solitary nature of storytelling.
            </p>

            <p className="tracking-tight">
              Sameer hopes Beyond Reach is more than just a thrilling ride for his readers. He wants them to feel the tension, connect with the characters, and stay guessing until the very last page. If you love mystery with heart-pounding suspense and sharp, unexpected turns.
            </p>
            <p className="tracking-tight">
              So,<br /> 
              <span className="text-myred font-bold italic">"Keep an eye on Sameer Hirsi this is only the beginning."</span>
            </p>
            {/* <p className="tracking-tight"></p>
                <p className="tracking-tight"></p> */}
          </div>
        </div>
      </div>

      {/* Writer Gallery Section */}
      {/* <div className="bg-black py-12 px-6 md:px-10 lg:px-20">
        <h2 className="text-myred text-3xl md:text-4xl font-bold text-center mb-8">
          WRITER GALLERY
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            "/assets/images/charles-1.jpeg",
            "/assets/images/charles2.jpeg",
            "/assets/images/charles3.jpeg",
            "/assets/images/charles4.jpeg",
            "/assets/images/charles5.jpeg"
          ].map((src, index) => (
            <div key={index} className="group relative w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={src}
                alt={"Writer"}
                width={300}
                height={300}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay 
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
  
              </div>
            </div>
          ))}
        </div> 
      </div>  */}
      
      <Footer />
    </section>
  );
};
export default Author; 
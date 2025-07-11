"use client";

import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-black text-black py-16 px-4">
      {/* Top Border */}
      <div className="border-t-4 border-review w-full mb-10 px-4"></div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-myred mb-12 tracking-wide font-serif">
        Client Reviews...
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-[#e3dede] p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed italic mb-4">
            "Opening with a powerful and unsettling moment,{" "}
            <span className="font-semibold">Beyond Reach Point Zero</span> is
            filled with vivid imagery, intense emotion, and unexpected insights
            into church life. Sameer Hirsi.'s account of spiritual
            disillusionment and transformation is authentic, compelling, and
            deeply affecting—taking readers through a journey that is honest,
            courageous, and unforgettable."
          </p>
          <p className="text-right font-semibold text-myblack font-serif">
            — Lon Otto
          </p>
          <p className="text-right text-sm mt-1 text-gray-700 font-serif">
            Prize-winning author and professor emeritus of literature at the
            University of St. Thomas in St. Paul, Minnesota.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-[#e3dede] p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed mb-4">
            "Sameer Hirsi. was once a devoted church member and respected figure
            in his community. In{" "}
            <span className="font-semibold">Beyond Reach Point Zero</span>, he
            shares his heartfelt experiences and painful reflections with
            clarity and purpose. This honest narrative explores the emotional
            weight of religious disillusionment and the search for spiritual
            identity outside of tradition."
          </p>
          <p className="text-right font-semibold text-myblack font-serif">
            — Terry Seward
          </p>
          <p className="text-right text-sm mt-1 text-gray-700 font-serif">
            Past Grand Master of Masons in Illinois
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-[#e3dede] p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed italic mb-4">
            "<span className="font-semibold">Beyond Reach Point Zero</span>{" "}
            captures the personal story of an individual confronting
            long-standing religious tradition in a small-town church setting.
            This powerful narrative blends spiritual conflict, societal
            pressure, and the quest for truth."
          </p>
          <p className="text-right font-semibold text-myblack font-serif">
            — Jonathan Bean, Ph.D
          </p>
          <p className="text-right text-sm mt-1 text-gray-700 font-serif">
            Research Fellow at the Independent Institute and Professor of
            History at Southern Illinois University
          </p>
        </div>

        {/* Testimonial 4 */}
        <div className="bg-[#e3dede] p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed mb-4">
            "Growing up, I knew Dwight had deep roots in the church—but I never
            understood the full weight of his story until he shared it in{" "}
            <span className="font-semibold">Beyond Reach Point Zero</span>. His
            journey is eye-opening and deeply personal."
          </p>
          <p className="text-right font-semibold text-myblack font-serif">
            — Vicky Turl
          </p>
          <p className="text-right text-sm mt-1 text-gray-700 font-serif">
            Director of Dual Credit & Partnerships, John A. Logan College
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b-4 border-review w-full mt-16 px-4"></div>
    </section>
  );
};

export default Testimonial;

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
            "From the moment Judge Jack Wilson wakes up in a hospital with no
            memory, <span className="font-semibold">Beyond Reach: Point Zero</span>{" "}
            hooks readers with its gripping psychological tension and masterful
            pacing. The story unravels layer by layer, pulling you into a world
            of suspicion, buried truths, and the fragile nature of identity.
            Sameer Hirsi delivers a taut, cinematic thriller that leaves you
            questioning everything."
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
            "In <span className="font-semibold">Beyond Reach: Destiny Point</span>, Sameer
            Hirsi raises the stakes with a mystery that’s as haunting as it is
            intelligent. The death of investigative journalist Hailey Rodrigues
            sets off a chain of discoveries that pull readers into a locked-room
            puzzle full of danger and double-crosses. This second installment is
            sharp, unpredictable, and impossible to put down."
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
            "<span className="font-semibold">Beyond Reach: Critical Point</span> delivers
            suspense, betrayal, and an unraveling conspiracy that drive the
            series to a chilling climax. As the team searches for Sidney Jones,
            every lead reveals a deeper game in play. Hirsi expertly tightens
            the tension with every chapter, keeping readers on edge until the
            final reveal."
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
            "Sameer Hirsi’s{" "}
            <span className="font-semibold">Beyond Reach</span> series is a
            standout in modern suspense—each book building on the last with more
            intrigue, more intensity, and deeper character development. What
            begins with memory loss and a suspicious crash spirals into a complex
            web of secrets, hidden motives, and the search for truth. It’s a
            thriller experience you won’t forget."
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








// "use client";

// import React from "react";

// const Testimonial = () => {
//   return (
//     <section className="bg-black text-black py-16 px-4">
//       {/* Top Border */}
//       <div className="border-t-4 border-review w-full mb-10 px-4"></div>

//       {/* Heading */}
//       <h2 className="text-3xl sm:text-4xl font-bold text-center text-myred mb-12 tracking-wide font-serif">
//         Client Reviews...
//       </h2>

//       {/* Testimonials Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
//         {/* Testimonial 1 */}
//         <div className="bg-[#e3dede] p-6 rounded-lg shadow-md">
//           <p className="text-lg leading-relaxed italic mb-4">
//             "Opening with a powerful and unsettling moment,{" "}
//             <span className="font-semibold">Beyond Reach Point Zero</span> is
//             filled with vivid imagery, intense emotion, and unexpected insights
//             into faith and spiritual struggle. Sameer Hirsi’s account of
//             disillusionment and transformation is authentic, compelling, and
//             deeply affecting—taking readers through a journey that is honest,
//             courageous, and unforgettable."
//           </p>
//           <p className="text-right font-semibold text-myblack font-serif">
//             — Lon Otto
//           </p>
//           <p className="text-right text-sm mt-1 text-gray-700 font-serif">
//             Prize-winning author and professor emeritus of literature at the
//             University of St. Thomas in St. Paul, Minnesota.
//           </p>
//         </div>

//         {/* Testimonial 2 */}
//         <div className="bg-[#e3dede] p-6 rounded-lg shadow-md">
//           <p className="text-lg leading-relaxed mb-4">
//             "Sameer Hirsi was once a devoted member of his faith community and a
//             respected figure in his circles. In{" "}
//             <span className="font-semibold">Beyond Reach Point Zero</span>, he
//             shares his heartfelt experiences and painful reflections with
//             clarity and purpose. This honest narrative explores the emotional
//             weight of religious disillusionment and the search for spiritual
//             identity beyond tradition."
//           </p>
//           <p className="text-right font-semibold text-myblack font-serif">
//             — Terry Seward
//           </p>
//           <p className="text-right text-sm mt-1 text-gray-700 font-serif">
//             Past Grand Master of Masons in Illinois
//           </p>
//         </div>

//         {/* Testimonial 3 */}
//         <div className="bg-[#e3dede] p-6 rounded-lg shadow-md">
//           <p className="text-lg leading-relaxed italic mb-4">
//             "<span className="font-semibold">Beyond Reach Point Zero</span>{" "}
//             captures the personal story of an individual confronting
//             long-standing religious tradition within a close-knit faith
//             community. This powerful narrative blends spiritual conflict,
//             societal pressure, and the quest for truth."
//           </p>
//           <p className="text-right font-semibold text-myblack font-serif">
//             — Jonathan Bean, Ph.D
//           </p>
//           <p className="text-right text-sm mt-1 text-gray-700 font-serif">
//             Research Fellow at the Independent Institute and Professor of
//             History at Southern Illinois University
//           </p>
//         </div>

//         {/* Testimonial 4 */}
//         <div className="bg-[#e3dede] p-6 rounded-lg shadow-md">
//           <p className="text-lg leading-relaxed mb-4">
//             "Growing up, I knew Sameer had deep connection to his faith—but I
//             never understood the full weight of his story until he shared it in{" "}
//             <span className="font-semibold">Beyond Reach Point Zero</span>. His
//             journey is eye-opening and deeply personal."
//           </p>
//           <p className="text-right font-semibold text-myblack font-serif">
//             — Vicky Turl
//           </p>
//           <p className="text-right text-sm mt-1 text-gray-700 font-serif">
//             Director of Dual Credit & Partnerships, John A. Logan College
//           </p>
//         </div>
//       </div>

//       {/* Bottom Border */}
//       <div className="border-b-4 border-review w-full mt-16 px-4"></div>
//     </section>
//   );
// };

// export default Testimonial;

"use client";

import Image from "next/image";
import Link from "next/link";

const BlogsSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-myred">
          Explore My Latest Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Blog 1 */}
          <Link href="/detailblog/blog1" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <Image
                src="/assets/images/2.JPG"
                alt="Blog 1"
                width={600}
                height={400}
                className="object-contain w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-myred transition">
                  Beyond Reach: Point Zero – A Gripping Start to an Unfolding Trilogy
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  What happens when a man wakes up in a hospital with no memory, only to discover he’s not only a respected judge.
                </p>
                <span className="text-myred font-medium hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          </Link>

          {/* Blog 2 */}
          <Link href="/detailblog/blog2" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <Image
                src="/assets/images/4.JPG"
                alt="Blog 2"
                width={600}
                height={400}
                className="object-contain w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-myred transition">
                  Beyond Reach: Destiny Point – The Past Resurfaces, The Stakes Rise
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  If Point Zero merely cracked open the surface of forgotten memories and buried truths, Destiny Point smashes through.
                </p>
                <span className="text-myred font-medium hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          </Link>

          {/* Blog 3 */}
          <Link href="/detailblog/blog3" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <Image
                src="/assets/images/6.JPG"
                alt="Blog 3"
                width={600}
                height={400}
                className="object-contain w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-myred transition">
                  Beyond Reach: Critical Point – Justice Meets Destiny... or Does It?
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  After the storms of betrayal, and the pursuit of elusive truth, Beyond Reach – Critical Point brings the trilogy to a dramatic.
                </p>
                <span className="text-myred font-medium hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-block bg-myred text-white py-3 px-8 rounded-full hover:bg-red-900 transition duration-300 font-semibold text-base"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;

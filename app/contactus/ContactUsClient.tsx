"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ContactUsClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mkgbdbpl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-black text-white">
      <Header />

      {/* Top Section */}
      {/* <section className="py-16 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold border-y-2 border-myred inline-block py-3 mb-4">
            CONTACT
          </h2>
          <div className="flex justify-center items-center gap-2 mt-4 text-white">
            <Link href="/">
              <span className="text-lg font-medium hover:text-myred underline cursor-pointer">
                HOME
              </span>
            </Link>
            <FaChevronRight className="text-myred" />
            <span className="text-lg font-medium text-myred">CONTACT</span>
          </div>
        </div>
      </section> */}

      <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
          CONTACT
        </h2>
        <div className="flex items-center gap-3">
          <Link href="/">
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
              HOME
            </p>
          </Link>
          <FaChevronRight className="text-myred text-lg md:text-xl" />
          <p className="text-lg md:text-xl font-bold text-myred transition duration-200">
            CONTACT
          </p>
        </div>
      </div>
    </div>

      {/* Main Contact Section */}
      <section className="flex flex-col md:flex-row w-full">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <Image
              src="/assets/images/author-6.jpeg"
              alt="Sameer Hirsi"
              width={400}
              height={500}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 bg-black p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
          <h3 className="text-myred text-lg font-semibold uppercase tracking-widest mb-2">
            About Sameer ——
          </h3>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Message Sameer Hirsi
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-6">
            I would love to hear from you. Please drop me a line!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase mb-2 block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:ring-2 focus:ring-myred placeholder-gray-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase mb-2 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:ring-2 focus:ring-myred placeholder-gray-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows={6}
                className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:ring-2 focus:ring-myred placeholder-gray-500 text-sm resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-myred text-white py-3 rounded font-medium hover:bg-[#b32d37] transition-all text-sm"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className={`mt-4 text-sm ${status.includes("success") ? "text-green-400" : "text-red-500"}`}>
              {status}
            </p>
          )}

          <p className="mt-6 text-sm text-gray-400">
            Or email me at{" "}
            <a href="mailto:info@sameerhirsi.com" className="text-myred underline hover:text-white">
              info@sameerhirsi.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsClient;

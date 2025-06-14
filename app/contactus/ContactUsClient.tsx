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
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xyzevalb", {
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

      {/* Top Section: Breadcrumb with Image Background */}
      <section className="relative w-full py-16 md:py-20 lg:py-24">
        {/* Background Image with 15% Opacity */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: `url(/assets/images/contact1.jpg)` }} // Replace with your image path
        ></div> */}
        <div className="container mx-auto flex flex-col justify-center items-center px-4 relative z-10">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
            CONTACT
          </h2>
          <div
            className="flex items-center gap-3"
          >
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200">
              CONTACT
            </p>
          </div>
        </div>
      </section>

      {/* Combined Section */}
      <section className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Left Section with background and image */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center md:justify-end bg-black h-[60vh] md:h-auto">
          {/* <div
            className="absolute left-0 top-0 bottom-0 w-[70%] bg-cover bg-center z-0"
            style={{ backgroundImage: `url(/assets/images/contact2.jpg)` }}
          ></div> */}

          <div className="w-72 h-72 sm:w-[360px] sm:h-[360px] md:w-96 md:h-96 lg:w-[410px] lg:h-[410px] ">
            {/* Adjusted image sizes for responsiveness and reduced margin mr-2 md:mr-2 mt-12 md:mt-0*/}
            <Image
              src="/assets/images/E-book.JPG"
              alt="Sameer"
              height={500}
              width={300}
              className="rounded-lg shadow-lg object-cover" // Added object-cover for better scaling
              priority
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 bg-black flex flex-col justify-center p-6 md:p-8 mt-16 md:mt-6">
          {/* Reduced padding from p-12 to p-8 on md screens */}
          <h3 className="text-myred text-lg md:text-xl font-semibold uppercase tracking-wide">
            ABOUT SAMEER ——
          </h3>
          <h2
            className="text-white text-3xl md:text-4xl font-bold leading-tight mt-2"
            style={{ textShadow: "1px 1px 2px myred" }}
          >
            MESSAGE SAMEER HIRSI
          </h2>
          <p className="text-white text-base md:text-lg lg:text-xl mt-6 leading-relaxed mb-8">
            I would love to hear from you, please drop me a line!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-xs font-semibold text-gray-300 uppercase mb-2"
              >
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
                className="p-3 border border-gray-600 bg-black text-white rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-myred placeholder-gray-400 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-xs font-semibold text-gray-300 uppercase mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
                className="p-3 border border-gray-600 bg-black text-white rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-myred placeholder-gray-400 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-xs font-semibold text-gray-300 uppercase mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows={5}
                className="p-3 border border-gray-600 bg-black text-white rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-myred placeholder-gray-400 text-sm resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-myred text-white py-3 rounded text-sm font-medium hover:opacity-90 transition-colors"
            >
              Send message
            </button>
          </form>

          {status && (
            <p
              className={`mt-5 text-sm ${
                status.includes("successfully")
                  ? "text-green-400"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}

          <div className="mt-8 text-sm text-gray-400">
            Or email me at{" "}
            <a
              href="mailto:info@sameerhirsi.com"
              className="text-myred hover:underline"
            >
              info@sameerhirsi.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default ContactUsClient;

import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Three from "@/components/three";
import ChooseUs from "@/components/chooseus";
import Testimonial from "@/components/testimonial";
import AuthorIntro from "@/components/about";
import BlogsSection from "@/components/blogs";

export const metadata: Metadata = {
  title: "Books By Sameer Hirsi",  
  description: "Official site for the Beyond Reach Point Zero, Destiny Point or Critical Point books by Sameer Hirsi.",
};


export default function Home() {
  return (
    <div className="bg-black">
      
      <Header />
      <Hero />
      <Three />
      <AuthorIntro />
      <ChooseUs />
      <BlogsSection />
      <Testimonial />
      <Footer /> 
    
    </div>
  );
}

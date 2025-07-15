// components/HomeClient.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Three from '@/components/three';
import ChooseUs from '@/components/chooseus';
import Testimonial from '@/components/testimonial';
import AuthorIntro from '@/components/about';
import BlogsSection from '@/components/blogs';
import Loader from '@/components/loader';

const HomeClient: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // 1.5s loader on first load

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <Loader />;

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
};

export default HomeClient;


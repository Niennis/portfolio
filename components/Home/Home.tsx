'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
// import WhyChoose from './WhyChoose/WhyChoose'
import Projects from './Projects/Projects'
import Feature from './Feature/Feature'
// import Review from './Review/Review'
// import Price from './Price/Price'
// import Offer from './Offer/Offer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Projects /> {/* <-- con animaciones */}
      <Feature />  {/* <-- sin animaciones */}
    </div>
  );
}

export default Home
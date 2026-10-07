'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import PersonalProjects from './PersonalProjects/PersonalProjects'
import Feature from './Feature/Feature'
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
      // Sin animaciones en celular (< 48em, o sea 768px con la letra normal) ni si la persona pidió reducir el movimiento en su sistema
      disable: () =>
        window.matchMedia('(max-width: 47.99em)').matches ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Projects />
      <PersonalProjects />
      <Feature />
    </div>
  );
}

export default Home
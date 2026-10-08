'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import Feature from './Feature/Feature'
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { Dictionary } from '@/i18n/getDictionary'
import type { ProjectGroup } from '@/constant/projects'

type Props = {
  dict: Dictionary
  projectGroups: ProjectGroup[]
}

const Home = ({ dict, projectGroups }: Props) => {
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
      <Hero dict={dict.hero} />
      <Projects groups={projectGroups} dict={dict.projects} />
      <Feature dict={dict.skills} />
    </div>
  );
}

export default Home
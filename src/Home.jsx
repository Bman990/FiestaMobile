import React from 'react';
import Hero from './Hero';
import Story from './Story';
import Menu from './Menu';
import Contact from './Contact';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sectionId = urlParams.get('section');
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
      <Hero />
      <Story />
      <Menu />
      <Contact />
    </div>
  );
}
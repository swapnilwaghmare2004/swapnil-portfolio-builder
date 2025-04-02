
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

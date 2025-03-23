
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-foreground text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center relative">
          <button 
            onClick={scrollToTop}
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>

          <a href="#home" className="text-2xl font-bold mb-6">
            Swapnil.dev
          </a>

          <div className="flex space-x-6 mb-6">
            <a 
              href="#home" 
              className="text-white/70 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white/70 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-white/70 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#education" 
              className="text-white/70 hover:text-white transition-colors"
            >
              Education
            </a>
            <a 
              href="#contact" 
              className="text-white/70 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="w-24 h-px bg-white/20 mb-6"></div>

          <p className="text-white/60 text-center">
            &copy; {new Date().getFullYear()} Swapnil Waghmare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

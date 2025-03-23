
import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50" />
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center stagger-animation">
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-elegant">
            <img 
              src="/lovable-uploads/cf2aa5df-c09a-4e00-9bea-bcb43885ec2d.png" 
              alt="Swapnil Waghmare" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
            <span className="animate-bounce-light">👋</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-text-focus-in">
          Swapnil Waghmare
        </h1>

        <div className="flex flex-col items-center">
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8">
            <span className="font-semibold text-primary">Data Science</span> &{" "}
            <span className="font-semibold text-primary">Electronics Engineering</span> Student
          </p>

          <div className="flex items-center space-x-4 mb-10">
            <a 
              href="https://github.com/swapnilwaghmare2004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/swapnil-waghmare-103b93259" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/home?lang=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter/X"
            >
              <Twitter size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#about" className="btn-secondary">
              About Me
            </a>
          </div>
        </div>

        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/60 hover:text-primary transition-colors animate-bounce-light"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

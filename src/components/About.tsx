
import React from 'react';
import { GraduationCap, Code, Database, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Who I Am
            </h3>
            
            <p className="text-foreground/80 mb-6 leading-relaxed">
              I'm Swapnil Waghmare, I am pursuing a BE in Electronics & Telecommunication Engineering from NMIET College and a BS in Data Science & Application from IIT Madras. With a strong interest in Data Analytics, AI, ML, and Electronics & Telecommunication, I aim to apply my technical and analytical skills to solve complex challenges. I am emerging professional in AI/ML and software development. My passion lies at the intersection of artificial intelligence, web development, electronics & telecommunication and solving complex technological challenges.
            </p>
            
            <p className="text-foreground/80 mb-8 leading-relaxed">
              I'm a E&TC Engineer with a passion for Artificial Intelligence 🤖 and Machine Learning 📊, currently pursuing my BE at NMIET Pune. I thrive on building innovative AI solutions, exploring the latest tech trends, and working on real-world projects that drive impact 🌍. Whether it's machine learning models, intelligent automation, or AI-driven applications, I love creating cutting-edge solutions that push the boundaries of technology! 💡✨
            </p>

            <p className="text-foreground/80 mb-8 leading-relaxed">
              With expertise in Python, C, C++, AI/ML frameworks (TensorFlow, PyTorch, Numpy, Pandas, Matplotlib), and Web Development, I am constantly exploring new technologies and improving my skills. My goal is to leverage AI to build intelligent systems that solve real-world problems and make an impact.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-primary" size={20} />
                <span>Engineering Student</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-primary" size={20} />
                <span>Data Science</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="text-primary" size={20} />
                <span>AI & ML</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="text-primary" size={20} />
                <span>Electronics</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-6"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant max-w-md">
                <img 
                  src="/lovable-uploads/cf2aa5df-c09a-4e00-9bea-bcb43885ec2d.png" 
                  alt="Swapnil Waghmare" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

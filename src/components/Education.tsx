
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItemProps {
  title: string;
  institute: string;
  period: string;
  description: string;
  delay: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  title, 
  institute, 
  period, 
  description, 
  delay 
}) => {
  return (
    <div 
      className="glass-card mb-8 border-l-4 border-primary pl-6 py-1"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0,
        animation: `slide-up 0.6s ease forwards ${delay}s` 
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center text-primary mt-2 md:mt-0">
          <Calendar size={16} className="mr-1" />
          <span className="text-sm">{period}</span>
        </div>
      </div>
      <h4 className="text-lg text-foreground/80 mb-3">{institute}</h4>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const Education = () => {
  const educationItems = [
    {
      title: "B.E. in Electronics & Telecommunication",
      institute: "NMIET College, Savitribai Phule Pune University (SPPU)",
      period: "2022 - Present",
      description: "Studying electronics engineering fundamentals, circuit design, signal processing, and telecommunication systems.",
      delay: 0.1
    },
    {
      title: "BS in Data Science & Applications",
      institute: "Indian Institute of Technology (IIT) Madras",
      period: "2023 - Present",
      description: "Learning data analysis, machine learning, statistical modeling, and programming for data science applications.",
      delay: 0.3
    },
    {
      title: "Higher Secondary Education",
      institute: "Central Board of Secondary Education",
      period: "2020 - 2022",
      description: "Completed higher secondary education with focus on science and mathematics.",
      delay: 0.5
    }
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <GraduationCap size={24} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Academic Background</h3>
          </div>

          <div className="ml-6">
            {educationItems.map((item, index) => (
              <EducationItem
                key={index}
                title={item.title}
                institute={item.institute}
                period={item.period}
                description={item.description}
                delay={item.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

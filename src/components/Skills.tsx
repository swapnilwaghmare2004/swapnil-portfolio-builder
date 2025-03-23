
import React from 'react';
import { Database, Code, Braces, FileCode, BarChart, ChipIcon, LineChart, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const ChipIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="6" height="6"></rect>
      <path d="M5 9h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"></path>
      <path d="M9 5v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2"></path>
      <path d="M19 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"></path>
      <path d="M15 5v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
      <path d="M9 19v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2"></path>
      <path d="M5 15h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2"></path>
      <path d="M19 15h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2"></path>
      <path d="M15 19v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2"></path>
    </svg>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="skill-card"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0,
        animation: `slide-up 0.6s ease forwards ${delay}s` 
      }}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      icon: <Database size={28} />,
      title: "Data Science",
      description: "Experience with data analysis, visualization, and machine learning techniques",
      delay: 0.1
    },
    {
      icon: <Code size={28} />,
      title: "Programming",
      description: "Proficient in Python, R, and SQL for data manipulation and analysis",
      delay: 0.2
    },
    {
      icon: <Braces size={28} />,
      title: "Machine Learning",
      description: "Experience building and evaluating ML models for various applications",
      delay: 0.3
    },
    {
      icon: <BarChart size={28} />,
      title: "Data Analysis",
      description: "Strong analytical skills with experience in statistical analysis",
      delay: 0.4
    },
    {
      icon: <ChipIcon size={28} />,
      title: "Electronics",
      description: "Knowledge of electronic circuits and telecommunication systems",
      delay: 0.5
    },
    {
      icon: <Cpu size={28} />,
      title: "Embedded Systems",
      description: "Experience with microcontrollers and embedded system design",
      delay: 0.6
    },
    {
      icon: <FileCode size={28} />,
      title: "Algorithm Design",
      description: "Skills in developing efficient algorithms for data processing",
      delay: 0.7
    },
    {
      icon: <LineChart size={28} />,
      title: "Data Visualization",
      description: "Creating informative and insightful visual representations of data",
      delay: 0.8
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={skill.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

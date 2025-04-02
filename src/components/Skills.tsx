
import React from 'react';
import { Database, Code, Braces, FileCode, BarChart, LineChart, Cpu } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { cn } from '@/lib/utils';

// Define ChipIcon as a proper React functional component with explicit size handling
const ChipIcon: React.FC<React.SVGAttributes<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
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

interface SkillItemProps {
  name: string;
  proficiency: number;
  delay: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, proficiency, delay }) => {
  return (
    <div 
      className="mb-4"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0,
        animation: `slide-up 0.6s ease forwards ${delay}s` 
      }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-primary">{proficiency}%</span>
      </div>
      <Progress value={proficiency} className="h-2" />
    </div>
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
      className="relative backdrop-blur-md bg-white/80 rounded-2xl shadow-glass p-6 border border-white/20 overflow-hidden hover:shadow-elegant transition-all duration-500 ease-in-out flex flex-col items-center text-center"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0,
        animation: `slide-up 0.6s ease forwards ${delay}s` 
      }}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={28} />,
      title: "Programming",
      description: "Proficient in various programming languages for software development",
      delay: 0.1,
      skills: [
        { name: "Python", proficiency: 90 },
        { name: "C", proficiency: 85 },
        { name: "C++", proficiency: 80 },
        { name: "Java", proficiency: 75 },
        { name: "JavaScript", proficiency: 85 }
      ]
    },
    {
      icon: <Database size={28} />,
      title: "Data Science & AI/ML",
      description: "Experience with data analysis, visualization, and machine learning techniques",
      delay: 0.2,
      skills: [
        { name: "TensorFlow", proficiency: 85 },
        { name: "PyTorch", proficiency: 80 },
        { name: "Numpy", proficiency: 90 },
        { name: "Pandas", proficiency: 90 },
        { name: "Matplotlib", proficiency: 85 }
      ]
    },
    {
      icon: <Braces size={28} />,
      title: "Web Development",
      description: "Building modern web applications with the latest technologies",
      delay: 0.3,
      skills: [
        { name: "HTML", proficiency: 95 },
        { name: "CSS", proficiency: 90 },
        { name: "React", proficiency: 85 },
        { name: "TypeScript", proficiency: 80 },
        { name: "Node.js", proficiency: 75 }
      ]
    },
    {
      icon: <ChipIcon size={28} />,
      title: "Electronics & IoT",
      description: "Working with electronic components, circuits, and IoT technologies",
      delay: 0.4,
      skills: [
        { name: "Arduino", proficiency: 90 },
        { name: "Circuit Design", proficiency: 85 },
        { name: "Embedded Systems", proficiency: 80 },
        { name: "IoT Frameworks", proficiency: 75 },
        { name: "VLSI", proficiency: 70 }
      ]
    }
  ];

  const generalSkills = [
    {
      icon: <BarChart size={28} />,
      title: "Data Analysis",
      description: "Strong analytical skills with experience in statistical analysis and big data tools",
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
      description: "Skills in developing efficient algorithms for data processing and machine learning",
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
          <p className="text-center text-foreground/70 max-w-3xl">
            E&TC Engineer | AI & ML | Data Analyst | Full Stack Developer | IoT | VLSI | Gen AI Enthusiast | Python Developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-sm text-foreground/70">{category.description}</p>
                </div>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem 
                    key={skillIndex}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    delay={category.delay + (skillIndex * 0.05)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-10">Other Technical Skills</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {generalSkills.map((skill, index) => (
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

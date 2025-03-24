
import React from 'react';
import { Database, Code, Braces, FileCode, BarChart, LineChart, Cpu, TerminalSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Define ChipIcon as a proper React functional component
const ChipIcon: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
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

const PythonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className={className}
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 0C5.895 0 6.195 2.601 6.195 2.601L6.211 5.283H12.1V5.945H3.883C3.883 5.945 0 5.518 0 11.714C0 17.91 3.408 17.666 3.408 17.666H5.45V15.182C5.45 15.182 5.32 11.838 8.79 11.838H14.595C14.595 11.838 17.875 11.906 17.875 8.752V3.348C17.875 3.348 18.267 0 12 0ZM8.825 1.833C9.364 1.833 9.802 2.27 9.802 2.807C9.802 3.345 9.364 3.782 8.825 3.782C8.287 3.782 7.849 3.345 7.849 2.807C7.849 2.27 8.287 1.833 8.825 1.833Z"/>
    <path d="M12 24C18.105 24 17.805 21.399 17.805 21.399L17.789 18.717H11.9V18.055H20.117C20.117 18.055 24 18.482 24 12.286C24 6.09 20.592 6.334 20.592 6.334H18.55V8.818C18.55 8.818 18.68 12.162 15.21 12.162H9.405C9.405 12.162 6.125 12.094 6.125 15.248V20.652C6.125 20.652 5.733 24 12 24ZM15.175 22.167C14.636 22.167 14.198 21.73 14.198 21.193C14.198 20.655 14.636 20.218 15.175 20.218C15.713 20.218 16.151 20.655 16.151 21.193C16.151 21.73 15.713 22.167 15.175 22.167Z"/>
  </svg>
);

const CIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className={className}
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M16.5921 9.1962C16.3407 8.36875 15.8932 7.61621 15.2894 7.01241C14.6856 6.4086 13.9331 5.9611 13.1056 5.7097C12.2782 5.4583 11.4037 5.4359 10.5649 5.6447C9.72606 5.8535 8.9491 6.2878 8.3121 6.9097C7.6751 7.5316 7.188 8.3198 6.8993 9.1861C6.6106 10.0525 6.529 10.9714 6.6612 11.8716C6.7933 12.7719 7.1353 13.6245 7.6573 14.3487C8.1793 15.0729 8.866 15.6475 9.6541 16.0212H9.6511L9.8611 16.1232L9.9991 16.0452L9.6511 16.0212C9.6521 16.0212 9.6531 16.0222 9.6541 16.0212L11.6441 17.0972L12.9641 18.1132C13.0016 18.1434 13.0451 18.1643 13.0913 18.1745C13.1375 18.1847 13.1853 18.1839 13.2312 18.1722C13.277 18.1605 13.3197 18.1382 13.3562 18.1069C13.3927 18.0756 13.4221 18.0359 13.4421 17.9912L13.8271 17.1482L16.4821 11.2402C16.6978 10.5679 16.7475 9.85894 16.6271 9.1642L16.5921 9.1962Z"/>
  </svg>
);

const CPlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className={className}
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M20.66 7C20.5163 6.73629 20.3778 6.4652 20.24 6.19C19.88 5.54 19.38 5 18.57 5H5.43C4.62 5 4.12 5.54 3.76 6.19C3.62221 6.4652 3.48374 6.73629 3.34 7C2.39 8.9 2 11.38 2 12C2 12.62 2.39 15.1 3.34 17C3.48374 17.2637 3.62221 17.5348 3.76 17.81C4.12 18.46 4.62 19 5.43 19H18.57C19.38 19 19.88 18.46 20.24 17.81C20.3778 17.5348 20.5163 17.2637 20.66 17C21.61 15.1 22 12.62 22 12C22 11.38 21.61 8.9 20.66 7ZM16 14H14V16H12V14H10V12H12V10H14V12H16V14ZM13 5H11V7H13V5ZM15 7H17V5H15V7ZM11 19H13V17H11V19ZM15 19H17V17H15V19Z"/>
  </svg>
);

const HTMLIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className={className}
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M5.08 0L4.584 5.4H20.416L19.92 0H5.08ZM3.992 7.2L3.592 11.7H16.416L16.176 15.3L11.992 16.2L7.824 15.3L7.632 13.2H3.192L3.6 17.4L11.992 19.8L20.4 17.4L21.36 7.2H3.992ZM2.904 23.4L2.4 18H21.6L21.096 23.4H2.904Z"/>
  </svg>
);

const CSSIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className={className}
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M7.502 0H16.5L15.99 4.8H9.6L9.882 7.2H15.672L14.994 15.3L12 16.2L8.97 15.3L8.802 13.2H6.9L7.296 17.4L12 19.8L16.59 17.4L17.496 7.2H7.938L7.502 0Z"/>
  </svg>
);

const JSIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className={className}
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M0 0H24V24H0V0ZM6.6 19.8C7.2 19.8 7.632 19.62 8.004 19.188C8.376 18.756 8.556 18.192 8.556 17.46V10.8H10.8V17.472C10.8 18.936 10.404 20.088 9.612 20.868C8.82 21.648 7.788 22.08 6.6 22.08C5.412 22.08 4.404 21.648 3.612 20.868C2.82 20.088 2.4 19.008 2.4 17.544V10.8H4.644V17.472C4.644 18.204 4.824 18.768 5.196 19.188C5.568 19.608 6.012 19.8 6.6 19.8ZM16.356 22.08C15.336 22.08 14.472 21.84 13.764 21.372C13.056 20.904 12.516 20.268 12.132 19.476C11.748 18.684 11.556 17.82 11.556 16.884C11.556 15.948 11.748 15.084 12.132 14.292C12.516 13.5 13.056 12.876 13.764 12.408C14.472 11.94 15.336 11.712 16.368 11.712C17.4 11.712 18.264 11.952 18.984 12.42C19.704 12.888 20.232 13.524 20.604 14.316C20.976 15.108 21.156 15.972 21.156 16.896C21.156 17.82 20.976 18.684 20.604 19.476C20.232 20.268 19.692 20.904 18.972 21.372C18.252 21.84 17.376 22.08 16.356 22.08ZM16.38 20.184C17.076 20.184 17.64 19.92 18.072 19.392C18.504 18.864 18.72 18 18.72 16.884C18.72 15.756 18.492 14.904 18.048 14.388C17.604 13.872 17.04 13.608 16.344 13.608C15.648 13.608 15.084 13.86 14.64 14.364C14.196 14.868 13.992 15.684 13.992 16.788C13.992 17.904 14.208 18.78 14.64 19.38C15.072 19.98 15.672 20.184 16.38 20.184Z"/>
  </svg>
);

const ReactIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className={className}
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M14.23 12.004C14.23 13.43 13.07 14.59 11.645 14.59C10.22 14.59 9.06 13.43 9.06 12.004C9.06 10.579 10.22 9.419 11.645 9.419C13.07 9.419 14.23 10.579 14.23 12.004ZM12 21.325C13.87 21.325 21.325 16.617 21.325 12.004C21.325 7.391 13.87 2.684 12 2.684C10.13 2.684 2.675 7.391 2.675 12.004C2.675 16.617 10.13 21.325 12 21.325Z"/>
    <path d="M8.382 5.968C11.121 4.397 14.229 3.804 16.541 4.5L16.951 3.408C14.325 2.62 10.935 3.264 7.96 4.99C4.986 6.716 2.84 9.267 2.052 11.894L3.144 12.303C3.84 9.991 5.644 7.539 8.382 5.968ZM15.618 18.04C12.879 19.611 9.771 20.204 7.459 19.508L7.049 20.6C9.675 21.388 13.065 20.744 16.04 19.018C19.014 17.292 21.16 14.741 21.948 12.114L20.856 11.705C20.16 14.017 18.356 16.469 15.618 18.04Z"/>
  </svg>
);

const TSIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className={className}
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M3 3V21H21V3H3ZM17.24 14.1733C17.4367 14.5067 17.72 14.8067 18.0933 15.0733C18.4667 15.34 18.9 15.5533 19.3933 15.7133C19.8867 15.8733 20.4267 15.9533 21.0133 15.9533V17.6533C20.1667 17.66 19.37 17.5133 18.6233 17.2133C17.8767 16.9133 17.2333 16.47 16.6933 15.8833V19.1333H14.7467V11.12H16.6933V11.9C17.1733 11.4467 17.72 11.1133 18.3333 10.9C18.9467 10.6867 19.58 10.58 20.2333 10.58C20.5133 10.58 20.8 10.6067 21.0933 10.66V12.46C20.9 12.42 20.7267 12.3867 20.5733 12.36C20.42 12.3333 20.2467 12.32 20.0533 12.32C19.5867 12.32 19.1433 12.4 18.7233 12.56C18.3033 12.72 17.94 12.96 17.6333 13.28C17.3267 13.6 17.0933 13.84 17.24 14.1733ZM13.5533 11.62C13.1067 11.94 12.5267 12.1 11.8133 12.1H10.14V15.04H9.02V8.54H11.8133C12.5267 8.54 13.1067 8.7 13.5533 9.02C14 9.34 14.2233 9.82 14.2233 10.46C14.2233 11.1 14 11.58 13.5533 11.9V11.62ZM12.66 9.72C12.4267 9.52 12.1 9.42 11.6867 9.42H10.14V11.2H11.6867C12.1 11.2 12.4267 11.1 12.66 10.9C12.8933 10.7 13.01 10.42 13.01 10.06C13.01 9.7 12.8933 9.42 12.66 9.22V9.72Z"/>
  </svg>
);

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

// Component for the original skill cards
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
      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  );
};

// New component for skill with progress bar
interface SkillWithProgressProps {
  icon: React.ReactNode;
  name: string;
  percentage: number;
  delay: number;
}

const SkillWithProgress: React.FC<SkillWithProgressProps> = ({ 
  icon, name, percentage, delay 
}) => {
  return (
    <div 
      className="flex items-center gap-4 p-3 w-full"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0,
        animation: `slide-up 0.6s ease forwards ${delay}s` 
      }}
    >
      <div className="w-8 h-8 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-xs text-muted-foreground">{percentage}%</span>
        </div>
        <Progress value={percentage} className="h-2" />
      </div>
    </div>
  );
};

// Component for category card with skills
interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: {
    icon: React.ReactNode;
    name: string;
    percentage: number;
  }[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ 
  title, icon, skills, delay 
}) => {
  return (
    <Card 
      className="backdrop-blur-md bg-white/80 shadow-glass border border-white/20 overflow-hidden"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0,
        animation: `slide-up 0.6s ease forwards ${delay}s` 
      }}
    >
      <div className="p-6 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
      <CardContent className="p-4">
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <SkillWithProgress
              key={index}
              icon={skill.icon}
              name={skill.name}
              percentage={skill.percentage}
              delay={delay + (index * 0.1)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  // Original skill cards
  const generalSkills = [
    {
      icon: <Database size={28} />,
      title: "Data Science",
      description: "Experience with data analysis, visualization, and machine learning techniques",
      delay: 0.1
    },
    {
      icon: <Braces size={28} />,
      title: "Machine Learning",
      description: "Experience building and evaluating ML models for various applications",
      delay: 0.2
    },
    {
      icon: <BarChart size={28} />,
      title: "Data Analysis",
      description: "Strong analytical skills with experience in statistical analysis",
      delay: 0.3
    },
    {
      icon: <ChipIcon width={28} height={28} />,
      title: "Electronics",
      description: "Knowledge of electronic circuits and telecommunication systems",
      delay: 0.4
    },
    {
      icon: <Cpu size={28} />,
      title: "Embedded Systems",
      description: "Experience with microcontrollers and embedded system design",
      delay: 0.5
    },
    {
      icon: <FileCode size={28} />,
      title: "Algorithm Design",
      description: "Skills in developing efficient algorithms for data processing",
      delay: 0.6
    },
    {
      icon: <LineChart size={28} />,
      title: "Data Visualization",
      description: "Creating informative and insightful visual representations of data",
      delay: 0.7
    },
    {
      icon: <TerminalSquare size={28} />,
      title: "Automation",
      description: "Building automated systems and processes with Python and other tools",
      delay: 0.8
    }
  ];

  // Skills categories with progress bars
  const skillCategories = [
    {
      title: "AI/ML",
      icon: <Braces size={28} />,
      delay: 0.1,
      skills: [
        { icon: <PythonIcon className="text-blue-500" />, name: "Python", percentage: 90 },
        { icon: <TerminalSquare size={20} className="text-green-500" />, name: "TensorFlow", percentage: 85 },
        { icon: <TerminalSquare size={20} className="text-red-500" />, name: "PyTorch", percentage: 80 },
        { icon: <TerminalSquare size={20} className="text-purple-500" />, name: "Scikit-Learn", percentage: 87 },
        { icon: <TerminalSquare size={20} className="text-yellow-500" />, name: "NumPy/Pandas", percentage: 92 }
      ]
    },
    {
      title: "Web Development",
      icon: <Code size={28} />,
      delay: 0.2,
      skills: [
        { icon: <HTMLIcon className="text-orange-500" />, name: "HTML/CSS", percentage: 92 },
        { icon: <JSIcon className="text-yellow-500" />, name: "JavaScript", percentage: 88 },
        { icon: <ReactIcon className="text-blue-400" />, name: "React", percentage: 86 },
        { icon: <TSIcon className="text-blue-600" />, name: "TypeScript", percentage: 82 }
      ]
    },
    {
      title: "Programming",
      icon: <TerminalSquare size={28} />,
      delay: 0.3,
      skills: [
        { icon: <PythonIcon className="text-blue-500" />, name: "Python", percentage: 90 },
        { icon: <CIcon className="text-blue-700" />, name: "C", percentage: 85 },
        { icon: <CPlusIcon className="text-pink-600" />, name: "C++", percentage: 82 }
      ]
    }
  ];

  // Soft skills
  const softSkills = [
    { icon: <LineChart size={28} />, title: "Problem Solving", delay: 0.1 },
    { icon: <Database size={28} />, title: "Teamwork", delay: 0.2 },
    { icon: <Braces size={28} />, title: "Communication", delay: 0.3 },
    { icon: <Code size={28} />, title: "Adaptability", delay: 0.4 },
    { icon: <BarChart size={28} />, title: "Time Management", delay: 0.5 },
    { icon: <FileCode size={28} />, title: "Critical Thinking", delay: 0.6 }
  ];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="text-foreground/70 text-center max-w-3xl mx-auto mt-4">
            A comprehensive toolbox of technical and interpersonal skills
          </p>
        </div>

        {/* Technical Skills Categories with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <SkillCategory 
              key={idx}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>

        {/* General Skills */}
        <h3 className="text-2xl font-semibold text-center mb-8 mt-16">Technical Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Soft Skills */}
        <h3 className="text-2xl font-semibold text-center mb-8 mt-16">Soft Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {softSkills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 backdrop-blur-md bg-white/80 rounded-2xl shadow-glass border border-white/20"
              style={{ 
                animationDelay: `${skill.delay}s`,
                opacity: 0,
                animation: `slide-up 0.6s ease forwards ${skill.delay}s` 
              }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                {skill.icon}
              </div>
              <h4 className="text-lg font-medium text-center">{skill.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

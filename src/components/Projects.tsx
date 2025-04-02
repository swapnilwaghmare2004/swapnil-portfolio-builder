
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  image?: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  link, 
  technologies, 
  image,
  delay 
}) => {
  return (
    <Card 
      className="overflow-hidden border border-border/40 bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0,
        animation: `slide-up 0.6s ease forwards ${delay}s` 
      }}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/20 pt-4">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sm text-primary hover:underline"
        >
          <ExternalLink size={14} className="mr-1" />
          View Project
        </a>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Line Follower Robot",
      description: "An automated robot designed to follow a black line on a white surface using smartelex Rls 6 sensor and DRV8833 motor controller.",
      link: "https://drive.google.com/file/d/1bD-Z7J2PjWtKNm--1z1C0zKpkf2-3Jxc/view?usp=sharing",
      technologies: ["Arduino", "Electronics", "Robotics", "Embedded Systems"],
      delay: 0.1
    },
    {
      title: "Airline Dataset Analysis (BIG DATA ANALYSIS)",
      description: "Performed 538 Airline Dataset Analysis using tools like PYSPARK and Dask demonstrated scalability.",
      link: "https://colab.research.google.com/drive/13pSw5LUdEeUdBIvx0zEIUFPpJMUxu8xL?usp=sharing",
      technologies: ["PySpark", "Dask", "Python", "Data Analysis", "Big Data"],
      delay: 0.2
    },
    {
      title: "Predictive Analysis using Machine Learning",
      description: "Built a machine learning model (regression/classification) to predict outcomes based on a housing real estate dataset.",
      link: "https://colab.research.google.com/drive/1TTbnIALgxtc25p1nSR3s5Hbe7UHDOVr8?usp=sharing",
      technologies: ["Machine Learning", "Python", "Data Science", "Predictive Modeling"],
      delay: 0.3
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="text-center text-foreground/70 max-w-3xl">
            Here are some projects I've worked on, showcasing my skills in various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


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
      title: "Traffic Light Controller Using 8051 Microcontroller",
      description: "Developed a Traffic Light Controller using AT89C2052 microcontroller to manage traffic at a four-way intersection with Red, Yellow, and Green LEDs. Features timed sequences for each direction and 7-segment displays showing countdown timers for signal changes, improving traffic flow efficiency and safety.",
      link: "https://drive.google.com/file/d/1jmwEFFszcV4H7dfNIQqdXcfYg7S4YFO6/view?usp=sharing",
      technologies: ["8051 Microcontroller", "Embedded C", "LED Control", "7-Segment Display", "Traffic Systems"],
      delay: 0.1
    },
    {
      title: "Line Follower Robot",
      description: "An automated robot designed to follow a black line on a white surface using smartelex Rls 6 sensor and DRV8833 motor controller.",
      link: "https://drive.google.com/file/d/1bD-Z7J2PjWtKNm--1z1C0zKpkf2-3Jxc/view?usp=sharing",
      technologies: ["Arduino", "Electronics", "Robotics", "Embedded Systems"],
      delay: 0.15
    },
    {
      title: "Attendance Radius Recognition System",
      description: "A smart attendance system using Wi-Fi and ESP microcontroller to automate presence tracking. The system detects and records attendance in real-time, updating entries directly into an Excel sheet, eliminating the need for manual sign-ins.",
      link: "https://drive.google.com/file/d/10KGfYYeldbV-Bis787QCX0NvFTHmESzC/view?usp=sharing",
      technologies: ["IoT", "ESP8266", "Wi-Fi", "Automation", "Excel Integration"],
      delay: 0.2
    },
    {
      title: "Automatic Overload Detector and Overload Avoidance System for Four-Wheelers",
      description: "A system designed to detect and prevent overloading in four-wheeler vehicles, enhancing safety and vehicle longevity by monitoring weight distribution and providing real-time alerts.",
      link: "https://drive.google.com/file/d/1JgC1OnNOTekHmE3oVpjd9lyquk1D33-P/view?usp=sharing",
      technologies: ["Embedded Systems", "Sensors", "Safety Systems", "Real-time Monitoring"],
      delay: 0.25
    },
    {
      title: "Object Detection and Edge Enhancement using MATLAB",
      description: "A MATLAB-based image processing system that detects and enhances objects in images using edge detection, morphological operations, and region property analysis.",
      link: "https://drive.google.com/file/d/1P7_qzMMTqYK47ajEPINE4Qgcp_VHyBiO/view?usp=sharing",
      technologies: ["MATLAB", "Image Processing", "Edge Detection", "Computer Vision"],
      delay: 0.3
    },
    {
      title: "Airline Dataset Analysis (BIG DATA ANALYSIS)",
      description: "Performed 538 Airline Dataset Analysis using tools like PYSPARK and Dask demonstrated scalability.",
      link: "https://colab.research.google.com/drive/13pSw5LUdEeUdBIvx0zEIUFPpJMUxu8xL?usp=sharing",
      technologies: ["PySpark", "Dask", "Python", "Data Analysis", "Big Data"],
      delay: 0.35
    },
    {
      title: "Predictive Analysis using Machine Learning",
      description: "Built a machine learning model (regression/classification) to predict outcomes based on a housing real estate dataset.",
      link: "https://colab.research.google.com/drive/1TTbnIALgxtc25p1nSR3s5Hbe7UHDOVr8?usp=sharing",
      technologies: ["Machine Learning", "Python", "Data Science", "Predictive Modeling"],
      delay: 0.4
    },
    {
      title: "NSE NIFTY 50 Stock Data Analysis and Visualization Using Python",
      description: "Developed and automated an end-to-end pipeline for time-series forecasting and trading signal evaluation on historical NIFTY 50 data. Built, tuned, and validated time-series forecasting models (ARIMA, Prophet, ML regression) to predict price trends and stock volatility. Designed and backtested simple algorithmic trading strategies.",
      link: "https://github.com/swapnilwaghmare2004/NSE-NIFTY-50-Stock-Data-Analysis-and-Visualization-Using-Python",
      technologies: ["Python", "ARIMA", "Prophet", "Time-Series", "Trading Algorithms", "Data Visualization"],
      delay: 0.45
    },
    {
      title: "Real Time Traffic Detection with YOLOv8 OpenCV",
      description: "Real-time traffic detection system using YOLOv8 and OpenCV with CUDA acceleration for efficient vehicle detection and tracking.",
      link: "https://github.com/swapnilwaghmare2004/Real-Time-Traffic-Detection-with-YOLOv8-OpenCV-CUDA-main",
      technologies: ["YOLOv8", "OpenCV", "CUDA", "Computer Vision", "Real-time Processing"],
      delay: 0.5
    },
    {
      title: "IoT-based Smart Water Level Indicator",
      description: "A smart water level monitoring system using ESP32 microcontroller and ultrasonic sensor. Measures water level in real time and sends data to a cloud dashboard for remote monitoring and visualization. Low-cost, accurate system enabling efficient water management through IoT and cloud integration.",
      link: "https://drive.google.com/file/d/1fns74aw-r2TlkILIbshy-mGXHau7AnIc/view?usp=sharing",
      technologies: ["ESP32", "Ultrasonic Sensor", "IoT", "Cloud Dashboard", "Water Management"],
      delay: 0.55
    },
    {
      title: "Cloud Enabled Temperature and Humidity Monitoring System",
      description: "A cloud-based IoT simulation that monitors temperature and humidity using Python-generated virtual sensor data. Uploads data every 15 seconds to ThingSpeak cloud platform for real-time visualization. Demonstrates IoT-cloud integration, API communication, and Platform as a Service (PaaS) concepts.",
      link: "https://drive.google.com/file/d/1C-wSaZvvg3-tVWcKWG2xGLY4NrpR7zGR/view?usp=sharing",
      technologies: ["Python", "ThingSpeak", "IoT", "Cloud Integration", "PaaS", "Real-time Monitoring"],
      delay: 0.6
    },
    {
      title: "Sahyadri Quant Capital Website",
      description: "A quantitative trading startup website showcasing data-driven financial solutions. Features advanced trading strategies, real-time portfolio performance, and institutional financial services with a sleek fintech dark theme and neon accents.",
      link: "https://swapnilwaghmare2004.github.io/Sahyadri-Quant-Capital/",
      technologies: ["HTML", "CSS", "JavaScript", "Fintech UI", "Web Design"],
      delay: 0.65
    },
    {
      title: "Map Navigate India Website",
      description: "An advanced full-stack mapping and navigation platform built for India and worldwide users. Offers an interactive, feature-rich alternative to mainstream map services with special focus on Indian locales and multilingual support.",
      link: "https://swapnilwaghmare2004.github.io/Map-Navigate-India/",
      technologies: ["HTML", "CSS", "JavaScript", "Mapping API", "Navigation", "Multilingual"],
      delay: 0.7
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

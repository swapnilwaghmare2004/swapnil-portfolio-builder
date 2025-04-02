
import React from 'react';
import { FileDown, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Resume = () => {
  // Function to handle resume download
  // For this demo, we'll just link to a dummy resume
  // In a real scenario, you would host your resume PDF and link to it
  const handleDownloadResume = () => {
    // Create a link to a sample resume (replace with your actual resume link)
    const link = document.createElement('a');
    link.href = "/path-to-your-resume.pdf"; // Replace with actual path
    link.download = "Swapnil_Waghmare_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title">Resume</h2>
          <p className="text-center text-foreground/70 max-w-3xl mb-8">
            A summary of my education, work experience, skills, and achievements
          </p>
          <Button 
            onClick={handleDownloadResume} 
            className="btn-primary flex items-center gap-2"
          >
            <FileDown size={18} />
            Download Resume
          </Button>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">B.E. in Electronics & Telecommunication</h4>
                <p className="text-sm text-foreground/70">NMIET College, SPPU • 2022 - Present</p>
              </div>
              <div>
                <h4 className="font-semibold">BS in Data Science & Applications</h4>
                <p className="text-sm text-foreground/70">IIT Madras • 2023 - Present</p>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Briefcase size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Data Analysis Intern</h4>
                <p className="text-sm text-foreground/70">CODTECH IT SOLUTIONS PVT.LTD</p>
                <p className="text-xs text-foreground/60">Analyzing data and generating insights</p>
              </div>
              <div>
                <h4 className="font-semibold">VLSI Intern</h4>
                <p className="text-sm text-foreground/70">Skilldzire</p>
                <p className="text-xs text-foreground/60">Working on VLSI design and implementation</p>
              </div>
            </div>
          </div>

          <div className="glass-card md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Skills & Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>Python, C, C++, Java, JavaScript</li>
                <li>Data Science & Machine Learning</li>
                <li>Web Development (HTML, CSS, React)</li>
                <li>Electronics & IoT</li>
              </ul>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>Python Certified (Cisco)</li>
                <li>Data Science Certified (Cisco)</li>
                <li>Azure AI Services Fundamentals</li>
                <li>Machine Learning Fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

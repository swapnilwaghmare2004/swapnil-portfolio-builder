
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CertificationProps {
  title: string;
  issuer: string;
  link: string;
  date?: string;
  delay: number;
}

const CertificationCard: React.FC<CertificationProps> = ({ 
  title, 
  issuer, 
  link, 
  date,
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
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Award size={20} className="text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/70 mb-1">Issued by: {issuer}</p>
        {date && <p className="text-xs text-foreground/60">{date}</p>}
      </CardContent>
      <CardFooter className="border-t border-border/20 pt-4">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sm text-primary hover:underline"
        >
          <ExternalLink size={14} className="mr-1" />
          View Certificate
        </a>
      </CardFooter>
    </Card>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "Python Certified",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/15K-8PAMpSYqlpTq6f54-Ht753YPpLSuK/view?usp=sharing",
      delay: 0.1
    },
    {
      title: "Data Science Certified",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1uJGaP8sr8SNohflw4MDKD9cxqHcpI3ho/view?usp=sharing",
      delay: 0.2
    },
    {
      title: "Data Analysis Intern",
      issuer: "CODTECH IT SOLUTIONS PVT.LTD",
      link: "https://drive.google.com/file/d/1i5LdlmxTZ55s_49XkRH6lTnDvqh2uJwK/view?usp=drive_link",
      delay: 0.3
    },
    {
      title: "VLSI Intern",
      issuer: "Skilldzire",
      link: "https://drive.google.com/file/d/1bBIoMgRSSaweLFR11k21W2i9cVt9vNbd/view?usp=drive_link",
      delay: 0.4
    },
    {
      title: "Fundamental of Azure AI Services",
      issuer: "Microsoft",
      link: "https://drive.google.com/file/d/12THFYNcO148e8rW5kqZioUL6qKsuH8G3/view?usp=drive_link",
      delay: 0.5
    },
    {
      title: "Fundamental of Machine Learning",
      issuer: "Microsoft",
      link: "https://drive.google.com/file/d/1e-LA-M_xkd-vbxErj0UWhqbvrDyFrIuq/view?usp=drive_link",
      delay: 0.6
    },
    {
      title: "Introduction to IoT and Digital Transformation",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1gtB0bbPK-duLc7ATmI-hg_7LMnHwWDs5/view?usp=sharing",
      delay: 0.7
    },
    {
      title: "Python Essentials 2",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1gNhkxo_bmQrnav6BG6l6kfp-wqLQY0bw/view?usp=sharing",
      delay: 0.8
    },
    {
      title: "AWS re/Start Graduate",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/0b1c8b18-7b54-4f1f-b6b2-29755e0a8dad/linked_in_profile",
      delay: 0.9
    }
  ];

  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Certifications</h2>
          <p className="text-center text-foreground/70 max-w-3xl">
            Professional certifications and achievements that demonstrate my expertise and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              link={cert.link}
              delay={cert.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;


import React, { useState }  from 'react';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePic from '../assets/pic.jpeg';
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const socialLinks = [
  {
    href: "https://github.com/khushijashnani",
    icon: <Github size={28} />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/khushijashnani",
    icon: <Linkedin size={28} />,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/khushi_jashnani",
    icon: <Instagram size={28} />,
    label: "Instagram",
  },
  {
    href: "mailto:jashnanik18@gmail.com",
    icon: <Mail size={28} />,
    label: "Mail",
  },
];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background text-center overflow-hidden">
      {/* Animated background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(270deg, #f3b3e1, #abcaff, #bbd3b9)",
          backgroundSize: "600% 600%",
          animation: "gradientMove 10s ease-in-out infinite",
          opacity: 0.6,
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Avatar className="w-48 h-48 animate-fade-in-up mx-auto relative z-20 border-4 border-white my-8" style={{ animationDelay: '0.1s' }} onClick={() => setOpen(true)}>
            <AvatarImage src={profilePic} alt="Khushi Jashnani" />
            <AvatarFallback>KJ</AvatarFallback>
          </Avatar>
        {/* {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setOpen(false)}
          >
            <img
              src={profilePic}
              alt="Khushi Jashnani Large"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </div>
        )} */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, I'm Khushi Jashnani
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span>{'<'}</span>A curious human being with passion for technology and love for problem-solving <span>{'/>'}</span>
        </p>
        <div className="flex flex-row gap-4 transform justify-center items-center z-20 my-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <button
          onClick={scrollToAbout}
          className="group animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <ArrowDown className="w-8 h-8 text-gray-500 dark:text-gray-400 group-hover:text-primary-foreground transition-all duration-300 group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

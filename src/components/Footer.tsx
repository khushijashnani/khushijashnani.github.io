
import React from 'react';
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
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
    <footer id="contact" className="bg-gray-800 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-300 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of an amazing team.
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
        <p className="text-gray-500 dark:text-gray-600">&copy; {new Date().getFullYear()} Khushi Jashnani. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

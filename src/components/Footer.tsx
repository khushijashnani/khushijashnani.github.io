
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-300 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of an amazing team.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Github size={28} />
          </a>
          <a href="mailto:example@email.com" className="text-gray-400 hover:text-primary transition-colors">
            <Mail size={28} />
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-600">&copy; {new Date().getFullYear()} Khushi Jashnani. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { title: 'About', id: 'about' },
    { title: 'Experience', id: 'experience' },
    { title: 'Projects', id: 'projects' },
    { title: 'Skills', id: 'skills' },
    { title: 'Education', id: 'education' },
    { title: 'Contact', id: 'contact' },
  ];

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 cursor-pointer" onClick={() => scrollToSection('hero')}>
            Khushi Jashnani
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-foreground font-medium transition-colors"
                >
                  {link.title}
                </button>
              ))}
            </nav>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-gray-100 ml-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-foreground font-medium transition-colors"
              >
                {link.title}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

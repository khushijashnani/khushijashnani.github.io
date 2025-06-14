
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Khushi Jashnani
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Software Engineer @ Google
        </p>
        <button
          onClick={scrollToAbout}
          className="group animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <ArrowDown className="w-8 h-8 text-gray-500 group-hover:text-primary-foreground transition-all duration-300 group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

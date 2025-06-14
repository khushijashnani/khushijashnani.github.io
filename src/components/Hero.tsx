
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
        <Avatar className="w-32 h-32 mb-8 animate-fade-in-up mx-auto" style={{ animationDelay: '0.1s' }}>
          <AvatarImage src="/placeholder.svg" alt="Khushi Jashnani" />
          <AvatarFallback>KJ</AvatarFallback>
        </Avatar>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Khushi Jashnani
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Software Engineer @ Google
        </p>
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

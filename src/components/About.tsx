
import React from 'react';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            An assiduous computer engineer with strong math, logic and problem solving skills with a goal to keep on becoming a better software engineer than I was yesterday.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            I have a curious mindset and eagerness to learn more about how technology can help us create an impact. Feel free to connect for any collaboration or help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

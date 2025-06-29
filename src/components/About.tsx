
import React from 'react';
import SectionTitle from './SectionTitle';

const About = () => {

  
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a software engineer, currently working at Google on Cloud Security.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            I loved solving puzzles and math problems as a kid and hence chose to be an engineer.
            I like exploring new technologies and applying them to real-world problems. 
            I also enjoy traveling and participating in hackathons (ps: always looking out for one).
          </p> 
            
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            My life-long goal is to keep on becoming a better software engineer than I was yesterday by optimizing my 24 hours daily while enjoying it.
            {/* Feel free to connect for any collaboration or help. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

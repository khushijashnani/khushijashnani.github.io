
import React from 'react';
import SectionTitle from './SectionTitle';

const educations = [
  {
    institution: "Bhartiya Vidya Bhavan's Sardar Patel Institute of Technology",
    degree: "Bachelor of Technology - BTech, Computer Science",
    period: "2018 - 2022",
    grade: "Grade: 9.67",
    details: "Core Technical Head at Oculus 2021, Creative Head in IPL Auction at Oculus 2020."
  },
  {
    institution: "Vidyaniketan Junior College of Commerce and Science",
    degree: "HSC",
    period: "2016 - 2018",
    grade: "Grade: 91.85%",
    details: "Ranked 2nd in college."
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
              <p className="text-md font-semibold text-primary-foreground mt-1">{edu.degree}</p>
              <p className="text-sm text-gray-500 my-2">{edu.period}</p>
              <p className="text-gray-600 font-medium">{edu.grade}</p>
              <p className="text-gray-600 mt-2">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

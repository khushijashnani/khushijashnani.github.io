
import React from 'react';
import SectionTitle from './SectionTitle';

const projects = [
  {
    title: "Happenings",
    description: "An events platform for organizers and attendees. Key features include facial recognition for validation, sentiment analysis of reviews, and data analytics for organizers.",
    technologies: ["Flask", "Flutter", "SQLAlchemy", "Firebase ML Kit", "Computer Vision"],
  },
  {
    title: "DecideWise",
    description: "A tool to help you make the best decision when you have a lot of pros and cons to weigh. A small project made while learning Angular.",
    technologies: ["Angular"],
  },
  {
    title: "Audio Library App (Volunteering)",
    description: "Contributed to developing a mobile application for an NGO to manage and distribute audio files. Developed core components like Phone Authentication and an Audio Player.",
    technologies: ["Flutter", "Firebase", "Google Drive API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-secondary/50 text-secondary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

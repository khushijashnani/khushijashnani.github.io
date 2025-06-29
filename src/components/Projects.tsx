
import React from 'react';
import SectionTitle from './SectionTitle';
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Happenings",
    description: "An events platform for organizers and attendees. Key features include facial recognition for validation, sentiment analysis of reviews, and data analytics for organizers.",
    technologies: ["Flask", "Flutter", "SQLAlchemy", "Firebase ML Kit", "Computer Vision"],
    link: "https://github.com/khushijashnani/Happenings",
  },
  {
    title: "DecideWise",
    description: "A tool to help you make the best decision when you have a lot of pros and cons to weigh. A small project made while learning Angular.",
    technologies: ["Angular"],
    link: "https://decide-wise.vercel.app/",
  },
  {
    title: "Audio Library App",
    description: "Contributed to developing a mobile application for an NGO to manage and distribute audio files. Developed core components like Phone Authentication and an Audio Player.",
    technologies: ["Flutter", "Firebase", "Google Drive API"],
    link: "https://play.google.com/store/apps/details?id=com.team_vision.audio_library&hl=pt",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div className="bg-background rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105">
              <div key={index} className="relative bg-background p-6 rounded-lg duration-300 flex flex-col">
              {/* External Link Icon */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
                  aria-label={`Visit ${project.title} reference`}
                >
                  <ExternalLink size={20} />
                </a>
              )}
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-secondary/50 text-secondary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

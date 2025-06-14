
import React from 'react';
import SectionTitle from './SectionTitle';

const experiences = [
  {
    role: "Software Engineer II",
    company: "Google",
    period: "Jun 2024 - Present",
    location: "India · Hybrid",
    description: "Working in Cloud Security. Developed and launched the UI of a new GCP service offering Model Armor on Google Cloud Console.",
    skills: ["Java", "TypeScript", "Google Cloud Platform (GCP)"]
  },
  {
    role: "Software Engineer II",
    company: "JPMorgan Chase & Co.",
    period: "Feb 2024 - May 2024",
    location: "Mumbai, Maharashtra, India · Hybrid",
    description: "Worked on onboarding credit tranches to the strategic platform (Python based server framework).",
    skills: ["Python", "GraphQL", "WebSockets", "Graph Databases"]
  },
  {
    role: "Software Engineer",
    company: "JPMorgan Chase & Co.",
    period: "Aug 2022 - Jan 2024",
    location: "Mumbai, Maharashtra, India · Hybrid",
    description: "Developed and owned a workflow of 20+ python jobs for migrating credit option trades, designed and developed a REST API for a dashboard, developed efficient debugging utilities, and deployed a micro-service on ECS Fargate.",
    skills: ["Python", "REST APIs", "Oracle", "SQL", "AWS", "Terraform", "Docker"]
  },
  {
    role: "Undergraduate Teaching Assistant",
    company: "Bhartiya Vidya Bhavan's Sardar Patel Institute of Technology",
    period: "Jul 2021 - May 2022",
    location: "Mumbai, Maharashtra, India · On-site",
    description: "Teaching Assistant for the Operating Systems course under Dr. Anant Nimkar.",
  },
  {
    role: "Frontend Developer (Internship)",
    company: "Skinzy Software Solutions Pvt Ltd",
    period: "Aug 2021 - Jan 2022",
    location: "Remote",
    description: "Contributed by developing new features and mentoring juniors.",
    skills: ["Flutter", "User Experience (UX)"]
  },
  {
    role: "Summer Intern",
    company: "JPMorgan Chase & Co.",
    period: "May 2021 - Jul 2021",
    location: "Remote",
    description: "Demonstrated the role of an AI engineer, explored machine learning algorithms, and delivered a full stack application as a POC.",
    skills: ["React.js", "TypeScript", "Machine Learning", "AI"]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="relative">
          <div className="absolute left-1/2 -ml-0.5 w-1 bg-primary/20 h-full"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 flex justify-between items-center w-full">
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                {index % 2 !== 0 && <ExperienceCard {...exp} />}
              </div>
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                {index % 2 === 0 && <ExperienceCard {...exp} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ role, company, period, description, skills }: (typeof experiences)[0]) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold text-gray-800">{role}</h3>
    <p className="text-md font-semibold text-primary-foreground mb-1">{company}</p>
    <p className="text-sm text-gray-500 mb-3">{period}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    {skills && (
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="bg-accent/50 text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full">{skill}</span>
        ))}
      </div>
    )}
  </div>
);

export default Experience;

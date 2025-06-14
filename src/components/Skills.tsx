
import React from 'react';
import SectionTitle from './SectionTitle';
import { Code, Database, BrainCircuit, Users, CheckCircle, ShieldCheck } from 'lucide-react';

const skillCategories = [
  { 
    name: "Languages", 
    icon: <Code className="w-8 h-8 text-primary-foreground" />,
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL"] 
  },
  { 
    name: "Frameworks & Libraries", 
    icon: <BrainCircuit className="w-8 h-8 text-primary-foreground" />,
    skills: ["React", "Angular", "Flask", "Flutter", "GraphQL"]
  },
  { 
    name: "Databases", 
    icon: <Database className="w-8 h-8 text-primary-foreground" />,
    skills: ["Oracle", "Graph Databases", "Firebase"] 
  },
  { 
    name: "Cloud & DevOps", 
    icon: <ShieldCheck className="w-8 h-8 text-primary-foreground" />,
    skills: ["AWS", "GCP", "Docker", "Terraform", "CI/CD"]
  },
  { 
    name: "Methodologies", 
    icon: <Users className="w-8 h-8 text-primary-foreground" />,
    skills: ["Agile", "Scrum", "Product Development"] 
  },
  { 
    name: "Core Skills", 
    icon: <CheckCircle className="w-8 h-8 text-primary-foreground" />,
    skills: ["Problem Solving", "Data Structures", "Algorithms"] 
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/20 rounded-full mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category.name}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

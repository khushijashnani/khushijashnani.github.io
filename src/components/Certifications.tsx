
import React from 'react';
import SectionTitle from './SectionTitle';
import { Award } from 'lucide-react';

const certifications = [
  "AWS Certified Developer – Associate",
  "Professional Scrum Master™ I (PSM I)",
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Licenses & Certifications</SectionTitle>
        <div className="max-w-2xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center bg-card p-4 rounded-lg shadow-md mb-4">
              <Award className="w-6 h-6 text-primary-foreground mr-4" />
              <p className="text-lg font-medium text-gray-700 dark:text-gray-200">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

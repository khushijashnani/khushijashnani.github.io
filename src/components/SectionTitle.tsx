
import React from 'react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
      {children}
    </h2>
  );
};

export default SectionTitle;

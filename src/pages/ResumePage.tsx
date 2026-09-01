import React from 'react';
import { Link } from 'react-router-dom';

export const ResumePage: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-secondary">Resume Route Baseline</h1>
      <p className="text-gray-600">Placeholder for Resume, Certifications, Education & Experience.</p>
      <a href="/awsmith_resume__fed.pdf" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover">
        Download Resume PDF
      </a>
      <div>
        <Link to="/" className="text-primary hover:underline">&larr; Back to Home</Link>
      </div>
    </div>
  );
};

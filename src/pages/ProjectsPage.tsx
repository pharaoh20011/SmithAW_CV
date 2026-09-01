import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-secondary">Projects Route Baseline</h1>
      <p className="text-gray-600">Placeholder for Projects Showcase & Category Filters.</p>
      <div className="flex gap-4">
        <Link to="/projects/relocatia" className="text-primary hover:underline">Sample Case Study (/projects/relocatia)</Link>
        <Link to="/" className="text-primary hover:underline">&larr; Back to Home</Link>
      </div>
    </div>
  );
};

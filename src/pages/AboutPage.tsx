import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-secondary">About Route Baseline</h1>
      <p className="text-gray-600">Placeholder for About Section & Background details.</p>
      <Link to="/" className="text-primary hover:underline">&larr; Back to Home</Link>
    </div>
  );
};

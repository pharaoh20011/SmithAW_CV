import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-secondary">Project Detail Route: {slug}</h1>
      <p className="text-gray-600">Placeholder view for dynamic project slug parameter test.</p>
      <Link to="/projects" className="text-primary hover:underline">&larr; Back to Projects</Link>
    </div>
  );
};

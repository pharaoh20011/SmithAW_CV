import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-secondary">AW. Smith - Portfolio Redesign (Phase 1 Baseline)</h1>
      <p className="text-gray-600">
        Phase 1 architectural foundation established with React 18, TypeScript, Vite, Tailwind CSS, and React Router.
      </p>
      <div className="flex flex-wrap gap-4 pt-4">
        <Link to="/about" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors">
          About Route
        </Link>
        <Link to="/projects" className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary-hover transition-colors">
          Projects Route
        </Link>
        <Link to="/resume" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors">
          Resume Route
        </Link>
        <Link to="/contact" className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary-hover transition-colors">
          Contact Route
        </Link>
      </div>

      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-secondary dark:text-white mb-2">Preserved Static Sub-Projects Check:</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li><a href="/access21/index.html" target="_blank" rel="noreferrer" className="text-primary hover:underline">/access21/</a></li>
          <li><a href="/ghcookwriter/index.html" target="_blank" rel="noreferrer" className="text-primary hover:underline">/ghcookwriter/</a></li>
          <li><a href="/hsk/index.html" target="_blank" rel="noreferrer" className="text-primary hover:underline">/hsk/</a></li>
          <li><a href="/jubilee/index.html" target="_blank" rel="noreferrer" className="text-primary hover:underline">/jubilee/</a></li>
          <li><a href="/taf/index.html" target="_blank" rel="noreferrer" className="text-primary hover:underline">/taf/</a></li>
        </ul>
      </div>
    </div>
  );
};

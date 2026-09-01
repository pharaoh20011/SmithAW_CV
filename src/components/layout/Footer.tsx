import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { Container } from '../ui/Container';
import { Brand } from '../common/Brand';
import { ResumeCTA } from '../common/ResumeCTA';
import { NAV_ITEMS } from './Navbar';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub Profile',
    url: 'https://github.com/pharaoh20011',
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn Profile',
    url: 'https://linkedin.com/in/pharaoh20011', // Configurable data model
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'Email Anthony',
    url: 'mailto:aw.smith@live.com',
    icon: <Mail className="w-5 h-5" />,
  },
];

export const PRESERVED_PROJECTS = [
  { name: 'Access21', path: '/access21/index.html' },
  { name: 'GH Cook Writer', path: '/ghcookwriter/index.html' },
  { name: 'HSK Showcase', path: '/hsk/index.html' },
  { name: 'Jubilee Showcase', path: '/jubilee/index.html' },
  { name: 'TAF Showcase', path: '/taf/index.html' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-light dark:bg-surface-dark-card border-t border-stroke-light dark:border-stroke-dark transition-colors duration-normal mt-auto">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Brand showTagline={false} />
            <p className="text-sm font-body text-content-light-secondary dark:text-content-dark-secondary leading-relaxed max-w-sm">
              Experienced Front-End Developer &amp; UI/UX Designer specializing in accessible web applications, responsive user interfaces, and modern component systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${link.name} (opens in new tab)`}
                  className="p-2.5 rounded-brand-sm text-content-light-secondary dark:text-content-dark-secondary hover:text-brand-primary dark:hover:text-brand-accent hover:bg-gray-100 dark:hover:bg-surface-dark-elevated transition-colors focus-ring"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono-tech uppercase font-bold text-content-light-primary dark:text-content-dark-primary tracking-wider">
              Site Navigation
            </h3>
            <ul className="space-y-2 text-sm font-body">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-content-light-secondary dark:text-content-dark-secondary hover:text-brand-primary dark:hover:text-brand-accent transition-colors focus-ring rounded-brand-xs px-1 py-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/design-system"
                  className="text-brand-primary dark:text-brand-accent font-medium hover:underline focus-ring rounded-brand-xs px-1 py-0.5 inline-block"
                >
                  Design System
                </Link>
              </li>
            </ul>
          </div>

          {/* Preserved Sub-Projects Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono-tech uppercase font-bold text-content-light-primary dark:text-content-dark-primary tracking-wider">
              Preserved Sub-Projects
            </h3>
            <ul className="space-y-1.5 text-xs font-mono-tech">
              {PRESERVED_PROJECTS.map((proj) => (
                <li key={proj.path}>
                  <a
                    href={proj.path}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-content-light-muted dark:text-content-dark-muted hover:text-brand-primary dark:hover:text-brand-accent transition-colors focus-ring rounded-brand-xs px-1 py-0.5"
                  >
                    <span>{proj.name}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <ResumeCTA variant="ghost" size="sm" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-stroke-light/60 dark:border-stroke-dark/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-content-light-muted dark:text-content-dark-muted">
          <p>
            &copy; {new Date().getFullYear()} Anthony W. Smith. All rights reserved. Built with React 18, TypeScript &amp; Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-content-light-secondary dark:text-content-dark-secondary hover:text-brand-primary dark:hover:text-brand-accent transition-colors focus-ring rounded-brand-xs px-2 py-1"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
};

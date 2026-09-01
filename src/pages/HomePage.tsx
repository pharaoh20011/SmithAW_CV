import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ThemeToggle } from '../components/ThemeToggle';
import { Palette, ExternalLink, ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <Section className="min-h-screen py-12">
      <Container>
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark">
          <div>
            <span className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent font-semibold uppercase tracking-wider">
              SmithAW Architecture Baseline
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
              Anthony W Smith — Frontend Developer
            </h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="space-y-8">
          <Card className="p-6 md:p-8 bg-brand-soft/30 dark:bg-brand-soft-dark/20 border-brand-primary/20 dark:border-brand-accent/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <Badge variant="brand" className="mb-2">
                  Phase 2 Complete
                </Badge>
                <h2 className="text-xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary">
                  SmithAW Design System Verification Shell
                </h2>
                <p className="text-sm text-content-light-secondary dark:text-content-dark-secondary mt-1">
                  Centralized tokens, fluid typography, dark mode controls, and accessible UI component primitives.
                </p>
              </div>
              <Link to="/design-system">
                <Button variant="primary" leftIcon={<Palette className="w-4 h-4" />} rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Design System
                </Button>
              </Link>
            </div>
          </Card>

          <div>
            <h3 className="text-sm font-mono-tech uppercase font-semibold text-content-light-muted dark:text-content-dark-muted mb-4">
              Phase 1 Baseline Routes
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/about">
                <Button variant="secondary" size="sm">About Route</Button>
              </Link>
              <Link to="/projects">
                <Button variant="secondary" size="sm">Projects Route</Button>
              </Link>
              <Link to="/resume">
                <Button variant="secondary" size="sm">Resume Route</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="sm">Contact Route</Button>
              </Link>
            </div>
          </div>

          <Card className="p-6">
            <h3 className="text-base font-bold font-heading text-content-light-primary dark:text-content-dark-primary mb-3">
              Preserved Static Sub-Projects Verification
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono-tech text-xs">
              <li>
                <a href="/access21/index.html" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 p-2.5 rounded-brand-xs border border-stroke-light dark:border-stroke-dark hover:border-brand-primary text-brand-primary dark:text-brand-accent transition-colors">
                  <span>/access21/</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </li>
              <li>
                <a href="/ghcookwriter/index.html" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 p-2.5 rounded-brand-xs border border-stroke-light dark:border-stroke-dark hover:border-brand-primary text-brand-primary dark:text-brand-accent transition-colors">
                  <span>/ghcookwriter/</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </li>
              <li>
                <a href="/hsk/index.html" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 p-2.5 rounded-brand-xs border border-stroke-light dark:border-stroke-dark hover:border-brand-primary text-brand-primary dark:text-brand-accent transition-colors">
                  <span>/hsk/</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </li>
              <li>
                <a href="/jubilee/index.html" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 p-2.5 rounded-brand-xs border border-stroke-light dark:border-stroke-dark hover:border-brand-primary text-brand-primary dark:text-brand-accent transition-colors">
                  <span>/jubilee/</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </li>
              <li>
                <a href="/taf/index.html" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 p-2.5 rounded-brand-xs border border-stroke-light dark:border-stroke-dark hover:border-brand-primary text-brand-primary dark:text-brand-accent transition-colors">
                  <span>/taf/</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

import React from 'react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Terminal, Award } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  return (
    <Section className="py-12 sm:py-16 bg-surface-light/40 dark:bg-surface-dark-card/20 border-y border-stroke-light/60 dark:border-stroke-dark/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono-tech uppercase font-bold text-brand-primary dark:text-brand-accent tracking-wider">
              02. Background &amp; Approach
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary tracking-tight">
              Enterprise Problem Solving Applied to Modern Front-End Engineering
            </h2>
            <p className="text-base font-body text-content-light-secondary dark:text-content-dark-secondary leading-relaxed">
              My career bridges the gap between enterprise IT customer support across Fortune 500 environments, modern user interface development, and AI prompt engineering. Backed by a proven background as a Sr. SAS Help Desk Representative and team lead, I combine rigorous troubleshooting with clean component architecture.
            </p>
            <p className="text-sm font-body text-content-light-secondary dark:text-content-dark-secondary leading-relaxed">
              Certified in Meta Front-End Development, WordPress, and CompTIA A+ IT fundamentals, I build accessible, responsive web interfaces designed for clarity, usability, and maintainability.
            </p>
            <div className="pt-2">
              <Link to="/about">
                <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Transferable Strengths Card Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <Card className="p-4 flex items-start gap-3 bg-surface-light dark:bg-surface-dark-card">
              <div className="p-2 rounded-brand-xs bg-brand-soft text-brand-primary dark:bg-brand-soft-dark dark:text-brand-accent shrink-0 mt-0.5">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-content-light-primary dark:text-content-dark-primary">
                  Enterprise Diagnostics &amp; Debugging
                </h3>
                <p className="text-xs text-content-light-secondary dark:text-content-dark-secondary mt-0.5">
                  Deep experience analyzing system logs, isolated root causes, and resolving complex software issues.
                </p>
              </div>
            </Card>

            <Card className="p-4 flex items-start gap-3 bg-surface-light dark:bg-surface-dark-card">
              <div className="p-2 rounded-brand-xs bg-brand-soft text-brand-primary dark:bg-brand-soft-dark dark:text-brand-accent shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-content-light-primary dark:text-content-dark-primary">
                  Accessibility &amp; WCAG Compliance
                </h3>
                <p className="text-xs text-content-light-secondary dark:text-content-dark-secondary mt-0.5">
                  Building accessible interfaces with visible focus states, screen reader landmarks, and contrast safety.
                </p>
              </div>
            </Card>

            <Card className="p-4 flex items-start gap-3 bg-surface-light dark:bg-surface-dark-card">
              <div className="p-2 rounded-brand-xs bg-brand-soft text-brand-primary dark:bg-brand-soft-dark dark:text-brand-accent shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-content-light-primary dark:text-content-dark-primary">
                  WordPress &amp; Custom Web Solutions
                </h3>
                <p className="text-xs text-content-light-secondary dark:text-content-dark-secondary mt-0.5">
                  Tailored web presences, custom PHP mail handlers, digital brand assets, and content systems.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

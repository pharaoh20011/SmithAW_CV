import React, { useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { ResumeCTA } from '../components/common/ResumeCTA';
import { ContactCTA } from '../components/common/ContactCTA';
import { Terminal, ShieldCheck, Award, Cpu, Code2, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Anthony W. Smith | Front-End Developer / UI/UX Designer & Advanced AI Prompt Engineer';
  }, []);

  return (
    <Section className="py-8 md:py-16">
      <Container>
        {/* Header Title */}
        <div className="pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark">
          <span className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent font-semibold uppercase tracking-wider">
            // ABOUT ANTHONY W. SMITH
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
            Engineering &amp; Design Background
          </h1>
          <p className="text-content-light-secondary dark:text-content-dark-secondary font-body mt-2 max-w-3xl leading-relaxed">
            Technical support veteran pivoting into UI/UX and Front-End Development. Combining enterprise IT troubleshooting expertise with modern frontend component design and advanced prompt engineering.
          </p>
        </div>

        {/* Narrative & Career Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Main Story */}
          <div className="lg:col-span-8 space-y-6">
            <Card elevation="elevated" className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary">
                My Approach &amp; Professional Journey
              </h2>

              {/* Career Pipeline Visual */}
              <div className="p-4 rounded-brand-sm bg-brand-soft/40 dark:bg-brand-soft-dark/30 border border-brand-primary/20 dark:border-brand-accent/20 my-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-xs font-mono-tech">
                  <div className="p-2.5 rounded-brand-xs bg-surface-light dark:bg-surface-dark-card border border-stroke-light dark:border-stroke-dark">
                    <span className="block font-bold text-brand-primary dark:text-brand-accent">01. Enterprise IT Support</span>
                    <span className="text-[11px] text-content-light-muted dark:text-content-dark-muted">Fortune 500 Troubleshooting</span>
                  </div>
                  <div className="p-2.5 rounded-brand-xs bg-surface-light dark:bg-surface-dark-card border border-stroke-light dark:border-stroke-dark">
                    <span className="block font-bold text-brand-primary dark:text-brand-accent">02. Front-End Engineering</span>
                    <span className="text-[11px] text-content-light-muted dark:text-content-dark-muted">React, TypeScript &amp; Tailwind</span>
                  </div>
                  <div className="p-2.5 rounded-brand-xs bg-surface-light dark:bg-surface-dark-card border border-stroke-light dark:border-stroke-dark">
                    <span className="block font-bold text-brand-primary dark:text-brand-accent">03. UI/UX &amp; Accessibility</span>
                    <span className="text-[11px] text-content-light-muted dark:text-content-dark-muted">WCAG 2.2 AA Systems</span>
                  </div>
                </div>
              </div>

              <p className="text-content-light-secondary dark:text-content-dark-secondary font-body leading-relaxed">
                I am a Front-End Developer / UI/UX Designer &amp; Advanced AI Prompt Engineer with a professional background spanning several Fortune 500 corporate environments. My career bridges the gap between enterprise IT customer support, modern user interface development, and advanced AI prompt engineering.
              </p>

              <p className="text-content-light-secondary dark:text-content-dark-secondary font-body leading-relaxed">
                Backed by a strong foundation as a Sr. SAS Help Desk Representative and team lead, I started my journey with an A+ Certification and hands-on IT support training in Washington, DC, before earning a Graphic Design certificate from Miami Dade College.
              </p>

              <p className="text-content-light-secondary dark:text-content-dark-secondary font-body leading-relaxed">
                I have since upskilled with modern credentials in Meta Front-End Development, WordPress CMS Development, and AWS Data Analytics, while integrating advanced prompt engineering techniques into my technical workflow to rapidly create clean, intuitive, and accessible interfaces.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 border-t border-stroke-light/60 dark:border-stroke-dark/60">
                <ResumeCTA variant="primary" size="md" icon="download" label="Download Resume PDF" />
                <ContactCTA variant="secondary" size="md" label="Get in Touch" />
              </div>
            </Card>
          </div>

          {/* Side Strengths & Highlights */}
          <div className="lg:col-span-4 space-y-4">
            <Card elevation="subtle" className="p-5 space-y-3">
              <h3 className="font-heading font-bold text-base text-content-light-primary dark:text-content-dark-primary flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-primary dark:text-brand-accent" />
                <span>Core Competencies</span>
              </h3>
              <ul className="space-y-2 text-xs font-body text-content-light-secondary dark:text-content-dark-secondary">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-brand-accent shrink-0 mt-1.5" />
                  <span>Enterprise IT Support &amp; Remote Diagnostics (Bomgar, BigFix)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-brand-accent shrink-0 mt-1.5" />
                  <span>Active Directory &amp; Database Structure Navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-brand-accent shrink-0 mt-1.5" />
                  <span>React 18, TypeScript &amp; Modular CSS Architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-brand-accent shrink-0 mt-1.5" />
                  <span>WCAG 2.2 AA Web Accessibility Compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-brand-accent shrink-0 mt-1.5" />
                  <span>WordPress Gutenberg Layout &amp; Site Design</span>
                </li>
              </ul>
            </Card>

            <Card elevation="subtle" className="p-5 space-y-3">
              <h3 className="font-heading font-bold text-base text-content-light-primary dark:text-content-dark-primary flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-primary dark:text-brand-accent" />
                <span>Verified Credentials</span>
              </h3>
              <p className="text-xs font-body text-content-light-secondary dark:text-content-dark-secondary leading-relaxed">
                Meta Front-End Development (Coursera), WordPress Essential Training (LinkedIn), CompTIA A+ Certification, and Graphic Design Certificate (Miami Dade College).
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

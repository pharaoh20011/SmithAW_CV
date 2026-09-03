import React, { useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { ResumeCTA } from '../components/common/ResumeCTA';
import { SKILL_CATEGORIES } from '../data/skills';
import { CERTIFICATIONS } from '../data/certifications';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export const ResumePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Resume & Qualifications | Anthony W. Smith';
  }, []);

  return (
    <Section className="py-8 md:py-16">
      <Container>
        {/* Header Title */}
        <div className="pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent font-semibold uppercase tracking-wider">
              // RESUME &amp; QUALIFICATIONS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
              Anthony W. Smith
            </h1>
            <p className="text-content-light-secondary dark:text-content-dark-secondary font-body mt-2">
              Front-End Developer &amp; UI/UX Designer &bull; Enterprise Technical Support Specialist
            </p>
          </div>
          <div>
            <ResumeCTA variant="primary" size="lg" icon="download" label="Download Resume PDF" />
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="space-y-8">
          {/* Summary Card */}
          <Card elevation="elevated" className="p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-brand-xs bg-brand-soft text-brand-primary dark:bg-brand-soft-dark dark:text-brand-accent">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary">
                Executive Profile Summary
              </h2>
            </div>
            <p className="text-sm font-body text-content-light-secondary dark:text-content-dark-secondary leading-relaxed">
              Experienced Front-End Developer, UI/UX Designer, and Enterprise Technical Support Specialist. Combining formal graphic design education, hands-on enterprise application support at State Street Bank Corp., and modern front-end engineering expertise (React 18, TypeScript, Tailwind CSS, Gutenberg WordPress) to build clean, accessible, and user-centered web applications.
            </p>
          </Card>

          {/* Experience Grid */}
          <Card elevation="subtle" className="p-6 md:p-8 space-y-6">
            <h2 className="text-xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-8 border-l-2 border-brand-primary/30 dark:border-brand-accent/30 pl-4 md:pl-6 ml-2">
              {/* Position #1 — State Street Bank Corp. */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between text-sm">
                  <h3 className="font-heading font-bold text-base text-content-light-primary dark:text-content-dark-primary">
                    Sr. SAS Help Desk Representative
                  </h3>
                  <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">05/2017 &ndash; Present</span>
                </div>
                <p className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent">State Street Bank Corp.</p>
                <ul className="list-disc pl-4 text-xs font-body text-content-light-secondary dark:text-content-dark-secondary space-y-1.5 pt-1">
                  <li>
                    <strong className="text-content-light-primary dark:text-content-dark-primary">Platform Support:</strong> Managed user access and high availability for over 50 enterprise and web-based applications.
                  </li>
                  <li>
                    <strong className="text-content-light-primary dark:text-content-dark-primary">Cross-Functional Collaboration:</strong> Partnered with senior management in an Agile-aligned environment to resolve complex technical incidents.
                  </li>
                  <li>
                    <strong className="text-content-light-primary dark:text-content-dark-primary">Technical Documentation:</strong> Authored comprehensive knowledge base articles, documenting technical processes and system logic for team use.
                  </li>
                  <li>
                    <strong className="text-content-light-primary dark:text-content-dark-primary">Incident Management:</strong> Resolved 20&ndash;50 high-priority support requests daily while maintaining top-tier user satisfaction.
                  </li>
                </ul>
              </div>

              {/* Position #2 — SmithAW Digital Solutions */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between text-sm">
                  <h3 className="font-heading font-bold text-base text-content-light-primary dark:text-content-dark-primary">
                    Front-End &amp; UI/UX Developer / Freelance Consultant
                  </h3>
                  <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">2025 &ndash; Present</span>
                </div>
                <p className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent">SmithAW Digital Solutions</p>
                <ul className="list-disc pl-4 text-xs font-body text-content-light-secondary dark:text-content-dark-secondary space-y-1.5 pt-1">
                  <li>Designed and developed client-facing websites and digital experiences combining front-end development, UI/UX design, responsive design, visual branding, and accessibility.</li>
                  <li>Built modern web applications using React 18, TypeScript, Tailwind CSS, HTML5, CSS3, and JavaScript.</li>
                  <li>Created custom WordPress websites using the Gutenberg block editor (Harrisons &amp; Sons, Vacation Dominican Republic).</li>
                  <li>Applied WCAG 2.2 AA accessibility principles and responsive design practices across digital builds.</li>
                </ul>
              </div>

              {/* Position #3 — Insight Global / Assurant Solutions */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between text-sm">
                  <h3 className="font-heading font-bold text-base text-content-light-primary dark:text-content-dark-primary">
                    Contractor / Technical Support Analyst
                  </h3>
                  <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">06/2015 &ndash; 03/2016</span>
                </div>
                <p className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent">Insight Global / Assurant Solutions</p>
                <ul className="list-disc pl-4 text-xs font-body text-content-light-secondary dark:text-content-dark-secondary space-y-1.5 pt-1">
                  <li>Resolved complex software and hardware issues via remote access tools (Bomgar, BigFix) for enterprise environments.</li>
                  <li>Utilized Active Directory and database structures, establishing deep insight into backend data systems powering frontend UIs.</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Certifications & Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card elevation="subtle" className="p-6 space-y-4">
              <h2 className="text-lg font-bold font-heading text-content-light-primary dark:text-content-dark-primary flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
                <span>Certifications</span>
              </h2>
              <ul className="space-y-2 text-xs font-body text-content-light-secondary dark:text-content-dark-secondary">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.id} className="flex items-center justify-between py-1 border-b border-stroke-light/60 dark:border-stroke-dark/60 last:border-0">
                    <span className="font-medium text-content-light-primary dark:text-content-dark-primary">{c.title}</span>
                    <span className="font-mono-tech text-content-light-muted dark:text-content-dark-muted">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card elevation="subtle" className="p-6 space-y-4">
              <h2 className="text-lg font-bold font-heading text-content-light-primary dark:text-content-dark-primary flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
                <span>Education &amp; Training</span>
              </h2>
              <div className="space-y-3 text-xs font-body">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-content-light-primary dark:text-content-dark-primary">Graphic Design Certificate</h3>
                    <span className="font-mono-tech text-content-light-muted dark:text-content-dark-muted">01/2004</span>
                  </div>
                  <p className="text-content-light-muted dark:text-content-dark-muted font-mono-tech">Miami Dade College</p>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-content-light-primary dark:text-content-dark-primary">CompTIA A+ IT Certification Training</h3>
                    <span className="font-mono-tech text-content-light-muted dark:text-content-dark-muted">06/1999</span>
                  </div>
                  <p className="text-content-light-muted dark:text-content-dark-muted font-mono-tech">Computer Learning Center &bull; Washington, DC</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

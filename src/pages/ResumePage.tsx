import React, { useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ResumeCTA } from '../components/common/ResumeCTA';
import { SKILL_CATEGORIES } from '../data/skills';
import { CERTIFICATIONS } from '../data/certifications';
import { Award, Briefcase, GraduationCap, Download } from 'lucide-react';

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
              Front-End Developer &amp; UI/UX Designer &bull; Technical Support Specialist
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
              Technical support veteran pivoting into UI/UX and Front-End Development. Certified in Meta Front-End, WordPress, and AWS, combining enterprise troubleshooting expertise with advanced prompt engineering to rapidly create clean, intuitive, and responsive user interfaces.
            </p>
          </Card>

          {/* Experience Grid */}
          <Card elevation="subtle" className="p-6 md:p-8 space-y-6">
            <h2 className="text-xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand-primary dark:text-brand-accent" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-6 border-l-2 border-brand-primary/30 dark:border-brand-accent/30 pl-4 md:pl-6 ml-2">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-between text-sm">
                  <h3 className="font-heading font-bold text-base text-content-light-primary dark:text-content-dark-primary">
                    Front-End &amp; UI/UX Developer / Freelance Consultant
                  </h3>
                  <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">2022 &ndash; Present</span>
                </div>
                <p className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent">SmithAW Digital Solutions</p>
                <ul className="list-disc pl-4 text-xs font-body text-content-light-secondary dark:text-content-dark-secondary space-y-1 pt-1">
                  <li>Designed and developed client projects including GHCOOKwriter-V2, Relocatia Platform, HSK, and TAF Landscaping.</li>
                  <li>Implemented responsive SPAs using React 18, TypeScript, Tailwind CSS, and REST API integrations.</li>
                  <li>Ensured strict WCAG 2.2 AA accessibility compliance across all digital builds.</li>
                </ul>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-between text-sm">
                  <h3 className="font-heading font-bold text-base text-content-light-primary dark:text-content-dark-primary">
                    Contractor / Technical Support Analyst
                  </h3>
                  <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">06/2015 &ndash; 03/2016</span>
                </div>
                <p className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent">Insight Global / Assurant Solutions</p>
                <ul className="list-disc pl-4 text-xs font-body text-content-light-secondary dark:text-content-dark-secondary space-y-1 pt-1">
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
                  <h3 className="font-bold text-content-light-primary dark:text-content-dark-primary">Graphic Design Certificate</h3>
                  <p className="text-content-light-muted dark:text-content-dark-muted font-mono-tech">Miami Dade College</p>
                </div>
                <div>
                  <h3 className="font-bold text-content-light-primary dark:text-content-dark-primary">CompTIA A+ IT Certification Training</h3>
                  <p className="text-content-light-muted dark:text-content-dark-muted font-mono-tech">Hands-on IT Support Training, Washington, DC</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

import React from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { ResumeCTA } from '../components/common/ResumeCTA';

export const ResumePage: React.FC = () => {
  return (
    <Section className="py-8 md:py-12">
      <Container>
        <div className="pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark">
          <span className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent font-semibold uppercase tracking-wider">
            Resume &amp; Qualifications
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
            Anthony W. Smith — Professional Resume
          </h1>
          <p className="text-content-light-secondary dark:text-content-dark-secondary font-body mt-2">
            Experience overview, technical skills, certifications, and downloadable PDF resume.
          </p>
        </div>

        <Card className="p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary">
              Preserved Resume Document
            </h2>
            <p className="text-sm text-content-light-secondary dark:text-content-dark-secondary mt-1">
              Direct access to the verified, preserved resume PDF (<code className="font-mono-tech text-xs">/awsmith_resume__fed.pdf</code>).
            </p>
          </div>
          <div>
            <ResumeCTA variant="primary" size="lg" icon="download" label="Download Resume PDF" />
          </div>
        </Card>
      </Container>
    </Section>
  );
};

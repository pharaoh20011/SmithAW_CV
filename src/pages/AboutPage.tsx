import React from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { ResumeCTA } from '../components/common/ResumeCTA';
import { ContactCTA } from '../components/common/ContactCTA';

export const AboutPage: React.FC = () => {
  return (
    <Section className="py-8 md:py-12">
      <Container>
        <div className="pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark">
          <span className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent font-semibold uppercase tracking-wider">
            About Baseline Route
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
            About Anthony W. Smith
          </h1>
          <p className="text-content-light-secondary dark:text-content-dark-secondary font-body mt-2">
            Front-End Developer &amp; UI/UX Designer specializing in accessible web applications, responsive user interfaces, and modular system design.
          </p>
        </div>

        <Card className="p-6 md:p-8 space-y-4">
          <h2 className="text-xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary">
            Engineering &amp; Design Background Baseline
          </h2>
          <p className="text-content-light-secondary dark:text-content-dark-secondary leading-relaxed">
            This route baseline will house complete bio, philosophy, career evolution, and skill matrix in upcoming content phases.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <ResumeCTA variant="primary" />
            <ContactCTA variant="secondary" />
          </div>
        </Card>
      </Container>
    </Section>
  );
};

import React from 'react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { ContactCTA } from '../../components/common/ContactCTA';
import { ResumeCTA } from '../../components/common/ResumeCTA';
import { Mail } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <Section className="py-16 sm:py-20">
      <Container>
        <Card className="p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto bg-gradient-to-b from-brand-soft/40 to-surface-light dark:from-brand-soft-dark/20 dark:to-surface-dark-card border-brand-primary/20 dark:border-brand-accent/20 shadow-brand-card dark:shadow-brand-card-dark">
          <div className="inline-flex items-center justify-center p-3 rounded-brand-full bg-brand-primary text-white dark:bg-brand-accent mb-6 shadow-brand-subtle">
            <Mail className="w-6 h-6" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-content-light-primary dark:text-content-dark-primary tracking-tight">
            Let's Build Something Meaningful
          </h2>

          <p className="mt-4 text-base sm:text-lg text-content-light-secondary dark:text-content-dark-secondary font-body max-w-2xl mx-auto leading-relaxed">
            I am open to full-time Front-End Development roles, UI/UX design opportunities, collaborative projects, and custom web builds. Let's discuss how my technical troubleshooting and frontend engineering background can bring value to your team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ContactCTA variant="primary" size="lg" label="Contact Me" />
            <ResumeCTA variant="secondary" size="lg" icon="file" label="View Resume PDF" />
          </div>
        </Card>
      </Container>
    </Section>
  );
};

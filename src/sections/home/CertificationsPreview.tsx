import React from 'react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Card } from '../../components/ui/Card';
import { CERTIFICATIONS } from '../../data/certifications';
import { Award, CheckCircle2 } from 'lucide-react';

export const CertificationsPreview: React.FC = () => {
  return (
    <Section className="py-12 sm:py-16 bg-surface-light/40 dark:bg-surface-dark-card/20 border-y border-stroke-light/60 dark:border-stroke-dark/60">
      <Container>
        <SectionHeading
          eyebrow="04. Credentials &amp; Education"
          title="Verified Certifications"
          subtitle="Formal coursework, technical credentials, and professional skills training."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <Card key={cert.id} elevation="subtle" className="p-4 flex items-start gap-3 bg-surface-light dark:bg-surface-dark-card">
              <div className="p-2 rounded-brand-xs bg-brand-soft text-brand-primary dark:bg-brand-soft-dark dark:text-brand-accent shrink-0 mt-0.5">
                <Award className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-sm text-content-light-primary dark:text-content-dark-primary leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-1 text-[11px] font-mono-tech text-emerald-600 dark:text-emerald-400 pt-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

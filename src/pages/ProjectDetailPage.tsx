import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <Section className="py-8 md:py-12">
      <Container>
        <div className="pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark">
          <Link to="/projects" className="inline-block mb-3">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Projects
            </Button>
          </Link>
          <span className="block text-xs font-mono-tech text-brand-primary dark:text-brand-accent font-semibold uppercase tracking-wider">
            Case Study Slug Parameter: {slug}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1 capitalize">
            {slug?.replace(/-/g, ' ')} — Case Study Baseline
          </h1>
        </div>

        <Card className="p-6 md:p-8 space-y-4">
          <p className="text-content-light-secondary dark:text-content-dark-secondary font-body leading-relaxed">
            Detailed case study view for dynamic project slug <code className="font-mono-tech text-xs bg-gray-100 dark:bg-surface-dark-elevated px-2 py-1 rounded">{slug}</code> will be populated during upcoming content phases.
          </p>
        </Card>
      </Container>
    </Section>
  );
};

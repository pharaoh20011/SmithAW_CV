import React from 'react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { Code, Layout, Globe, Cpu } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const capabilities = [
    {
      icon: <Code className="w-5 h-5 text-brand-primary dark:text-brand-accent" />,
      title: 'Front-End Development',
      description: 'Building responsive single-page web applications with React 18, TypeScript, Tailwind CSS, and clean component systems.',
    },
    {
      icon: <Layout className="w-5 h-5 text-brand-primary dark:text-brand-accent" />,
      title: 'UI/UX & Web Accessibility',
      description: 'Designing intuitive interfaces with strict WCAG 2.2 AA accessibility standards, visible focus states, and fluid typography.',
    },
    {
      icon: <Globe className="w-5 h-5 text-brand-primary dark:text-brand-accent" />,
      title: 'WordPress CMS Solutions',
      description: 'Developing custom WordPress sites, structured templates, content workflows, and reliable PHP mail handlers.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-primary dark:text-brand-accent" />,
      title: 'Technical Problem Solving',
      description: 'Leveraging Fortune 500 enterprise IT support experience and AI prompt engineering for rapid diagnostic resolution.',
    },
  ];

  return (
    <Section className="py-8 bg-surface-light/50 dark:bg-surface-dark-card/30 border-y border-stroke-light/60 dark:border-stroke-dark/60">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {capabilities.map((cap) => (
            <Card key={cap.title} elevation="subtle" className="p-5 flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-brand-sm bg-brand-soft dark:bg-brand-soft-dark shrink-0">
                  {cap.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-content-light-primary dark:text-content-dark-primary">
                  {cap.title}
                </h3>
              </div>
              <p className="text-xs font-body text-content-light-secondary dark:text-content-dark-secondary leading-relaxed pt-1">
                {cap.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

import React from 'react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { SKILL_CATEGORIES } from '../../data/skills';

export const SkillsPreview: React.FC = () => {
  return (
    <Section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="03. Technology Stack"
          title="Skills &amp; Technical Capabilities"
          subtitle="Core technologies, development tools, design practices, and workflow integrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <Card key={cat.categoryName} elevation="subtle" className="p-6 space-y-3">
              <h3 className="font-heading font-bold text-lg text-content-light-primary dark:text-content-dark-primary flex items-center justify-between border-b border-stroke-light dark:border-stroke-dark pb-2">
                <span>{cat.categoryName}</span>
                <span className="text-xs font-mono-tech font-normal text-content-light-muted dark:text-content-dark-muted">
                  {cat.skills.length} competencies
                </span>
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="brand" className="text-xs py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projects';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug) || FEATURED_PROJECTS[1];

  useEffect(() => {
    document.title = `${project.title} | Case Study`;
  }, [project]);

  return (
    <Section className="py-8 md:py-16">
      <Container>
        <div className="pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark">
          <Link to="/projects" className="inline-block mb-3">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Projects
            </Button>
          </Link>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="brand">{project.category}</Badge>
            <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">{project.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
            {project.title}
          </h1>
          <p className="text-content-light-secondary dark:text-content-dark-secondary font-body mt-2">
            {project.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <Card elevation="elevated" className="overflow-hidden p-6 md:p-8 space-y-4">
              <img
                src={project.image}
                alt={`Preview of ${project.title}`}
                className="w-full h-auto rounded-brand-md object-cover border border-stroke-light dark:border-stroke-dark mb-4"
              />
              <h2 className="text-xl font-bold font-heading">Project Overview</h2>
              <p className="text-sm font-body leading-relaxed text-content-light-secondary dark:text-content-dark-secondary">
                {project.description}
              </p>
              <h3 className="text-base font-bold font-heading pt-2">Key Highlights</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm font-body text-content-light-secondary dark:text-content-dark-secondary">
                {project.keyFeatures.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <Card elevation="subtle" className="p-6 space-y-4">
              <h3 className="font-heading font-bold text-base">Technologies Used</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="neutral">{tech}</Badge>
                ))}
              </div>
              {project.liveDemoUrl && (
                <div className="pt-3 border-t border-stroke-light/60 dark:border-stroke-dark/60">
                  <a
                    href={project.liveDemoUrl}
                    target={project.isSubProject ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-brand-sm bg-brand-primary text-white hover:bg-brand-supporting text-sm font-medium font-body transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

import React from 'react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Card, CardHeader, CardBody, CardFooter } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Grid } from '../../components/ui/Grid';
import { FEATURED_PROJECTS } from '../../data/projects';
import { ExternalLink, FileText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturedProjects: React.FC = () => {
  return (
    <Section id="featured-projects" className="py-12 sm:py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="01. Portfolio Showcase"
          title="Featured Projects &amp; Live Sub-Projects"
          subtitle="Explore web application builds, branded client web solutions, and preserved live static sub-projects."
        />

        <Grid preset="projects">
          {FEATURED_PROJECTS.map((project) => (
            <Card
              key={project.id}
              interactive
              elevation="elevated"
              className="flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-surface-dark-elevated border-b border-stroke-light dark:border-stroke-dark">
                <img
                  src={project.image}
                  alt={`Screenshot preview of ${project.title}`}
                  loading="lazy"
                  width={600}
                  height={338}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-normal"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant={project.isSubProject ? 'accent' : 'brand'}>
                    {project.isSubProject ? 'Preserved Static App' : 'SPA Web App'}
                  </Badge>
                </div>
              </div>

              {/* Card Header */}
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted mb-1">
                  <span className="uppercase font-semibold tracking-wider text-brand-primary dark:text-brand-accent">
                    {project.category}
                  </span>
                  <span>{project.date}</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted mt-0.5">
                  {project.subtitle}
                </p>
              </CardHeader>

              {/* Card Body */}
              <CardBody className="py-2 text-sm leading-relaxed flex-grow">
                <p>{project.description}</p>
              </CardBody>

              {/* Card Footer with Tech Stack & Actions */}
              <CardFooter className="flex-col items-start gap-4 pt-3">
                <div className="flex flex-wrap gap-1.5 w-full">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="neutral">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between w-full pt-2 border-t border-stroke-light/60 dark:border-stroke-dark/60">
                  {project.isSubProject ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Launch ${project.title} static sub-project (opens in new tab)`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-bold text-brand-primary dark:text-brand-accent hover:underline focus-ring rounded-brand-xs px-1.5 py-1"
                    >
                      <span>Launch Sub-Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={project.liveDemoUrl || `/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-bold text-brand-primary dark:text-brand-accent hover:underline focus-ring rounded-brand-xs px-1.5 py-1"
                    >
                      <span>View Case Study</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  {project.pdfUrl && (
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} brand PDF documentation (opens in new tab)`}
                      className="inline-flex items-center gap-1 text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted hover:text-content-light-primary dark:hover:text-content-dark-primary focus-ring rounded-brand-xs px-1 py-0.5"
                    >
                      <FileText className="w-3 h-3" />
                      <span>Brand PDF</span>
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </Grid>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-brand-sm bg-surface-light dark:bg-surface-dark-card border border-stroke-light dark:border-stroke-dark text-content-light-primary dark:text-content-dark-primary font-medium font-body text-sm hover:bg-gray-100 dark:hover:bg-surface-dark-elevated transition-colors focus-ring"
          >
            <span>Explore All Portfolio Projects &amp; Archives</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

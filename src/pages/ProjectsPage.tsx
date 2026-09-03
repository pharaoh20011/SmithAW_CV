import React, { useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card, CardHeader, CardBody, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Grid } from '../components/ui/Grid';
import { FEATURED_PROJECTS } from '../data/projects';
import { ExternalLink, FileText, Sparkles, Award } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Projects & Selected Work | Anthony W. Smith';
  }, []);

  return (
    <Section className="py-8 md:py-16">
      <Container>
        {/* Header Title */}
        <div className="pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark">
          <span className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent font-semibold uppercase tracking-wider">
            // SELECTED WORK &amp; CASE STUDIES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
            Projects &amp; Portfolio Archive
          </h1>
          <p className="text-content-light-secondary dark:text-content-dark-secondary font-body mt-2 max-w-2xl">
            Explore client design projects, modern web applications, WordPress websites, graphic design work, and preserved live projects.
          </p>
        </div>

        {/* Projects Grid */}
        <Grid preset="projects">
          {FEATURED_PROJECTS.map((project, idx) => (
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
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {idx === 0 ? (
                    <Badge variant="brand" icon={<Award className="w-3 h-3" />}>
                      Flagship Client Project
                    </Badge>
                  ) : project.category === 'wordpress' ? (
                    <Badge variant="accent">WordPress Gutenberg</Badge>
                  ) : project.category === 'graphic-design' ? (
                    <Badge variant="brand">Graphic Design &amp; Branding</Badge>
                  ) : (
                    <Badge variant={project.isSubProject ? 'accent' : 'brand'}>
                      {project.isSubProject ? 'Preserved Static App' : 'SPA Web App'}
                    </Badge>
                  )}
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
                <h2 className="text-xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h2>
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

                <div className="flex flex-col gap-2.5 w-full pt-2 border-t border-stroke-light/60 dark:border-stroke-dark/60">
                  <div className="flex items-center justify-between w-full">
                    {project.isSubProject ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Launch ${project.title} sub-project (opens in new tab)`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-bold text-brand-primary dark:text-brand-accent hover:underline focus-ring rounded-brand-xs px-1.5 py-1"
                      >
                        <span>Launch Sub-Project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-bold text-brand-primary dark:text-brand-accent">
                        <span>React SPA Feature</span>
                        <Sparkles className="w-3.5 h-3.5" />
                      </span>
                    )}

                    {project.pdfUrl && !project.pdfResources && (
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

                  {/* Compact Graphic Design PDF Link Group */}
                  {project.pdfResources && project.pdfResources.length > 0 && (
                    <div className="pt-2 border-t border-stroke-light/40 dark:border-stroke-dark/40 space-y-1.5">
                      <span className="block text-[11px] font-mono-tech uppercase font-bold text-brand-primary dark:text-brand-accent tracking-wider">
                        Graphic Design Portfolio PDFs:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.pdfResources.map((pdf) => (
                          <a
                            key={pdf.title}
                            href={pdf.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${pdf.title} (opens in new tab)`}
                            className="inline-flex items-center gap-1 text-[11px] font-mono-tech text-content-light-secondary dark:text-content-dark-secondary hover:text-brand-primary dark:hover:text-brand-accent focus-ring rounded-brand-xs px-2 py-1 bg-brand-soft/50 dark:bg-surface-dark-elevated border border-stroke-light/80 dark:border-stroke-dark/80 transition-colors"
                          >
                            <FileText className="w-3 h-3 text-brand-primary dark:text-brand-accent shrink-0" />
                            <span>{pdf.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

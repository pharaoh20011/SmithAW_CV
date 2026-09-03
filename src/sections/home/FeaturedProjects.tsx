import React from 'react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Card, CardHeader, CardBody, CardFooter } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Grid } from '../../components/ui/Grid';
import { FEATURED_PROJECTS } from '../../data/projects';
import { ExternalLink, FileText, Sparkles, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturedProjects: React.FC = () => {
  // Single source of truth consumed from src/data/projects.ts
  const flagshipProject = FEATURED_PROJECTS[0]; // GHCOOKwriter Author Site
  const otherProjects = FEATURED_PROJECTS.slice(1, 5); // Relocatia, Signs & Banners, Harrisons & Sons, Vacation Dominican Republic

  return (
    <Section id="featured-projects" className="py-12 sm:py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="// 01. SELECTED WORK"
          title="Featured Projects &amp; Client Showcase"
          subtitle="Explore client design projects, web applications, WordPress websites, graphic design work, and preserved live projects."
        />

        {/* Flagship Client Project Spotlight: GHCOOKwriter Author Site */}
        {flagshipProject && (
          <div className="mb-12">
            <Card
              elevation="elevated"
              className="p-6 md:p-8 bg-gradient-to-br from-surface-light via-brand-soft/20 to-surface-light dark:from-surface-dark-card dark:via-brand-soft-dark/20 dark:to-surface-dark-card border-brand-primary/30 dark:border-brand-accent/30 shadow-brand-elevated"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Flagship Image (5 cols) */}
                <div className="lg:col-span-6 relative rounded-brand-md overflow-hidden border border-stroke-light dark:border-stroke-dark shadow-brand-subtle group">
                  <img
                    src={flagshipProject.image}
                    alt={`Preview of ${flagshipProject.title}`}
                    loading="lazy"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover object-top group-hover:scale-105 transition-transform duration-normal"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge variant="brand" icon={<Award className="w-3.5 h-3.5" />}>
                      Flagship Client Design Project
                    </Badge>
                  </div>
                </div>

                {/* Flagship Content (6 cols) */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                    <span className="uppercase font-bold text-brand-primary dark:text-brand-accent">
                      Author &amp; Publishing Website
                    </span>
                    <span>{flagshipProject.date}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary">
                    {flagshipProject.title}
                  </h3>

                  <p className="text-sm font-body text-content-light-secondary dark:text-content-dark-secondary leading-relaxed">
                    {flagshipProject.description}
                  </p>

                  {/* Highlights list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs font-body text-content-light-secondary dark:text-content-dark-secondary">
                    {flagshipProject.keyFeatures.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-brand-accent shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {flagshipProject.stack.map((tech) => (
                      <Badge key={tech} variant="neutral">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 flex items-center gap-4 border-t border-stroke-light/60 dark:border-stroke-dark/60">
                    <a
                      href={flagshipProject.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Launch ${flagshipProject.title} client project site (opens in new tab)`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-brand-sm bg-brand-primary text-white hover:bg-brand-supporting dark:bg-brand-accent dark:hover:bg-brand-primary text-sm font-medium font-body transition-colors focus-ring"
                    >
                      <span>Explore Flagship Project Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Secondary Featured Projects Grid */}
        <Grid preset="projects">
          {otherProjects.map((project) => (
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
                  <Badge variant={project.category === 'graphic-design' ? 'brand' : project.category === 'wordpress' ? 'accent' : 'brand'}>
                    {project.category === 'graphic-design' ? 'Graphic Design & Branding' : project.category === 'wordpress' ? 'WordPress Gutenberg' : project.category === 'web-app' ? 'Web Application' : 'Preserved Static App'}
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
                      aria-label={`Launch ${project.title} sub-project (opens in new tab)`}
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

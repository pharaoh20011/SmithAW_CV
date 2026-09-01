import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card, CardHeader, CardBody, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Grid } from '../components/ui/Grid';
import { ExternalLink, Code } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  return (
    <Section className="py-8 md:py-12">
      <Container>
        <div className="pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark">
          <span className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent font-semibold uppercase tracking-wider">
            Projects Route Baseline
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
            Featured Web Projects &amp; Case Studies
          </h1>
          <p className="text-content-light-secondary dark:text-content-dark-secondary font-body mt-2">
            Showcase of web applications, custom frontend builds, branded websites, and preserved static projects.
          </p>
        </div>

        <Grid preset="projects">
          <Card interactive elevation="elevated">
            <CardHeader>
              <Badge variant="brand" className="mb-2">Web App</Badge>
              <h2 className="text-lg font-bold font-heading">Relocatia Platform</h2>
            </CardHeader>
            <CardBody>
              <p className="text-sm">Client relocation management portal with document workflows and automated tracking.</p>
            </CardBody>
            <CardFooter>
              <Link to="/projects/relocatia" className="text-brand-primary dark:text-brand-accent font-medium hover:underline text-xs font-mono-tech flex items-center gap-1">
                <span>View Detail Baseline</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </CardFooter>
          </Card>

          <Card interactive elevation="elevated">
            <CardHeader>
              <Badge variant="accent" icon={<Code className="w-3 h-3" />} className="mb-2">Static Sub-Project</Badge>
              <h2 className="text-lg font-bold font-heading">Jubilee Showcase</h2>
            </CardHeader>
            <CardBody>
              <p className="text-sm">Preserved interactive static website project hosted under <code className="font-mono-tech text-xs">/jubilee/</code>.</p>
            </CardBody>
            <CardFooter>
              <a href="/jubilee/index.html" target="_blank" rel="noreferrer" className="text-brand-primary dark:text-brand-accent font-medium hover:underline text-xs font-mono-tech flex items-center gap-1">
                <span>Launch /jubilee/</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </CardFooter>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
};

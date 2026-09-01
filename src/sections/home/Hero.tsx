import React from 'react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';
import { ResumeCTA } from '../../components/common/ResumeCTA';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <Section className="py-12 sm:py-16 lg:py-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Column (58% approx / 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow / Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-brand-full bg-brand-soft text-brand-primary dark:bg-brand-soft-dark dark:text-brand-accent text-xs font-mono-tech font-bold uppercase tracking-wider border border-brand-primary/10 dark:border-brand-accent/20">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Front-End Developer &bull; UI/UX Designer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-content-light-primary dark:text-content-dark-primary tracking-tight leading-[1.1]">
              Anthony W. Smith
              <span className="block text-brand-primary dark:text-brand-accent mt-1">
                Front-End Developer &amp; UI/UX Designer
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-content-light-secondary dark:text-content-dark-secondary font-body leading-relaxed max-w-2xl">
              Technical support veteran bridging enterprise system troubleshooting, modern React &amp; TypeScript development, and accessible UI/UX design. Building fast, intuitive, WCAG 2.2 AA compliant web interfaces.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#featured-projects">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  View My Work
                </Button>
              </a>

              <ResumeCTA variant="secondary" size="lg" icon="file" label="View Resume" />

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium font-body text-content-light-secondary dark:text-content-dark-secondary hover:text-brand-primary dark:hover:text-brand-accent transition-colors focus-ring rounded-brand-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Talk</span>
              </Link>
            </div>
          </div>

          {/* Hero Image Column (42% approx / 5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              {/* Subtle background glow card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 dark:from-brand-accent/15 dark:to-brand-primary/15 rounded-brand-xl blur-lg opacity-75 -z-10" />

              <div className="relative rounded-brand-lg overflow-hidden border-2 border-stroke-light dark:border-stroke-dark shadow-brand-elevated bg-surface-light dark:bg-surface-dark-card">
                <img
                  src="/assets/img/me_san_pedro2_350x525.png"
                  alt="Portrait of Anthony W. Smith, Front-End Developer and UI/UX Designer"
                  width={350}
                  height={525}
                  loading="eager"
                  className="w-full h-auto object-cover object-center max-h-[460px]"
                />
                <div className="p-4 bg-surface-light/95 dark:bg-surface-dark-card/95 backdrop-blur-xs border-t border-stroke-light dark:border-stroke-dark">
                  <p className="font-heading font-bold text-sm text-content-light-primary dark:text-content-dark-primary">
                    Anthony W. Smith
                  </p>
                  <p className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                    Based in US &bull; Remote Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

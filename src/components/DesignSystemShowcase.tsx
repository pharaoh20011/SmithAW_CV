import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { IconButton } from './ui/IconButton';
import { Badge } from './ui/Badge';
import { Card, CardHeader, CardBody, CardFooter } from './ui/Card';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Grid } from './ui/Grid';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './theme/ThemeProvider';
import {
  Code,
  Sparkles,
  ArrowRight,
  Send,
  Layers,
  CheckCircle,
  Eye,
  Github,
  ExternalLink,
} from 'lucide-react';

export const DesignSystemShowcase: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [btnLoading, setBtnLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    document.title = 'Design System Showcase | Anthony W. Smith';
  }, []);

  const triggerLoadingDemo = () => {
    setBtnLoading(true);
    setTimeout(() => setBtnLoading(false), 2000);
  };

  const handleValidationDemo = (val: string) => {
    setInputValue(val);
    if (val.length > 0 && val.length < 3) {
      setInputError('Input must be at least 3 characters.');
    } else {
      setInputError('');
    }
  };

  return (
    <Section className="bg-surface-light dark:bg-surface-dark transition-colors duration-normal">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-12 border-b border-stroke-light dark:border-stroke-dark">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-mono-tech font-bold uppercase rounded-brand-full bg-brand-primary text-white">
                Phase 2 Complete
              </span>
              <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                System: SmithAW v2.0
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-heading mt-2 text-content-light-primary dark:text-content-dark-primary tracking-tight">
              SmithAW Design System Architecture
            </h1>
            <p className="text-content-light-secondary dark:text-content-dark-secondary font-body mt-1">
              Centralized tokens, accessible primitives, fluid typography, and dark mode verification shell.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="text-sm font-mono-tech font-medium text-content-light-secondary dark:text-content-dark-secondary">
              Theme: <strong className="capitalize">{resolvedTheme}</strong>
            </span>
            <ThemeToggle />
          </div>
        </div>

        {/* 1. Color Palette Tokens */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="01. Tokens"
            title="Brand & Surface Color System"
            subtitle="Strict hex definitions for brand identity, intentional light theme, and non-inverted dark theme."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="p-4 rounded-brand-md bg-[#2F4399] text-white shadow-brand-subtle">
              <p className="text-xs font-mono-tech font-bold">Brand Primary</p>
              <p className="text-[11px] font-mono-tech opacity-80 mt-1">#2F4399</p>
            </div>
            <div className="p-4 rounded-brand-md bg-[#233372] text-white shadow-brand-subtle">
              <p className="text-xs font-mono-tech font-bold">Supporting</p>
              <p className="text-[11px] font-mono-tech opacity-80 mt-1">#233372</p>
            </div>
            <div className="p-4 rounded-brand-md bg-[#5B6FE8] text-white shadow-brand-subtle">
              <p className="text-xs font-mono-tech font-bold">Accent</p>
              <p className="text-[11px] font-mono-tech opacity-80 mt-1">#5B6FE8</p>
            </div>
            <div className="p-4 rounded-brand-md bg-[#EEF1FF] text-[#2F4399] border border-blue-200">
              <p className="text-xs font-mono-tech font-bold">Soft Accent</p>
              <p className="text-[11px] font-mono-tech opacity-80 mt-1">#EEF1FF</p>
            </div>
            <div className="p-4 rounded-brand-md bg-[#111318] text-[#F5F7FA] border border-stroke-dark">
              <p className="text-xs font-mono-tech font-bold">Dark Bg</p>
              <p className="text-[11px] font-mono-tech opacity-80 mt-1">#111318</p>
            </div>
            <div className="p-4 rounded-brand-md bg-[#181B22] text-[#F5F7FA] border border-stroke-dark">
              <p className="text-xs font-mono-tech font-bold">Dark Surface</p>
              <p className="text-[11px] font-mono-tech opacity-80 mt-1">#181B22</p>
            </div>
            <div className="p-4 rounded-brand-md bg-[#20242D] text-[#F5F7FA] border border-stroke-dark">
              <p className="text-xs font-mono-tech font-bold">Dark Elevated</p>
              <p className="text-[11px] font-mono-tech opacity-80 mt-1">#20242D</p>
            </div>
          </div>
        </div>

        {/* 2. Typography Scale */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="02. Typography"
            title="Plus Jakarta Sans + Inter + JetBrains Mono"
            subtitle="Type hierarchy for headers, body UI elements, and technical label metadata."
          />
          <Card className="p-6 md:p-8 space-y-6">
            <div>
              <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                Heading 1 — Plus Jakarta Sans (Bold, 36px/40px)
              </span>
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
                Senior Full-Stack Web Developer & Technical Architect
              </h1>
            </div>
            <div>
              <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                Heading 2 — Plus Jakarta Sans (Bold, 24px/28px)
              </span>
              <h2 className="text-2xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
                Engineered Performance & Component Systems
              </h2>
            </div>
            <div>
              <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                Body Text — Inter (Regular, 16px/24px)
              </span>
              <p className="text-base font-body text-content-light-secondary dark:text-content-dark-secondary leading-relaxed mt-1">
                Building scalable, WCAG 2.2 AA accessible web applications with strict TypeScript standards, modern responsive layouts, and zero-compromise security controls.
              </p>
            </div>
            <div>
              <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                Technical Monospace — JetBrains Mono (Medium, 13px)
              </span>
              <p className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent mt-1">
                CONST STACK = ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'];
              </p>
            </div>
          </Card>
        </div>

        {/* 3. Button System */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="03. Interactive Buttons"
            title="Accessible Button System (44px Min Touch Targets)"
            subtitle="Supporting primary, secondary, ghost, loading, icon, and disabled states."
          />
          <Card className="p-6 md:p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Primary Button
              </Button>
              <Button variant="secondary" leftIcon={<Layers className="w-4 h-4" />}>
                Secondary Button
              </Button>
              <Button variant="ghost" leftIcon={<Code className="w-4 h-4" />}>
                Ghost / Text Button
              </Button>
              <Button
                variant="primary"
                isLoading={btnLoading}
                onClick={triggerLoadingDemo}
              >
                Click for Loading State
              </Button>
              <Button variant="primary" disabled>
                Disabled State
              </Button>
            </div>
            <div className="pt-4 border-t border-stroke-light dark:border-stroke-dark flex items-center gap-4">
              <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                Icon Buttons:
              </span>
              <IconButton variant="secondary" aria-label="Github repository">
                <Github className="w-5 h-5" />
              </IconButton>
              <IconButton variant="primary" aria-label="View live preview">
                <Eye className="w-5 h-5" />
              </IconButton>
              <IconButton variant="ghost" aria-label="External link">
                <ExternalLink className="w-5 h-5" />
              </IconButton>
            </div>
          </Card>
        </div>

        {/* 4. Form System Primitives */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="04. Forms"
            title="Form Primitives & Validation States"
            subtitle="Inputs, labels, textareas with explicit error, success, and disabled states."
          />
          <Card className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Interactive Validation Demo"
                placeholder="Type 'hi' to see error..."
                value={inputValue}
                onChange={(e) => handleValidationDemo(e.target.value)}
                error={inputError}
                success={inputValue.length >= 3}
                helperText="Must be at least 3 characters."
                required
              />
              <Input
                label="Disabled Input Primitive"
                value="Read-only system value"
                disabled
                helperText="This field is disabled."
              />
              <div className="md:col-span-2">
                <Textarea
                  label="Message / Feedback Primitives"
                  placeholder="Enter message details..."
                  helperText="Supports accessible label association and error state styling."
                />
              </div>
            </div>
          </Card>
        </div>

        {/* 5. Card & Grid Foundation */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="05. Cards & Grids"
            title="Modular Card Family & 3/2/1 Project Grid"
            subtitle="Restrained elevation, border separation, tech badges, and responsive grid layouts."
          />
          <Grid preset="projects">
            <Card interactive elevation="elevated">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="brand" icon={<Sparkles className="w-3 h-3" />}>
                    Web App
                  </Badge>
                  <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                    2026
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-content-light-primary dark:text-content-dark-primary group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                  Relocatia Platform
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm">
                  Full-stack relocation web app with client portals, document uploading, and automated workflow tracking.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="neutral">React</Badge>
                  <Badge variant="neutral">Node.js</Badge>
                  <Badge variant="neutral">Tailwind</Badge>
                </div>
              </CardFooter>
            </Card>

            <Card interactive elevation="elevated">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="accent" icon={<Code className="w-3 h-3" />}>
                    HTML / JS
                  </Badge>
                  <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                    Sub-Project
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-content-light-primary dark:text-content-dark-primary group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                  Jubilee Showcase (/jubilee/)
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm">
                  Preserved legacy static interactive sub-project embedded seamlessly into the single-page application structure.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="neutral">HTML5</Badge>
                  <Badge variant="neutral">Bootstrap</Badge>
                  <Badge variant="neutral">JS</Badge>
                </div>
              </CardFooter>
            </Card>

            <Card interactive elevation="elevated">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="brand" icon={<CheckCircle className="w-3 h-3" />}>
                    PHP Endpoint
                  </Badge>
                  <span className="text-xs font-mono-tech text-content-light-muted dark:text-content-dark-muted">
                    Preserved
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-content-light-primary dark:text-content-dark-primary group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                  Contact Form API (/contact.php)
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm">
                  Legacy mail handler preserved without rewrite, integrated asynchronously via URLSearchParams fetch.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="neutral">PHP</Badge>
                  <Badge variant="neutral">reCAPTCHA</Badge>
                  <Badge variant="neutral">SMTP</Badge>
                </div>
              </CardFooter>
            </Card>
          </Grid>
        </div>

        {/* 6. Accessibility & Motion Validation Summary */}
        <Card className="p-6 md:p-8 bg-brand-soft/40 dark:bg-brand-soft-dark/30 border-brand-primary/20 dark:border-brand-accent/30">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-primary text-white rounded-brand-sm shrink-0 mt-1">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary">
                WCAG 2.2 AA & System Compliance Summary
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-content-light-secondary dark:text-content-dark-secondary font-body list-disc pl-5">
                <li>Focus rings enabled via <code className="font-mono-tech text-xs bg-white dark:bg-black/30 px-1 py-0.5 rounded">focus-ring</code> utility on all interactive elements.</li>
                <li>Contrast ratios verified for brand colors, light mode text, and dark mode text.</li>
                <li><code className="font-mono-tech text-xs bg-white dark:bg-black/30 px-1 py-0.5 rounded">prefers-reduced-motion: reduce</code> CSS rule configured for automated animation suppression.</li>
                <li>No legacy 263 KB <code className="font-mono-tech text-xs bg-white dark:bg-black/30 px-1 py-0.5 rounded">styles.css</code> imported into React runtime.</li>
              </ul>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
};

import { Project } from '../types';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'relocatia',
    slug: 'relocatia',
    title: 'Relocatia Platform',
    subtitle: 'Client Relocation & Document Workflow Management',
    category: 'web-app',
    date: '2026',
    stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    description: 'Full-stack relocation web app featuring client portals, document uploading, milestone progress tracking, and automated task management.',
    keyFeatures: [
      'Interactive client portal & dashboard',
      'Document submission & status tracking',
      'Responsive multi-step workflow interface',
      'Role-based access control'
    ],
    image: '/assets/img/portfolio/relocatia.png',
    liveDemoUrl: '/projects/relocatia',
    isSubProject: false,
  },
  {
    id: 'hsk',
    slug: 'hsk',
    title: 'Heritage Soul Kitchen',
    subtitle: 'Branded Culinary & Catering Web Experience',
    category: 'branding',
    date: '2025',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    description: 'Custom branded restaurant website featuring digital menus, catering request workflows, interactive photo galleries, and story-driven visual design.',
    keyFeatures: [
      'Digital menu showcasing signature offerings',
      'Online catering inquiry & booking workflow',
      'High-contrast, mobile-first responsive layout',
      'Optimized performance & image delivery'
    ],
    image: '/assets/img/portfolio/hsk.png',
    liveDemoUrl: '/hsk/index.html',
    isSubProject: true,
  },
  {
    id: 'taf',
    slug: 'taf',
    title: 'Tell-A-Friend Landscaping',
    subtitle: 'Business Web Development & Brand Identity',
    category: 'html-css-js',
    date: '2025',
    stack: ['HTML5', 'Bootstrap', 'JavaScript', 'Brand Identity'],
    description: 'Full business digital presence including service catalog, seasonal estimate request forms, customer reviews, and complete print/digital brand collateral.',
    keyFeatures: [
      'Service package comparison matrix',
      'Interactive quote request form',
      'Custom brand asset guidelines & vector graphics',
      'WCAG 2.2 AA accessibility features'
    ],
    image: '/assets/img/portfolio/taf.png',
    liveDemoUrl: '/taf/index.html',
    pdfUrl: '/assets/img/portfolio/taf_brand.pdf',
    isSubProject: true,
  },
  {
    id: 'ghcookwriter',
    slug: 'ghcookwriter',
    title: 'GHCOOKwriter Author Site',
    subtitle: 'Literary Showcase & Media Portfolio',
    category: 'html-css-js',
    date: '2024',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    description: 'Author & publishing portfolio presenting published works, media appearances, reader newsletter signups, and direct contact options.',
    keyFeatures: [
      'Book publication showcase with sample chapters',
      'Responsive media & interview gallery',
      'Newsletter subscription integration',
      'Custom typography & clean layout'
    ],
    image: '/assets/img/portfolio/ghcookwriter.png',
    liveDemoUrl: '/ghcookwriter/index.html',
    isSubProject: true,
  },
];

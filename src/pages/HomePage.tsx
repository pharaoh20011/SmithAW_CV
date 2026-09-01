import React, { useEffect } from 'react';
import { Hero } from '../sections/home/Hero';
import { Capabilities } from '../sections/home/Capabilities';
import { FeaturedProjects } from '../sections/home/FeaturedProjects';
import { AboutPreview } from '../sections/home/AboutPreview';
import { SkillsPreview } from '../sections/home/SkillsPreview';
import { CertificationsPreview } from '../sections/home/CertificationsPreview';
import { FinalCTA } from '../sections/home/FinalCTA';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Anthony W. Smith | Front-End Developer & UI/UX Designer';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Capabilities />
      <FeaturedProjects />
      <AboutPreview />
      <SkillsPreview />
      <CertificationsPreview />
      <FinalCTA />
    </div>
  );
};

export default HomePage;

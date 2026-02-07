import { Metadata } from 'next';
import * as React from 'react';

import HeroSection from '@/app/components/sections/HeroSection';
import PromisesSection from '@/app/components/sections/PromisesSection';
import ValuePropositionSection from '@/app/components/sections/ValuePropositionSection';
import GrowthSprintsSection from '@/app/components/sections/GrowthSprintSection';
import FinalCTABanner from '@/app/components/sections/FinalCTABanner';

export const metadata: Metadata = {
  description: 'Scale your business with data-driven Meta & Google Ads, AI-powered automation, and high-conversion software solutions. Get better results in 90 days.',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PromisesSection />
      <ValuePropositionSection />
      <GrowthSprintsSection />
      <FinalCTABanner />
    </main>
  );
}

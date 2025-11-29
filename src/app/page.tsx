'use client';

import * as React from 'react';
import '@/lib/env';

import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import RecentResults from './components/sections/RecentResultSection';
import PromisesSection from './components/sections/PromisesSection';
import ContactSection from './components/sections/ContactSection';
import ValuePropositionSection from '@/app/components/sections/ValuePropositionSection';
import { Group } from 'lucide-react';
import GrowthSprintsSection from '@/app/components/sections/GrowthSprintSection';
import FinalCTABanner from '@/app/components/sections/FinalCTABanner';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you

 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* <RecentResults/> */}
      <PromisesSection />

      <ValuePropositionSection />
      <GrowthSprintsSection />
      {/* <PricingSection /> */}
      <FinalCTABanner />
    </main>
  );
}

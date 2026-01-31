'use client';

import * as React from 'react';
import '@/lib/env';

import FinalCTABanner from '@/app/components/sections/FinalCTABanner';
import GrowthSprintsSection from '@/app/components/sections/GrowthSprintSection';
import ValuePropositionSection from '@/app/components/sections/ValuePropositionSection';

import HeroSection from './components/sections/HeroSection';
import PromisesSection from './components/sections/PromisesSection';

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

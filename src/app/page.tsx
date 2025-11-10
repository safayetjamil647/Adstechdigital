'use client';

import * as React from 'react';
import '@/lib/env';

import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';

// import PricingSection from './components/sections/PricingSection';
import ContactSection from './components/sections/ContactSection';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you

 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
          <HeroSection />
      <FeaturesSection />
      
      {/* <PricingSection /> */}
      <ContactSection />
    </main>
  );
}

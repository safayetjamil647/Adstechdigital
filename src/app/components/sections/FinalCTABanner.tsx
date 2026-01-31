import React from 'react';

export default function FinalCTABanner() {
  return (
    // Black background for high contrast, similar to the Hero Section
    <section className='border-t-8 border-yellow-400 bg-black px-6 py-20 text-center text-white md:px-20 md:py-32 lg:px-28'>
      <div className='mx-auto max-w-4xl'>
        {/* Main CTA Headline */}
        <h2 className='mb-6 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl'>
          Ready to Stop Guessing and Start Growing?
        </h2>

        {/* Supporting Text */}
        <p className='mx-auto mb-12 max-w-2xl text-lg text-gray-300 md:text-xl'>
          Take the first step toward predictable, profitable Google Ads results
          in the next 90 days. No long-term contracts, just growth.
        </p>

        {/* Final CTA Button (Reusing the signature style) */}
        <a
          href='#free-analysis'
          className='inline-block rounded-lg bg-yellow-400 px-12 py-5 text-xl font-bold tracking-wider text-gray-900 uppercase shadow-lg transition-colors duration-200 hover:bg-yellow-500'
          style={{
            boxShadow: '4px 4px 0px 0px rgba(255, 255, 255, 0.75)', // Changed shadow color for black background contrast
          }}
        >
          Get Your FREE Analysis
        </a>

        {/* Final Guarantee/Trust Element */}
        <p className='mt-6 text-sm text-gray-500'>
          100% Focused on Ads & Your ROI.
        </p>
      </div>
    </section>
  );
}

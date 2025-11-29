import React from 'react';

export default function FinalCTABanner() {
  return (
    // Black background for high contrast, similar to the Hero Section
    <section className='bg-black text-white py-20 md:py-32 px-6 md:px-20 lg:px-28 text-center border-t-8 border-yellow-400'>
      <div className='max-w-4xl mx-auto'>
        {/* Main CTA Headline */}
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6'>
          Ready to Stop Guessing and Start Growing?
        </h2>

        {/* Supporting Text */}
        <p className='text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto'>
          Take the first step toward predictable, profitable Google Ads results
          in the next 90 days. No long-term contracts, just growth.
        </p>

        {/* Final CTA Button (Reusing the signature style) */}
        <a
          href='#free-analysis'
          className='inline-block px-12 py-5 bg-yellow-400 text-gray-900 rounded-lg text-xl font-bold shadow-lg hover:bg-yellow-500 transition-colors duration-200 uppercase tracking-wider'
          style={{
            boxShadow: '4px 4px 0px 0px rgba(255, 255, 255, 0.75)', // Changed shadow color for black background contrast
          }}
        >
          Get Your FREE Analysis
        </a>

        {/* Final Guarantee/Trust Element */}
        <p className='text-sm text-gray-500 mt-6'>
          100% Focused on Google Ads & Your ROI.
        </p>
      </div>
    </section>
  );
}

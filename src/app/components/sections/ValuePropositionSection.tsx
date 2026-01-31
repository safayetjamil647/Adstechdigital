import React from 'react';

// Reusable component for the content block in the 3-column layout
interface ColumnBlockProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ColumnBlock: React.FC<ColumnBlockProps> = ({
  title,
  children,
  className = '',
}) => (
  <div className={`mb-10 md:mb-0 ${className}`}>
    <h3 className='mb-4 text-2xl leading-snug font-bold text-gray-900'>
      {title}
    </h3>
    <div className='space-y-4 text-gray-700'>{children}</div>
  </div>
);

export default function ValuePropositionSection() {
  return (
    // Light blue/off-white background to match the image
    <section className='bg-blue-50 px-6 py-20 md:px-20 md:py-28 lg:px-28'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-3'>
        {/* Column 1: Question and Primary CTA */}
        <div className='lg:col-span-1'>
          <h2 className='mb-6 text-3xl leading-tight font-extrabold text-gray-900 sm:text-4xl'>
            Could your Ads campaigns drive more profit into your business?
          </h2>
          <p className='mb-6 text-base text-gray-700'>
            Ads Tech Digital uses 90-Day Growth Sprints to profitably accelerate
            your business and turn your account into a profit-generating
            machine. Our proven system and hands-on approach deliver results
            most companies can only dream of.
          </p>

          <div className='mb-8 flex items-center space-x-3'>
            <p className='text-base font-semibold text-blue-600'>
              Here's how it works:
            </p>
            {/* Animated Arrow */}
            <svg
              className='h-6 w-6 text-blue-600 transition-transform duration-500 ease-out'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>

          {/* Primary CTA Button */}
          <a
            href='#free-analysis'
            className='inline-block rounded-lg bg-yellow-400 px-8 py-4 font-bold text-gray-900 shadow-lg transition-colors duration-200 hover:bg-yellow-500'
            style={{
              boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.75)', // Hard shadow effect from image
            }}
          >
            Get Your FREE Analysis
          </a>
        </div>

        {/* Column 2: Solution-Driven Approach */}
        <div className='border-t-2 border-gray-300 pt-8 lg:col-span-1 lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-8'>
          <ColumnBlock title='Solution-Driven Google Ad Results:'>
            <p>
              Increase conversions and ROI with our 90-Day Growth Sprints
              designed to reassess your Google Ad strategy every 90 days.
            </p>
          </ColumnBlock>

          <ColumnBlock title='Change What You Get to How You Benefit:'>
            <p>
              Ads Tech Digital continually tests, expands, and improves your
              Google Ads performance and ROI in 90-Day Growth Sprints that
              deliver the best results.
            </p>
          </ColumnBlock>

          <ColumnBlock title='Get Started Today:'>
            <p>
              Ready for a detailed analysis of your Google Ads account to
              pinpoint where you can get better results?
            </p>
          </ColumnBlock>
        </div>

        {/* Column 3: Proven Track Record */}
        <div className='border-t-2 border-gray-300 pt-8 lg:col-span-1 lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-8'>
          <ColumnBlock title='Proven Track Record:'>
            <p>
              Using our proven framework, Google My Ads helps businesses
              increase lead generation and revenue growth by 3-10X.
            </p>
          </ColumnBlock>

          <ColumnBlock title='Dominate the Market'>
            <p>
              Maximize the potential of Google search, Google shopping, and
              display ads in 90 days or less.
            </p>
          </ColumnBlock>
        </div>
      </div>
    </section>
  );
}

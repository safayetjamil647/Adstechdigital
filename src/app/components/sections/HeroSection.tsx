import Image from 'next/image';
import {
  SiMeta,
  SiGoogleads,
  SiLinkedin,
  SiShopify,
  SiInstagram,
} from 'react-icons/si';

export default function HeroSection() {
  return (
    <section className='relative flex min-h-screen flex-col justify-between overflow-hidden bg-black text-white'>
      {/* Background stars (simple solution for effect) */}
      <div className='absolute inset-0 z-0 opacity-70'>
        {/* You might want a more sophisticated star background or a subtle SVG pattern */}
        <div className='absolute top-10 left-1/4 h-0.5 w-0.5 animate-pulse rounded-full bg-white'></div>
        <div className='absolute top-1/2 right-1/3 h-0.5 w-0.5 animate-pulse rounded-full bg-white delay-200'></div>
        <div className='absolute bottom-1/4 left-1/3 h-1 w-1 animate-pulse rounded-full bg-white delay-400'></div>
        <div className='absolute top-1/3 left-1/2 h-0.5 w-0.5 animate-pulse rounded-full bg-white delay-600'></div>
        <div className='absolute right-1/4 bottom-1/2 h-1 w-1 animate-pulse rounded-full bg-white delay-800'></div>
        {/* More stars for better effect */}
        <div className='absolute top-[20%] left-[10%] h-[1px] w-[1px] animate-pulse rounded-full bg-white'></div>
        <div className='rounded-pulse absolute top-[35%] right-[20%] h-[1px] w-[1px] bg-white delay-100'></div>
        <div className='absolute bottom-[25%] left-[5%] h-[1.5px] w-[1.5px] animate-pulse rounded-full bg-white delay-300'></div>
        <div className='absolute top-[5%] right-[5%] h-[0.5px] w-[0.5px] animate-pulse rounded-full bg-white delay-500'></div>
        <div className='absolute top-[60%] left-[40%] h-[1px] w-[1px] animate-pulse rounded-full bg-white delay-700'></div>
        <div className='absolute top-[80%] right-[30%] h-[0.5px] w-[0.5px] animate-pulse rounded-full bg-white delay-900'></div>
        <div className='absolute top-[10%] left-[60%] h-[1px] w-[1px] animate-pulse rounded-full bg-white delay-200'></div>
        <div className='absolute right-[10%] bottom-[10%] h-[1.5px] w-[1.5px] animate-pulse rounded-full bg-white delay-400'></div>
      </div>

      <div className='relative z-10 flex flex-grow flex-col items-center justify-center px-6 pt-20 pb-12 md:flex-row md:px-20 lg:px-28 xl:px-36'>
        {/* Left Column: Text Content */}
        <div className='mb-12 pr-0 text-center md:mb-0 md:w-1/2 md:pr-12 md:text-left lg:pr-24'>
          <h1 className='mb-6 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl'>
            Finally...the{' '}
            <span className='relative inline-block'>
              Ads
              <span className='absolute bottom-0 left-0 h-1 w-full bg-yellow-400'></span>
            </span>{' '}
            agency you&apos;ve been searching for.
          </h1>
          <p className='mx-auto max-w-xl text-base text-gray-300 md:mx-0 md:text-lg'>
            Get better results from your Ads account in 90 days with a team of
            PPC specialists 100% focused on making you more money using our
            proven 90-Day Growth Sprints.
          </p>
        </div>

        {/* Right Column: Illustration */}
        <div className='relative flex justify-center md:w-1/2 md:justify-end'>
          {/* Moon surface */}
          <div
            className='absolute bottom-0 left-1/2 z-0 h-[150px] w-full max-w-md -translate-x-1/2 rounded-t-full bg-gray-800 opacity-80 md:h-[200px] md:w-[600px] md:max-w-none'
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%), url("/img/moon-surface.png")', // Placeholder if you have a moon texture
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              boxShadow: '0 -10px 30px rgba(0,0,0,0.5)',
            }}
          >
            {/* Moon craters placeholder (can be improved with SVGs or more divs) */}
            <div className='absolute top-1/3 left-1/4 h-10 w-10 rounded-full bg-gray-700 opacity-60'></div>
            <div className='absolute top-1/2 right-1/4 h-16 w-16 rounded-full bg-gray-700 opacity-50'></div>
            <div className='absolute top-2/3 left-1/2 h-8 w-8 rounded-full bg-gray-700 opacity-70'></div>
          </div>
          {/* Planets (adjust positions and sizes) */}
          <div className='absolute top-1/4 left-0 h-16 w-16 rounded-full bg-gray-700 opacity-40 blur-sm'></div>
          <div className='absolute right-1/4 bottom-1/3 h-24 w-24 rounded-full bg-gray-700 opacity-30 blur-sm'></div>

          {/* Astronaut Image - Ensure you have this SVG/PNG in your public folder */}
          <Image
            src='/svg/hero.svg' // Placeholder for your astronaut image
            alt='Ads Tech Digital Agency Astronaut Hero Illustration'
            width={600} // Adjust based on your SVG dimensions and desired size
            height={600} // Adjust based on your SVG dimensions and desired size
            priority // Load this image early as it's part of the hero
            className='relative z-10 h-auto w-full max-w-md md:max-w-lg lg:max-w-xl'
          />
        </div>
      </div>

      {/* Trusted By Section */}
      <div className='relative z-10 mb-8 w-full px-6 md:px-20'>
        <div className='flex flex-col items-center gap-6'>
          <p className='text-xs font-bold tracking-[0.3em] text-gray-500 uppercase'>
            Our Supported Platforms
          </p>
          <div className='flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale transition-all duration-700 hover:grayscale-0 md:gap-16'>
            <div className='group flex items-center gap-2'>
              <SiMeta className='h-8 w-8 text-white transition-colors group-hover:text-[#0668E1] md:h-10 md:w-10' />
              <span className='hidden text-lg font-bold sm:block md:text-xl'>
                Meta
              </span>
            </div>
            <div className='group flex items-center gap-2'>
              <SiGoogleads className='h-8 w-8 text-white transition-colors group-hover:text-[#4285F4] md:h-10 md:w-10' />
              <span className='hidden text-lg font-bold sm:block md:text-xl'>
                Google Ads
              </span>
            </div>
            <div className='group flex items-center gap-2'>
              <SiInstagram className='h-8 w-8 text-white transition-colors group-hover:text-[#E4405F] md:h-10 md:w-10' />
              <span className='hidden text-lg font-bold sm:block md:text-xl'>
                Instagram
              </span>
            </div>
            <div className='group flex items-center gap-2'>
              <SiShopify className='h-8 w-8 text-white transition-colors group-hover:text-[#96BF48] md:h-10 md:w-10' />
              <span className='hidden text-lg font-bold sm:block md:text-xl'>
                Shopify
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Footer CTA */}
      <div className='relative z-10 flex w-full flex-col items-center justify-center space-y-4 bg-yellow-400 px-6 py-8 text-black md:flex-row md:space-y-0 md:space-x-8 md:px-20 md:py-10 lg:space-x-12'>
        <p className='text-center text-lg font-semibold md:text-left md:text-xl'>
          Get started with a{' '}
          <span className='underline'>FREE 30-Minute Account Analysis!</span>
        </p>
        {/* Arrow (can be an SVG if needed) */}
        <span className='hidden rotate-90 text-2xl md:block md:rotate-0'>
          →
        </span>{' '}
        {/* Arrow for desktop */}
        <a
          href='https://calendly.com/adstechdigitalinfo/30min'
          className='flex items-center justify-center rounded-lg bg-black px-8 py-4 text-base font-bold text-white shadow-lg transition-colors duration-300 hover:bg-gray-800 md:text-lg'
        >
          Schedule Your FREE Analysis
          <svg
            className='ml-2 hidden h-5 w-5 md:block'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

import Image from 'next/image'; // Re-import Image for the illustration

export default function HeroSection() {
  return (
    <section className='relative bg-black text-white min-h-screen flex flex-col justify-between overflow-hidden'>
      {/* Background stars (simple solution for effect) */}
      <div className='absolute inset-0 z-0 opacity-70'>
        {/* You might want a more sophisticated star background or a subtle SVG pattern */}
        <div className='absolute top-10 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-pulse'></div>
        <div className='absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-200'></div>
        <div className='absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-400'></div>
        <div className='absolute top-1/3 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-600'></div>
        <div className='absolute bottom-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-800'></div>
        {/* More stars for better effect */}
        <div className='absolute top-[20%] left-[10%] w-[1px] h-[1px] bg-white rounded-full animate-pulse'></div>
        <div className='absolute top-[35%] right-[20%] w-[1px] h-[1px] bg-white rounded-pulse delay-100'></div>
        <div className='absolute bottom-[25%] left-[5%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse delay-300'></div>
        <div className='absolute top-[5%] right-[5%] w-[0.5px] h-[0.5px] bg-white rounded-full animate-pulse delay-500'></div>
        <div className='absolute top-[60%] left-[40%] w-[1px] h-[1px] bg-white rounded-full animate-pulse delay-700'></div>
        <div className='absolute top-[80%] right-[30%] w-[0.5px] h-[0.5px] bg-white rounded-full animate-pulse delay-900'></div>
        <div className='absolute top-[10%] left-[60%] w-[1px] h-[1px] bg-white rounded-full animate-pulse delay-200'></div>
        <div className='absolute bottom-[10%] right-[10%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse delay-400'></div>
      </div>

      <div className='relative z-10 flex flex-col md:flex-row items-center justify-center pt-20 pb-12 px-6 md:px-20 lg:px-28 xl:px-36 flex-grow'>
        {/* Left Column: Text Content */}
        <div className='md:w-1/2 text-center md:text-left mb-12 md:mb-0 pr-0 md:pr-12 lg:pr-24'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
            Finally...the{' '}
            <span className='relative inline-block'>
              Google Ads
              <span className='absolute bottom-0 left-0 w-full h-1 bg-yellow-400'></span>
            </span>{' '}
            agency you&apos;ve been searching for.
          </h1>
          <p className='text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0'>
            Get better results from your Google Ads account in 90 days with a
            team of PPC specialists 100% focused on making you more money using
            our proven 90-Day Growth Sprints.
          </p>
        </div>

        {/* Right Column: Illustration */}
        <div className='md:w-1/2 flex justify-center md:justify-end relative'>
          {/* Moon surface */}
          <div
            className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md md:max-w-none md:w-[600px] h-[150px] md:h-[200px] bg-gray-800 rounded-t-full z-0 opacity-80'
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%), url("/img/moon-surface.png")', // Placeholder if you have a moon texture
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              boxShadow: '0 -10px 30px rgba(0,0,0,0.5)',
            }}
          >
            {/* Moon craters placeholder (can be improved with SVGs or more divs) */}
            <div className='absolute top-1/3 left-1/4 w-10 h-10 bg-gray-700 rounded-full opacity-60'></div>
            <div className='absolute top-1/2 right-1/4 w-16 h-16 bg-gray-700 rounded-full opacity-50'></div>
            <div className='absolute top-2/3 left-1/2 w-8 h-8 bg-gray-700 rounded-full opacity-70'></div>
          </div>
          {/* Planets (adjust positions and sizes) */}
          <div className='absolute top-1/4 left-0 w-16 h-16 bg-gray-700 rounded-full opacity-40 blur-sm'></div>
          <div className='absolute bottom-1/3 right-1/4 w-24 h-24 bg-gray-700 rounded-full opacity-30 blur-sm'></div>

          {/* Astronaut Image - Ensure you have this SVG/PNG in your public folder */}
          <Image
            src='/svg/hero.svg' // Placeholder for your astronaut image
            alt='Astronaut playing guitar in space'
            width={600} // Adjust based on your SVG dimensions and desired size
            height={600} // Adjust based on your SVG dimensions and desired size
            priority // Load this image early as it's part of the hero
            className='relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl h-auto'
          />
        </div>
      </div>

      {/* Yellow Footer CTA */}
      <div className='bg-yellow-400 w-full py-8 md:py-10 text-black flex flex-col md:flex-row items-center justify-center px-6 md:px-20 space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12 relative z-10'>
        <p className='text-lg md:text-xl font-semibold text-center md:text-left'>
          Get started with a{' '}
          <span className='underline'>FREE 30-Minute Account Analysis!</span>
        </p>
        {/* Arrow (can be an SVG if needed) */}
        <span className='hidden md:block text-2xl rotate-90 md:rotate-0'>
          →
        </span>{' '}
        {/* Arrow for desktop */}
        <a
          href='#schedule-analysis'
          className='bg-black text-white px-8 py-4 rounded-lg font-bold text-base md:text-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center'
        >
          Schedule Your FREE Analysis
          <svg
            className='ml-2 w-5 h-5 hidden md:block'
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

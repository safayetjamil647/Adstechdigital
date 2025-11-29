import React from 'react';

// --- TypeScript Interfaces ---
interface StarRatingProps {
  rating: string;
  reviews: number;
}

interface PromiseFeatureProps {
  Icon: React.FC; // Icon should be a component function
  title: string;
  description: string;
}
// -----------------------------

// Custom Star Rating Component
const StarRating: React.FC<StarRatingProps> = ({ rating, reviews }) => {
  const fullStars = 5;
  const stars = Array(fullStars)
    .fill(null)
    .map((_, index) => (
      <svg
        key={index}
        className='w-5 h-5 fill-current text-yellow-400'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        {/* Full Star Path */}
        <path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.554 8.243L12 18.007l-7.485 3.371 1.554-8.243-6.064-5.828 8.332-1.151L12 .587z' />
      </svg>
    ));

  return (
    <div className='flex flex-col items-center mb-16'>
      <div className='flex space-x-0.5 mb-2'>{stars}</div>
      <p className='text-gray-700 text-sm font-medium'>
        GrowMyAds has a {rating}/{fullStars} average rating from {reviews}{' '}
        reviews on Clutch.co
      </p>
    </div>
  );
};

// Custom Icon Components (Simplified SVG representation)

// 1. Strategy Assessment Icon (Diamond/Sparkle)
const StrategyIcon = () => (
  <svg
    className='w-16 h-16 mx-auto text-yellow-500'
    viewBox='0 0 100 100'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='50'
      cy='50'
      r='45'
      stroke='#F59E0B'
      strokeWidth='2'
      opacity='0.1'
    />
    <path
      d='M50 10 L55 35 L75 40 L50 65 L25 40 L45 35 Z'
      fill='#FCD34D'
      stroke='#F59E0B'
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <rect
      x='55'
      y='10'
      width='5'
      height='5'
      rx='1'
      fill='#FCD34D'
      className='animate-pulse'
    />
    <rect
      x='15'
      y='45'
      width='5'
      height='5'
      rx='1'
      fill='#FCD34D'
      className='animate-pulse delay-200'
    />
    <rect
      x='70'
      y='65'
      width='5'
      height='5'
      rx='1'
      fill='#FCD34D'
      className='animate-pulse delay-400'
    />
  </svg>
);

// 2. Dedicated Account Manager Icon (Badge/Shield)
const ManagerIcon = () => (
  <svg
    className='w-16 h-16 mx-auto text-yellow-500'
    viewBox='0 0 100 100'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M25 15 L75 15 L90 50 L75 85 L25 85 L10 50 Z'
      fill='#FEF3C7'
      stroke='#F59E0B'
      strokeWidth='2'
    />
    <circle
      cx='50'
      cy='45'
      r='20'
      fill='#FCD34D'
      stroke='#F59E0B'
      strokeWidth='2'
    />
    <path
      d='M50 35 V55 M40 45 H60'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      opacity='0.6'
    />{' '}
    {/* Plus sign or outline */}
    <rect
      x='80'
      y='45'
      width='8'
      height='8'
      rx='2'
      fill='#FCD34D'
      className='transform rotate-45'
    />
  </svg>
);

// 3. Exclusive Focus Icon (Location Pin)
const FocusIcon = () => (
  <svg
    className='w-16 h-16 mx-auto text-yellow-500'
    viewBox='0 0 100 100'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M50 10 C65 10 80 25 80 40 C80 65 50 90 50 90 C50 90 20 65 20 40 C20 25 35 10 50 10 Z'
      fill='#FEF3C7'
      stroke='#F59E0B'
      strokeWidth='2'
    />
    <circle
      cx='50'
      cy='40'
      r='15'
      fill='#FCD34D'
      stroke='#F59E0B'
      strokeWidth='2'
    />
    <text
      x='50'
      y='45'
      fontSize='14'
      fill='black'
      textAnchor='middle'
      fontWeight='bold'
    >
      G
    </text>{' '}
    {/* "G" for Google */}
  </svg>
);

// Individual Promise Feature Component
const PromiseFeature: React.FC<PromiseFeatureProps> = ({
  Icon,
  title,
  description,
}) => (
  <div className='flex flex-col items-center p-4 text-center max-w-xs mx-auto'>
    <div className='mb-4'>
      <Icon />
    </div>
    <h3 className='text-lg font-bold text-gray-900 mb-2'>{title}</h3>
    <p className='text-sm text-gray-600 font-normal'>{description}</p>
  </div>
);

export default function PromisesSection() {
  return (
    <section className='py-24 md:py-32 bg-white flex flex-col items-center px-6 md:px-20'>
      {/* Social Proof (Star Rating) */}
      <StarRating rating='5' reviews={85} />

      {/* Headline */}
      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12 max-w-4xl leading-tight text-center'>
        Gone are the days of signing a{' '}
        <span className='relative inline-block'>
          long contract
          <span className='absolute bottom-0 left-0 w-full h-1 bg-yellow-400'></span>
        </span>{' '}
        with a Google Ads agency or freelancer and hoping they’ll deliver
        results.
      </h2>

      {/* Promises Introduction */}
      <div className='flex flex-col items-center mb-12'>
        <p className='text-xl font-bold text-gray-900 mb-1'>
          Grow My Ads promises:
        </p>
        <div className='w-24 h-1 bg-teal-400 rounded-full'></div>
      </div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16 w-full max-w-6xl'>
        <PromiseFeature
          Icon={StrategyIcon}
          title='A Strategy Assessment Every 90 Days'
          description='' // Description is empty in the image, so keeping it blank
        />

        <PromiseFeature
          Icon={ManagerIcon}
          title='A Dedicated Account Manager'
          description=''
        />

        <PromiseFeature
          Icon={FocusIcon}
          title='Exclusive Google Ads-Only Focus'
          description=''
        />
      </div>
    </section>
  );
}

import React from 'react';

// Define the content for the 90-Day Sprints
const sprintItems = [
  'Kickoff assessment',
  'Updated Strategy',
  'Initial cleanup',
  'Account Restructuring',
  'PPC campaign expansion',
  'Ongoing optimization',
  'Monthly reporting',
  'A roadmap review & update every 90 days.',
];

// Reusable component for the checkmark list item
interface CheckListItemProps {
  children: React.ReactNode;
}

const CheckListItem: React.FC<CheckListItemProps> = ({ children }) => (
  <div className='flex items-start space-x-3 text-lg text-gray-800 font-medium'>
    <svg
      className='flex-shrink-0 w-6 h-6 text-black mt-0.5'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2.5' // Thicker line for bold checkmark look
        d='M5 13l4 4L19 7'
      />
    </svg>
    <span>{children}</span>
  </div>
);

export default function GrowthSprintsSection() {
  // Split the items into two columns
  const midIndex = Math.ceil(sprintItems.length / 2);
  const leftColumn = sprintItems.slice(0, midIndex);
  const rightColumn = sprintItems.slice(midIndex);

  return (
    // Light gray/yellowish background (bg-gray-50 or bg-amber-50 for subtle tint)
    <section className='bg-gray-50 py-20 md:py-28 px-6 md:px-20 lg:px-28 text-center'>
      <div className='max-w-4xl mx-auto'>
        {/* Headline */}
        <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12'>
          Our 90-Day Growth Sprints typically include:
        </h2>

        {/* Checkmark List Container (Two Columns) */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-16 text-left max-w-2xl mx-auto'>
          {/* Left Column */}
          <div className='space-y-6'>
            {leftColumn.map((item, index) => (
              <CheckListItem key={index}>{item}</CheckListItem>
            ))}
          </div>

          {/* Right Column */}
          <div className='space-y-6'>
            {rightColumn.map((item, index) => (
              <CheckListItem key={index + midIndex}>{item}</CheckListItem>
            ))}
          </div>
        </div>

        {/* Bottom Line / Conclusion */}
        <p className='text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto font-medium'>
          The bottom line? We're committed to helping you understand exactly how
          much money you're making for every dollar you invest in ad spend...and
          we love seeing your reaction as that number grows again and again!
        </p>

        {/* CTA Button */}
        <a
          href='#free-analysis'
          className='inline-block px-10 py-5 bg-yellow-400 text-gray-900 rounded-lg text-xl font-bold hover:bg-yellow-500 transition-colors duration-200'
          style={{
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.75)', // Hard shadow effect from image
          }}
        >
          Get Your FREE Analysis
        </a>
      </div>
    </section>
  );
}

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
  <div className='flex items-start space-x-3 text-lg font-medium text-gray-800'>
    <svg
      className='mt-0.5 h-6 w-6 flex-shrink-0 text-black'
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
    <section className='bg-gray-50 px-6 py-20 text-center md:px-20 md:py-28 lg:px-28'>
      <div className='mx-auto max-w-4xl'>
        {/* Headline */}
        <h2 className='mb-12 text-3xl font-extrabold text-gray-900 sm:text-4xl'>
          Our 90-Day Growth Sprints typically include:
        </h2>

        {/* Checkmark List Container (Two Columns) */}
        <div className='mx-auto mb-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-6 text-left sm:grid-cols-2'>
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
        <p className='mx-auto mb-10 max-w-3xl text-lg font-medium text-gray-700 md:text-xl'>
          The bottom line? We're committed to helping you understand exactly how
          much money you're making for every dollar you invest in ad spend...and
          we love seeing your reaction as that number grows again and again!
        </p>

        {/* CTA Button */}
        <a
          href='#free-analysis'
          className='inline-block rounded-lg bg-yellow-400 px-10 py-5 text-xl font-bold text-gray-900 transition-colors duration-200 hover:bg-yellow-500'
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

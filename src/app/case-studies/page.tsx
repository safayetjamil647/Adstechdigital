'use client';

import * as React from 'react';
import { TrendingUp, Users, Target, BarChart3, ArrowRight } from 'lucide-react';
import { SiMeta, SiGoogleads, SiLinkedin } from 'react-icons/si';

const caseStudies = [
  {
    client: 'Supplement Brands',
    category: 'E-commerce',
    title: 'How we achieved 5.2x ROAS for a shopify supplement brand ',
    logo: <SiMeta className='h-8 w-8 text-[#0668E1]' />,
    metrics: [
      {
        label: 'Total Sales',
        value: '$120k+',
        icon: <TrendingUp className='h-5 w-5' />,
      },
      { label: 'ROAS', value: '5.2x', icon: <BarChart3 className='h-5 w-5' /> },
      { label: 'CTR', value: '3.8%', icon: <Target className='h-5 w-5' /> },
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description:
      'We implemented a full-funnel Meta Ads strategy combined with dynamic remarketing to scale supplement brands sales while reducing CAC by 40%.',
  },
  {
    client: 'SaaSFlow Analytics',
    category: 'B2B SaaS',
    title: 'Driving 300% growth in qualified leads via Google Ads',
    logo: <SiGoogleads className='h-8 w-8 text-[#4285F4]' />,
    metrics: [
      {
        label: 'Leads Gen',
        value: '3,200',
        icon: <Users className='h-5 w-5' />,
      },
      { label: 'CPL', value: '$12.50', icon: <Target className='h-5 w-5' /> },
      {
        label: 'MQL to SQL',
        value: '25%',
        icon: <TrendingUp className='h-5 w-5' />,
      },
    ],
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    description:
      'By refining audience targeting and implementing highly personalized ad creative, we transformed SaaSFlow lead generation pipeline.',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className='dark:bg-dark min-h-screen bg-white'>
      <header className='dark:bg-dark-light relative overflow-hidden bg-gray-50 py-24'>
        <div className='pointer-events-none absolute top-0 left-1/2 h-full w-[1000px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,_var(--color-primary-100)_0%,_transparent_70%)] opacity-30 blur-3xl'></div>
        <div className='layout relative z-10 text-center'>
          <span className='bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6 inline-block rounded-full px-4 py-1 text-sm font-semibold'>
            Data-Driven Results
          </span>
          <h1 className='h0 mb-6'>Ads Case Studies</h1>
          <p className='p mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400'>
            Real results for real businesses. We don't just run ads; we engineer
            growth through meticulous testing and optimization.
          </p>
        </div>
      </header>

      <section className='py-20'>
        <div className='layout space-y-24'>
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className='group w-full overflow-hidden rounded-3xl shadow-2xl lg:w-1/2'>
                <img
                  src={study.image}
                  alt={study.title}
                  className='h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </div>

              <div className='w-full lg:w-1/2'>
                <div className='mb-6 flex items-center gap-4'>
                  {study.logo}
                  <span className='text-primary-600 text-sm font-bold tracking-wider uppercase'>
                    {study.client} • {study.category}
                  </span>
                </div>
                <h2 className='h2 hover:text-primary-600 mb-6 cursor-pointer leading-tight transition-colors'>
                  {study.title}
                </h2>
                <p className='mb-10 text-lg text-gray-600 dark:text-gray-400'>
                  {study.description}
                </p>

                <div className='mb-10 grid grid-cols-3 gap-4'>
                  {study.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className='rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800'
                    >
                      <div className='text-primary-600 mb-2'>{metric.icon}</div>
                      <div className='text-xl font-bold text-gray-900 dark:text-white'>
                        {metric.value}
                      </div>
                      <div className='text-xs font-medium text-gray-500 uppercase dark:text-gray-400'>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button className='group border-primary-600 hover:text-primary-600 flex items-center gap-2 border-b-2 pb-1 font-bold text-gray-900 transition-colors dark:text-white'>
                  Read Full Story{' '}
                  <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='dark:bg-dark-light bg-gray-50 py-20'>
        <div className='layout text-center'>
          <h2 className='h2 mb-10'>Ready to be our next success story?</h2>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <button className='bg-primary-600 hover:bg-primary-700 shadow-primary-600/20 rounded-full px-8 py-4 font-bold text-white shadow-lg transition-all'>
              Book a Strategy Call
            </button>
            <button className='dark:bg-dark rounded-full border border-gray-200 bg-white px-8 py-4 font-bold text-gray-900 transition-all hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800'>
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

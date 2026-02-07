'use client';

import { ChartBar, Code, Gauge, Megaphone } from 'lucide-react';
import * as React from 'react';

const services = [
  {
    title: 'Precision Paid Ads',
    description:
      'Data-driven Meta, Google, and LinkedIn ad management focused on high ROAS and scalable growth.',
    icon: <Megaphone className='h-10 w-10' />,
    features: [
      'Audience Analysis',
      'Creative Strategy',
      'A/B Testing',
      'Daily Optimization',
    ],
  },
  {
    title: 'Custom SaaS Development',
    description:
      'We build internal tools, dashboards, and automated systems to streamline your operations.',
    icon: <Code className='h-10 w-10' />,
    features: [
      'Fullstack Web Apps',
      'API Integration',
      'Process Automation',
      'Cloud Hosting',
    ],
  },
  {
    title: 'Conversion Optimization',
    description:
      'Turning your traffic into revenue through psychological layout design and frictionless UX.',
    icon: <ChartBar className='h-10 w-10' />,
    features: [
      'LPs & Funnels',
      'Heatmap Analysis',
      'Copywriting',
      'Checkout Flow Audit',
    ],
  },
  {
    title: 'Web Analytics Setup',
    description:
      'Advanced tracking and attribution setup using GTM, GA4, and server-side pixel implementation.',
    icon: <Gauge className='h-10 w-10' />,
    features: [
      'GTM & GA4 Setup',
      'Server-side Tracking',
      'Conversion API',
      'Custom Reporting',
    ],
  },
];

export default function ServicesView() {
  return (
    <div className='dark:bg-dark min-h-screen bg-white'>
      {/* Header */}
      <header className='dark:bg-dark-light bg-gray-50 py-24'>
        <div className='layout text-center'>
          <h1 className='h0 mb-6 dark:text-white'>Our Services</h1>
          <p className='p mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400'>
            We provide a holistic approach to digital growth, combining
            high-performance marketing with state-of-the-art software
            development.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className='py-20'>
        <div className='layout'>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
            {services.map((service, index) => (
              <div
                key={index}
                className='group hover:border-primary-500 rounded-3xl border border-gray-100 p-10 shadow-sm transition-all duration-300 hover:shadow-2xl dark:border-gray-800'
              >
                <div className='bg-primary-100 dark:bg-primary-900/20 text-primary-600 mb-8 flex h-20 w-20 items-center justify-center rounded-2xl transition-transform group-hover:scale-110'>
                  {service.icon}
                </div>
                <h3 className='h2 mb-4 dark:text-white'>{service.title}</h3>
                <p className='mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400'>
                  {service.description}
                </p>
                <ul className='grid grid-cols-2 gap-4'>
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className='flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300'
                    >
                      <div className='bg-primary-600 h-1.5 w-1.5 rounded-full'></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className='bg-dark py-20 text-white'>
        <div className='layout'>
          <div className='flex flex-col items-center gap-20 lg:flex-row'>
            <div className='w-full lg:w-1/2'>
              <h2 className='h1 mb-8'>The Engineering Approach</h2>
              <p className='mb-8 text-lg text-gray-400'>
                Unlike traditional agencies that guess, we use an iterative
                engineering methodology to scale your business.
              </p>
              <div className='space-y-6'>
                <div className='flex gap-4'>
                  <div className='border-primary-600 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-bold'>
                    1
                  </div>
                  <div>
                    <h4 className='mb-2 text-xl font-bold'>Audit & Analysis</h4>
                    <p className='text-gray-500'>
                      We analyze your current data to find hidden bottlenecks
                      and easy wins.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='border-primary-600 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-bold'>
                    2
                  </div>
                  <div>
                    <h4 className='mb-2 text-xl font-bold'>
                      Architect Solutions
                    </h4>
                    <p className='text-gray-500'>
                      We design custom marketing and software systems tailored
                      to your goals.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='border-primary-600 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-bold'>
                    3
                  </div>
                  <div>
                    <h4 className='mb-2 text-xl font-bold'>Optimize & Scale</h4>
                    <p className='text-gray-500'>
                      We continuously test, refine, and reinvest for exponential
                      results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full rounded-3xl border border-white/10 bg-gray-900 p-8 lg:w-1/2'>
              <div className='mb-8 flex items-center justify-between'>
                <span className='text-primary-500 text-xl font-bold tracking-widest uppercase'>
                  Efficiency Audit
                </span>
                <Gauge className='text-primary-500 h-6 w-6' />
              </div>
              <div className='space-y-8'>
                <div>
                  <div className='mb-2 flex justify-between'>
                    <span className='text-sm'>Paid Ad ROAS Gain</span>
                    <span className='text-primary-500'>+125%</span>
                  </div>
                  <div className='h-2 w-full overflow-hidden rounded-full bg-gray-800'>
                    <div className='bg-primary-600 h-full w-[85%]'></div>
                  </div>
                </div>
                <div>
                  <div className='mb-2 flex justify-between'>
                    <span className='text-sm'>App Load Time Reduction</span>
                    <span className='text-primary-500'>-70%</span>
                  </div>
                  <div className='h-2 w-full overflow-hidden rounded-full bg-gray-800'>
                    <div className='bg-primary-600 h-full w-[70%]'></div>
                  </div>
                </div>
                <div>
                  <div className='mb-2 flex justify-between'>
                    <span className='text-sm'>Cost Per Acquisition Imp.</span>
                    <span className='text-primary-500'>+45%</span>
                  </div>
                  <div className='h-2 w-full overflow-hidden rounded-full bg-gray-800'>
                    <div className='bg-primary-600 h-full w-[60%]'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import * as React from 'react';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

const values = [
  {
    title: 'Data-Driven',
    description:
      'We let numbers lead the way. Every decision we make is backed by rigorous data analysis and testing.',
    icon: <Target className='text-primary-600 h-8 w-8' />,
  },
  {
    title: 'Client-Obsessed',
    description:
      "Your growth is our growth. We don't settle for results; we strive for excellence that moves the needle.",
    icon: <Heart className='text-primary-600 h-8 w-8' />,
  },
  {
    title: 'Transparency',
    description:
      'No black boxes. You get full visibility into your campaigns, performance, and where every dollar is spent.',
    icon: <Eye className='text-primary-600 h-8 w-8' />,
  },
  {
    title: 'Integrity',
    description:
      'We build long-term relationships based on honesty and ethical marketing practices.',
    icon: <ShieldCheck className='text-primary-600 h-8 w-8' />,
  },
];

export default function AboutPage() {
  return (
    <div className='dark:bg-dark min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='dark:bg-dark-light bg-gray-50 py-24'>
        <div className='layout'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='h0 mb-8 leading-tight'>
              We Engineer Growth for Modern Brands
            </h1>
            <p className='p text-xl leading-relaxed text-gray-600 dark:text-gray-400'>
              Ads Tech Digital started with a simple observation: most agencies
              focus on "vanity metrics" while ignoring actual business
              bottom-lines. We're here to change that.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 lg:py-32'>
        <div className='layout'>
          <div className='flex flex-col items-center gap-16 lg:flex-row'>
            <div className='w-full lg:w-1/2'>
              <h2 className='h1 mb-8'>Our Story</h2>
              <div className='space-y-6 text-lg text-gray-600 dark:text-gray-400'>
                <p>
                  Founded by a team of marketing engineers and creative
                  strategists, Ads Tech Digital was built on the intersection of
                  technology and human psychology.
                </p>
                <p>
                  We recognized that in an increasingly crowded digital
                  landscape, generic ad strategies no longer work. Brands need
                  surgical precision, automated efficiency, and deeply creative
                  storytelling to truly stand out.
                </p>
                <p>
                  Today, we manage multi-million dollar ad spends and build
                  custom SaaS tools for some of the most innovative companies in
                  the world.
                </p>
              </div>
            </div>
            <div className='relative w-full lg:w-1/2'>
              <div className='bg-primary-100 dark:bg-primary-900/20 group aspect-square rotate-3 overflow-hidden rounded-3xl shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000'
                  alt='Our Team'
                  className='h-full w-full -rotate-3 object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='dark:bg-dark-light bg-gray-50 py-20'>
        <div className='layout'>
          <div className='mb-16 text-center'>
            <h2 className='h2 mb-4'>Core Values</h2>
            <p className='p mx-auto max-w-2xl text-gray-600 dark:text-gray-400'>
              The principles that guide our work and our relationships every
              single day.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {values.map((value, index) => (
              <div
                key={index}
                className='dark:bg-dark rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800'
              >
                <div className='mb-6'>{value.icon}</div>
                <h3 className='h3 mb-4'>{value.title}</h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-24'>
        <div className='layout text-center'>
          <h2 className='h1 mb-8'>Want to learn more about how we work?</h2>
          <button className='bg-primary-600 hover:bg-primary-700 rounded-full px-10 py-5 text-lg font-bold text-white transition-all hover:shadow-2xl active:scale-95'>
            Download Company Deck
          </button>
        </div>
      </section>
    </div>
  );
}

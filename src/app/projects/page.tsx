'use client';

import * as React from 'react';
import NextImage from '@/components/NextImage';
import { ExternalLink, Rocket, Laptop, Zap } from 'lucide-react';

const projects = [
  {
    title: 'AdStream Analytics',
    description:
      'Real-time dashboard for cross-platform ad performance tracking and automated reporting.',
    tags: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
    icon: <Rocket className='h-6 w-6' />,
    color: 'bg-blue-500',
  },
  {
    title: 'LeadGen Pro',
    description:
      'AI-powered lead qualification tool that scores prospects based on engagement data.',
    tags: ['React', 'Python', 'OpenAI'],
    icon: <Zap className='h-6 w-6' />,
    color: 'bg-purple-500',
  },
  {
    title: 'SmartCampaign Manager',
    description:
      'Automated campaign optimization tool that adjust bids in real-time for maximum ROAS.',
    tags: ['TypeScript', 'Cloud Functions', 'Go'],
    icon: <Laptop className='h-6 w-6' />,
    color: 'bg-green-500',
  },
];

export default function ProjectsPage() {
  return (
    <div className='dark:bg-dark min-h-screen bg-gray-50'>
      <header className='dark:bg-dark-light border-b border-gray-100 bg-white py-20 dark:border-gray-800'>
        <div className='layout text-center'>
          <h1 className='h0 mb-4'>Developed SaaS Projects</h1>
          <p className='p mx-auto max-w-2xl text-gray-600 dark:text-gray-400'>
            Explore the high-performance software solutions we've built to
            empower digital marketing success.
          </p>
        </div>
      </header>

      <section className='py-16'>
        <div className='layout'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900'
              >
                <div
                  className={`${project.color} mb-6 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110`}
                >
                  {project.icon}
                </div>
                <h3 className='h3 mb-3'>{project.title}</h3>
                <p className='mb-6 line-clamp-3 text-gray-600 dark:text-gray-400'>
                  {project.description}
                </p>
                <div className='mb-8 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className='text-primary-600 flex items-center gap-2 font-semibold transition-all hover:gap-3'>
                  View Case Study <ExternalLink className='h-4 w-4' />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-primary-600 relative overflow-hidden py-20 text-white'>
        <div className='absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-white/10 blur-3xl'></div>
        <div className='layout relative z-10 text-center'>
          <h2 className='h1 mb-6'>Have a SaaS Idea?</h2>
          <p className='mx-auto mb-10 max-w-xl text-lg opacity-90'>
            We turn complex business challenges into sleek, scalable software
            solutions.
          </p>
          <button className='text-primary-600 rounded-full bg-white px-8 py-4 font-bold shadow-xl transition-colors hover:bg-gray-100'>
            Let's Build It Together
          </button>
        </div>
      </section>
    </div>
  );
}

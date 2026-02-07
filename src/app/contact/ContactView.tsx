'use client';

import * as React from 'react';
import {
  Mail,
  Send,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';

export default function ContactView() {
  return (
    <div className='dark:bg-dark min-h-screen bg-white'>
      {/* Header */}
      <header className='dark:bg-dark-light bg-gray-50 py-24 text-center'>
        <div className='layout'>
          <h1 className='h0 font-primary mb-6 font-bold dark:text-white'>Get In Touch</h1>
          <p className='p mx-auto max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400'>
            Ready to scale your business? Let's talk about your goals and how we
            can help you achieve them.
          </p>
        </div>
      </header>

      <section className='py-20'>
        <div className='layout'>
          <div className='flex flex-col gap-16 lg:flex-row'>
            {/* Contact Info */}
            <div className='w-full space-y-12 lg:w-1/3'>
              <div>
                <h3 className='h3 mb-8 dark:text-white'>Contact Information</h3>
                <div className='space-y-6'>
                  <div className='group flex items-center gap-4'>
                    <div className='bg-primary-100 dark:bg-primary-900/20 text-primary-600 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform group-hover:scale-110'>
                      <Mail className='h-6 w-6' />
                    </div>
                    <div>
                      <div className='text-sm font-medium text-gray-500'>
                        Email us at
                      </div>
                      <div className='text-lg font-bold text-gray-900 dark:text-white'>
                        adstechdigitalinfo@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className='mb-6 text-sm font-bold tracking-widest text-gray-500 uppercase'>
                  Follow Us
                </h4>
                <div className='flex gap-4'>
                  {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                    <button
                      key={i}
                      className='hover:text-primary-600 hover:border-primary-600 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all dark:border-gray-800'
                    >
                      <Icon className='h-5 w-5' />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='w-full lg:w-2/3'>
              <div className='rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl lg:p-12 dark:border-gray-800 dark:bg-gray-900'>
                <form
                  className='space-y-6'
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div>
                      <label className='mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300'>
                        First Name
                      </label>
                      <input
                        type='text'
                        placeholder='John'
                        className='dark:bg-dark focus:ring-primary-600 w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all focus:ring-2 focus:outline-none dark:border-gray-700'
                      />
                    </div>
                    <div>
                      <label className='mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        placeholder='Doe'
                        className='dark:bg-dark focus:ring-primary-600 w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all focus:ring-2 focus:outline-none dark:border-gray-700'
                      />
                    </div>
                  </div>
                  <div>
                    <label className='mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300'>
                      Work Email
                    </label>
                    <input
                      type='email'
                      placeholder='john@company.com'
                      className='dark:bg-dark focus:ring-primary-600 w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all focus:ring-2 focus:outline-none dark:border-gray-700'
                    />
                  </div>
                  <div>
                    <label className='mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300'>
                      How can we help?
                    </label>
                    <textarea
                      rows={5}
                      placeholder='Tell us about your project or goals...'
                      className='dark:bg-dark focus:ring-primary-600 w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all focus:ring-2 focus:outline-none dark:border-gray-700'
                    ></textarea>
                  </div>
                  <button className='bg-primary-600 hover:bg-primary-700 shadow-primary-600/30 flex w-full items-center justify-center gap-3 rounded-full py-5 text-lg font-bold text-white transition-all hover:shadow-xl active:scale-95'>
                    Send Message <Send className='h-5 w-5' />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

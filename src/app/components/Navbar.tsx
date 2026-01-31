'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { Menu, X } from 'lucide-react';

import { siteConfig } from '@/constant/config';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className='dark:bg-dark/70 sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-md transition-all duration-300'>
      <div className='mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-16 lg:px-8'>
        <Link href='/' className='group flex items-center gap-2'>
          <div className='relative flex items-center justify-center'>
            {/* Animated Glow Effect */}
            <div className='bg-primary-500/20 absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100'></div>

            <div className='from-primary-600 to-primary-400 group-hover:shadow-primary-500/20 relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-tr shadow-lg transition-all duration-300 group-hover:-translate-y-0.5'>
              {/* Shine Animation */}
              <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[2000ms] ease-in-out group-hover:translate-x-full'></div>

              <svg
                viewBox='0 0 24 24'
                fill='none'
                className='h-6 w-6 text-white drop-shadow-md'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13 2L3 14H12V22L22 10H13V2Z'
                  fill='currentColor'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>

          <div className='flex flex-col -space-y-1.5'>
            <span className='via-primary-600 dark:via-primary-400 animate-shimmer bg-gradient-to-r from-gray-900 to-gray-700 bg-[length:200%_auto] bg-clip-text text-xl font-black tracking-tight text-transparent md:text-2xl dark:from-white dark:to-gray-300'>
              Ads Tech
            </span>
            <span className='group-hover:text-primary-600 dark:group-hover:text-primary-400 ml-0.5 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase opacity-80 transition-colors duration-300 md:text-xs dark:text-gray-400'>
              Digital Agency
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden items-center gap-1 md:flex lg:gap-4'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'text-primary-600 bg-primary-50/50 dark:bg-primary-900/20'
                  : 'text-gray-600 hover:bg-gray-100/50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href='/contact'
            className='bg-primary-600 hover:bg-primary-700 hover:shadow-primary-600/30 ml-4 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg active:scale-95'
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex items-center md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
          >
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`dark:bg-dark absolute top-14 left-0 w-full border-b border-gray-100 bg-white transition-all duration-300 ease-in-out md:hidden dark:border-gray-800 ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className='space-y-1 bg-white/90 px-4 pt-2 pb-6 backdrop-blur-xl'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                pathname === link.href
                  ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className='px-3 pt-4'>
            <Link
              href='/contact'
              onClick={() => setIsOpen(false)}
              className='bg-primary-600 hover:bg-primary-700 block w-full rounded-full py-3 text-center font-semibold text-white transition-colors'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

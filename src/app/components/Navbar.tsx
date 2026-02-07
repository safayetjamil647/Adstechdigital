'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

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
    <nav className='sticky top-0 z-50 flex w-full justify-center border-b border-white/10 bg-black/80 backdrop-blur-md'>
      <div className='flex w-full max-w-7xl items-center justify-between px-6 py-4 text-sm text-white'>
        {/* Logo */}
        <Link href='/' className='flex items-center shrink-0'>
          <div className='flex items-center gap-1.5'>
            <span className='text-xl font-black uppercase tracking-tighter'>
              Ads<span className='text-primary-400'>Tech</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className='ml-7 hidden items-center gap-6 md:flex'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative h-6 overflow-hidden transition-colors ${pathname === link.href ? 'text-primary-400' : 'text-white'
                }`}
            >
              <span className='block transition-transform duration-300 group-hover:-translate-y-full'>
                {link.name}
              </span>
              <span className='absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full'>
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className='ml-14 hidden items-center gap-4 md:flex shrink-0'>
          <Link
            href='/contact'
            className='rounded-full border border-slate-600 px-4 py-2 text-sm font-medium transition hover:bg-slate-800'
          >
            Contact
          </Link>
          <Link
            href='https://calendly.com/adstechdigitalinfo/30min'
            className='shadow-white/50 hover:shadow-white/50 rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-[0px_0px_30px_7px] transition duration-300 hover:bg-slate-100 hover:shadow-[0px_0px_30px_14px]'
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-gray-400 md:hidden p-2'
        >
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            {isOpen ? (
              <path d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full flex-col items-center gap-4 border-b border-white/10 bg-black/95 py-6 backdrop-blur-xl md:hidden ${isOpen ? 'flex' : 'hidden'
            }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base transition-colors hover:text-primary-400 ${pathname === link.href ? 'text-primary-400' : 'text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className='flex flex-col gap-4 pt-4 w-full px-6'>
            <Link
              href='/contact'
              onClick={() => setIsOpen(false)}
              className='rounded-full border border-slate-600 py-2 text-center text-sm font-medium transition hover:bg-slate-800'
            >
              Contact
            </Link>
            <Link
              href='https://calendly.com/adstechdigitalinfo/30min'
              onClick={() => setIsOpen(false)}
              className='shadow-white/50 rounded-full bg-white py-2 text-center text-sm font-medium text-black shadow-[0px_0px_20px_4px] transition duration-300 hover:bg-slate-100'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

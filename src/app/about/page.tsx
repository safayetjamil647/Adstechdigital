import { Metadata } from 'next';
import * as React from 'react';

import AboutView from '@/app/about/AboutView';

export const metadata: Metadata = {
  title: 'About Us | The Marketing Engineering Team',
  description:
    'Learn how Ads Tech Digital combines technology and human psychology to engineer growth for modern brands.',
};

export default function AboutPage() {
  return <AboutView />;
}

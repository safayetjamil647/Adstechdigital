import { Metadata } from 'next';
import * as React from 'react';

import ServicesView from '@/app/services/ServicesView';

export const metadata: Metadata = {
  title: 'Services | Digital Ads & Software Engineering',
  description:
    'Our comprehensive growth services include Precision Paid Ads, Custom SaaS Development, Conversion Optimization, and Web Analytics.',
};

export default function ServicesPage() {
  return <ServicesView />;
}

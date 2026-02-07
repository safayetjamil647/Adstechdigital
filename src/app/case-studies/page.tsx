import { Metadata } from 'next';
import * as React from 'react';

import CaseStudiesView from '@/app/case-studies/CaseStudiesView';

export const metadata: Metadata = {
  title: 'Case Studies | Data-Driven Ad Results',
  description:
    'Explore how we engineer growth through meticulous testing and optimization. Real results for supplement brands and SaaS companies.',
};

export default function CaseStudiesPage() {
  return <CaseStudiesView />;
}

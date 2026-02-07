import { Metadata } from 'next';
import * as React from 'react';

import ProjectsView from '@/app/projects/ProjectsView';

export const metadata: Metadata = {
  title: 'Projects | AI-Powered Marketing Tools',
  description:
    'Browse our portfolio of high-performance software solutions built for digital campaign success and ROI optimization.',
};

export default function ProjectsPage() {
  return <ProjectsView />;
}

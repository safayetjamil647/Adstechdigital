import { Metadata } from 'next';
import * as React from 'react';

import ContactView from '@/app/contact/ContactView';

export const metadata: Metadata = {
  title: 'Contact Us | Book Your Strategy Call',
  description:
    "Ready to scale your business? Contact Ads Tech Digital to discuss your goals and book a free 30-minute account analysis.",
};

export default function ContactPage() {
  return <ContactView />;
}

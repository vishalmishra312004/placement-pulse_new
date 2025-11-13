import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Placement Pulse - MBA Placement & Summer Internship Preparation',
  description: 'Master your MBA placements and summer internships with expert guidance from top MBA alumni. Join 300+ successful students from IIM Indore, JBIMS, Symbiosis & more. Get personalized coaching for GD, PI, interviews, resume building & placement strategy.',
  keywords: [
    'MBA placement preparation',
    'MBA internship coaching',
    'group discussion training',
    'personal interview preparation',
    'MBA placement strategy',
    'summer internship guidance',
    'MBA career coaching',
    'IIM placement prep',
    'MBA mock interviews',
    'resume building MBA',
    'LinkedIn profile MBA',
    'placement training online',
    'MBA placement course',
    'B-school placement guidance'
  ],
  openGraph: {
    title: 'Placement Pulse - Crack Your Dream MBA Placements & Internships',
    description: 'Expert-led MBA placement preparation. 300+ students placed. Learn from IIM alumni. GD, PI, Mock Interviews & Placement Strategy.',
    type: 'website',
    url: 'https://placementpulse.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Placement Pulse - MBA Placement Preparation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Placement Pulse - MBA Placement & Internship Prep',
    description: '300+ Students Placed | Expert MBA Alumni Guidance | GD-PI Training | Mock Interviews',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://placementpulse.com',
  },
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Environmental Health Professionals Should Learn to Code',
    excerpt:
      'Exploring the intersection of public health and technology, and how even basic coding skills can transform the way we approach environmental health challenges.',
    date: '2025-12-15',
    category: 'Digital Health',
    readingTime: '5 min read',
    slug: 'eh-professionals-coding',
  },
  {
    id: '2',
    title: 'Applying Lean Thinking to Health Clinic Operations',
    excerpt:
      'Lessons learned from applying lean manufacturing principles to optimize patient flow and reduce waste in a university health centre setting.',
    date: '2025-11-28',
    category: 'Operations',
    readingTime: '7 min read',
    slug: 'lean-thinking-health-clinic',
  },
  {
    id: '3',
    title: 'Indoor Air Quality: The Invisible Health Factor',
    excerpt:
      'A deep dive into the importance of monitoring indoor air quality and its direct impact on occupant health, productivity, and well-being.',
    date: '2025-10-10',
    category: 'Environmental Health',
    readingTime: '6 min read',
    slug: 'indoor-air-quality-health',
  },
  {
    id: '4',
    title: 'Building My First PWA for Field Inspections',
    excerpt:
      'A vibe coder\'s journey of building a Progressive Web App for food safety inspections — from zero coding experience to a fully functional offline-capable app.',
    date: '2025-09-05',
    category: 'Digital Builder',
    readingTime: '8 min read',
    slug: 'first-pwa-field-inspections',
  },
  {
    id: '5',
    title: 'Data-Driven Vector Control: A New Approach',
    excerpt:
      'How integrating GIS technology with traditional vector surveillance methods is creating more effective and targeted mosquito control strategies.',
    date: '2025-08-20',
    category: 'Environmental Health',
    readingTime: '6 min read',
    slug: 'data-driven-vector-control',
  },
];

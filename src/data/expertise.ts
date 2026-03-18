import { Shield, Settings, Code2 } from 'lucide-react';
import type { ComponentType } from 'react';

export interface ExpertisePillar {
  id: string;
  title: string;
  subtitle: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
  description: string;
  skills: string[];
}

export const expertisePillars: ExpertisePillar[] = [
  {
    id: 'environmental-health',
    title: 'Environmental Health',
    subtitle: 'Science & Practice',
    icon: Shield,
    color: 'primary',
    description:
      'Applying scientific principles to identify, assess, and control environmental factors that can affect human health. From indoor air quality to food safety, I work to create healthier environments for communities.',
    skills: [
      'Indoor Air Quality Assessment',
      'Food Safety & Hygiene',
      'Occupational Health & Safety',
      'Water Quality Monitoring',
      'Waste Management',
      'Vector Control',
      'Environmental Impact Assessment',
      'Public Health Surveillance',
    ],
  },
  {
    id: 'operations-management',
    title: 'Operations Management',
    subtitle: 'Systems & Efficiency',
    icon: Settings,
    color: 'accent',
    description:
      'Learning and applying operations management principles to optimize healthcare delivery and public health processes. Focused on continuous improvement, resource allocation, and workflow optimization.',
    skills: [
      'Process Improvement',
      'Quality Management',
      'Resource Planning',
      'Lean Methodology',
      'Data-Driven Decision Making',
      'Project Management',
      'Risk Assessment',
      'Standard Operating Procedures',
    ],
  },
  {
    id: 'digital-builder',
    title: 'Digital Builder',
    subtitle: 'Tools & Innovation',
    icon: Code2,
    color: 'info',
    description:
      'Leveraging digital tools and building custom solutions to enhance public health workflows. From vibe coding web applications to automating data collection, I explore how technology can amplify health impact.',
    skills: [
      'Web Development (React, TypeScript)',
      'Data Visualization',
      'Workflow Automation',
      'Digital Health Tools',
      'Dashboard Design',
      'API Integration',
      'PWA Development',
      'AI-Assisted Development',
    ],
  },
];

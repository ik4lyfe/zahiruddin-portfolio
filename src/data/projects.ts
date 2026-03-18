export type ProjectType = 'web' | 'data' | 'tool' | 'process' | 'learning';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface Project {
  id: string;
  title: string;
  description: string;
  context?: string;
  tags: string[];
  type: ProjectType;
  status: ProjectStatus;
  link?: string;
  github?: string;
  image?: string;
  pillar?: 'tech' | 'operations' | 'health';
}

export const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Data & Analytics', value: 'data' },
  { label: 'Tools & Scripts', value: 'tool' },
  { label: 'Process Work', value: 'process' },
] as const;

export const projects: Project[] = [
  {
    id: 'field-inspection-tracker',
    title: 'Field Inspection Tracker',
    description:
      'A Progressive Web App for conducting inspections digitally, replacing paper-based forms with an offline-capable mobile solution. Features autosave, photo attachments, and PDF report generation.',
    context:
      'Built because I needed a faster way to log field data on-site — paper forms were losing information and making reporting painfully slow.',
    tags: ['React', 'PWA', 'Offline-First', 'TypeScript'],
    type: 'web',
    status: 'completed',
  },
  {
    id: 'ops-dashboard',
    title: 'Operations Analytics Dashboard',
    description:
      'A real-time monitoring dashboard for tracking KPIs across multiple operational sites. Interactive charts, filterable date ranges, and automated weekly summary reports.',
    context:
      'Designed to replace scattered Excel files with a single source of truth for operational performance data.',
    tags: ['Power BI', 'Data Visualisation', 'Excel', 'Analytics'],
    type: 'data',
    status: 'completed',
  },
  {
    id: 'workflow-optimizer',
    title: 'Service Queue Optimizer',
    description:
      'Applied lean methodology to analyse and improve service flow in a public-facing facility, reducing average wait times by mapping bottlenecks and recommending staff reallocation.',
    context:
      'Started as a university assignment, then applied to a real facility to test the methodology.',
    tags: ['Lean', 'Process Mapping', 'Analytics', 'Service Design'],
    type: 'process',
    status: 'completed',
  },
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio Website',
    description:
      'This site — built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations with Framer Motion, and a responsive design system.',
    context:
      'Built from scratch using AI-assisted development to learn React and TypeScript through a real project.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    type: 'web',
    status: 'completed',
  },
  {
    id: 'compliance-tracker',
    title: 'Compliance Workflow Tracker',
    description:
      'A web-based tool for managing compliance cycles across 200+ regulated premises. Tracks inspection schedules, follow-up actions, and generates status reports for management.',
    context:
      'Replaced a manual spreadsheet system that was missing deadlines and duplicating effort across teams.',
    tags: ['React', 'TypeScript', 'CRUD', 'Reporting'],
    type: 'tool',
    status: 'in-progress',
  },
  {
    id: 'monthly-report-generator',
    title: 'Automated Report Generator',
    description:
      'A Python script that pulls data from spreadsheets, cleans it, and generates formatted monthly analytical reports with charts — saving hours of manual copy-paste work.',
    context:
      'Built to automate the most tedious part of my previous role: assembling monthly reports from multiple data sources.',
    tags: ['Python', 'pandas', 'matplotlib', 'Automation'],
    type: 'tool',
    status: 'completed',
  },
  {
    id: 'resource-allocation-model',
    title: 'Resource Allocation Model',
    description:
      'An Excel-based decision support model for allocating limited staff and equipment across multiple sites, using weighted scoring and scenario comparison.',
    context:
      'Developed during operations management coursework and validated against real-world staffing data.',
    tags: ['Excel', 'Operations Research', 'Decision Support', 'Modelling'],
    type: 'process',
    status: 'completed',
  },
  {
    id: 'learning-log',
    title: 'Dev Learning Journal',
    description:
      'A structured log of my self-taught development journey — tracking courses completed, projects attempted, and skills gained. Built as a simple static site.',
    context:
      'Keeping myself accountable while transitioning from field work to tech.',
    tags: ['HTML/CSS', 'JavaScript', 'Learning', 'Documentation'],
    type: 'learning',
    status: 'in-progress',
  },
];

export type EducationStatus = 'in-progress' | 'completed';

export interface WorkExperience {
  id: string;
  title: string;
  organisation: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  bullets: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  status: EducationStatus;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: 'eho-senior',
    title: 'Senior Environmental Health Officer',
    organisation: 'Local Government Authority',
    location: 'Selangor, Malaysia',
    startDate: '2021',
    endDate: '2024',
    current: false,
    description:
      'Led a team responsible for compliance operations and data-driven reporting across a high-density jurisdiction.',
    bullets: [
      'Designed and maintained data tracking systems for 12 monthly reporting cycles per year',
      'Coordinated multi-team operations across 4 jurisdictions, aligning schedules and resource allocation',
      'Produced monthly analytical reports for senior management, summarising trends and flagging issues',
      'Managed compliance workflows for 200+ regulated premises annually',
      'Developed internal Excel-based tools to automate repetitive data collation tasks',
      'Trained junior staff on digital reporting tools and standard operating procedures',
    ],
  },
  {
    id: 'eho-junior',
    title: 'Environmental Health Officer',
    organisation: 'Local Government Authority',
    location: 'Selangor, Malaysia',
    startDate: '2018',
    endDate: '2021',
    current: false,
    description:
      'Conducted field operations and built foundational data management processes for the department.',
    bullets: [
      'Executed 500+ field inspections annually across food, water, and premises categories',
      'Built and maintained spreadsheet-based tracking systems for enforcement activities',
      'Produced data summaries and visualisations for quarterly program reviews',
      'Coordinated logistics for multi-site operations involving 3 concurrent programs',
      'Introduced basic digital workflows to replace paper-based inspection forms',
    ],
  },
];

export const education: Education[] = [
  {
    id: 'bsc-ops',
    degree: 'BSc Operations Management',
    institution: 'Universiti Teknologi MARA (UiTM)',
    year: '2024 – Present',
    status: 'in-progress',
    description:
      'Currently pursuing a degree in operations management, focusing on process optimisation, systems thinking, and data-driven decision-making for modern organisations.',
  },
  {
    id: 'diploma-eho',
    degree: 'Diploma in Environmental Health',
    institution: 'Universiti Teknologi MARA (UiTM)',
    year: '2016 – 2018',
    status: 'completed',
    description:
      'Field operations training covering systematic inspection methodology, regulatory compliance, data collection, and multi-stakeholder coordination.',
  },
];

export const certifications: Certification[] = [
  {
    id: 'google-data-analytics',
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    year: '2023',
  },
  {
    id: 'power-bi-fundamentals',
    name: 'Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    year: '2023',
  },
  {
    id: 'python-for-data',
    name: 'Python for Data Science',
    issuer: 'IBM / Coursera',
    year: '2023',
  },
  {
    id: 'responsive-web-design',
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2022',
  },
  {
    id: 'javascript-algorithms',
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    year: '2022',
  },
  {
    id: 'lean-six-sigma',
    name: 'Lean Six Sigma Yellow Belt',
    issuer: 'CSSC',
    year: '2024',
  },
];

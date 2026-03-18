export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  id: 'coding' | 'data' | 'operations' | 'tools';
  label: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'coding',
    label: 'Coding & Web Development',
    icon: 'Code2',
    color: 'primary',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 72 },
      { name: 'React', level: 68 },
      { name: 'TypeScript', level: 62 },
      { name: 'Python', level: 65 },
      { name: 'SQL', level: 60 },
    ],
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    icon: 'BarChart3',
    color: 'accent',
    skills: [
      { name: 'Excel / Google Sheets', level: 88 },
      { name: 'Power BI', level: 75 },
      { name: 'Python (pandas/matplotlib)', level: 62 },
      { name: 'Data Visualisation', level: 78 },
      { name: 'Dashboard Design', level: 74 },
    ],
  },
  {
    id: 'operations',
    label: 'Operations & Process',
    icon: 'Settings',
    color: 'info',
    skills: [
      { name: 'Process Mapping', level: 80 },
      { name: 'Lean Basics', level: 65 },
      { name: 'Service Design', level: 62 },
      { name: 'Systems Thinking', level: 75 },
      { name: 'Resource Planning', level: 70 },
      { name: 'Project Management', level: 72 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: 'Wrench',
    color: 'secondary',
    skills: [
      { name: 'Git / GitHub', level: 70 },
      { name: 'Vite', level: 68 },
      { name: 'Tailwind CSS', level: 75 },
      { name: 'Figma (basic)', level: 50 },
      { name: 'VS Code', level: 85 },
      { name: 'AI Coding Tools (Claude, Copilot, Cursor)', level: 78 },
    ],
  },
];

export interface PersonalInfo {
  name: string;
  tagline: string;
  subtitle: string;
  bio: string[];
  availability: 'open' | 'selective' | 'closed';
  openFor: string[];
  location: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
}

export const personal: PersonalInfo = {
  name: 'Zahiruddin Zaki',
  tagline: 'Tech Builder with an Operational Mind',
  subtitle: 'Web Developer · Data Analyst · Operations Management Student',
  bio: [
    'I build web tools and data dashboards — mostly as passion projects and freelance work, using AI-assisted development to punch above my technical weight. From interactive React apps to Power BI reports, I enjoy turning messy requirements into clean, functional digital products that people actually want to use.',
    'My background is in environmental health fieldwork — five-plus years in the field gave me a deep appreciation for how broken operational systems affect real people. That\'s what drives my current focus: operations management and digital tools that solve practical problems.',
  ],
  availability: 'open',
  openFor: [
    'Freelance web & data projects',
    'Operations management roles',
    'Tech collaboration',
  ],
  location: 'Shah Alam, Selangor, Malaysia',
  social: {
    linkedin: 'https://linkedin.com/in/zahiruddinzaki',
    github: 'https://github.com/zahiruddinzaki',
    email: 'mailto:zahiruddin@example.com',
  },
};

export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Expertise', path: '/expertise' },
  { label: 'Projects', path: '/projects' },
  { label: 'Field Notes', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

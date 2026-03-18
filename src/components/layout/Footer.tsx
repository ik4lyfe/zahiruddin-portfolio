import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { navItems } from '../../data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + Tagline */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-mono text-lg font-bold">
                <span className="text-violet-600 dark:text-violet-400">
                  {'>'}_
                </span>{' '}
                <span className="text-zinc-900 dark:text-white">
                  Zahiruddin
                </span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems
                .filter((item) => item.path !== '/')
                .map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
              {personalInfo.location}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
            Built with{' '}
            <Heart
              size={14}
              className="text-violet-600 dark:text-violet-400 fill-violet-600 dark:fill-violet-400"
            />{' '}
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

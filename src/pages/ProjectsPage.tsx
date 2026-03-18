import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import AnimatedPage from '../components/ui/AnimatedPage';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { projects } from '../data/projects';

type FilterType = 'all' | 'tech' | 'operations' | 'health' |
  'environmental-health' | 'operations-management' | 'digital-builder' |
  'web' | 'data' | 'tool' | 'process' | 'learning' | string;

const pillarLabels: Record<string, string> = {
  'environmental-health': 'Environmental Health',
  'operations-management': 'Operations Management',
  'digital-builder': 'Digital Builder',
};

const statusStyles: Record<string, string> = {
  completed: 'bg-primary/10 text-primary dark:text-primary-light',
  'in-progress': 'bg-accent/10 text-accent dark:text-accent-light',
  planned: 'bg-info/10 text-info',
};

const pillarColors: Record<string, string> = {
  'environmental-health': 'border-l-primary',
  'operations-management': 'border-l-accent',
  'digital-builder': 'border-l-info',
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Env. Health', value: 'environmental-health' },
    { label: 'Operations', value: 'operations-management' },
    { label: 'Digital', value: 'digital-builder' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.pillar === activeFilter;
  });

  return (
    <AnimatedPage>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Projects"
            subtitle="A collection of initiatives that bring together environmental health, operations thinking, and digital innovation."
          />

          {/* Filters */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            <Filter size={16} className="text-gray-400 mr-2" />
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeFilter === filter.value
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'bg-gray-100 dark:bg-surface-card text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-surface-border'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`h-full border-l-4 ${pillarColors[project.pillar ?? 'tech']}`}>
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-lg ${statusStyles[project.status]}`}
                      >
                        {project.status === 'in-progress'
                          ? 'In Progress'
                          : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Pillar Label */}
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-3">
                      {project.pillar ? pillarLabels[project.pillar] : ''}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-surface-darker text-gray-600 dark:text-gray-400 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
              No projects found for this filter.
            </p>
          )}
        </div>
      </section>
    </AnimatedPage>
  );
}

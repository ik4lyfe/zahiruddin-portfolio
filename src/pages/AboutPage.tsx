import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import AnimatedPage from '../components/ui/AnimatedPage';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import TimelineItem from '../components/ui/TimelineItem';
import SkillBadge from '../components/ui/SkillBadge';
import { personalInfo } from '../data/personalInfo';

const timeline = [
  {
    year: '2024 – Present',
    title: 'Environmental Health Officer',
    organization: 'UiTM Health Centre',
    description:
      'Managing environmental health programs, conducting inspections, and implementing digital tools for workflow optimization within the university health services.',
  },
  {
    year: '2023 – 2024',
    title: 'Operations Management Studies',
    organization: 'Self-Directed Learning',
    description:
      'Deepened knowledge in lean methodology, quality management, and data-driven decision making through structured learning and practical application in health settings.',
  },
  {
    year: '2020 – 2023',
    title: 'Environmental Health Practitioner',
    organization: 'Public Health Department',
    description:
      'Conducted food safety inspections, indoor air quality assessments, and vector control activities. Led digitalization initiatives for field inspection processes.',
  },
  {
    year: '2016 – 2020',
    title: 'Bachelor of Environmental Health',
    organization: 'Universiti Teknologi MARA (UiTM)',
    description:
      'Studied environmental health sciences with focus on occupational health, food safety, and water quality. Developed passion for applying technology to public health.',
  },
];

const coreSkills = [
  'Environmental Health Assessment',
  'Indoor Air Quality',
  'Food Safety & HACCP',
  'Occupational Health',
  'Lean Management',
  'Process Improvement',
  'Data Analysis',
  'Project Management',
];

const techSkills = [
  'React & TypeScript',
  'Web Development',
  'Data Visualization',
  'PWA Development',
  'GIS & Mapping',
  'Workflow Automation',
];

export default function AboutPage() {
  return (
    <AnimatedPage>
      {/* Header */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="About Me"
            subtitle="Environmental Health meets technology — my journey of bridging two worlds."
          />
        </div>
      </section>

      {/* Bio Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <Card hover={false}>
                <div className="text-center lg:text-left">
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6">
                    <span className="text-4xl font-bold text-white font-mono">ZZ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-primary dark:text-primary-light font-medium text-sm mb-4">
                    {personalInfo.tagline}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 dark:text-gray-400">
                    <MapPin size={14} />
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-surface-light-border dark:border-surface-border">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="flex items-center justify-center gap-1.5 mb-1">
                          <GraduationCap size={14} className="text-primary" />
                          <span className="text-xs text-gray-500 dark:text-gray-400">Education</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">B.Sc. EH</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1.5 mb-1">
                          <Briefcase size={14} className="text-accent" />
                          <span className="text-xs text-gray-500 dark:text-gray-400">Focus</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">EH + Tech</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bio Text */}
            <div className="lg:col-span-3 space-y-6">
              {personalInfo.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}

              {/* Brand identity callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20"
              >
                <p className="font-mono text-primary dark:text-primary-light text-sm italic">
                  "{personalInfo.brandIdentity}"
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-gray-50/50 dark:bg-surface-dark/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Skills & Competencies" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <SkillBadge key={skill} label={skill} variant="primary" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-info" />
                Digital & Tech
              </h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill) => (
                  <SkillBadge key={skill} label={skill} variant="info" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Journey"
            subtitle="My professional path from environmental health science to digital innovation."
          />
          <div className="mt-8">
            {timeline.map((item, index) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                title={item.title}
                organization={item.organization}
                description={item.description}
                isLast={index === timeline.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

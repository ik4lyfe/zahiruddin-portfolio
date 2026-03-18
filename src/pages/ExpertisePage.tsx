import { motion } from 'framer-motion';
import AnimatedPage from '../components/ui/AnimatedPage';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import SkillBadge from '../components/ui/SkillBadge';
import { expertisePillars } from '../data/expertise';

export default function ExpertisePage() {
  const colorMap: Record<string, { badge: 'primary' | 'accent' | 'info'; icon: string; gradient: string }> = {
    primary: {
      badge: 'primary',
      icon: 'text-primary bg-primary/10 border-primary/20',
      gradient: 'from-primary/20 to-transparent',
    },
    accent: {
      badge: 'accent',
      icon: 'text-accent bg-accent/10 border-accent/20',
      gradient: 'from-accent/20 to-transparent',
    },
    info: {
      badge: 'info',
      icon: 'text-info bg-info/10 border-info/20',
      gradient: 'from-info/20 to-transparent',
    },
  };

  return (
    <AnimatedPage>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Three Pillars of Expertise"
            subtitle="My professional identity is built on three interconnected domains — each informing and strengthening the others."
          />

          <div className="space-y-16 mt-8">
            {expertisePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const colors = colorMap[pillar.color];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                >
                  <Card hover={false} className="relative overflow-hidden">
                    {/* Gradient accent */}
                    <div
                      className={`absolute top-0 ${
                        isEven ? 'left-0' : 'right-0'
                      } w-1/2 h-full bg-gradient-to-r ${colors.gradient} opacity-30 dark:opacity-10 pointer-events-none`}
                    />

                    <div
                      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                        !isEven ? 'lg:direction-rtl' : ''
                      }`}
                    >
                      {/* Content */}
                      <div className={!isEven ? 'lg:order-2' : ''}>
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${colors.icon}`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-sm font-semibold text-primary dark:text-primary-light uppercase tracking-wider mb-4">
                          {pillar.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className={!isEven ? 'lg:order-1' : ''}>
                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                          Key Competencies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {pillar.skills.map((skill) => (
                            <SkillBadge key={skill} label={skill} variant={colors.badge} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Intersection callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="glass-card p-10 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-info" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                The Intersection
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The real magic happens where these three pillars converge — using digital tools to
                optimize operations in environmental health, applying systems thinking to build
                better health technology, and leveraging data to drive public health decisions.
              </p>
              <div className="flex justify-center gap-3 mt-6">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-info" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
}

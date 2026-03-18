import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import AnimatedPage from '../components/ui/AnimatedPage';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { blogPosts } from '../data/blogPosts';

const categoryColors: Record<string, string> = {
  'Digital Health': 'bg-info/10 text-info border-info/20',
  Operations: 'bg-accent/10 text-accent dark:text-accent-light border-accent/20',
  'Environmental Health': 'bg-primary/10 text-primary dark:text-primary-light border-primary/20',
  'Digital Builder': 'bg-info/10 text-info border-info/20',
};

export default function BlogPage() {
  return (
    <AnimatedPage>
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Field Notes"
            subtitle="Thoughts, learnings, and reflections from the intersection of environmental health, operations, and technology."
          />

          {/* Blog header callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20 text-center"
          >
            <p className="font-mono text-sm text-primary dark:text-primary-light">
              📝 Documenting the journey of an EH professional learning to build digital tools
            </p>
          </motion.div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="group cursor-pointer">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Date sidebar */}
                    <div className="sm:w-24 shrink-0">
                      <div className="text-sm font-mono text-gray-500 dark:text-gray-400 flex items-center gap-1.5 sm:flex-col sm:items-start">
                        <Calendar size={14} className="text-primary" />
                        <span>{new Date(post.date).toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg border ${
                            categoryColors[post.category] || 'bg-gray-100 text-gray-600 border-gray-200'
                          }`}
                        >
                          <Tag size={10} />
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Clock size={10} />
                          {post.readingTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary dark:text-primary-light opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Coming soon footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500">
              More field notes coming soon. Stay tuned! 🌱
            </p>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
}

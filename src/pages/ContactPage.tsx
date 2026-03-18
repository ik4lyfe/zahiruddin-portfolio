import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import AnimatedPage from '../components/ui/AnimatedPage';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { personalInfo } from '../data/personalInfo';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend / email service.
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      href: personalInfo.social.email,
      color: 'text-primary bg-primary/10',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.social.linkedin,
      color: 'text-info bg-info/10',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View on GitHub',
      href: personalInfo.social.github,
      color: 'text-accent bg-accent/10',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.location,
      href: undefined,
      color: 'text-primary bg-primary/10',
    },
  ];

  const inputStyles =
    'w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-surface-card border border-surface-light-border dark:border-surface-border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200';

  return (
    <AnimatedPage>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a question, idea, or want to collaborate? I'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${card.color}`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                          {card.title}
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {card.value}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );

                return card.href ? (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block group"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={card.title}>{content}</div>
                );
              })}

              {/* Availability note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                  Open to collaborations in environmental health tech, vibe coding projects, and
                  operations improvement.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card hover={false}>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 size={48} className="mx-auto text-primary mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={inputStyles}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={inputStyles}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className={inputStyles}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        placeholder="Tell me about your idea or question..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className={`${inputStyles} resize-none`}
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                      Send Message
                      <Send size={16} />
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

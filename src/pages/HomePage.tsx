import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  Download,
  Code2,
  BarChart3,
  PenTool,
  Terminal,
  FolderCode,
  Award,
  Briefcase,
  BookOpen,
  GraduationCap,
  Wrench,
  Sparkles,
} from 'lucide-react';
import AnimatedPage from '../components/ui/AnimatedPage';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import ParticleBackground from '../components/ui/ParticleBackground';
import TypingText from '../components/ui/TypingText';
import { StaggerContainer, StaggerItem } from '../components/ui/StaggerContainer';
import { personal } from '../data/personal';
import { projects } from '../data/projects';
import { stats } from '../data/stats';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── countUp hook (kept for AnimatedStat) ─── */
function useCountUp(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }
    if (!startOnView || !isInView || hasStarted.current) return;
    hasStarted.current = true;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration, startOnView]);

  return { count, ref };
}

/* ─── stat number parser ─── */
function parseStatValue(val: string): { num: number; suffix: string } {
  const match = val.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: val };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

/* ─── CountUp stat component ─── */
function AnimatedStat({ value, label, icon }: { value: string; label: string; icon: string }) {
  const { num, suffix } = parseStatValue(value);
  const { count, ref } = useCountUp(num);

  const iconMap: Record<string, React.ElementType> = {
    FolderCode,
    Code2,
    Briefcase,
    Award,
  };
  const Icon = iconMap[icon] || FolderCode;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-2 p-6 bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-xl transition-all duration-200 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10"
    >
      <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
      <span ref={ref} className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
        {count}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 text-center">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Terminal line component ─── */
function TerminalLine({
  command,
  output,
  accent = false,
  delay = 0,
}: {
  command: string;
  output: string;
  accent?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      className="space-y-0.5"
    >
      <p className="text-zinc-500">
        <span className="text-violet-400">$</span> {command}
      </p>
      <p className={`pl-4 ${accent ? 'text-violet-400' : 'text-zinc-100'}`}>{output}</p>
    </motion.div>
  );
}

/* ─── animated dot grid background ─── */
function DotGridBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setOffset({ x, y });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* dot grid */}
      <div
        className="absolute inset-0 transition-transform duration-[1200ms] ease-out"
        style={{
          transform: prefersReducedMotion ? undefined : `translate(${offset.x}px, ${offset.y}px)`,
          backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.15) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* gradient overlays */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />
    </div>
  );
}

/* ──────────────────────────────── */
/*           SUBTITLES              */
/* ──────────────────────────────── */
const subtitles = [
  'Web Developer & Vibe Coder',
  'Data Analyst & Dashboard Builder',
  'Operations Management Student',
  'Problem Solver with Field Roots',
];

const skillPills = ['React', 'Python', 'Data Analysis', 'Ops Management', 'AI-Assisted Dev'];

/* ──────────────────────────────── */
/*    FEATURED PROJECT PICKS        */
/* ──────────────────────────────── */
const featuredIds = ['field-inspection-tracker', 'ops-dashboard', 'workflow-optimizer'];
const featuredProblems: Record<string, string> = {
  'field-inspection-tracker':
    'Paper-based inspections were losing data and slowing down reporting cycles.',
  'ops-dashboard':
    'Scattered spreadsheets made it impossible to get a single view of operational performance.',
  'workflow-optimizer':
    'Unbalanced service queues were creating bottlenecks and wasting staff time.',
};

/* ──────────────────────────────── */
/*        CAPABILITY COLUMNS        */
/* ──────────────────────────────── */
const capabilities = [
  {
    icon: Code2,
    title: 'Build',
    color: 'violet',
    items: [
      'React apps & interactive UIs',
      'Data dashboards & reports',
      'Scripts & automation tools',
      'AI-assisted development',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analyse',
    color: 'blue',
    items: [
      'Data cleaning & visualisation',
      'Excel / Power BI dashboards',
      'Pattern analysis & insights',
      'Scheduled reporting',
    ],
  },
  {
    icon: PenTool,
    title: 'Design',
    color: 'indigo',
    items: [
      'Process mapping & flowcharts',
      'Workflow design & SOPs',
      'Operational systems',
      'Service delivery thinking',
    ],
  },
];

const capColorMap: Record<string, { icon: string; bg: string; border: string; bullet: string }> = {
  violet: {
    icon: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-500/10 dark:bg-violet-500/15',
    border: 'border-violet-500/20',
    bullet: 'bg-violet-500',
  },
  blue: {
    icon: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10 dark:bg-blue-500/15',
    border: 'border-blue-500/20',
    bullet: 'bg-blue-500',
  },
  indigo: {
    icon: 'text-indigo-500 dark:text-indigo-400',
    bg: 'bg-indigo-500/10 dark:bg-indigo-500/15',
    border: 'border-indigo-500/20',
    bullet: 'bg-indigo-500',
  },
};

/* ──────────────────────────────── */
/*          ANIMATION VARIANTS      */
/* ──────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

/* ══════════════════════════════════ */
/*             HOME PAGE              */
/* ══════════════════════════════════ */
export default function HomePage() {
  const featuredProjects = projects.filter((p) => featuredIds.includes(p.id));

  /* ── Back-to-top visibility ── */
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatedPage>
      {/* ────────── HERO SECTION ────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-50 dark:bg-zinc-950">
        <DotGridBackground />

        {/* Particle background */}
        <ParticleBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <motion.div
            variants={prefersReducedMotion ? undefined : containerVariants}
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="show"
            className="max-w-4xl"
          >
            {/* Status badge */}
            <motion.div variants={prefersReducedMotion ? undefined : itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 ring-1 ring-emerald-500/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                Open for Freelance &amp; Collaboration
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={prefersReducedMotion ? undefined : itemVariants}>
              <p className="text-lg sm:text-xl font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                Hi, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4">
                <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-violet-400 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
            </motion.div>

            {/* Typing subtitle — replaced static text with TypingText */}
            <motion.div variants={prefersReducedMotion ? undefined : itemVariants} className="mb-6">
              <p className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 h-9 flex items-center">
                <TypingText
                  texts={subtitles}
                  speed={80}
                  pauseDuration={2000}
                />
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={prefersReducedMotion ? undefined : itemVariants}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8 leading-relaxed"
            >
              I build digital tools, analyse data, and design operational systems — informed by 5+
              years of real-world fieldwork.
            </motion.p>

            {/* Skill pills */}
            <motion.div variants={prefersReducedMotion ? undefined : itemVariants} className="flex flex-wrap gap-2 mb-10">
              {skillPills.map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-violet-500/10 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300 ring-1 ring-violet-500/20 hover:bg-violet-500/20 transition-colors duration-200"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={prefersReducedMotion ? undefined : itemVariants} className="flex flex-wrap gap-4 mb-16">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  View My Work
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Button variant="outline" size="lg" href="/cv-zahiruddin-zaki.pdf" external>
                <Download size={18} />
                Download CV
              </Button>
            </motion.div>

            {/* Credential footnote */}
            <motion.p
              variants={prefersReducedMotion ? undefined : itemVariants}
              className="text-xs font-mono text-zinc-400 dark:text-zinc-600"
            >
              Also: Reg. Environmental Health Officer | BEHM
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ────────── TERMINAL WIDGET ────────── */}
      <section className="section-padding bg-zinc-100 dark:bg-zinc-900/80">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700/60 shadow-2xl shadow-violet-500/5"
          >
            {/* title bar */}
            <div className="flex items-center gap-2 px-5 py-3 bg-zinc-200 dark:bg-zinc-800 border-b border-zinc-300 dark:border-zinc-700/60">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-zinc-500 font-mono flex items-center gap-1.5">
                <Terminal size={12} />
                zahiruddin@portfolio:~
              </span>
            </div>

            {/* terminal body */}
            <div className="bg-zinc-50 dark:bg-zinc-950 p-6 font-mono text-sm space-y-3">
              <TerminalLine
                command="whoami"
                output="Zahiruddin Zaki — Tech Builder & Operations Thinker"
                delay={0}
              />
              <TerminalLine
                command="tech_stack"
                output="React · Python · SQL · Power BI · Tailwind"
                delay={0.08}
              />
              <TerminalLine
                command="currently_building"
                output="Web tools and data dashboards (mostly AI-assisted)"
                delay={0.16}
              />
              <TerminalLine
                command="currently_studying"
                output="BSc Operations Management — in progress"
                delay={0.24}
              />
              <TerminalLine
                command="background"
                output="5+ yrs field operations — the reason I build practical tools"
                delay={0.32}
              />
              <TerminalLine
                command="status"
                output="Open for freelance & collaboration ✓"
                accent
                delay={0.4}
              />
              {/* blinking cursor */}
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-zinc-500"
              >
                <span className="text-violet-400">$</span>{' '}
                <span className="inline-block w-2 h-4 bg-violet-500 animate-pulse" />
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────────── STATS ROW (with StaggerContainer) ────────── */}
      <section className="section-padding bg-white dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <AnimatedStat value={stat.value} label={stat.label} icon={stat.icon} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ────────── FEATURED WORK (with StaggerContainer) ────────── */}
      <section className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Featured Work"
            subtitle="Projects built to solve real problems — not tutorial exercises."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <Card hover className="h-full flex flex-col">
                  {/* type badge */}
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                      {project.type === 'web' && <Code2 size={13} />}
                      {project.type === 'data' && <BarChart3 size={13} />}
                      {project.type === 'process' && <PenTool size={13} />}
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* problem framing */}
                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700/50">
                    <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 mb-1">
                      Built to solve:
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
                      {featuredProblems[project.id]}
                    </p>
                  </div>

                  {/* tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-700/50 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-10">
            <Link to="/projects">
              <Button variant="ghost">
                View all projects
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ────────── SKILLS SNAPSHOT ────────── */}
      <section className="section-padding bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="What I Do"
            subtitle="Three capability areas that define my work."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {capabilities.map((cap) => {
              const colors = capColorMap[cap.color];
              const Icon = cap.icon;
              return (
                <StaggerItem key={cap.title}>
                  <Card hover className="h-full">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${colors.bg} ${colors.border}`}
                    >
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                      {cap.title}
                    </h3>

                    <ul className="space-y-2.5">
                      {cap.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.bullet}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ────────── CURRENTLY LEARNING ────────── */}
      <section className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Currently Learning" subtitle="Active growth, always." />

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <Card className="space-y-6">
              {/* BSc Ops */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    BSc Operations Management
                  </h4>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 ml-8">
                  UiTM — in progress
                </p>
                <div className="ml-8">
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-1.5">
                    <span>Progress</span>
                    <span>35%</span>
                  </div>
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-600 to-purple-500 rounded-full"
                      initial={prefersReducedMotion ? { width: '35%' } : { width: 0 }}
                      whileInView={{ width: '35%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>

              {/* Web dev self‑study */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Web Development Self-Study
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 ml-8">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Python', 'SQL', 'Framer Motion'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400 ring-1 ring-blue-500/20"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* AI workflow */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Wrench className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    AI-Assisted Coding Workflow
                  </h4>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 ml-8">
                  Using Claude, Copilot &amp; Cursor to accelerate project delivery and learn
                  patterns from AI-generated code.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ────────── CTA ────────── */}
      <section className="section-padding bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 sm:p-14 rounded-2xl bg-white/80 dark:bg-zinc-800/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-700/50 overflow-hidden"
          >
            {/* gradient top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500" />

            <Sparkles className="w-8 h-8 text-violet-500 mx-auto mb-4" />

            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Have a project or opportunity? Let's talk.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg mx-auto">
              Whether it's a web app, a data dashboard, or an ops improvement project — I'm open to
              freelance work, collaboration, and learning opportunities.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get in Touch
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ────────── BACK-TO-TOP BUTTON ────────── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 bg-violet-600 hover:bg-violet-700 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
}

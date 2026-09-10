'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Award, 
  Code2, 
  Database, 
  Cloud, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Briefcase, 
  Cpu, 
  Terminal, 
  Building2, 
  HeartPulse, 
  Users2,
  GraduationCap,
  TrendingUp,
  UserCheck,
  Mail,
  User,
  ChevronDown,
  HelpCircle,
  Camera
} from 'lucide-react';

const MENTOR_SKILLS = [
  'C#',
  '.NET / .NET Core / .NET 6 / .NET 8',
  'ASP.NET MVC',
  'Web API & REST APIs',
  'Entity Framework & ADO.NET',
  'SQL Server & T-SQL',
  'JavaScript, jQuery, HTML5 & CSS3',
  'Azure Cloud Services',
  'Azure Functions',
  'Azure DevOps',
  'Azure Data Factory',
  'Azure Service Bus',
  'Kubernetes & AKS',
  'Terraform',
  'Microservices',
  'AI-assisted software development',
];

const DOMAIN_EXPERIENCE = [
  {
    icon: Building2,
    title: 'Banking & Financial Applications',
    desc: 'Building and supporting enterprise applications where reliability, security, scalability, and performance are critical.',
  },
  {
    icon: HeartPulse,
    title: 'Insurance & Healthcare Technology',
    desc: 'Experience with insurance and healthcare-related systems, including medical records, claims processing, automation, and AI-assisted claim adjudication.',
  },
  {
    icon: Code2,
    title: 'Enterprise .NET Applications',
    desc: 'Designing and developing applications using the Microsoft .NET ecosystem, Web APIs, SQL Server, Entity Framework, and modern cloud technologies.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Working with Azure services, Azure DevOps, cloud-based application architecture, deployment, and modern DevOps practices.',
  },
  {
    icon: Sparkles,
    title: 'AI-Assisted Development',
    desc: 'Exploring and applying modern AI-assisted development tools and techniques to improve software development productivity and engineering workflows.',
  },
];

const TEACHING_PILLARS = [
  {
    number: '01',
    title: 'Real Software Engineering Experience',
    subtitle: 'From actual enterprise codebases',
    desc: 'I teach concepts from the perspective of someone who has worked on real applications and real engineering problems. You don\'t just learn what something is.',
    points: [
      'Why it is used in production',
      'When to use it vs alternatives',
      'How it works in a real multi-tier project',
      'What interviewers expect you to know',
    ],
  },
  {
    number: '02',
    title: 'Interview-Focused Preparation',
    subtitle: 'Confidently explain what you build',
    desc: 'Technical knowledge alone is not enough to clear a modern software interview. We prepare you across every angle:',
    points: [
      'Technical, .NET, C#, SQL & Web API rounds',
      'ASP.NET Core & Azure architecture discussions',
      'System design & scenario-based questions',
      'Project deep-dives, resume audit & HR behavioral fit',
    ],
  },
  {
    number: '03',
    title: 'Project-Based Learning',
    subtitle: 'The complete software lifecycle',
    desc: 'Real development is different from following a video tutorial. You will learn how engineers actually build end-to-end:',
    pipeline: [
      'Requirement',
      'Design',
      'Development',
      'Database',
      'API',
      'Testing',
      'Deployment',
      'Production',
    ],
  },
  {
    number: '04',
    title: 'Career & Technical Guidance',
    subtitle: 'Bridging your specific skill gap',
    desc: 'Whether you are a student preparing for your first role or a professional aiming for the next level, we focus on identifying your gaps:',
    points: [
      'Technical skill improvement & code structure',
      'Interview readiness & resume polish',
      'Project explanation & problem-solving communication',
      'Clear career direction & continuous learning habit',
    ],
  },
];

const TECH_STACK_CATEGORIES = [
  {
    category: 'Backend',
    icon: Terminal,
    skills: ['C#', '.NET', '.NET Core', 'ASP.NET Core', 'Web API', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['SQL Server', 'T-SQL', 'Stored Procedures', 'Entity Framework', 'ADO.NET'],
  },
  {
    category: 'Frontend',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['Microsoft Azure', 'Azure DevOps', 'Azure Functions', 'ADF', 'Service Bus', 'AKS', 'Kubernetes', 'Terraform'],
  },
  {
    category: 'Architecture',
    icon: Layers,
    skills: ['Microservices', 'API Architecture', 'Dependency Injection', 'SOLID Principles', 'System Design'],
  },
  {
    category: 'Modern Development',
    icon: Cpu,
    skills: ['AI-Assisted Development', 'GitHub Copilot', 'Modern AI Development Workflows'],
  },
];

const TARGET_AUDIENCES = [
  {
    icon: GraduationCap,
    title: 'Students',
    desc: 'For students who want to understand what software development looks like beyond college theory and textbooks.',
  },
  {
    icon: Users2,
    title: 'Fresh Graduates',
    desc: 'For graduates preparing for their first technical interview and securing a high-growth software development role.',
  },
  {
    icon: TrendingUp,
    title: 'Working Professionals',
    desc: 'For developers who want to strengthen their fundamentals, prepare for senior interviews, or transition to better opportunities.',
  },
  {
    icon: UserCheck,
    title: 'Experienced Developers',
    desc: 'For professionals looking to improve their .NET, Azure, architecture, system design, and advanced interview skills.',
  },
];

const WHY_CHOOSE_REASONS = [
  {
    title: 'Real-World Experience',
    desc: 'Learn from practical software-development experience rather than theory alone.',
  },
  {
    title: 'Technology-Focused',
    desc: 'Build skills around technologies used in modern enterprise development.',
  },
  {
    title: 'Interview Ready',
    desc: 'Practice the technical and communication skills required during real interviews.',
  },
  {
    title: 'Personalized Guidance',
    desc: 'Get focused guidance instead of being lost in a large online course.',
  },
  {
    title: 'Career Focused',
    desc: 'Learn with a clear connection between technology skills, projects, interviews, and career growth.',
  },
];

const FAQS = [
  {
    question: 'Who conducts the mentorship and live sessions?',
    answer: 'All live sessions, code reviews, and mentorship are conducted directly by Senior Software Engineers with 10+ years of hands-on enterprise development experience in .NET, Azure Cloud, and scalable software systems.'
  },
  {
    question: 'What is the format of the live sessions?',
    answer: 'Sessions are focused, interactive live masterclasses held online covering real enterprise architecture, practical code reviews, high-yield interview frameworks, and direct Q&A.'
  },
  {
    question: 'How does technical interview preparation work?',
    answer: 'We focus on real interview scenarios—testing fundamental problem-solving, .NET & C# internals, SQL optimizations, Azure architecture, and how to effectively explain your project experience to technical interviewers.'
  },
  {
    question: 'Is this suitable for students and freshers?',
    answer: 'Yes! We break down complex enterprise concepts into clear, practical principles, helping students bridge the gap between academic theory and production-grade software development.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'Our primary focus is the modern Microsoft .NET ecosystem (C#, .NET 8/9, ASP.NET Core, Web API), SQL Server, Azure Cloud Services, System Design, and AI-assisted development tools.'
  }
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-textPrimary overflow-hidden font-sans">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-10 md:pb-14 overflow-hidden bg-brand-bg">
        {/* Background Overlays & Decorative Grids */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.08)_0%,transparent_70%)] z-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none bg-[linear-gradient(to_right,#00ED64_1px,transparent_1px),linear-gradient(to_bottom,#00ED64_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-20 text-center">
          {/* Accent Chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-[11px] font-semibold tracking-wider uppercase mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping" />
            About TechNext Academy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-3"
          >
            Learn From <span className="text-gradient">Real Industry Experience.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-medium text-brand-primary max-w-2xl mx-auto mb-4"
          >
            From Software Engineering to Career Growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs md:text-sm text-brand-textSecondary max-w-3xl mx-auto leading-relaxed space-y-2.5 mb-6"
          >
            <p>
              TechNext Academy was created to help students, developers, and working professionals bridge the gap between <strong className="text-white font-semibold">learning technology and applying it in the real world</strong>.
            </p>
            <p>
              With <strong className="text-brand-primary font-semibold">10+ years of experience in software development</strong>, our approach is built around practical engineering knowledge, real project experience, interview preparation, and the skills companies actually expect from technology professionals.
            </p>
            <p className="text-white/80 italic font-medium">
              We don&apos;t believe that learning should stop at theory.
            </p>
          </motion.div>

          {/* Philosophy Mantra Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block bg-brand-surface/90 border border-brand-primary/40 px-5 md:px-8 py-2.5 rounded-xl backdrop-blur-md shadow-lg shadow-brand-primary/10 mb-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 font-display font-bold text-xs sm:text-sm md:text-base text-white">
              <span className="text-brand-primary">Learn.</span>
              <span className="text-brand-border">•</span>
              <span className="text-white">Build.</span>
              <span className="text-brand-border">•</span>
              <span className="text-brand-primary">Practice.</span>
              <span className="text-brand-border">•</span>
              <span className="text-white">Prepare.</span>
              <span className="text-brand-border">•</span>
              <span className="text-gradient">Succeed.</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 items-center justify-center"
          >
            <Link
              href="/live-sessions"
              className="inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105"
            >
              <span>Apply for Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/roadmap"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-primary text-white hover:text-brand-primary bg-brand-surface/40 hover:bg-brand-surface/80 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200"
            >
              <span>Explore Curriculum</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Meet Your Mentor Section */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Leadership &amp; Direction
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              Meet Your <span className="text-gradient">Mentor</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary font-medium">
              Senior Software Engineer &amp; .NET Technology Mentor
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
            {/* Mentor Photo Placeholder Frame */}
            <div className="lg:col-span-4 bg-brand-surface border border-brand-primary/30 rounded-2xl p-5 flex flex-col items-center justify-between text-center relative overflow-hidden group">
              <div className="w-full aspect-square max-w-[220px] mx-auto rounded-2xl bg-brand-bg border-2 border-dashed border-brand-primary/40 flex flex-col items-center justify-center p-4 relative overflow-hidden mb-4 group-hover:border-brand-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary mb-3">
                  <User className="w-8 h-8" />
                </div>
                <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider">Mentor Photo</span>
                <span className="text-[10px] text-brand-textSecondary mt-0.5">Photo placeholder area</span>
                <div className="absolute top-2 right-2 bg-brand-bg/80 border border-brand-border p-1 rounded-md text-brand-textSecondary">
                  <Camera className="w-3 h-3" />
                </div>
              </div>

              <div className="w-full">
                <h3 className="text-base font-bold font-display text-white">Senior Software Engineer</h3>
                <p className="text-xs text-brand-primary font-mono mt-0.5">10+ Years Enterprise Experience</p>
                <div className="mt-3 pt-3 border-t border-brand-border/60 flex items-center justify-center gap-2 text-[11px] text-brand-textSecondary">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  <span>Available for 1-on-1 Guidance</span>
                </div>
              </div>
            </div>

            {/* Middle Bio Card */}
            <div className="lg:col-span-4 bg-brand-surface border border-brand-border/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between text-left">
              <div>
                <div className="p-2.5 bg-brand-primary/10 border border-brand-primary/30 rounded-xl w-fit text-brand-primary mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold font-display text-white mb-2">
                  Enterprise Software Engineering
                </h3>
                <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed mb-4">
                  With <strong className="text-white">10+ years of professional experience in software development</strong>, I have designed and delivered enterprise applications and mission-critical technology solutions across diverse business domains.
                </p>
              </div>
              <div className="p-3 bg-brand-bg/80 border border-brand-border rounded-xl text-xs text-white/90 leading-relaxed italic">
                &ldquo;My experience goes beyond writing code. I focus on understanding <strong className="text-brand-primary not-italic">architecture, business requirements, performance, scalability, and maintainability</strong>.&rdquo;
              </div>
            </div>

            {/* Right Skills Grid */}
            <div className="lg:col-span-4 bg-brand-surface/60 border border-brand-border/60 rounded-2xl p-5 md:p-6 text-left flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold font-display uppercase tracking-wider text-brand-primary mb-3.5 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Core Technical Expertise</span>
                </h3>
                <div className="flex flex-wrap gap-1.5 max-h-[220px] overflow-y-auto pr-1">
                  {MENTOR_SKILLS.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-white/90 bg-brand-bg/90 border border-brand-border hover:border-brand-primary/50 hover:text-brand-primary px-2.5 py-1 rounded-lg transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-brand-textSecondary/80 mt-4 pt-3 border-t border-brand-border/40">
                Focused on enterprise .NET, modern cloud microservices &amp; practical architecture.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Real Industry Experience (Domains) */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Domain Expertise
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              Real Industry <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary">
              Engineering Knowledge That Comes From Real Projects &amp; Enterprise Challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {DOMAIN_EXPERIENCE.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <div
                  key={index}
                  className="group bg-brand-surface border border-brand-border/60 hover:border-brand-primary/40 rounded-2xl p-5 md:p-6 text-left transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,237,100,0.06)] flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl w-fit text-brand-primary group-hover:text-white group-hover:border-brand-primary/45 transition-colors mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold font-display text-white mb-2 group-hover:text-brand-primary transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What I Bring to Your Learning (4 Pillars) */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Curriculum Approach
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              What I Bring to <span className="text-gradient">Your Learning</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary">
              Four fundamental pillars designed to turn theory into actual workplace competency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto">
            {TEACHING_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-brand-surface border border-brand-border/70 rounded-2xl p-5 md:p-6 text-left relative overflow-hidden flex flex-col justify-between group hover:border-brand-primary/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-xl font-black text-brand-primary">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-brand-bg border border-brand-border text-white/70">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold font-display text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                </div>

                {pillar.points && (
                  <ul className="space-y-2 pt-3.5 border-t border-brand-border/60">
                    {pillar.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs md:text-sm text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {pillar.pipeline && (
                  <div className="pt-3.5 border-t border-brand-border/60">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {pillar.pipeline.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-bg border border-brand-primary/30 text-brand-primary">
                            {step}
                          </span>
                          {sIdx < pillar.pipeline.length - 1 && (
                            <span className="text-white/40 text-[10px]">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Focus Grid */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Skill Architecture
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              Technology <span className="text-gradient">Focus</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary">
              Build Skills That Companies Actually Use Every Day in Production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {TECH_STACK_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-surface border border-brand-border/70 rounded-2xl p-5 text-left hover:border-brand-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 bg-brand-bg border border-brand-border rounded-lg text-brand-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold font-display text-white">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium bg-brand-bg/80 border border-brand-border text-white/80 px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Is TechNext Academy For? */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Target Audience
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              Who Is <span className="text-gradient">TechNext Academy For?</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary">
              Tailored pathways whether you are taking your first steps or upgrading your career.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {TARGET_AUDIENCES.map((aud, idx) => {
              const Icon = aud.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-surface border border-brand-border/70 rounded-2xl p-5 text-left hover:border-brand-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl w-fit text-brand-primary mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold font-display text-white mb-2">
                      {aud.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
                      {aud.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        <div className="w-full max-w-3xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
            Core Values
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3">
            Our Teaching <span className="text-gradient">Philosophy</span>
          </h2>
          <h3 className="text-base md:text-lg font-bold font-display text-brand-primary mb-5">
            Don&apos;t Just Learn. Understand.
          </h3>

          <div className="bg-brand-surface border border-brand-border/80 rounded-2xl p-6 md:p-8 text-left space-y-4 text-xs md:text-sm text-brand-textSecondary leading-relaxed shadow-xl">
            <p>
              Technology changes quickly. Frameworks change. Tools change. Cloud platforms evolve. AI is transforming software development.
            </p>
            <p className="text-white font-semibold border-l-2 border-brand-primary pl-3">
              But strong engineering fundamentals remain permanently valuable.
            </p>
            <p>
              That&apos;s why TechNext Academy focuses on building a rock-solid foundation while also keeping learners connected to modern technologies and industry practices.
            </p>
            <div className="p-3.5 rounded-xl bg-brand-primary/10 border border-brand-primary/30 text-white font-medium text-center text-xs md:text-sm">
              Our mission is to help you become a confident technology professional — not just someone who can complete a tutorial.
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn With TechNext Academy? */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Differentiators
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              Why Learn With <span className="text-gradient">TechNext Academy?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {WHY_CHOOSE_REASONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-surface border border-brand-border/70 rounded-2xl p-5 md:p-6 text-left hover:border-brand-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  <h3 className="text-sm md:text-base font-bold font-display text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-brand-textSecondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Got Questions?
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xs md:text-sm text-brand-textSecondary">
              Everything you need to know about our mentorship and career preparation format.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-brand-surface border-brand-primary/50 shadow-[0_0_20px_rgba(0,237,100,0.06)]' 
                      : 'bg-brand-surface/50 border-brand-border/60 hover:border-brand-border/90'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 md:p-5 flex items-center justify-between text-left gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-brand-primary' : 'text-white/40'}`} />
                      <span className="text-xs md:text-sm font-bold font-display text-white">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-brand-primary shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0 text-xs md:text-sm text-brand-textSecondary leading-relaxed border-t border-brand-border/40 mt-1 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Final CTA */}
      <section className="relative py-12 md:py-16 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        {/* Decorative gradient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="bg-brand-surface border border-brand-primary/40 rounded-3xl p-6 md:p-10 text-center shadow-2xl relative">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              My Mission
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Helping Developers Become <span className="text-gradient">Industry Ready</span>
            </h2>

            <div className="text-xs md:text-sm text-brand-textSecondary leading-relaxed max-w-2xl mx-auto space-y-3 mb-6">
              <p>
                I believe talented people often struggle not because they lack ability, but because they don&apos;t know <strong className="text-white">what the industry expects from them</strong>.
              </p>
              <p>
                TechNext Academy exists to close that gap. Whether you are starting your technology career, preparing for an interview, or looking for your next professional opportunity, the goal is to give you the practical knowledge, confidence, and guidance required to move forward.
              </p>
            </div>

            {/* Triple Taglines */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 font-display font-bold text-xs md:text-sm text-white mb-6">
              <span className="text-brand-primary">Learn from experience.</span>
              <span className="hidden sm:inline text-brand-border">•</span>
              <span className="text-white">Build with confidence.</span>
              <span className="hidden sm:inline text-brand-border">•</span>
              <span className="text-brand-primary">Prepare for the real world.</span>
            </div>

            <p className="text-base md:text-lg font-display font-black text-white mb-6">
              Welcome to TechNext Academy.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <Link
                href="/live-sessions"
                className="inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105"
              >
                <span>Apply for Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-primary text-white hover:text-brand-primary bg-brand-surface/40 hover:bg-brand-surface/80 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <Footer />
    </main>
  );
}

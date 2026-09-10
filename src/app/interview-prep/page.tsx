'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Code2,
  Terminal,
  Database,
  Cloud,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  FileCode2,
  Cpu,
  Workflow,
  AlertTriangle,
  Lightbulb,
  Check
} from 'lucide-react';

const INTERVIEW_TOPICS = [
  {
    icon: Code2,
    title: 'C# & .NET Core Internals',
    subtitle: 'Language depth & runtime mechanics',
    desc: 'Deep dive into runtime internals that technical interviewers frequently probe to distinguish seniors from tutorial copiers.',
    keyQuestions: [
      'Value types vs Reference types & stack/heap memory allocation',
      'Async/await state machine, SynchronizationContext, and Task allocation',
      'Garbage Collection generations, LOH (Large Object Heap), and IDisposable',
      'LINQ query execution mechanics (deferred execution, expression trees vs delegates)',
      'Thread safety, Locks, Monitor, SemaphoreSlim & Concurrent collections',
    ],
  },
  {
    icon: Terminal,
    title: 'ASP.NET Core & Web API Architecture',
    subtitle: 'Pipeline, security & high-performance APIs',
    desc: 'Understanding the complete lifecycle of an HTTP request, middleware chaining, and resilient API architecture.',
    keyQuestions: [
      'ASP.NET Core request processing pipeline & custom middleware construction',
      'Dependency Injection lifetimes (Transient, Scoped, Singleton) & captive dependencies',
      'Authentication vs Authorization filters, JWT validation & token refresh flows',
      'Content negotiation, model validation, API versioning & global error handling',
      'HttpClient lifecycle management, IHttpClientFactory & connection pool exhaustion',
    ],
  },
  {
    icon: Database,
    title: 'SQL Server & Query Performance',
    subtitle: 'Indexing, query plans & data access tuning',
    desc: 'Database performance is the #1 bottleneck in enterprise systems. Master the fundamentals that interviewers care about.',
    keyQuestions: [
      'Clustered vs Non-Clustered Indexes and composite index column ordering',
      'Reading execution plans: Index Seek vs Scan, Lookups, and costly Spills',
      'Transaction isolation levels (Read Committed, Snapshot) and concurrency locks',
      'Handling and preventing deadlocks in high-concurrency enterprise tables',
      'Entity Framework Core N+1 query problem, compiled queries & AsNoTracking',
    ],
  },
  {
    icon: Cloud,
    title: 'Azure Cloud & DevOps Integration',
    subtitle: 'Cloud services, serverless & CI/CD delivery',
    desc: 'Demonstrate real-world cloud engineering capability beyond basic hosting tutorials.',
    keyQuestions: [
      'Azure App Service deployment slots, auto-scaling rules & health probes',
      'Azure Functions triggers, bindings, and handling cold starts in production',
      'Azure Service Bus topics/subscriptions vs Event Grid vs Event Hubs',
      'Secure credential handling with Azure Key Vault & Managed Identities',
      'CI/CD pipeline construction in Azure DevOps with blue-green deployments',
    ],
  },
  {
    icon: Layers,
    title: 'System Design & Distributed Patterns',
    subtitle: 'Scalability, microservices & resiliency',
    desc: 'How to structure multi-tier, distributed enterprise systems with clear trade-off justification.',
    keyQuestions: [
      'Monolith to Microservices transition criteria and bounded contexts',
      'Distributed caching strategies with Redis (Cache-Aside, Write-Through, Expirations)',
      'Resiliency patterns: Circuit Breaker, Retry with Exponential Backoff (Polly)',
      'Outbox pattern for guaranteed message delivery across microservices',
      'API Gateway pattern: routing, rate-limiting, and payload aggregation',
    ],
  },
  {
    icon: Sparkles,
    title: 'Production Incident Scenarios',
    subtitle: 'Debugging, memory leaks & performance tuning',
    desc: 'Real scenario questions: how you respond when production systems fail or experience severe slowdowns.',
    keyQuestions: [
      'Troubleshooting high CPU utilization spikes and thread pool starvation in .NET',
      'Diagnosing and capturing memory dumps for managed memory leaks',
      'Handling sudden 500 error cascades and establishing graceful degradation',
      'Investigating slow API responses using distributed tracing and Application Insights',
      'Explaining your role in a real production outage, RCA, and mitigation strategy',
    ],
  },
];

const ARCHITECTURE_GUIDELINES = [
  {
    icon: Target,
    title: '1. Articulate Engineering Trade-offs',
    desc: 'Senior interviewers do not look for a single "correct" answer. They evaluate whether you understand the trade-offs between consistency vs availability, latency vs throughput, and complexity vs maintainability.',
  },
  {
    icon: Workflow,
    title: '2. Master the Project STAR Framework',
    desc: 'When asked about your past experience: Structure your answer around the Situation, Task, your direct Action, and the measurable Result (e.g. "Reduced query latency by 45% using composite indexing").',
  },
  {
    icon: ShieldCheck,
    title: '3. Focus on Clean Code & SOLID in Live Coding',
    desc: 'During live coding rounds, prioritize readable naming, single responsibility, defensive error handling, and unit testability over cryptic one-liners.',
  },
  {
    icon: Lightbulb,
    title: '4. Clarify Requirements Before Architecting',
    desc: 'Never jump into drawing architecture diagrams. Always ask clarifying questions regarding scale (DAU/RPS), read-heavy vs write-heavy workloads, latency SLA, and data persistence needs.',
  },
];

export default function InterviewPrepPage() {
  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-textPrimary overflow-hidden font-sans">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-14 md:pb-18 overflow-hidden bg-brand-bg">
        {/* Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-semibold tracking-wider uppercase mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping" />
            Enterprise Interview Preparation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Prepare for Real <span className="text-brand-primary">Technical Interviews</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-brand-textSecondary max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Master practical .NET internals, Web API architecture, SQL query tuning, and cloud design scenarios evaluated by senior software engineering interviewers.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center justify-center"
          >
            <Link
              href="/interview-test"
              className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-[1.03]"
            >
              <span>Take Interview Readiness Test</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#topics"
              className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-primary text-white hover:text-brand-primary bg-brand-surface/50 hover:bg-brand-surface/80 px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200"
            >
              <span>Explore Prep Topics</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Practical Interview Prep Topics (6 Domains) */}
      <section id="topics" className="relative py-14 md:py-20 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Core Technical Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Practical <span className="text-brand-primary">Interview Scenarios</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-textSecondary">
              High-yield technical topics and real engineering questions asked during live interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {INTERVIEW_TOPICS.map((topic, idx) => {
              const Icon = topic.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-surface border border-brand-border/80 hover:border-brand-primary/50 rounded-3xl p-6 sm:p-7 text-left transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl text-brand-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold font-display text-white">
                          {topic.title}
                        </h3>
                        <span className="text-[11px] font-mono text-brand-primary font-medium">{topic.subtitle}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-textSecondary mb-4 leading-relaxed">
                      {topic.desc}
                    </p>

                    <div className="p-4 bg-brand-bg/80 border border-brand-border/60 rounded-2xl">
                      <span className="text-[10px] font-mono uppercase font-bold text-white/70 block mb-2">
                        Common Evaluation Angles:
                      </span>
                      <ul className="space-y-2">
                        {topic.keyQuestions.map((q, qIdx) => (
                          <li key={qIdx} className="flex items-start gap-2 text-xs text-white/90 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture & Interview Review Guidelines */}
      <section className="relative py-14 md:py-18 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Interviewer Expectations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Architecture &amp; <span className="text-brand-primary">Interview Guidelines</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-textSecondary">
              How senior software engineers and hiring managers actually evaluate your answers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {ARCHITECTURE_GUIDELINES.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-surface/70 border border-brand-border/80 rounded-2xl p-6 text-left hover:border-brand-primary/40 transition-colors"
                >
                  <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl w-fit text-brand-primary mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-white mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-textSecondary leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-brand-surface border border-brand-primary/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight leading-tight">
              Test your skills with our calibrated <span className="text-brand-primary">Interview Assessment</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-textSecondary max-w-xl mx-auto mb-6 leading-relaxed">
              Take the interactive test across C#, Web API, SQL Server, Azure, and System Design to identify your exact preparation gaps.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/interview-test"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-8 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105"
              >
                <span>Start Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/live-sessions"
                className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-primary text-white hover:text-brand-primary bg-brand-surface/50 hover:bg-brand-surface/80 px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200"
              >
                <span>Join Live Q&amp;A Session</span>
                <ArrowRight className="w-4 h-4" />
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

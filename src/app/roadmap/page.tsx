'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Terminal,
  Code2,
  Database,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  GraduationCap,
  TrendingUp,
  Cpu,
  Target,
  Award
} from 'lucide-react';

const ROADMAP_STAGES = [
  {
    stageNum: '01',
    id: 'stage-1',
    title: 'C# & Programming Fundamentals',
    subtitle: 'Build strong problem solving and object-oriented foundations',
    icon: Terminal,
    desc: 'Master the core language, memory management concepts, and object-oriented design before diving into advanced frameworks.',
    focusAreas: [
      'C# Language Syntax & Type System',
      'Object-Oriented Programming (OOP) & SOLID',
      'Collections, Generics & Data Structures',
      'Exception Handling & Defensive Programming',
      'LINQ (Language Integrated Query) Internals',
      'Memory Management & Garbage Collection Basics',
      'Async / Await & Multithreading Fundamentals',
      'Git Version Control & GitHub Workflows',
    ],
    goal: 'Build an intuitive, deep understanding of C# programming and problem solving.',
  },
  {
    stageNum: '02',
    id: 'stage-2',
    title: 'ASP.NET Core & Web API Development',
    subtitle: 'Build high-performance, production-ready enterprise APIs',
    icon: Code2,
    desc: 'Learn how modern Web APIs and enterprise web services are engineered in the Microsoft .NET 8/9 ecosystem.',
    focusAreas: [
      'ASP.NET Core Architecture & Request Pipeline',
      'RESTful API Design & Best Practices',
      'Dependency Injection & Service Lifetimes',
      'Custom Middleware, Filters & Exception Handling',
      'Authentication & Authorization (JWT, OAuth2)',
      'Entity Framework Core & Dapper Data Access',
      'Configuration, Options Pattern & Environment Settings',
      'Structured Logging (Serilog) & Application Monitoring',
    ],
    goal: 'Design and deliver secure, testable, and maintainable REST APIs.',
  },
  {
    stageNum: '03',
    id: 'stage-3',
    title: 'SQL Server & Database Architecture',
    subtitle: 'Master enterprise data storage, querying, and performance tuning',
    icon: Database,
    desc: 'Strong backend engineers need deep database design and query optimization skills to prevent production bottlenecks.',
    focusAreas: [
      'Relational Database Design & Normalization',
      'Complex T-SQL Queries, Joins & Subqueries',
      'Stored Procedures, Triggers & User-Defined Functions',
      'Clustered & Non-Clustered Indexing Strategies',
      'Execution Plans & Query Performance Optimization',
      'Transactions, ACID Properties & Concurrency Control',
      'Database Migration Patterns & Schema Management',
      'Data Integrity, Security & Backup Fundamentals',
    ],
    goal: 'Confidently design, query, and optimize relational databases for scale.',
  },
  {
    stageNum: '04',
    id: 'stage-4',
    title: 'Azure Cloud, Microservices & System Design',
    subtitle: 'Architect scalable, distributed, and cloud-native systems',
    icon: Cloud,
    desc: 'Transition from writing isolated features to architecting distributed, resilient enterprise systems deployed to the cloud.',
    focusAreas: [
      'Microsoft Azure Services (App Service, Functions, SQL Database)',
      'Azure Service Bus, Queues & Event-Driven Architecture',
      'Azure DevOps, CI/CD Pipelines & Infrastructure as Code',
      'Microservices Architecture & Clean Architecture Principles',
      'Caching Strategies (Redis) & Distributed Data Patterns',
      'System Scalability, Resiliency & Circuit Breaker Pattern',
      'API Gateway, Rate Limiting & Load Balancing',
      'High-Level & Low-Level System Design Interview Prep',
    ],
    goal: 'Think like a Senior Software Engineer and design scalable enterprise systems.',
  },
];

const TARGET_PATHWAYS = [
  {
    icon: GraduationCap,
    title: 'Students & Fresh Graduates',
    badge: 'Foundation & Entry-Level',
    desc: 'Focus on C# fundamentals, clean code, basic API development, and SQL. Build 1-2 realistic projects to stand out in campus and entry-level interviews.',
    keyFocus: ['Stage 1: C# Core', 'Stage 2: Web API Basics', 'Stage 3: SQL Fundamentals'],
  },
  {
    icon: TrendingUp,
    title: 'Junior to Mid Developers',
    badge: '1-3 Years Experience',
    desc: 'Elevate your code quality with advanced .NET patterns, Entity Framework optimizations, SQL query tuning, and cloud deployment in Azure.',
    keyFocus: ['Stage 2: Advanced Web API', 'Stage 3: Indexing & Tuning', 'Stage 4: Azure & CI/CD'],
  },
  {
    icon: Award,
    title: 'Senior Aspirants',
    badge: 'Senior & Lead Roles',
    desc: 'Master distributed systems, microservices, cloud messaging, system design trade-offs, and technical leadership frameworks.',
    keyFocus: ['Stage 4: Cloud Architecture', 'System Design & Trade-offs', 'Realistic Enterprise Scenarios'],
  },
];

export default function RoadmapPage() {
  const [activeStage, setActiveStage] = useState<string>('stage-1');

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
            Technology &amp; Career Roadmap
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Your Roadmap From <span className="text-brand-primary">Learning to Industry Readiness</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-brand-textSecondary max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Technology careers are built step by step with the right foundation, practical software development experience, and focused interview preparation.
          </motion.p>

          {/* Quick Flow Ribbon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-brand-surface/80 border border-brand-border/80 px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-white shadow-xl"
          >
            <span className="text-brand-primary">Learn</span>
            <span className="text-white/40">→</span>
            <span>Build</span>
            <span className="text-white/40">→</span>
            <span className="text-brand-primary">Practice</span>
            <span className="text-white/40">→</span>
            <span>Prepare</span>
            <span className="text-white/40">→</span>
            <span className="text-brand-primary">Grow</span>
          </motion.div>
        </div>
      </section>

      {/* 4 Practical Stages Grid */}
      <section className="relative py-14 md:py-20 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Curriculum Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
              The 4 Core <span className="text-brand-primary">Engineering Stages</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-textSecondary">
              Structured step-by-step from C# fundamentals to enterprise cloud architecture.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {ROADMAP_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.id}
                  className="bg-brand-surface border border-brand-border/80 rounded-3xl p-6 sm:p-8 text-left transition-all duration-300 hover:border-brand-primary/50 shadow-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-brand-border/60">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-brand-bg border border-brand-border rounded-2xl text-brand-primary shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-wider">
                            Stage {stage.stageNum}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display text-white">
                          {stage.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-brand-textSecondary mt-0.5">
                          {stage.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-white/90 my-4 leading-relaxed">
                    {stage.desc}
                  </p>

                  <div className="mb-5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-primary block mb-3">
                      Focus Areas &amp; Key Concepts
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                      {stage.focusAreas.map((area, aIdx) => (
                        <div
                          key={aIdx}
                          className="p-2.5 rounded-xl bg-brand-bg/80 border border-brand-border/60 flex items-start gap-2 text-xs text-white/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-bg border border-brand-primary/20 flex items-center gap-2 text-xs text-brand-textSecondary">
                    <Target className="w-4 h-4 text-brand-primary shrink-0" />
                    <span><strong className="text-white">Milestone Goal:</strong> {stage.goal}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pathways Based On Experience */}
      <section className="relative py-14 md:py-18 bg-brand-bg border-t border-brand-border/40">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-2 block">
              Where to Start
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Pathways by <span className="text-brand-primary">Experience Level</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-textSecondary">
              Tailor your focus based on where you currently stand in your engineering journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {TARGET_PATHWAYS.map((path, idx) => {
              const Icon = path.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-surface border border-brand-border/80 hover:border-brand-primary/50 rounded-2xl p-6 text-left flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-brand-bg border border-brand-border rounded-xl text-brand-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 border border-brand-primary/30 px-2.5 py-0.5 rounded-full">
                        {path.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-display text-white mb-2">
                      {path.title}
                    </h3>
                    <p className="text-xs text-brand-textSecondary leading-relaxed mb-5">
                      {path.desc}
                    </p>

                    <div className="p-3.5 bg-brand-bg/80 border border-brand-border/60 rounded-xl mb-4">
                      <span className="text-[10px] font-mono uppercase text-brand-primary block mb-2 font-bold">
                        Recommended Focus:
                      </span>
                      <ul className="space-y-1.5">
                        {path.keyFocus.map((kf, kIdx) => (
                          <li key={kIdx} className="flex items-center gap-2 text-xs text-white/90">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shrink-0" />
                            <span>{kf}</span>
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

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 bg-brand-bg border-t border-brand-border/40 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-brand-surface border border-brand-primary/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight leading-tight">
              Ready to begin your <span className="text-brand-primary">structured preparation?</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-textSecondary max-w-xl mx-auto mb-6 leading-relaxed">
              Explore our assessment guide and join live interactive sessions to accelerate your software engineering readiness.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/interview-prep"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:scale-105"
              >
                <span>Explore Interview Prep</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/live-sessions"
                className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-primary text-white hover:text-brand-primary bg-brand-surface/50 hover:bg-brand-surface/80 px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200"
              >
                <span>View Live Sessions</span>
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

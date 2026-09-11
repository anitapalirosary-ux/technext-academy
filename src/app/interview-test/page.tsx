'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Code2,
  Database,
  Cloud,
  Layers,
  Sparkles,
  Terminal,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  BarChart3,
  Award,
  BookOpen,
  UserCheck,
  Download,
  Share2,
  ChevronRight,
  User,
  ShieldCheck,
  Check,
  X
} from 'lucide-react';

interface Question {
  id: number;
  category: string;
  icon: any;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  question: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'C# & .NET',
    icon: Code2,
    difficulty: 'Intermediate',
    question: 'What is the primary difference between Task.Run and async/await in C# .NET?',
    options: [
      'Task.Run queues CPU-bound work to the ThreadPool, while async/await allows non-blocking I/O operations without occupying a thread.',
      'Task.Run is only for UI threads, while async/await is exclusively for console and background worker services.',
      'There is no difference; they are interchangeable syntaxes.',
      'Task.Run blocks the current thread until completion, while async/await runs asynchronously.',
    ],
    correctIndex: 0,
    explanation: 'Task.Run is meant for CPU-bound computations offloaded to the ThreadPool. Pure I/O async operations (like HTTP requests or database calls) do not need thread pooling.',
  },
  {
    id: 2,
    category: 'ASP.NET Core & Web API',
    icon: Terminal,
    difficulty: 'Intermediate',
    question: 'In ASP.NET Core Dependency Injection, what is the lifetime of a service registered with AddScoped?',
    options: [
      'A new instance is created every time it is requested from the container.',
      'A single instance is created once per HTTP request and shared across all components during that request.',
      'A single instance is created when the application starts and shared across all requests throughout the app lifetime.',
      'An instance is created and cached permanently in memory across sessions.',
    ],
    correctIndex: 1,
    explanation: 'Scoped services (AddScoped) are created once per client request (HTTP connection) and disposed at the end of the request pipeline.',
  },
  {
    id: 3,
    category: 'SQL Server',
    icon: Database,
    difficulty: 'Intermediate',
    question: 'When should you prefer a Non-Clustered Index with Included Columns (INCLUDE) in SQL Server?',
    options: [
      'When you want to define the physical sorting order of the entire table.',
      'To cover all columns in a query without exceeding index key size limits or increasing B-Tree depth excessively.',
      'Only on columns with unique constraints like primary keys.',
      'Whenever the table has fewer than 100 rows.',
    ],
    correctIndex: 1,
    explanation: 'Included columns are added at the leaf level of the non-clustered index, satisfying queries entirely from index pages without bookmark lookups into the base table.',
  },
  {
    id: 4,
    category: 'Azure & Cloud',
    icon: Cloud,
    difficulty: 'Advanced',
    question: 'Which Azure messaging service should you choose when you require strict FIFO ordering, message deduplication, and transaction-like session handling?',
    options: [
      'Azure Event Grid',
      'Azure Event Hubs',
      'Azure Service Bus (Queues & Topics with Sessions)',
      'Azure Storage Queues',
    ],
    correctIndex: 2,
    explanation: 'Azure Service Bus is built for high-value enterprise financial and order workflows requiring guaranteed FIFO ordering, deduplication, and dead-letter queues.',
  },
  {
    id: 5,
    category: 'Architecture & System Design',
    icon: Layers,
    difficulty: 'Advanced',
    question: 'In Clean Architecture, how is the Dependency Inversion Principle applied between the Domain and Infrastructure layers?',
    options: [
      'Domain references Infrastructure directly for database operations.',
      'Domain defines repository interfaces, and Infrastructure implements them, ensuring business logic has no external framework dependencies.',
      'Controllers communicate directly with database context without business logic.',
      'All layers share identical DTOs without domain mapping.',
    ],
    correctIndex: 1,
    explanation: 'In Clean Architecture, dependencies point inward. The Domain core defines abstractions (interfaces), while outer layers (Infrastructure, Persistence) implement them.',
  },
  {
    id: 6,
    category: 'Real-World Scenarios',
    icon: Sparkles,
    difficulty: 'Advanced',
    question: 'A high-traffic Web API experiences periodic HTTP 500 socket exhaustion errors during peak load. What is the most probable architectural cause and remedy?',
    options: [
      'Creating a new HttpClient instance per request; fix by using IHttpClientFactory or singleton client.',
      'Using async/await too frequently; fix by converting everything to synchronous calls.',
      'Having too many database indexes; fix by dropping all indexes.',
      'Enabling response caching headers on GET endpoints.',
    ],
    correctIndex: 0,
    explanation: 'Instantiating new HttpClient instances exhausts available TCP sockets in the TIME_WAIT state. Using IHttpClientFactory pools underlying HttpMessageHandlers properly.',
  },
];

import { useAuth } from '@/context/AuthContext';

export default function InterviewTestPage() {
  const { user } = useAuth();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  const handleSelectOption = (optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIdx]: optionIdx,
    }));
  };

  const handleNext = () => {
    if (currentIdx < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsSubmitted(false);
    setTimeLeft(600);
  };

  // Calculations
  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  let score = 0;

  ASSESSMENT_QUESTIONS.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.correctIndex) {
      score += 1;
    }
  });

  const scorePercentage = Math.round((score / totalQuestions) * 100);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 3-question sliding window pagination
  const getVisibleQuestionIndices = () => {
    const windowSize = 3;
    let start = currentIdx;
    if (start + windowSize > totalQuestions) {
      start = Math.max(0, totalQuestions - windowSize);
    }
    return Array.from({ length: Math.min(windowSize, totalQuestions) }, (_, i) => start + i);
  };

  const currentQ = ASSESSMENT_QUESTIONS[currentIdx];
  const Icon = currentQ.icon;

  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-textPrimary overflow-hidden font-sans">
      {/* Navigation Header */}
      <Header />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden bg-brand-bg">
        {/* Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-20">
          
          {/* Top Bar Status */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-border/60">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest">
                  Assessment Simulator
                </span>
                {user?.name && (
                  <span className="text-[10px] text-brand-textSecondary bg-brand-surface border border-brand-border px-2 py-0.5 rounded-full">
                    Candidate: <strong className="text-white">{user.name}</strong>
                  </span>
                )}
              </div>
              <h1 className="text-xl md:text-2xl font-bold font-display text-white mt-1">
                Technical Interview Readiness Assessment
              </h1>
            </div>

            {!isSubmitted && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-surface border border-brand-border text-xs font-mono text-white">
                  <Clock className="w-3.5 h-3.5 text-brand-primary" />
                  <span>{formatTime(timeLeft)}</span>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={answeredCount === 0}
                  className="px-4 py-1.5 rounded-xl bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs transition-all shadow-md disabled:opacity-40"
                >
                  Submit Test
                </button>
              </div>
            )}
          </div>

          {!isSubmitted ? (
            /* Active Test Interface */
            <div className="bg-brand-surface border border-brand-border/80 rounded-3xl p-6 md:p-8 shadow-2xl relative text-left">
              {/* Progress Indicator */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-brand-textSecondary mb-2">
                  <span>Question {currentIdx + 1} of {totalQuestions}</span>
                  <span className="font-mono text-brand-primary">{Math.round(((currentIdx + 1) / totalQuestions) * 100)}% Completed</span>
                </div>
                <div className="w-full h-1.5 bg-brand-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-primary transition-all duration-300"
                    style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Category & Details */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-brand-bg border border-brand-border text-brand-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold font-display text-white uppercase tracking-wider">
                    {currentQ.category}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-bg border border-brand-primary/30 text-brand-primary font-semibold">
                  {currentQ.difficulty}
                </span>
              </div>

              {/* Question Text */}
              <h2 className="text-base md:text-lg font-bold text-white mb-6 leading-relaxed">
                {currentQ.question}
              </h2>

              {/* Options Selector */}
              <div className="space-y-3 mb-8">
                {currentQ.options.map((option, oIdx) => {
                  const isSelected = selectedAnswers[currentIdx] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(oIdx)}
                      className={`w-full p-4 rounded-2xl border text-left text-xs md:text-sm transition-all duration-200 flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-brand-primary/10 border-brand-primary text-white shadow-[0_0_15px_rgba(0,237,100,0.1)]'
                          : 'bg-brand-bg/60 border-brand-border hover:border-brand-border/90 text-white/80'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center text-[10px] font-mono mt-0.5 transition-colors ${
                        isSelected
                          ? 'bg-brand-primary text-[#0B0428] border-brand-primary font-bold'
                          : 'border-white/30 text-white/60'
                      }`}>
                        {String.fromCharCode(65 + oIdx)}
                      </div>
                      <span className="leading-relaxed">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-1.5 sm:gap-3 pt-4 border-t border-brand-border/60">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl border border-white/20 hover:border-brand-primary text-white hover:text-brand-primary text-xs font-semibold disabled:opacity-30 disabled:pointer-events-none transition-colors shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                {/* Sliding 3-Number Window */}
                <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                  {getVisibleQuestionIndices().map((dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCurrentIdx(dotIdx)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-mono transition-all ${
                        currentIdx === dotIdx
                          ? 'bg-brand-primary text-[#0B0428] font-bold shadow-[0_0_10px_rgba(0,237,100,0.3)]'
                          : selectedAnswers[dotIdx] !== undefined
                          ? 'bg-brand-surface border border-brand-primary/40 text-brand-primary'
                          : 'bg-brand-bg text-white/50 hover:text-white border border-brand-border/60'
                      }`}
                    >
                      {dotIdx + 1}
                    </button>
                  ))}
                </div>

                {currentIdx === totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-xl bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] text-xs font-bold transition-all shadow-md shrink-0"
                  >
                    <span>Finish</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-xl bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] text-xs font-bold transition-all shadow-md shrink-0"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Assessment Report Scorecard */
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-left"
            >
              {/* Scorecard Hero Card */}
              <div className="bg-brand-surface border border-brand-primary/40 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-brand-border/60">
                  <div>
                    <span className="text-[11px] font-mono text-brand-primary uppercase tracking-widest font-bold block mb-1">
                      Official Candidate Assessment Report
                    </span>
                    <h2 className="text-2xl font-bold font-display text-white">
                      {user?.name ? `${user.name}'s Interview Readiness Score` : 'Technical Interview Readiness Score'}
                    </h2>
                    <p className="text-xs text-brand-textSecondary mt-1">
                      Completed on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>

                  {/* Circular Score Highlight */}
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 rounded-2xl bg-brand-bg border-2 border-brand-primary flex flex-col items-center justify-center shadow-[0_0_25px_rgba(0,237,100,0.2)]">
                      <span className="text-3xl font-display font-black text-brand-primary leading-none">
                        {scorePercentage}%
                      </span>
                      <span className="text-[10px] font-mono text-white/70 uppercase mt-1">
                        {score} / {totalQuestions} Correct
                      </span>
                    </div>
                  </div>
                </div>

                {/* Level Assessment Outcome */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 rounded-2xl bg-brand-bg/80 border border-brand-border">
                    <span className="text-[10px] font-mono text-brand-textSecondary uppercase block mb-1">
                      Evaluated Level:
                    </span>
                    <strong className="text-sm text-white font-bold block">
                      {scorePercentage >= 80 ? 'SDE-2 / Senior Ready' : scorePercentage >= 50 ? 'SDE-1 / Intermediate' : 'Foundation Learner'}
                    </strong>
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-bg/80 border border-brand-border">
                    <span className="text-[10px] font-mono text-brand-textSecondary uppercase block mb-1">
                      Primary Strength:
                    </span>
                    <strong className="text-sm text-brand-primary font-bold block">
                      {scorePercentage >= 60 ? 'C# Architecture & DI' : 'Basic OOP Concepts'}
                    </strong>
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-bg/80 border border-brand-border">
                    <span className="text-[10px] font-mono text-brand-textSecondary uppercase block mb-1">
                      Immediate Focus Gap:
                    </span>
                    <strong className="text-sm text-white/90 font-bold block">
                      {scorePercentage >= 80 ? 'High-Scale Cloud Messaging' : 'SQL Indexing & Web API Auth'}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown Per Question */}
              <div className="bg-brand-surface border border-brand-border/70 rounded-3xl p-6 md:p-8">
                <h3 className="text-base font-bold font-display text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-brand-primary" />
                  <span>Question-by-Question Gap Analysis</span>
                </h3>

                <div className="space-y-4">
                  {ASSESSMENT_QUESTIONS.map((q, idx) => {
                    const isCorrect = selectedAnswers[idx] === q.correctIndex;
                    const userAnswer = selectedAnswers[idx];
                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-2xl border transition-all ${
                          isCorrect
                            ? 'bg-brand-bg/60 border-brand-primary/40'
                            : 'bg-brand-bg/60 border-red-500/30'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            {isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                            )}
                            <span className="text-xs font-bold text-white">
                              Q{idx + 1}. {q.category}
                            </span>
                          </div>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                            isCorrect
                              ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/30'
                              : 'bg-red-500/10 text-red-400 border border-red-500/30'
                          }`}>
                            {isCorrect ? 'Correct (+1)' : 'Needs Review'}
                          </span>
                        </div>

                        <p className="text-xs text-white/90 mb-2">{q.question}</p>

                        <div className="text-[11px] text-brand-textSecondary space-y-1 mb-2">
                          <div>
                            Your Answer: <strong className={isCorrect ? 'text-brand-primary' : 'text-red-400'}>
                              {userAnswer !== undefined ? q.options[userAnswer] : 'Not Answered'}
                            </strong>
                          </div>
                          {!isCorrect && (
                            <div>
                              Correct Answer: <strong className="text-brand-primary">{q.options[q.correctIndex]}</strong>
                            </div>
                          )}
                        </div>

                        <p className="text-[11px] text-white/70 italic bg-brand-surface/80 p-2.5 rounded-xl border border-brand-border/40">
                          💡 <strong>Key Learning:</strong> {q.explanation}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Next Actions & Mentorship Offer */}
              <div className="bg-brand-surface/90 border border-brand-primary/40 rounded-3xl p-6 md:p-8 text-center space-y-4">
                <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest block">
                  Next Step Recommendation
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                  Bridge Your Technical Gaps with Senior SDE Mentorship
                </h3>
                <p className="text-xs md:text-sm text-brand-textSecondary max-w-xl mx-auto leading-relaxed">
                  Review your assessment report with an experienced Software Engineer to plan your structured mock interview practice and cohort readiness.
                </p>

                <div className="flex flex-wrap gap-3 items-center justify-center pt-2">
                  <Link
                    href="/#sessions"
                    className="inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] px-6 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all shadow-md hover:scale-105"
                  >
                    <span>Apply for Live 1-Hour Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-primary text-white hover:text-brand-primary bg-brand-surface/40 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Assessment</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* Footer Navigation */}
      <Footer />
    </main>
  );
}

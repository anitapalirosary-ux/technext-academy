'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  Calendar,
  LogOut,
  X,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function UserProfileModal() {
  const { user, isProfileOpen, setIsProfileOpen, logout } = useAuth();

  if (!user || !isProfileOpen) return null;

  const initials = user.name
    ? user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'U';

  const memberSince = user.timestamp
    ? new Date(user.timestamp).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Active Student';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0428]/85 backdrop-blur-md">
        {/* Backdrop click to close */}
        <div
          className="absolute inset-0"
          onClick={() => setIsProfileOpen(false)}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-brand-surface border border-brand-border/80 rounded-3xl p-6 md:p-8 shadow-2xl z-10 text-left overflow-hidden"
        >
          {/* Top Decorative Glow */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={() => setIsProfileOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full bg-brand-bg border border-brand-border hover:border-brand-primary text-white hover:text-brand-primary transition-colors"
            aria-label="Close Profile"
          >
            <X className="w-4 h-4" />
          </button>

          {/* User Header Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-primary text-[#0B0428] font-bold font-display text-2xl flex items-center justify-center shadow-lg shadow-brand-primary/20 shrink-0">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider text-brand-primary font-bold bg-brand-primary/10 border border-brand-primary/30 px-2 py-0.5 rounded-full mb-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified Candidate
              </span>
              <h3 className="text-xl font-bold font-display text-white truncate">
                {user.name}
              </h3>
              <p className="text-xs text-brand-textSecondary truncate">
                {user.email}
              </p>
            </div>
          </div>

          {/* Information Cards Grid */}
          <div className="space-y-3 mb-6">
            {/* Full Name */}
            <div className="flex items-center gap-3 p-3 bg-brand-bg/70 border border-brand-border rounded-xl">
              <div className="p-2 rounded-lg bg-brand-surface text-brand-primary">
                <User className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-brand-textSecondary uppercase font-medium">Candidate Name</p>
                <p className="text-xs md:text-sm font-semibold text-white truncate">{user.name}</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-center gap-3 p-3 bg-brand-bg/70 border border-brand-border rounded-xl">
              <div className="p-2 rounded-lg bg-brand-surface text-brand-primary">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-brand-textSecondary uppercase font-medium">Email Address</p>
                <p className="text-xs md:text-sm font-semibold text-white truncate">{user.email}</p>
              </div>
            </div>

            {/* Phone Number */}
            {user.phone && (
              <div className="flex items-center gap-3 p-3 bg-brand-bg/70 border border-brand-border rounded-xl">
                <div className="p-2 rounded-lg bg-brand-surface text-brand-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] text-brand-textSecondary uppercase font-medium">Contact Number</p>
                  <p className="text-xs md:text-sm font-semibold text-white truncate">{user.phone}</p>
                </div>
              </div>
            )}

            {/* Account Role & Member Since */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-brand-bg/70 border border-brand-border rounded-xl">
                <div className="flex items-center gap-1.5 text-brand-primary mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="text-[10px] text-brand-textSecondary uppercase font-medium">Role</span>
                </div>
                <p className="text-xs font-bold text-white capitalize">{user.role || 'Student'}</p>
              </div>

              <div className="p-3 bg-brand-bg/70 border border-brand-border rounded-xl">
                <div className="flex items-center gap-1.5 text-brand-primary mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-[10px] text-brand-textSecondary uppercase font-medium">Joined</span>
                </div>
                <p className="text-xs font-bold text-white">{memberSince}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2.5">
            <Link
              href="/interview-test"
              onClick={() => setIsProfileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-[#0B0428] font-bold text-xs md:text-sm py-2.5 rounded-xl transition-all shadow-md hover:scale-[1.02]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Technical Interview Assessment</span>
            </Link>

            <button
              onClick={() => {
                logout();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-semibold text-xs md:text-sm py-2.5 rounded-xl transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

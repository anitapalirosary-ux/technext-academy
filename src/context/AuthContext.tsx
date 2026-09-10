'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export interface UserSession {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  loggedIn: boolean;
  timestamp?: string;
}

interface AuthContextType {
  user: UserSession | null;
  loading: boolean;
  login: (userData: Omit<UserSession, 'loggedIn'>) => void;
  logout: () => void;
  isProfileOpen: boolean;
  setIsProfileOpen: (open: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Sync state from localStorage on mount and across events
  useEffect(() => {
    const syncUser = () => {
      try {
        const stored = localStorage.getItem('technext_user');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && parsed.loggedIn) {
            setUser(parsed);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (e) {
        console.error('Failed to parse technext_user from localStorage', e);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    syncUser();

    window.addEventListener('storage', syncUser);
    window.addEventListener('technext_auth_change', syncUser);

    return () => {
      window.removeEventListener('storage', syncUser);
      window.removeEventListener('technext_auth_change', syncUser);
    };
  }, []);

  const login = (userData: Omit<UserSession, 'loggedIn'>) => {
    const fullUser: UserSession = {
      ...userData,
      loggedIn: true,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem('technext_user', JSON.stringify(fullUser));
    } catch (e) {
      console.error('Failed to save user in localStorage', e);
    }
    setUser(fullUser);
    window.dispatchEvent(new Event('technext_auth_change'));
  };

  const logout = () => {
    try {
      localStorage.removeItem('technext_user');
    } catch (e) {
      console.error('Failed to remove user from localStorage', e);
    }
    setUser(null);
    setIsProfileOpen(false);
    window.dispatchEvent(new Event('technext_auth_change'));
    router.push('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isProfileOpen,
        setIsProfileOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

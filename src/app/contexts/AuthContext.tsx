import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'guest' | 'member' | 'admin' | 'admin_savings_loans';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  photo?: string;
  phone?: string;
  address?: string;
  memberNumber?: string;
  joinDate?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: any) => Promise<void>;
  updateProfile: (data: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 500));

    // Demo users
    const demoUsers: Record<string, User> = {
      'anggota@kmp.com': {
        id: '1',
        name: 'Budi Santoso',
        email: 'anggota@kmp.com',
        role: 'member',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        phone: '081234567890',
        address: 'Jl. Merdeka No. 123, Jakarta',
        memberNumber: 'KMP-2024-001',
        joinDate: '2024-01-15'
      },
      'admin@kmp.com': {
        id: '2',
        name: 'Admin KMP',
        email: 'admin@kmp.com',
        role: 'admin',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      'adminsimpan@kmp.com': {
        id: '3',
        name: 'Admin Simpan Pinjam',
        email: 'adminsimpan@kmp.com',
        role: 'admin_savings_loans',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      }
    };

    const foundUser = demoUsers[email];
    if (foundUser && password === 'password') {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
    } else {
      throw new Error('Email atau password salah');
    }
  };

  const register = async (data: any) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      role: 'member',
      memberNumber: `KMP-2026-${Math.floor(Math.random() * 1000)}`,
      joinDate: new Date().toISOString().split('T')[0]
    };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        updateProfile,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

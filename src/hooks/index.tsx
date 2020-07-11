import React from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

export const AppProviders: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

'use client';

import { LanguageProvider } from '@/app/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LanguageProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}

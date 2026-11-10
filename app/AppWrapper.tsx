'use client';

import { LanguageProvider } from '@/app/LanguageContext';
import Footer from '@/components/Footer';
import GoogleTagManager from '@/components/GoogleTagManager';
import Header from '@/components/Header';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <GoogleTagManager gtmId="GTM-KPWVNXTC" />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}

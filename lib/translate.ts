'use client';

import { Language, translations } from '@/lib/translations';
import { useState, useEffect } from 'react';

// Simple function to get translation without context dependency
export function t(language: Language, path: string): string {
  const keys = path.split('.');
  let value: any = translations[language];

  for (const key of keys) {
    value = value?.[key];
    if (!value) return path;
  }

  return typeof value === 'string' ? value : path;
}

// Client-only hook for dynamic language switching
export function useLanguageAndTranslate() {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguagePref = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const translate = (path: string) => t(language, path);

  return {
    language,
    setLanguage: setLanguagePref,
    t: translate,
    mounted,
  };
}

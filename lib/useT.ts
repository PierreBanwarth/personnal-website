'use client';

import { Language, translations } from '@/lib/translations';
import { useLanguage } from '@/app/LanguageContext';

export function t(language: Language, path: string): string {
  const keys = path.split('.');
  let value: any = translations[language];

  for (const key of keys) {
    value = value?.[key];
    if (!value) return path;
  }

  return typeof value === 'string' ? value : path;
}

// Hook version for client components
export function useT() {
  const { language } = useLanguage();
  return (path: string): string => t(language, path);
}

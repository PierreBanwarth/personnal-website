'use client';

import { useLanguage } from '@/app/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium transition-colors ${
          language === 'en'
            ? 'text-charcoal border-b-2 border-charcoal'
            : 'text-charcoal/60 hover:text-charcoal'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 text-sm font-medium transition-colors ${
          language === 'fr'
            ? 'text-charcoal border-b-2 border-charcoal'
            : 'text-charcoal/60 hover:text-charcoal'
        }`}
      >
        FR
      </button>
    </div>
  );
}

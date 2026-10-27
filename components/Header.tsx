'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/app/LanguageContext';
import { useT } from '@/lib/useT';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t = useT();
    const { language, setLanguage } = useLanguage();

    return (
        <header className="sticky top-0 z-50 bg-warm-white border-b border-charcoal/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-semibold tracking-tight text-charcoal hover:text-charcoal/70 transition-colors">
                        Pierre Banwarth
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center">
                        <Link href="/live-images" className="text-sm text-charcoal hover:text-charcoal/60 transition-colors">
                            {t('nav.liveVideos')}
                        </Link>
                        <Link href="/cyanotypes" className="text-sm text-charcoal hover:text-charcoal/60 transition-colors">
                            {t('nav.cyanotypes')}
                        </Link>
                        <Link href="/apparatus" className="text-sm text-charcoal hover:text-charcoal/60 transition-colors">
                            {t('nav.apparatus')}
                        </Link>
                        <Link href="/about" className="text-sm text-charcoal hover:text-charcoal/60 transition-colors">
                            {t('nav.about')}
                        </Link>
                        <Link href="/contact" className="text-sm text-charcoal hover:text-charcoal/60 transition-colors">
                            {t('nav.contact')}
                        </Link>
                        <div className="pl-4 border-l border-charcoal/20 flex gap-2">
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
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-charcoal"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden pb-6 space-y-4 border-t border-charcoal/10 pt-6">
                        <Link href="/live-images" className="block text-charcoal hover:text-charcoal/60 transition-colors">
                            {t('nav.liveVideos')}
                        </Link>
                        <Link href="/cyanotypes" className="block text-charcoal hover:text-charcoal/60 transition-colors">
                            {t('nav.cyanotypes')}
                        </Link>
                        <Link href="/apparatus" className="block text-charcoal hover:text-charcoal/60 transition-colors">
                            {t('nav.apparatus')}
                        </Link>
                        <Link href="/about" className="block text-charcoal hover:text-charcoal/60 transition-colors">
                            {t('nav.about')}
                        </Link>
                        <Link href="/contact" className="block text-charcoal hover:text-charcoal/60 transition-colors">
                            {t('nav.contact')}
                        </Link>
                        <div className="pt-4 border-t border-charcoal/10 flex gap-2">
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
                    </nav>
                )}
            </div>
        </header>
    );
}

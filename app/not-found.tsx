'use client';

import Link from 'next/link';
import { useT } from '@/lib/useT';

export default function NotFound() {
    const t = useT();

    return (
        <div className="bg-warm-white min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-6xl font-bold text-charcoal mb-4">404</h1>
                <h2 className="text-2xl font-bold text-charcoal mb-6">{t('notFound.title')}</h2>
                <p className="text-charcoal/70 mb-12">{t('notFound.description')}</p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-charcoal text-warm-white hover:bg-charcoal/90 transition-colors font-medium"
                >
                    {t('notFound.returnHome')}
                </Link>
            </div>
        </div>
    );
}

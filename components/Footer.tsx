'use client';

import { useEffect, useState } from 'react';
import { useT } from '@/lib/useT';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(2026);
    const t = useT();

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-charcoal text-warm-white mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
                        <p className="text-sm text-warm-white/80 mb-2">
                            {t('footer.contactDesc')}
                        </p>
                        <a
                            href="mailto:contact@pierrebanwarth.com"
                            className="text-sm text-warm-white hover:text-warm-white/70 transition-colors"
                        >
                            contact@pierrebanwarth.com
                        </a>
                    </div>

                    {/* Follow */}
                    <div>
                        <h3 className="font-semibold mb-4">{t('footer.follow')}</h3>
                        <a
                            href="https://instagram.com/pierre_banwarth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-warm-white hover:text-warm-white/70 transition-colors"
                        >
                            {t('footer.instagram')}
                        </a>
                    </div>

                    {/* Info */}
                    <div>
                        <h3 className="font-semibold mb-4">{t('footer.info')}</h3>
                        <p className="text-xs text-warm-white/70">
                            {t('footer.photography')}
                        </p>
                        <p className="text-xs text-warm-white/70">
                            {t('footer.cyanotypes')}
                        </p>
                    </div>
                </div>

                <div className="border-t border-warm-white/20 pt-8 text-xs text-warm-white/60 text-center">
                    <p>{t('footer.copyright').replace('{year}', currentYear.toString())}</p>
                    <p className="mt-2">{t('footer.siteDesign')}</p>
                </div>
            </div>
        </footer>
    );
}

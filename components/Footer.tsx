'use client';

import { useT } from '@/lib/useT';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const t = useT();

    return (
        <footer className="bg-charcoal text-warm-white mt-20">
            <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
                <div className="grid md:grid-cols-3 gap-x-12 gap-y-10 border-b border-warm-white/20 pb-10">
                    {/* Contact */}
                    <div className="space-y-3">
                        <h3 className="text-xs uppercase tracking-widest font-semibold text-warm-white/70">{t('footer.contact')}</h3>
                        <p className="text-sm text-warm-white/80">
                            {t('footer.contactDesc')}
                        </p>
                        <ObfuscatedEmail className="text-sm text-warm-white hover:text-warm-white/70 transition-colors" />
                    </div>

                    {/* Follow */}
                    <div className="space-y-3">
                        <h3 className="text-xs uppercase tracking-widest font-semibold text-warm-white/70">{t('footer.follow')}</h3>
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
                    <div className="space-y-3">
                        <h3 className="text-xs uppercase tracking-widest font-semibold text-warm-white/70">{t('footer.info')}</h3>
                        <p className="text-xs text-warm-white/70">
                            {t('footer.photography')}
                        </p>
                        <p className="text-xs text-warm-white/70">
                            {t('footer.cyanotypes')}<br />
                            <span className="text-sm font-semibold text-warm-white">Thierry Chabanis</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-6 text-xs text-warm-white/60">
                    <p suppressHydrationWarning>{t('footer.copyright').replace('{year}', currentYear.toString())}</p>
                    <p>{t('footer.siteDesign')}</p>
                </div>
            </div>
        </footer>
    );
}

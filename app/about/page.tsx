'use client';

import Link from 'next/link';
import { useT } from '@/lib/useT';

export default function AboutPage() {
    const t = useT();
    return (
        <div className="bg-warm-white min-h-screen">
            {/* Header */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-12">{t('about.title')}</h1>
            </section>

            {/* Main Content */}
            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Biography Section */}
                <div className="mb-16 pb-16 border-b border-charcoal/10">
                    <h2 className="text-2xl font-bold text-charcoal mb-6">{t('about.biography')}</h2>
                    <p className="text-charcoal/80 leading-relaxed whitespace-pre-line">
                        {t('about.biographyText')}
                    </p>
                </div>

                {/* Practice Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-charcoal mb-6">{t('about.gameBoyCameraTitle')}</h2>
                    <p className="text-charcoal/80 mb-4 leading-relaxed">
                        {t('about.gameBoyCameraDesc1')}
                    </p>
                    <p className="text-charcoal/80 mb-4 leading-relaxed">
                        {t('about.gameBoyCameraDesc2')}
                    </p>
                    <p className="text-charcoal/80 leading-relaxed">
                        {t('about.gameBoyCameraDesc3')}
                    </p>
                </div>

                {/* Work Areas */}
                <div className="mb-16 pb-16 border-b border-charcoal/10">
                    <h2 className="text-2xl font-bold text-charcoal mb-6">{t('about.twoApproaches')}</h2>

                    <div className="mb-12">
                        <h3 className="text-lg font-semibold text-charcoal mb-3">{t('about.liveImagesTitle')}</h3>
                        <p className="text-charcoal/80 leading-relaxed">
                            {t('about.liveImagesDesc')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-3">{t('about.cyanotypesTitle')}</h3>
                        <p className="text-charcoal/80 mb-3 leading-relaxed">
                            {t('about.cyanotypesDesc1')}
                        </p>
                        <p className="text-charcoal/80 leading-relaxed">
                            {t('about.cyanotypesDesc2')}
                        </p>
                    </div>
                </div>

                {/* Collaboration */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-charcoal mb-6">{t('about.collaboration')}</h2>
                    <p className="text-charcoal/80 mb-4 leading-relaxed">
                        {t('about.collaborationDesc')}
                    </p>
                    <p className="text-charcoal/80 leading-relaxed">
                        This is not a hierarchical relationship. Both the photograph and the print are essential to the final work. The printer brings their own knowledge and decisions to each print, making each one an individual object.
                    </p>
                </div>

                {/* Contact */}
                <div className="bg-charcoal/5 p-8 rounded border border-charcoal/10">
                    <h2 className="text-xl font-bold text-charcoal mb-4">{t('contact.getInTouch')}</h2>
                    <p className="text-charcoal/80 mb-6">
                        {t('contact.description')}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-6 py-3 bg-charcoal text-warm-white hover:bg-charcoal/90 transition-colors font-medium"
                    >
                        {t('contact.title')} →
                    </Link>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="bg-cyanotype/10 border-t-2 border-cyanotype py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-charcoal/70 mb-4">{t('home.followUpdates')}</p>
                    <a
                        href="https://instagram.com/pierre_banwarth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-cyanotype font-semibold hover:text-cyanotype/80 transition-colors text-lg"
                    >
                        @pierre_banwarth
                    </a>
                </div>
            </section>
        </div>
    );
}

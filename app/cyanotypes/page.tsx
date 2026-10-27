'use client';

import { cyanotypeWorks } from '@/lib/data';
import Link from 'next/link';
import { useT } from '@/lib/useT';
import MediaDisplay from '@/components/MediaDisplay';

export default function CyanotypesPage() {
    const t = useT();
    return (
        <div className="bg-warm-white min-h-screen">
            {/* Header */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">{t('cyanotypes.title')}</h1>
                <p className="text-lg text-charcoal/70 max-w-3xl">
                    {t('cyanotypes.description')}
                </p>
            </section>

            {/* Gallery */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <h2 className="text-3xl font-bold text-charcoal mb-12">{t('cyanotypes.gallery')}</h2>
                {cyanotypeWorks.length > 0 ? (
                    <div className="grid md:grid-cols-3 gap-8">
                        {cyanotypeWorks.map((work) => (
                            <div key={work.id}>
                                {/* Main Image */}
                                {work.image && (
                                    <div className="relative bg-charcoal/5 aspect-[3/4] mb-6 overflow-hidden rounded">
                                        <img
                                            src={work.image}
                                            alt={work.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                )}

                                {/* Metadata */}
                                <div>
                                    <h3 className="text-lg font-semibold text-charcoal mb-2">{work.title}</h3>
                                    {work.date && (
                                        <p className="text-sm text-charcoal/60 mb-1">{work.date}</p>
                                    )}
                                    {work.description && (
                                        <p className="text-sm text-charcoal/70">{work.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-3xl mx-auto text-center py-16">
                        <p className="text-charcoal/70">No cyanotypes to display yet.</p>
                    </div>
                )}
            </section>

            {/* About the Process Section */}
            <section className="bg-charcoal/5 py-16 md:py-24 border-y border-charcoal/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-3xl font-bold text-charcoal mb-6">{t('cyanotypes.about')}</h2>
                        <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                            {t('cyanotypes.processIntro')}
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 className="text-xl font-bold text-charcoal mb-4">{t('cyanotypes.step1Title')}</h3>
                            <p className="text-charcoal/70 leading-relaxed">
                                {t('cyanotypes.step1Desc')}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-charcoal mb-4">{t('cyanotypes.step2Title')}</h3>
                            <p className="text-charcoal/70 leading-relaxed">
                                {t('cyanotypes.step2Desc')}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-charcoal mb-4">{t('cyanotypes.step3Title')}</h3>
                            <p className="text-charcoal/70 leading-relaxed">
                                {t('cyanotypes.step3Desc')}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-charcoal mb-4">{t('cyanotypes.step4Title')}</h3>
                            <p className="text-charcoal/70 leading-relaxed">
                                {t('cyanotypes.step4Desc')}
                            </p>
                        </div>
                    </div>

                    {/* Characteristics */}
                    <div className="max-w-3xl">
                        <h3 className="text-2xl font-bold text-charcoal mb-6">{t('cyanotypes.characteristics')}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-4">
                                <span className="text-cyanotype font-bold mt-1">•</span>
                                <span className="text-charcoal/80">{t('cyanotypes.char1')}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-cyanotype font-bold mt-1">•</span>
                                <span className="text-charcoal/80">{t('cyanotypes.char2')}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-cyanotype font-bold mt-1">•</span>
                                <span className="text-charcoal/80">{t('cyanotypes.char3')}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-cyanotype font-bold mt-1">•</span>
                                <span className="text-charcoal/80">{t('cyanotypes.char4')}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-cyanotype font-bold mt-1">•</span>
                                <span className="text-charcoal/80">{t('cyanotypes.char5')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Cyanotype Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-charcoal mb-6">{t('cyanotypes.resonance')}</h2>
                    <p className="text-lg text-charcoal/70 leading-relaxed">
                        {t('cyanotypes.resonanceText')}
                    </p>
                </div>
            </section>

            {/* Call to action */}
            <section className="bg-charcoal text-warm-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('cyanotypes.interested')}</h2>
                    <p className="text-warm-white/80 mb-8">
                        {t('cyanotypes.interestedDesc')}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-6 py-3 bg-warm-white text-charcoal hover:bg-warm-white/90 transition-colors font-medium"
                    >
                        {t('cyanotypes.getInTouch')}
                    </Link>
                </div>
            </section>
        </div>
    );
}

'use client';

import { cyanotypeWorks } from '@/lib/data';
import { cyanotypeTexts } from '@/lib/cyanotypeTexts';
import Link from 'next/link';
import { useT } from '@/lib/useT';
import MediaDisplay from '@/components/MediaDisplay';

export default function CyanotypesPage() {
    const t = useT();
    return (
        <div className="bg-warm-white min-h-screen">
            {/* Hero Section - Project Title and Subtitle */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
                        {cyanotypeTexts.presentation.title}
                    </h1>
                    <p className="text-xl text-charcoal/80 leading-relaxed">
                        {cyanotypeTexts.presentation.subtitle}
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
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
                        <p className="text-charcoal/70">Les impressions de cyanotype seront bientôt présentées ici.</p>
                    </div>
                )}
            </section>

            {/* About the Process Section */}
            <section className="bg-charcoal/5 py-16 md:py-24 border-y border-charcoal/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-3xl font-bold text-charcoal mb-6">
                            {cyanotypeTexts.process.title}
                        </h2>
                        <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                            {cyanotypeTexts.process.intro}
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        {cyanotypeTexts.process.steps.map((step, index) => (
                            <div key={index}>
                                <h3 className="text-xl font-bold text-charcoal mb-4">{step.title}</h3>
                                <p className="text-charcoal/70 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Characteristics */}
                    <div className="max-w-3xl">
                        <h3 className="text-2xl font-bold text-charcoal mb-6">
                            {cyanotypeTexts.characteristics.title}
                        </h3>
                        <ul className="space-y-3">
                            {cyanotypeTexts.characteristics.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="text-cyanotype font-bold mt-1">•</span>
                                    <span className="text-charcoal/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Cyanotype Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-charcoal mb-6">
                        {cyanotypeTexts.whyCyanotype.title}
                    </h2>
                    <p className="text-lg text-charcoal/70 leading-relaxed">
                        {cyanotypeTexts.whyCyanotype.text}
                    </p>
                </div>
            </section>

            {/* Scale and Perception Section - Highlighted */}
            <section className="bg-charcoal/5 py-16 md:py-24 border-y border-charcoal/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold text-charcoal mb-6">
                            {cyanotypeTexts.scalePerception.title}
                        </h2>
                        <p className="text-lg text-charcoal/70 leading-relaxed">
                            {cyanotypeTexts.scalePerception.text}
                        </p>
                    </div>
                </div>
            </section>

            {/* Credits and Collaboration */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl border-t border-charcoal/10 pt-12">
                    <p className="text-sm text-charcoal/60 mb-4">{cyanotypeTexts.credits.author}</p>
                    <p className="text-sm text-charcoal/60 mb-4">{cyanotypeTexts.credits.photography}</p>
                    <p className="text-sm text-charcoal/60">{cyanotypeTexts.credits.collaboration}</p>
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

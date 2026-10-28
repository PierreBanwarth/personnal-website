'use client';

import { cyanotypeWorks } from '@/lib/data';
import { cyanotypeTexts } from '@/lib/cyanotypeTexts';
import Link from 'next/link';
import { useT } from '@/lib/useT';
import { useState } from 'react';

export default function CyanotypesPage() {
    const t = useT();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    return (
        <div className="bg-warm-white min-h-screen">
            {/* Introduction / Hero Section */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-8 md:pb-12">
                <div className="space-y-4 mb-16">
                    <p className="text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
                        Série photographique
                    </p>
                    <h1 className="text-6xl md:text-7xl font-bold text-charcoal leading-tight">
                        {cyanotypeTexts.presentation.title}
                    </h1>
                </div>
                <p className="text-lg leading-relaxed text-charcoal/75 max-w-3xl font-light">
                    {cyanotypeTexts.presentation.subtitle}
                </p>
            </section>

            {/* Featured Image Section */}
            {cyanotypeWorks.length > 0 && cyanotypeWorks[2]?.image && (
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <div className="bg-charcoal/3 overflow-hidden">
                        <img
                            src={cyanotypeWorks[2].image}
                            alt="Featured cyanotype print"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </section>
            )}

            {/* Gallery Section - Editorial Layout */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <h2 className="text-2xl font-bold text-charcoal mb-12 tracking-tight">
                    La Série
                </h2>
                
                <div className="space-y-12">
                    {cyanotypeWorks.map((work, index) => (
                        <div key={work.id} className="space-y-4">
                            {/* Image */}
                            <div 
                                className="bg-charcoal/3 overflow-hidden cursor-pointer group"
                                onClick={() => setSelectedImageIndex(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        setSelectedImageIndex(index);
                                    }
                                }}
                                aria-label={`Ouvrir l'image agrandie ${index + 1}`}
                            >
                                <img
                                    src={work.image}
                                    alt=""
                                    className="w-full h-auto object-contain group-hover:opacity-95 transition-opacity"
                                />
                            </div>
                            
                            {/* Metadata */}
                            <div className="space-y-1">
                                {work.date && (
                                    <p className="text-xs uppercase tracking-widest text-charcoal/50 font-semibold">
                                        {work.date}
                                    </p>
                                )}
                                {work.technique && (
                                    <p className="text-sm text-charcoal/60">
                                        {work.technique}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && (
                <div 
                    className="fixed inset-0 bg-charcoal/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImageIndex(null)}
                    role="presentation"
                >
                    <div 
                        className="max-w-4xl max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={cyanotypeWorks[selectedImageIndex].image}
                            alt="Enlarged cyanotype print"
                            className="w-full h-auto"
                        />
                    </div>
                    <button
                        onClick={() => setSelectedImageIndex(null)}
                        className="absolute top-6 right-6 text-warm-white hover:text-warm-white/70 transition-colors text-2xl p-2"
                        aria-label="Fermer"
                    >
                        ✕
                    </button>
                    
                    {/* Keyboard navigation */}
                    {selectedImageIndex > 0 && (
                        <button
                            onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-white hover:text-warm-white/70 transition-colors text-3xl p-2"
                            aria-label="Image précédente"
                        >
                            ‹
                        </button>
                    )}
                    {selectedImageIndex < cyanotypeWorks.length - 1 && (
                        <button
                            onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-white hover:text-warm-white/70 transition-colors text-3xl p-2"
                            aria-label="Image suivante"
                        >
                            ›
                        </button>
                    )}
                </div>
            )}

            {/* Scale and Perception Section */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6 tracking-tight">
                            {cyanotypeTexts.scalePerception.title}
                        </h2>
                        <p className="text-lg leading-relaxed text-charcoal/75 max-w-3xl font-light">
                            {cyanotypeTexts.scalePerception.text}
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-charcoal/2 py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-charcoal mb-3 tracking-tight">
                        {cyanotypeTexts.process.title}
                    </h2>
                    <p className="text-base text-charcoal/70 mb-12 max-w-3xl font-light">
                        {cyanotypeTexts.process.intro}
                    </p>

                    {/* Process Steps with Subtle Numbering */}
                    <div className="space-y-12 max-w-3xl">
                        {cyanotypeTexts.process.steps.map((step, index) => (
                            <div key={index} className="space-y-3">
                                <div className="flex items-start gap-4">
                                    <span className="text-xs uppercase tracking-widest text-cyanotype font-bold flex-shrink-0">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-xl font-bold text-charcoal">{step.title}</h3>
                                </div>
                                <p className="text-base text-charcoal/70 leading-relaxed font-light ml-12">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Characteristics */}
                    <div className="mt-16 space-y-4 max-w-3xl">
                        <h3 className="text-xl font-bold text-charcoal">
                            {cyanotypeTexts.characteristics.title}
                        </h3>
                        <ul className="space-y-3">
                            {cyanotypeTexts.characteristics.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-cyanotype font-bold flex-shrink-0 mt-0.5">−</span>
                                    <span className="text-charcoal/75 font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Cyanotype Section */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <h2 className="text-3xl font-bold text-charcoal mb-8 tracking-tight">
                    {cyanotypeTexts.whyCyanotype.title}
                </h2>
                <div className="max-w-2xl space-y-6">
                    <p className="text-lg leading-relaxed text-charcoal/75 font-light">
                        {cyanotypeTexts.whyCyanotype.text}
                    </p>
                </div>
            </section>

            {/* Credits Section */}
            <section className="border-t border-charcoal/10 py-12 md:py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl space-y-2 text-sm text-charcoal/60 font-light">
                        <p>{cyanotypeTexts.credits.photography}</p>
                        <p>{cyanotypeTexts.credits.author}</p>
                        <p>{cyanotypeTexts.credits.collaboration}</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-charcoal text-warm-white py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm uppercase tracking-widest text-warm-white/70 mb-4 font-semibold">
                        Collaborations & Commandes
                    </p>
                    <h2 className="text-3xl font-bold mb-6 tracking-tight">
                        Vous êtes intéressé
                    </h2>
                    <p className="text-warm-white/80 mb-8 max-w-xl mx-auto font-light">
                        Pour en savoir plus sur les tirages, les collaborations ou les expositions.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-warm-white text-charcoal hover:bg-warm-white/90 transition-colors font-semibold text-sm uppercase tracking-wide"
                    >
                        Nous contacter
                    </Link>
                </div>
            </section>
        </div>
    );
}

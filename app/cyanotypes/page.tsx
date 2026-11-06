'use client';

import { cyanotypeWorks } from '@/lib/data';
import CyanotypeArticle from '@/components/CyanotypeArticle';
import { useT } from '@/lib/useT';
import Link from 'next/link';
import { useState } from 'react';

export default function CyanotypesPage() {
    const t = useT();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    return (
        <div className="bg-warm-white min-h-screen">
            <CyanotypeArticle onOpenImage={setSelectedImageIndex} />

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
                        aria-label={t('cyanotypes.close')}
                    >
                        ✕
                    </button>

                    {/* Keyboard navigation */}
                    {selectedImageIndex > 0 && (
                        <button
                            onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-white hover:text-warm-white/70 transition-colors text-3xl p-2"
                            aria-label={t('cyanotypes.previousImage')}
                        >
                            ‹
                        </button>
                    )}
                    {selectedImageIndex < cyanotypeWorks.length - 1 && (
                        <button
                            onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-white hover:text-warm-white/70 transition-colors text-3xl p-2"
                            aria-label={t('cyanotypes.nextImage')}
                        >
                            ›
                        </button>
                    )}
                </div>
            )}

            {/* Credits Section */}
            <section className="border-t border-charcoal/10 py-12 md:py-16 mt-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl space-y-2 text-sm text-charcoal/60 font-light">
                        <p>{t('cyanotypesEditorial.creditsPhotography')}</p>
                        <p>{t('cyanotypesEditorial.creditsAuthor')}</p>
                        <p>{t('cyanotypesEditorial.creditsCollaboration')}</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-charcoal text-warm-white py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm uppercase tracking-widest text-warm-white/70 mb-4 font-semibold">
                        {t('cyanotypes.collabEyebrow')}
                    </p>
                    <h2 className="text-3xl font-bold mb-6 tracking-tight">
                        {t('cyanotypes.interested')}
                    </h2>
                    <p className="text-warm-white/80 mb-8 max-w-xl mx-auto font-light">
                        {t('cyanotypes.interestedDesc')}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-warm-white text-charcoal hover:bg-warm-white/90 transition-colors font-semibold text-sm uppercase tracking-wide"
                    >
                        {t('cyanotypes.getInTouch')}
                    </Link>
                </div>
            </section>
        </div>
    );
}

'use client';

import MediaDisplay from '@/components/MediaDisplay';
import { liveWorks } from '@/lib/data';
import { useT } from '@/lib/useT';
import Link from 'next/link';

export default function LiveImagesPage() {
    const t = useT();
    return (
        <div className="bg-warm-white min-h-screen">
            {/* Header */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <h1 className="text-6xl md:text-7xl font-bold text-charcoal leading-tight mb-16">
                    {t('liveImages.title')}
                </h1>
            </section>

            {/* Editorial Text Section */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl space-y-6">
                    <p className="text-lg leading-relaxed text-charcoal/75 font-light">
                        {t('liveImages.artisticText1')}
                    </p>
                    <p className="text-lg leading-relaxed text-charcoal/75 font-light">
                        {t('liveImages.artisticText2')}
                    </p>
                    <p className="text-lg leading-relaxed text-charcoal/75 font-light">
                        {t('liveImages.artisticText3')}
                    </p>
                    <p className="text-lg leading-relaxed text-charcoal/75 font-light">
                        {t('liveImages.artisticText4')}
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {liveWorks.map((work) => (
                        <div key={work.id} className="group">
                            {(work.video || work.image) && (
                                <div className="relative bg-charcoal/5 aspect-square mb-4 overflow-hidden rounded">
                                    <MediaDisplay
                                        video={work.video}
                                        image={work.image}
                                        alt={work.title || `Performance ${work.id}`}
                                        className="group-hover:opacity-90 transition-opacity duration-300"
                                    />
                                </div>
                            )}
                            {work.title && <h2 className="text-xl font-semibold text-charcoal mb-2">{work.title}</h2>}
                            {work.date && <p className="text-xs text-charcoal/60 font-mono uppercase tracking-wider">{work.date}</p>}
                            {work.description && <p className="text-sm text-charcoal/70 mt-2">{work.description}</p>}
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to action */}
            <section className="bg-charcoal text-warm-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('liveVideos.interested')}</h2>
                    <p className="text-warm-white/80 mb-8">
                        {t('liveVideos.interestedDesc')}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-6 py-3 bg-warm-white text-charcoal hover:bg-warm-white/90 transition-colors font-medium"
                    >
                        {t('liveVideos.getInTouch')}
                    </Link>
                </div>
            </section>
        </div>
    );
}

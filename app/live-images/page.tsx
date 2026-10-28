'use client';

import MediaDisplay from '@/components/MediaDisplay';
import { liveWorks } from '@/lib/data';
import Link from 'next/link';
import { useT } from '@/lib/useT';

export default function LiveImagesPage() {
    const t = useT();
    return (
        <div className="bg-warm-white min-h-screen">
            {/* Header */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <h1 className="text-6xl md:text-7xl font-bold text-charcoal leading-tight mb-16">
                    Image en mouvement
                </h1>
            </section>

            {/* Editorial Text Section */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-3xl space-y-6">
                    <p className="text-lg leading-relaxed text-charcoal/75 font-light">
                        Une image isolée ne livre pas toujours immédiatement ce qu'elle contient. Avec la Game Boy Camera, les formes se confondent, les visages se mêlent aux instruments, les silhouettes se fragmentent dans une trame de pixels. Certaines scènes demeurent ambiguës, à la frontière entre abstraction et figuration.
                    </p>
                    <p className="text-lg leading-relaxed text-charcoal/75 font-light">
                        Le passage à l'image en mouvement transforme cette perception. D'une image à l'autre, quelque chose se précise. Un geste, un déplacement, un changement de posture viennent éclairer ce qui, quelques instants plus tôt, restait incertain. Le regard recompose progressivement la scène, cherche des repères, reconnaît des présences.
                    </p>
                    <p className="text-lg leading-relaxed text-charcoal/75 font-light">
                        Le mouvement ne vient pas simplement prolonger la photographie : il en révèle parfois le sens. Là où l'image fixe suspend un instant, la séquence fait apparaître une continuité. Elle laisse au regard le temps de comprendre, ou parfois de continuer à hésiter.
                    </p>
                    <p className="text-lg leading-relaxed text-charcoal/75 font-light">
                        Ces vidéos proposent ainsi une autre manière d'habiter les images : non plus seulement les contempler, mais les traverser dans le temps.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {liveWorks.map((work) => (
                        <div key={work.id} className="group">
                            {(work.video || work.image) && (
                                <div className="relative bg-charcoal/5 aspect-square mb-6 overflow-hidden rounded">
                                    <MediaDisplay
                                        video={work.video}
                                        image={work.image}
                                        alt={work.title}
                                        className="group-hover:opacity-90 transition-opacity duration-300"
                                    />
                                </div>
                            )}
                            <h2 className="text-xl font-semibold text-charcoal mb-2">{work.title}</h2>
                            {work.date && <p className="text-sm text-charcoal/60 font-mono mb-2">{work.date}</p>}
                            {work.description && <p className="text-sm text-charcoal/70">{work.description}</p>}
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

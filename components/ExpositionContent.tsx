'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/LanguageContext';

interface Card {
    slug: string;
    title: { fr: string; en: string };
    thumb?: string;
    framed?: boolean;
}

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLaPabHi3B9dQ';

export default function ExpositionContent({ cards }: { cards: Card[] }) {
    const { language } = useLanguage();
    const fr = language === 'fr';

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="pt-16 md:pt-24 pb-12 space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight">
                    {fr ? 'Exposition' : 'Exhibition'}
                </h1>
                <p className="text-xl text-charcoal/75 font-light max-w-3xl">
                    {fr
                        ? "Les tirages de l'exposition, et les cartels de chaque photographie."
                        : 'The prints from the exhibition, and the labels for each photograph.'}
                </p>
                <a
                    href={PLAYLIST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-cyanotype border-l-2 border-cyanotype/40 hover:border-cyanotype bg-charcoal/5 hover:bg-charcoal/10 pl-4 pr-3 py-2.5 transition-colors"
                >
                    {fr ? "Écouter la playlist de l'exposition" : 'Listen to the exhibition playlist'} ↗
                </a>
            </header>

            <section className="pb-20">
                <h2 className="text-3xl font-bold text-charcoal tracking-tight mb-8">
                    {fr ? 'Les cartels' : 'Labels'}
                </h2>
                <ul className="max-w-3xl mx-auto space-y-12">
                    {cards.map((card) => (
                        <li key={card.slug}>
                            <Link href={`/cartels/${card.slug}`} className="block group">
                                {card.thumb && (
                                    <img
                                        src={card.thumb}
                                        alt=""
                                        loading="lazy"
                                        className="w-full h-auto bg-charcoal/5 group-hover:opacity-90 transition-opacity"
                                        style={card.framed ? undefined : { imageRendering: 'pixelated' }}
                                    />
                                )}
                                <p className="mt-3 text-lg font-medium text-charcoal group-hover:underline">
                                    {card.title[language]}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

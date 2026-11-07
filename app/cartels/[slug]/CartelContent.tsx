'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/LanguageContext';
import { assetPath } from '@/lib/assetPath';
import type { Cartel } from '@/lib/cartels';
import type { CartelImages } from '@/lib/cartelImages';

const pixelated = { imageRendering: 'pixelated' } as const;

export default function CartelContent({ cartel, images }: { cartel: Cartel; images: CartelImages }) {
    const { language } = useLanguage();
    const { title, text } = language === 'fr' ? cartel : cartel.en;
    // Sans œuvre centrale (originale0), le premier original passe en grand dans la section.
    const [firstOriginal, ...otherOriginals] = images.main ? [undefined, ...images.originals] : images.originals;
    const fr = language === 'fr';
    const originalsTitle = cartel.originalsTitle ? cartel.originalsTitle[language] : fr ? 'Les originaux' : 'The originals';

    return (
        <section className="max-w-5xl mx-auto px-6 py-12 md:py-20">
            <div className="max-w-2xl">
                {cartel.image && (
                    <Image
                        src={assetPath(cartel.image)}
                        alt={title}
                        width={512}
                        height={448}
                        unoptimized
                        className="w-full mb-8"
                        style={pixelated}
                    />
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{title}</h1>
                <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">{text}</p>
            </div>

            {images.main && (
                <div className="mt-14 max-w-3xl mx-auto">
                    <img src={images.main} alt={title} className="w-full h-auto bg-charcoal/5" style={pixelated} />
                </div>
            )}

            {images.group.length > 0 && cartel.group && (
                <div className="mt-16">
                    <h2 className="text-xs uppercase tracking-widest text-charcoal/60 font-semibold mb-4">
                        {cartel.group.title[language]}
                    </h2>
                    {cartel.group.quote && (
                        <blockquote className="mb-8 max-w-2xl border-l-2 border-cyanotype pl-5 space-y-3 text-charcoal/80">
                            {cartel.group.quote[language].split('\n').map((paragraph, i, all) => (
                                <p key={i} className="text-lg leading-relaxed">
                                    {i === 0 && (fr ? '«\u00a0' : '“')}
                                    {paragraph}
                                    {i === all.length - 1 && (fr ? '\u00a0»' : '”')}
                                </p>
                            ))}
                            {cartel.group.quoteAuthor && (
                                <footer className="text-sm text-charcoal/60">({cartel.group.quoteAuthor})</footer>
                            )}
                        </blockquote>
                    )}
                    <div
                        className={
                            cartel.group.pixelated === false
                                ? 'grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 items-start'
                                : 'grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'
                        }
                    >
                        {images.group.map((src) => (
                            <img
                                key={src}
                                src={src}
                                alt=""
                                loading="lazy"
                                className="w-full h-auto bg-charcoal/5"
                                style={cartel.group?.pixelated === false ? undefined : pixelated}
                            />
                        ))}
                    </div>
                </div>
            )}

            {images.main && otherOriginals.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-xs uppercase tracking-widest text-charcoal/60 font-semibold mb-4">
                        {originalsTitle}
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {otherOriginals.map((src) => (
                            <img key={src} src={src} alt="" className="w-full h-auto bg-charcoal/5" style={pixelated} />
                        ))}
                    </div>
                </div>
            )}

            {!images.main && firstOriginal && (
                <div className="mt-14">
                    <h2 className="text-xs uppercase tracking-widest text-charcoal/60 font-semibold mb-4">
                        {originalsTitle}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <img
                            src={firstOriginal}
                            alt=""
                            className="w-full h-auto sm:col-span-2 bg-charcoal/5"
                            style={pixelated}
                        />
                        {otherOriginals.map((src) => (
                            <img key={src} src={src} alt="" className="w-full h-auto bg-charcoal/5" style={pixelated} />
                        ))}
                    </div>
                </div>
            )}

            {images.others.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-xs uppercase tracking-widest text-charcoal/60 font-semibold mb-4">
                        {cartel.series ? cartel.series[language] : fr ? 'La série' : 'The series'}
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {images.others.map((src) => (
                            <img
                                key={src}
                                src={src}
                                alt=""
                                loading="lazy"
                                className="w-full h-auto bg-charcoal/5"
                                style={pixelated}
                            />
                        ))}
                    </div>
                </div>
            )}

            <Link href="/exposition" className="inline-block mt-16 text-sm text-charcoal/60 underline">
                {fr ? "Retour à l'exposition" : 'Back to the exhibition'}
            </Link>
        </section>
    );
}

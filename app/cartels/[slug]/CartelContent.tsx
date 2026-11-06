'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/LanguageContext';
import { assetPath } from '@/lib/assetPath';
import type { Cartel } from '@/lib/cartels';

export default function CartelContent({ cartel }: { cartel: Cartel }) {
    const { language } = useLanguage();
    const { title, text } = language === 'fr' ? cartel : cartel.en;

    return (
        <section className="max-w-2xl mx-auto px-6 py-12 md:py-20">
            {cartel.image && (
                <Image
                    src={assetPath(cartel.image)}
                    alt={title}
                    width={640}
                    height={448}
                    unoptimized
                    className="w-full mb-8"
                    style={{ imageRendering: 'pixelated' }}
                />
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">{text}</p>
            <Link href="/cartels" className="inline-block mt-12 text-sm text-charcoal/60 underline">
                {language === 'fr' ? 'Tous les cartels' : 'All labels'}
            </Link>
        </section>
    );
}

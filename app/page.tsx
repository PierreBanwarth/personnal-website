'use client';

import MediaDisplay from '@/components/MediaDisplay';
import { photoWorks } from '@/lib/data';
import { useT } from '@/lib/useT';
import Link from 'next/link';

export default function Home() {
  const t = useT();

  return (
    <div className="bg-warm-white">
      {/* Hero Section - Editorial */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-8 leading-tight">
            {t('home.title')}
          </h1>
          <p className="text-lg text-charcoal/75 leading-relaxed max-w-2xl">
            {t('home.description')}
          </p>
        </div>
      </section>

      {/* Featured Photo Gallery */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photoWorks.map((work) => (
            <div key={work.id} className="bg-charcoal/5 aspect-square overflow-hidden">
              <MediaDisplay
                image={work.image}
                alt={work.title || 'Game Boy Camera photograph'}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Two Main Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {/* Live Images */}
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-6">{t('home.liveVideos')}</h2>
            <p className="text-charcoal/70 mb-8 leading-relaxed">
              {t('home.liveVideosDesc')}
            </p>
            <Link
              href="/live-images"
              className="inline-block px-6 py-3 bg-charcoal text-warm-white hover:bg-charcoal/90 transition-colors font-medium"
            >
              {t('home.viewGallery')}
            </Link>
          </div>

          {/* Cyanotypes */}
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-6">{t('home.cyanotypes')}</h2>
            <p className="text-charcoal/70 mb-8 leading-relaxed">
              {t('home.cyanotypesDesc')}
            </p>
            <Link
              href="/cyanotypes"
              className="inline-block px-6 py-3 bg-cyanotype text-warm-white hover:bg-cyanotype/90 transition-colors font-medium"
            >
              {t('home.viewPrints')}
            </Link>
          </div>
        </div>

        {/* Brief About Section */}
        <div className="border-t border-charcoal/10 pt-16 md:pt-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-charcoal mb-6">{t('home.aboutBrief')}</h2>
            <p className="text-charcoal/70 mb-8 leading-relaxed">
              {t('home.aboutBriefText')}
            </p>
            <Link href="/about" className="text-charcoal hover:text-charcoal/60 transition-colors font-medium">
              {t('home.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-charcoal text-warm-white py-16 md:py-24 mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('home.contactCTA')}</h2>
          <p className="text-warm-white/80 mb-8">
            {t('home.contactCTADesc')}
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-warm-white text-charcoal hover:bg-warm-white/90 transition-colors font-medium"
          >
            {t('home.contactLink')}
          </Link>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-charcoal/70 mb-4">{t('home.followUpdates')}</p>
        <a
          href="https://instagram.com/pierre_banwarth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal hover:text-charcoal/60 transition-colors font-medium"
        >
          @pierre_banwarth
        </a>
      </section>
    </div>
  );
}

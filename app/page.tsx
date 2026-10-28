'use client';

import MediaDisplay from '@/components/MediaDisplay';
import { liveWorks, photoWorks } from '@/lib/data';
import Link from 'next/link';
import { useT } from '@/lib/useT';

export default function Home() {
  const t = useT();
  // Select a few representative works for the homepage
  const featuredLive = liveWorks.slice(0, 3);

  return (
    <div className="bg-warm-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            {t('home.title')}
          </h1>
          <p className="text-lg text-charcoal/80 mb-12 leading-relaxed max-w-2xl">
            {t('home.description')}
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {photoWorks.map((work) => (
            <div key={work.id} className="group">
              {work.image && (
                <div className="relative bg-charcoal/5 aspect-square overflow-hidden">
                  <MediaDisplay
                    image={work.image}
                    alt={work.title}
                    className="group-hover:opacity-80 transition-opacity w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Two Main Sections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-12 mb-20">
        {/* Live Videos */}
        <div>
          <h2 className="text-2xl font-bold text-charcoal mb-6">{t('home.liveVideos')}</h2>
          <p className="text-charcoal/70 mb-8">
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
          <h2 className="text-2xl font-bold text-charcoal mb-6">{t('home.cyanotypes')}</h2>
          <p className="text-charcoal/70 mb-8">
            {t('home.cyanotypesDesc')}
          </p>
          <Link
            href="/cyanotypes"
            className="inline-block px-6 py-3 bg-cyanotype text-warm-white hover:bg-cyanotype/90 transition-colors font-medium"
          >
            {t('home.viewPrints')}
          </Link>
        </div>
      </section>

      {/* Featured Works Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
        <h2 className="text-2xl font-bold text-charcoal mb-12">{t('home.featuredWorks')}</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredLive.map((work) => (
            <div key={work.id} className="group">
              {(work.video || work.image) && (
                <div className="relative bg-charcoal/5 aspect-square mb-4 overflow-hidden rounded">
                  <MediaDisplay
                    video={work.video}
                    image={work.image}
                    alt={work.title}
                    className="group-hover:opacity-80 transition-opacity"
                  />
                </div>
              )}
              <h3 className="font-semibold text-charcoal">{work.title}</h3>
              <p className="text-sm text-charcoal/60">{work.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/live-images"
            className="text-charcoal hover:text-charcoal/60 transition-colors text-sm font-medium"
          >
            {t('home.seeAllVideos')}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-charcoal text-warm-white py-16 md:py-24 mb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{t('home.aboutThisWork')}</h2>
          <p className="text-warm-white/80 mb-4 leading-relaxed">
            {t('home.aboutText1')}
          </p>
          <p className="text-warm-white/80 leading-relaxed">
            {t('home.aboutText2')}
          </p>
          <div className="mt-8 pt-8 border-t border-warm-white/20">
            <Link href="/about" className="text-warm-white hover:text-warm-white/70 transition-colors font-medium">
              {t('home.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Link */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-charcoal/70 mb-4">{t('home.followUpdates')}</p>
        <a
          href="https://instagram.com/pierre_banwarth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-charcoal font-semibold hover:text-charcoal/60 transition-colors"
        >
          {t('home.instagramLink')}
        </a>
      </section>
    </div>
  );
}

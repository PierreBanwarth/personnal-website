'use client';

import { useState } from 'react';
import MediaDisplay from './MediaDisplay';
import type { Work } from '@/lib/data';

interface PhotoCarouselProps {
  works: Work[];
}

export default function PhotoCarousel({ works }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentWork = works[currentIndex];

  return (
    <div className="w-full bg-charcoal/3">
      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Main Image */}
        <div className="w-full aspect-square md:aspect-video overflow-hidden">
          {currentWork && (
            <MediaDisplay
              image={currentWork.image}
              alt={currentWork.title || `Photo ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 text-charcoal hover:text-charcoal/60 transition-colors text-4xl font-light"
          aria-label="Previous photo"
        >
          ‹
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 text-charcoal hover:text-charcoal/60 transition-colors text-4xl font-light"
          aria-label="Next photo"
        >
          ›
        </button>

        {/* Dots Pagination */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 transition-all ${
                index === currentIndex
                  ? 'bg-charcoal w-6'
                  : 'bg-charcoal/40 hover:bg-charcoal/60'
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute top-4 right-4 text-charcoal/60 text-sm font-mono">
          {String(currentIndex + 1).padStart(2, '0')} / {String(works.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}

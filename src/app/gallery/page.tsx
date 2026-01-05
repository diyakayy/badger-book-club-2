'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import { galleryImages, GalleryImage } from '@/data/gallery';

const categories = ['All', 'Meetups', 'Reading Nights', 'Socials', 'Campus Events'] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl mb-4">Gallery</h1>
        <p className="text-xl text-charcoal/70 mb-12 max-w-2xl">
          Moments from our book club events, discussions, and gatherings throughout the year.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-burgundy text-cream shadow-md'
                  : 'bg-cream border border-charcoal/20 text-charcoal hover:bg-charcoal/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <GalleryGrid images={filteredImages} />
      </div>
    </div>
  );
}

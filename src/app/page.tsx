import Image from 'next/image';
import Button from '@/components/Button';
import Marquee from '@/components/Marquee';
import EventCard from '@/components/EventCard';
import { events } from '@/data/events';
import { galleryImages } from '@/data/gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Badger Book Club | Join Our Reading Community at UW-Madison',
  description: 'Join our Badger Book Club and immerse yourself in a vibrant reading community where diverse perspectives enhance your appreciation of every book!',
};

export default function HomePage() {
  const upcomingEvents = events.filter(e => !e.isPast).slice(0, 3);
  const previewImages = galleryImages.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-6 lg:gap-12">            {/* Left: Headline */}
                <div>                  <h1 className="font-serif text-xl md:text-2xl whitespace-nowrap flex-shrink-0">                Join Our Book<br />Community
              </h1>
            </div>

            {/* Center: Description */}
                <div className="flex-1 flex flex-col items-center text-center">              <p className="text-lg md:text-xl leading-relaxed text-charcoal/80 max-w-sm">
                Join our Badger Book Club and immerse yourself in a vibrant reading community where diverse perspectives enhance your appreciation of every book!
              </p>
            </div>

            {/* Right: CTA */}
                <div className="flex-1 flex items-center justify-end">              <Button href="/join">Join the Club</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Three-Photo Strip */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative h-64 md:h-96">
            <Image
              src="/hero/hero-1.jpg"
              alt="Book on cozy reading chair"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="/hero/hero-2.jpg"
              alt="Person reading with coffee"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="/hero/hero-3.jpg"
              alt="Bookmark in open book"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Our Club Section */}
      <section className="bg-blush py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-6">About Our Club</h2>
          <p className="text-lg leading-relaxed text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Badger Book Club is UW–Madison's premier reading community, bringing together students who love literature, discussion, and connection. We meet monthly to discuss carefully selected books, host social reading events, and create a welcoming space for all readers.
          </p>
          <Button href="/about" variant="secondary">Learn More</Button>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-5xl md:text-6xl">Upcoming Events</h2>
            <Button href="/events" variant="secondary">View All Events</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Photos Preview */}
      <section className="py-20 px-6 bg-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-5xl md:text-6xl">Gallery</h2>
            <Button href="/gallery" variant="secondary">View Full Gallery</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {previewImages.map(image => (
              <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-2xl mb-4">Contact Information</h3>
              <div className="space-y-4 text-charcoal/80 max-w-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <a href="mailto:badgerbookclub@example.com" className="hover:text-burgundy transition-colors">
                      badgerbookclub@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal">Instagram</p>
                    <a href="https://instagram.com/badgerbookclub" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy transition-colors">
                      @badgerbookclub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-burgundy transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-burgundy transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-burgundy transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

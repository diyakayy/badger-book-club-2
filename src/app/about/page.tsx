import type { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About | Badger Book Club',
  description: 'Learn about Badger Book Club, UW-Madison\'s premier reading community bringing together students who love literature and discussion.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl mb-8">About Our Club</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
            Badger Book Club is UW–Madison's premier reading community, founded in 2025 by students who believed that the university needed a space dedicated to the joy of reading for pleasure.
          </p>

          <h2 className="font-serif text-4xl mt-12 mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
            We create a welcoming community where students can slow down, engage deeply with literature, and connect with fellow readers. In an age of constant digital distraction, we offer a space for thoughtful discussion, genuine connection, and the simple pleasure of getting lost in a good book.
          </p>

          <h2 className="font-serif text-4xl mt-12 mb-6">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blush p-6 rounded-lg">
              <h3 className="font-serif text-2xl mb-3">Monthly Discussions</h3>
              <p className="text-charcoal/80">
                Each month, we select a book and gather to discuss it in depth. Our discussions are thoughtful, inclusive, and always insightful, thanks to our diverse membership.
              </p>
            </div>
            <div className="bg-blush p-6 rounded-lg">
              <h3 className="font-serif text-2xl mb-3">Casual Reading Meetups</h3>
              <p className="text-charcoal/80">
                Not everything needs to be structured! We host regular coffee shop meetups where members can read whatever they're currently enjoying and socialize.
              </p>
            </div>
            <div className="bg-blush p-6 rounded-lg">
              <h3 className="font-serif text-2xl mb-3">Special Events</h3>
              <p className="text-charcoal/80">
                From book swaps to author talks to collaboration events with other campus organizations, we're always finding new ways to celebrate literature.
              </p>
            </div>
            <div className="bg-blush p-6 rounded-lg">
              <h3 className="font-serif text-2xl mb-3">Community Building</h3>
              <p className="text-charcoal/80">
                Beyond books, we're building lasting friendships. Many of our members have found their closest college friends through the book club.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-4xl mt-12 mb-6">Our Values</h2>
          <ul className="space-y-4 mb-12">
            <li className="text-lg text-charcoal/80">
              <strong className="text-charcoal">Inclusivity:</strong> We welcome readers of all backgrounds, experiences, and reading levels. There's no "right" way to read or interpret a book.
            </li>
            <li className="text-lg text-charcoal/80">
              <strong className="text-charcoal">Diversity:</strong> We intentionally select books by diverse authors exploring varied perspectives, cultures, and experiences.
            </li>
            <li className="text-lg text-charcoal/80">
              <strong className="text-charcoal">Curiosity:</strong> We approach every book with open minds and genuine interest in learning from both the text and each other.
            </li>
            <li className="text-lg text-charcoal/80">
              <strong className="text-charcoal">Respect:</strong> Disagreement is welcome and encouraged, but always with kindness and consideration for others' viewpoints.
            </li>
            <li className="text-lg text-charcoal/80">
              <strong className="text-charcoal">Joy:</strong> Reading should be pleasurable! We take books seriously but ourselves less so.
            </li>
          </ul>

          <h2 className="font-serif text-4xl mt-12 mb-6">Join Us</h2>
          <p className="text-lg leading-relaxed text-charcoal/80 mb-8">
            Whether you're an English major who's read everything or someone who hasn't picked up a book since high school, you're welcome here. We meet monthly at Memorial Union and host additional casual events throughout the semester.
          </p>

          <div className="flex gap-4">
            <Button href="/join">Join the Club</Button>
            <Button href="/events" variant="secondary">View Events</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

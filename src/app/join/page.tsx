'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Button from '@/components/Button';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    major: '',
    interests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for joining, ${formData.name}! We'll send you information about our next meeting to ${formData.email}.`);
    setFormData({
      name: '',
      email: '',
      year: '',
      major: '',
      interests: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl mb-4">Join the Club</h1>
        <p className="text-xl text-charcoal/70 mb-12 max-w-2xl">
          Become part of UW–Madison's most welcoming reading community. Fill out the form below to get started!
        </p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Why Join */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl mb-6">Why Join?</h2>
            
            <div className="space-y-6">
              <div>
                <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Discover Great Books</h3>
                <p className="text-charcoal/70 text-sm">
                  Explore diverse genres and authors you might never have found on your own.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Meet Like-Minded Students</h3>
                <p className="text-charcoal/70 text-sm">
                  Connect with fellow readers who share your passion for literature and thoughtful discussion.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Engaging Discussions</h3>
                <p className="text-charcoal/70 text-sm">
                  Share your perspectives and gain new insights through thoughtful, respectful conversations.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Fun Social Events</h3>
                <p className="text-charcoal/70 text-sm">
                  Beyond book discussions, enjoy book swaps, reading marathons, and social gatherings.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blush rounded-lg">
              <h3 className="font-serif text-xl mb-2">No Commitment Required</h3>
              <p className="text-charcoal/70 text-sm">
                Attend as many or as few events as you like. We're flexible and welcoming to all schedules!
              </p>
            </div>
          </div>

          {/* Join Form */}
          <div className="md:col-span-3">
            <div className="bg-cream border border-charcoal/10 rounded-lg p-8 shadow-sm">
              <h2 className="font-serif text-3xl mb-6">Sign Up</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-burgundy transition-colors"
                    placeholder="Jane Badger"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-burgundy transition-colors"
                    placeholder="jane@wisc.edu"
                  />
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm font-medium mb-2">
                    Year *
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-burgundy transition-colors"
                  >
                    <option value="">Select your year</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="graduate">Graduate Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="major" className="block text-sm font-medium mb-2">
                    Major/Field of Study
                  </label>
                  <input
                    type="text"
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-burgundy transition-colors"
                    placeholder="English, Biology, Undecided, etc."
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium mb-2">
                    Reading Interests
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-burgundy transition-colors resize-none"
                    placeholder="Tell us about your favorite genres, authors, or what you're hoping to get out of the book club..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Join Badger Book Club
                </Button>

                <p className="text-xs text-charcoal/60 text-center">
                  By joining, you'll receive emails about our upcoming events and meetings. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

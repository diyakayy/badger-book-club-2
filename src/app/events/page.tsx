'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import EventCard from '@/components/EventCard';
import { events, Event } from '@/data/events';

const eventTypes = ['All', 'Discussion', 'Social', 'Collab', 'Workshop'] as const;

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<string>('All');

  const upcomingEvents = events.filter(e => !e.isPast);
  const pastEvents = events.filter(e => e.isPast);

  const filterEvents = (eventList: Event[]) => {
    return selectedType === 'All' 
      ? eventList 
      : eventList.filter(e => e.type === selectedType);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl mb-4">Events</h1>
        <p className="text-xl text-charcoal/70 mb-12 max-w-2xl">
          Join us for book discussions, social gatherings, workshops, and collaborative events throughout the semester.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {eventTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedType === type
                  ? 'bg-burgundy text-cream shadow-md'
                  : 'bg-cream border border-charcoal/20 text-charcoal hover:bg-charcoal/5'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl mb-8">Upcoming Events</h2>
          {filterEvents(upcomingEvents).length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEvents(upcomingEvents).map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-charcoal/60 italic">No upcoming events in this category.</p>
          )}
        </section>

        {/* Past Events */}
        <section>
          <h2 className="font-serif text-4xl mb-8">Past Events</h2>
          {filterEvents(pastEvents).length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEvents(pastEvents).map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-charcoal/60 italic">No past events in this category.</p>
          )}
        </section>
      </div>
    </div>
  );
}

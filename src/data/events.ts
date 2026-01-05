export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'Discussion' | 'Social' | 'Collab' | 'Workshop';
  isPast: boolean;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'January Book Discussion: "The Night Circus"',
    date: '2026-01-15',
    time: '6:00 PM - 8:00 PM',
    location: 'Memorial Union, Room 403',
    description: 'Join us for an enchanting discussion of Erin Morgenstern\'s debut novel. We\'ll explore the magical realism, character development, and the unique narrative structure over tea and treats.',
    type: 'Discussion',
    isPast: false,
  },
  {
    id: '2',
    title: 'Coffee & Pages: Casual Reading Meetup',
    date: '2026-01-22',
    time: '3:00 PM - 5:00 PM',
    location: 'Steep & Brew Café, State Street',
    description: 'Bring whatever you\'re currently reading and join fellow book lovers for a relaxed afternoon of reading and conversation. Perfect for getting through those winter reading goals!',
    type: 'Social',
    isPast: false,
  },
  {
    id: '3',
    title: 'Book Swap & Social Hour',
    date: '2026-02-05',
    time: '5:00 PM - 7:00 PM',
    location: 'College Library Atrium',
    description: 'Clear your shelves and discover new reads! Bring up to 5 books you\'ve finished and swap them for new ones. Light refreshments provided.',
    type: 'Social',
    isPast: false,
  },
  {
    id: '4',
    title: 'Writing Workshop with Professor Martinez',
    date: '2026-02-12',
    time: '4:00 PM - 6:00 PM',
    location: 'Bascom Hall, Room 215',
    description: 'Learn the craft of creative writing from UW\'s own Professor Elena Martinez. Open to all skill levels. Bring a notebook and your imagination!',
    type: 'Workshop',
    isPast: false,
  },
  {
    id: '5',
    title: 'February Book Discussion: "Pachinko"',
    date: '2026-02-19',
    time: '6:00 PM - 8:00 PM',
    location: 'Memorial Union, Room 403',
    description: 'We\'ll delve into Min Jin Lee\'s epic tale of a Korean immigrant family across four generations. This sweeping saga offers rich material for discussion about identity, resilience, and belonging.',
    type: 'Discussion',
    isPast: false,
  },
  {
    id: '6',
    title: 'Collaboration with Philosophy Club: "Existentialism in Literature"',
    date: '2026-03-05',
    time: '6:30 PM - 8:30 PM',
    location: 'Humanities Building, Lecture Hall 1',
    description: 'A special collaborative event exploring existentialist themes in classic and contemporary literature, featuring presentations and open discussion.',
    type: 'Collab',
    isPast: false,
  },
  {
    id: '7',
    title: 'December Book Discussion: "The Overstory"',
    date: '2025-12-10',
    time: '6:00 PM - 8:00 PM',
    location: 'Memorial Union, Room 403',
    description: 'We concluded 2025 with Richard Powers\' Pulitzer Prize-winning novel about trees and the people who fight to save them. An inspiring discussion about nature and activism.',
    type: 'Discussion',
    isPast: true,
  },
  {
    id: '8',
    title: 'Holiday Cookie Exchange & Reading Marathon',
    date: '2025-12-18',
    time: '2:00 PM - 6:00 PM',
    location: 'Student Center Lounge',
    description: 'Our festive end-of-semester celebration featured a cookie exchange, cozy reading corners, and a white elephant book exchange. A wonderful way to end the year!',
    type: 'Social',
    isPast: true,
  },
];

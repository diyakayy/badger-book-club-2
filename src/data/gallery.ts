export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Meetups' | 'Reading Nights' | 'Socials' | 'Campus Events';
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/gallery/image-1.jpg',
    alt: 'Book club members discussing at Memorial Union',
    category: 'Meetups',
  },
  {
    id: '2',
    src: '/gallery/image-2.jpg',
    alt: 'Cozy reading corner at winter meetup',
    category: 'Reading Nights',
  },
  {
    id: '3',
    src: '/gallery/image-3.jpg',
    alt: 'Book swap social event',
    category: 'Socials',
  },
  {
    id: '4',
    src: '/gallery/image-4.jpg',
    alt: 'Discussion circle at campus library',
    category: 'Meetups',
  },
  {
    id: '5',
    src: '/gallery/image-5.jpg',
    alt: 'Coffee and books reading session',
    category: 'Reading Nights',
  },
  {
    id: '6',
    src: '/gallery/image-6.jpg',
    alt: 'Spring semester kickoff event',
    category: 'Campus Events',
  },
  {
    id: '7',
    src: '/gallery/image-7.jpg',
    alt: 'Holiday cookie exchange gathering',
    category: 'Socials',
  },
  {
    id: '8',
    src: '/gallery/image-8.jpg',
    alt: 'Author talk collaboration event',
    category: 'Campus Events',
  },
  {
    id: '9',
    src: '/gallery/image-9.jpg',
    alt: 'Summer reading marathon on the terrace',
    category: 'Reading Nights',
  },
  {
    id: '10',
    src: '/gallery/image-10.jpg',
    alt: 'Fall semester welcome picnic',
    category: 'Socials',
  },
  {
    id: '11',
    src: '/gallery/image-11.jpg',
    alt: 'Collaboration with Philosophy Club',
    category: 'Campus Events',
  },
  {
    id: '12',
    src: '/gallery/image-12.jpg',
    alt: 'Intimate book discussion session',
    category: 'Meetups',
  },
];

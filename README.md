# Badger Book Club Website

A modern, elegant editorial website for UW-Madison's premier book club community, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 High-end editorial design with refined typography
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 15 App Router for optimal performance
- 🎭 Smooth marquee animation with accessibility support
- 📸 Interactive gallery with lightbox
- 📅 Event management with RSVP functionality
- ✍️ Blog with individual post pages
- 📧 Contact and join forms
- 🔍 SEO optimized with metadata and sitemap
- 🎯 Type-safe with TypeScript

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (serif) & Source Sans 3 (sans-serif) via next/font
- **Images**: next/image for optimized loading

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone or download this repository**

```bash
git clone <your-repo-url>
cd badger-book-club
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Add your images**

The website uses local images stored in the `/public` directory. You'll need to add your own images:

- **Hero images**: Add 3 images to `/public/hero/` named:
  - `hero-1.jpg` (book on cozy couch/chair)
  - `hero-2.jpg` (person reading with coffee)
  - `hero-3.jpg` (bookmark or book close-up)
  - Recommended size: 1200x800px minimum

- **Gallery images**: Add 12 images to `/public/gallery/` named:
  - `image-1.jpg` through `image-12.jpg`
  - These should show book club events, meetings, and reading sessions
  - Recommended size: 800x600px minimum

See `/public/IMAGE_PLACEHOLDERS.md` for detailed image requirements.

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
badger-book-club/
├── public/
│   ├── hero/              # Hero section images
│   ├── gallery/           # Gallery images
│   ├── icon.svg           # Site favicon
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with fonts
│   │   ├── page.tsx       # Homepage
│   │   ├── globals.css    # Global styles
│   │   ├── about/         # About page
│   │   ├── events/        # Events page
│   │   ├── gallery/       # Gallery page
│   │   ├── blog/          # Blog feed & posts
│   │   ├── contact/       # Contact page
│   │   └── join/          # Join page
│   ├── components/
│   │   ├── Header.tsx     # Site header with menu
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Menu.tsx       # Slide-out menu
│   │   ├── Marquee.tsx    # Animated marquee ribbon
│   │   ├── Button.tsx     # Reusable button component
│   │   ├── EventCard.tsx  # Event card component
│   │   ├── BlogCard.tsx   # Blog card component
│   │   └── GalleryGrid.tsx # Gallery with lightbox
│   └── data/
│       ├── events.ts      # Event data
│       ├── blog.ts        # Blog post data
│       └── gallery.ts     # Gallery image data
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.mjs        # Next.js configuration
└── package.json           # Dependencies
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  cream: "#FEFAF0",     // Background
  charcoal: "#26150B",  // Primary text
  burgundy: "#913F4A",  // Accent/buttons
  blush: "#EAB9B3",     // Soft section backgrounds
}
```

### Content

- **Events**: Edit `src/data/events.ts`
- **Blog Posts**: Edit `src/data/blog.ts`
- **Gallery**: Edit `src/data/gallery.ts`

### Contact Information

Update the following throughout the site:
- Email: `badgerbookclub@example.com`
- Instagram: `@badgerbookclub`
- Location: Memorial Union, UW-Madison

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will automatically detect Next.js and configure the build
- Click "Deploy"

Your site will be live in minutes!

### Deploy to Other Platforms

The website can be deployed to any platform that supports Next.js:

- **Netlify**: Connect your GitHub repo and deploy
- **Railway**: Use the Next.js template
- **AWS Amplify**: Follow their Next.js deployment guide
- **Self-hosted**: Run `npm run build` then `npm run start`

### Environment Variables

This website doesn't require any environment variables for basic functionality. If you add features like a newsletter service or contact form backend, add your API keys to `.env.local`:

```bash
NEXT_PUBLIC_API_KEY=your_key_here
```

## Build for Production

```bash
npm run build
npm run start
```

The optimized production build will be created in the `.next` folder.

## SEO

The website includes:
- Meta tags on every page
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Semantic HTML structure
- Optimized images with next/image
- Fast loading times

Update the `sitemap.xml` file with your actual domain before deploying.

## Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion support for animations
- Alt text on all images
- Color contrast meets WCAG standards

## Performance

- Server-side rendering with Next.js
- Optimized images with next/image
- Font optimization with next/font
- Code splitting and lazy loading
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for Badger Book Club at UW-Madison.

## Support

For questions or issues:
- Email: badgerbookclub@example.com
- Instagram: @badgerbookclub

## Acknowledgments

- Design inspiration from modern editorial websites
- UW-Madison Badger Book Club community
- Built with Next.js and Tailwind CSS

---

Made with ❤️ for the Badger Book Club community

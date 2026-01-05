import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog | Badger Book Club',
  description: 'Read articles about reading, book recommendations, and reflections from our book club community.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl mb-4">Blog</h1>
        <p className="text-xl text-charcoal/70 mb-12 max-w-2xl">
          Thoughts on reading, book recommendations, and reflections from our community.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

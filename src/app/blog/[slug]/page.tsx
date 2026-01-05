import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Badger Book Club Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-blush text-charcoal text-sm font-medium">
            {post.tag}
          </span>
          <span className="text-sm text-charcoal/60">{post.date}</span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">{post.title}</h1>
        
        <p className="text-lg text-charcoal/70 mb-8">By {post.author}</p>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            // Check if it's a heading (starts with **)
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              const headingText = paragraph.replace(/\*\*/g, '');
              return (
                <h2 key={index} className="font-serif text-3xl mt-12 mb-6 first:mt-0">
                  {headingText}
                </h2>
              );
            }
            
            // Regular paragraph
            return (
              <p key={index} className="text-lg leading-relaxed text-charcoal/80 mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-charcoal/10">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}

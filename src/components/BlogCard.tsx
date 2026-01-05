import Link from 'next/link';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-cream border border-charcoal/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full bg-blush text-charcoal text-xs font-medium">
            {post.tag}
          </span>
          <span className="text-sm text-charcoal/60">{post.date}</span>
        </div>
        
        <h3 className="font-serif text-2xl mb-2 group-hover:text-burgundy transition-colors">
          {post.title}
        </h3>
        
        <p className="text-charcoal/70 text-sm leading-relaxed mb-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-2 text-sm text-burgundy font-medium">
          <span>Read more</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}

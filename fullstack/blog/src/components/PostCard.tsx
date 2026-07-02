import Link from "next/link";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Color accent bar */}
      <div className="h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />

      <div className="p-6">
        {/* Date */}
        <time
          dateTime={post.date}
          className="text-xs font-medium uppercase tracking-widest text-violet-500"
        >
          {formatDate(post.date)}
        </time>

        {/* Title */}
        <h2 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors duration-200 leading-snug">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="mt-3 text-gray-500 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/posts/${post.id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors duration-200"
        >
          Read More
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { Post } from "@/types/post";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001";
  const res = await fetch(`${baseUrl}/api/posts/${id}`, {
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export async function generateMetadata({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Simple Blog`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-violet-600 transition-colors duration-200 mb-10"
      >
        <span>←</span> Back to Posts
      </Link>

      {/* Article header */}
      <article>
        <header className="mb-8">
          <time
            dateTime={post.date}
            className="text-xs font-semibold uppercase tracking-widest text-violet-500"
          >
            {formattedDate}
          </time>
          <h1 className="mt-3 text-4xl font-extrabold text-gray-900 leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-6 h-px bg-gradient-to-r from-violet-200 to-indigo-200" />
        </header>

        {/* Article body */}
        <div className="prose mt-8 space-y-4">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Footer back link */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}

import { Post } from "@/types/post";
import PostCard from "@/components/PostCard";

async function getPosts(): Promise<Post[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001";
  const res = await fetch(`${baseUrl}/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero section */}
      <section className="mb-16 text-center">
        <span className="inline-block bg-violet-50 text-violet-600 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
          Welcome to Simple Blog
        </span>
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Latest{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Articles
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          Thoughts on Next.js, React, TypeScript, and modern web development —
          written for developers by developers.
        </p>
      </section>

      {/* Post grid */}
      <section aria-label="Blog posts">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

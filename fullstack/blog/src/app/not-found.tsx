import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 text-center">
      <p className="text-8xl font-extrabold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">Post not found</h1>
      <p className="mt-3 text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

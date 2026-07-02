import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:text-violet-600 transition-colors duration-200"
        >
          <span className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-sm font-bold px-2.5 py-1 rounded-lg">
            Blog
          </span>
          <span>Simple Blog</span>
        </Link>

        <nav>
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors duration-200"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}

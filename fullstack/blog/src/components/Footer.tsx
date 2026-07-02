export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Simple Blog. All rights reserved.</p>
        <p>
          Built with{" "}
          <span className="font-semibold text-violet-500">Next.js</span> &amp;{" "}
          <span className="font-semibold text-indigo-500">TypeScript</span>
        </p>
      </div>
    </footer>
  );
}

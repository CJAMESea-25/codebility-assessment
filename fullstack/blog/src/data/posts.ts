import { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Explore the fundamentals of Next.js and learn how App Router changes the way we build React applications.",
    content: `Next.js is a powerful React framework that enables server-side rendering, static site generation, and much more right out of the box. With its App Router, introduced in Next.js 13+, you can co-locate your server components, layouts, and loading states in an intuitive file-based routing system.

Getting started is as simple as running \`npx create-next-app@latest\`. From there, you define your pages inside the \`app/\` directory. A file named \`page.tsx\` becomes a route automatically — no configuration needed.

One of the biggest advantages of Next.js is its built-in support for API routes. You can define backend endpoints right inside your project under \`app/api/\`. This makes it incredibly easy to build fullstack applications without needing a separate server.

Whether you're building a blog, an e-commerce site, or a SaaS platform, Next.js provides the performance and developer experience to get you there quickly.`,
    date: "2026-07-01",
  },
  {
    id: 2,
    title: "Why React Is the Most Popular Frontend Library",
    excerpt: "Understanding what makes React stand out from the crowd and why millions of developers choose it every day.",
    content: `React has maintained its position as the most popular JavaScript library for building user interfaces for nearly a decade. What makes it so enduring?

The answer lies in its core ideas: a declarative programming model, a component-based architecture, and a unidirectional data flow. These principles make it easy to reason about your UI, debug issues, and scale applications to thousands of components.

React's virtual DOM efficiently batches updates and minimizes direct DOM manipulation, leading to fast and responsive UIs. Combined with hooks like \`useState\`, \`useEffect\`, and \`useContext\`, developers have powerful primitives to manage state and side effects without the complexity of class components.

The React ecosystem is also enormous. Libraries like React Router, TanStack Query, and Zustand integrate seamlessly, giving you everything you need to build production-grade applications. And with React Server Components, the future of React is even more exciting.`,
    date: "2026-07-02",
  },
  {
    id: 3,
    title: "Building RESTful APIs with Next.js Route Handlers",
    excerpt: "A practical guide to creating clean, typed API endpoints using Next.js App Router's Route Handlers.",
    content: `Next.js App Router introduces Route Handlers — a modern, clean way to build API endpoints directly in your project. They replace the \`pages/api/\` convention with a more flexible, co-located approach.

To create an API route, you add a \`route.ts\` file inside your \`app/api/\` directory. You export named functions matching HTTP methods: \`GET\`, \`POST\`, \`PUT\`, \`DELETE\`, etc.

\`\`\`typescript
// app/api/posts/route.ts
export async function GET() {
  return Response.json({ message: "Hello from the API!" });
}
\`\`\`

Route Handlers also support dynamic segments. A file at \`app/api/posts/[id]/route.ts\` will match \`/api/posts/1\`, \`/api/posts/2\`, and so on. You access the ID through the \`params\` argument.

With TypeScript, you get full type safety across your API responses, making it much harder to introduce bugs at the boundary between your frontend and backend.`,
    date: "2026-07-03",
  },
  {
    id: 4,
    title: "Mastering TypeScript in 2026",
    excerpt: "TypeScript is no longer optional for serious projects. Here's how to use it effectively in your Next.js apps.",
    content: `TypeScript has gone from a nice-to-have to an industry standard in just a few years. In 2026, most new React and Next.js projects are bootstrapped with TypeScript by default — and for good reason.

Type safety catches bugs at compile time that would otherwise surface in production. Simple things like passing a \`string\` where a \`number\` is expected get flagged immediately. More importantly, TypeScript makes your code self-documenting — interfaces and types serve as built-in documentation for your team.

In Next.js, TypeScript shines in several places:
- Typed \`params\` and \`searchParams\` in page components
- Typed \`Request\` and \`Response\` in API routes
- Typed environment variables with module augmentation
- Typed database queries when using an ORM like Prisma

The investment in learning TypeScript pays dividends quickly. Start with strict mode, define your interfaces early, and let the compiler guide you to better code.`,
    date: "2026-07-04",
  },
  {
    id: 5,
    title: "Tailwind CSS: Utility-First Styling Done Right",
    excerpt: "How Tailwind CSS changed the way developers think about styling — and why it makes your team faster.",
    content: `Tailwind CSS is a utility-first CSS framework that gives you low-level styling primitives directly in your HTML. Instead of writing custom CSS classes, you compose your design using pre-defined utilities like \`flex\`, \`p-4\`, \`text-gray-800\`, and \`rounded-lg\`.

At first, this looks messy. Long class names in your JSX feel verbose. But the payoff is enormous: you never have to context-switch between your component file and a CSS file. Your styles live where your markup lives.

Tailwind is also highly configurable. Your \`tailwind.config.ts\` lets you define your brand colors, custom fonts, spacing scales, and breakpoints — giving you a consistent design system with zero runtime overhead.

In Next.js projects, Tailwind is supported out of the box. The \`create-next-app\` CLI offers it as a first-class option. Combined with the \`@tailwindcss/postcss\` plugin, your production build ships only the CSS classes you actually use, keeping bundle sizes tiny.`,
    date: "2026-07-05",
  },
];

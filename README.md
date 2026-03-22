# vjvan.com

Personal brand website for Van (允雷) - AI Business System Architect.

Built with Next.js 16, Tailwind CSS 4, and MDX for content management.

## Live

[vjvan.com](https://vjvan.com)

## Features

- Server-side rendered pages with Next.js 16 App Router
- MDX-based blog system with gray-matter frontmatter parsing
- Reading time estimation for blog posts
- Responsive design with Tailwind CSS 4
- Service showcase pages (AI consulting, Weavy.ai training, n8n automation)
- SEO-friendly routing and metadata

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Content**: MDX with next-mdx-remote
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Project Structure

```
app/
  page.tsx              # Homepage
  about/page.tsx        # About page
  blog/page.tsx         # Blog listing
  blog/[slug]/page.tsx  # Blog post (MDX)
  services/page.tsx     # Services page
components/
  layout/               # Header, Footer
content/
  blog/                 # MDX blog posts
lib/
  mdx.ts                # MDX utilities
```

## License

MIT

# Project Context: Harrison Kaminsky Personal Site

## Overview

This is Harrison Kaminsky's personal portfolio website showcasing work history, projects, awards, and blog writing. The site is built on the **Astro Nano** theme - a minimalist, lightweight portfolio template using Astro, Tailwind CSS, and TypeScript.

**Live URL:** https://harrisonkaminsky.com

## Technology Stack

- **Framework:** Astro 4.x (static site generator)
- **Styling:** Tailwind CSS 3.x with @tailwindcss/typography
- **Language:** TypeScript
- **Content:** Markdown and MDX
- **Fonts:** Inter (sans-serif) and Lora (serif) via @fontsource
- **Package Manager:** pnpm (preferred)

### Key Dependencies

- `@astrojs/mdx` - MDX support for components in markdown
- `@astrojs/sitemap` - Auto-generated sitemap
- `@astrojs/tailwind` - Tailwind integration
- `clsx` / `tailwind-merge` - Utility class handling
- `unist-util-visit` - Used by custom rehype plugin

## Multi-Environment Deployment

This project runs in multiple environments with a simplified configuration:

| Environment | Base Path | Notes |
|-------------|-----------|-------|
| **Bolt.new / Local Dev** | `/` | Default for development |
| **GitHub Pages (Production)** | `/` | Custom domain (harrisonkaminsky.com) |
| **Preview/Staging** | `/personal-site/preview/` | Optional staging builds |

### Custom Domain Setup

The site uses a custom domain via GitHub Pages:
- **Domain:** harrisonkaminsky.com
- **CNAME file:** Located in `public/CNAME`
- Since the custom domain serves from root, both dev and production use `/` as the base path

### Environment Variables

| Variable | Value | Purpose |
|----------|-------|---------|
| `PREVIEW_BUILD` | `'true'` | Only needed for staging/preview deployments at a subdirectory |

### Base Path Logic (astro.config.mjs)

```javascript
const isPreviewBuild = process.env.PREVIEW_BUILD === 'true';

const basePath = isPreviewBuild ? '/personal-site/preview/' : '/';
```

### Image Path Handling

A custom rehype plugin (`src/lib/rehype-base-url.mjs`) automatically prepends the base path to image URLs in markdown content. With the custom domain, this is typically a no-op since base is `/`, but it's preserved for preview build compatibility.

**How it works:** Images referenced as `/project-images/...` in markdown are automatically transformed to include the base path during build.

## Project Structure

```
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/        # Content collections (markdown files)
│   │   ├── awards/     # Award entries
│   │   ├── blog/       # Blog posts (folders with index.md)
│   │   ├── projects/   # Project case studies
│   │   └── work/       # Work history entries
│   ├── layouts/        # Page layout templates
│   ├── lib/            # Utilities and plugins
│   │   ├── utils.ts    # Helper functions
│   │   └── rehype-base-url.mjs  # Image path plugin
│   ├── pages/          # Route pages
│   ├── styles/         # Global CSS
│   ├── consts.ts       # Site configuration
│   └── types.ts        # TypeScript types
├── public/
│   ├── CNAME           # Custom domain for GitHub Pages
│   ├── fonts/          # Custom font files
│   └── project-images/ # Project screenshots/images
├── .github/workflows/  # GitHub Actions deployment
└── astro.config.mjs    # Astro configuration
```

### TypeScript Path Alias

The project uses `@*` as a path alias to `./src/*`:
- `@components/Header.astro` resolves to `./src/components/Header.astro`
- `@lib/utils` resolves to `./src/lib/utils.ts`

## Content Collections

Content is managed via Astro Content Collections with the following schemas:

### Blog (`src/content/blog/`)

```typescript
{
  title: string,
  description: string,
  date: Date,
  draft?: boolean  // Set true to hide from production
}
```

Blog posts are organized in folders: `src/content/blog/[slug]/index.md`

### Projects (`src/content/projects/`)

```typescript
{
  title: string,
  description: string,
  date: Date,
  draft?: boolean,
  demoURL?: string,  // Link to live project
  repoURL?: string   // Link to repository
}
```

Projects are case studies in folders: `src/content/projects/[Name]/[Name].md`

### Work (`src/content/work/`)

```typescript
{
  company: string,
  role: string,
  dateStart: Date,
  dateEnd: Date | string  // Can be "Present" for current role
}
```

### Awards (`src/content/awards/`)

```typescript
{
  title: string,
  organization: string,
  date: Date,
  categories?: string[],
  project?: string,
  awards?: string[],
  links?: { label: string, url: string }[]
}
```

## Site Configuration

Edit `src/consts.ts` to modify site metadata:

```typescript
export const SITE = {
  NAME: "Harrison Kaminsky",
  EMAIL: "hdkamin@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_AWARDS_ON_HOMEPAGE: 2,
};

export const SOCIALS = [
  { NAME: "linkedin", HREF: "https://www.linkedin.com/in/harrisonkaminsky/" },
  { NAME: "twitter-x", HREF: "https://x.com/Harry_Kaminsky" }
];
```

## Development Commands

| Command | Action |
|---------|--------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at localhost:4321 |
| `pnpm build` | Build production site to ./dist/ |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint |

## Styling

- **Dark/Light Mode:** Tailwind class-based (`dark:` variants)
- **Color Palette:** Stone tones for backgrounds
- **Typography:** Tailwind Typography plugin for article content
- **Animations:** CSS transitions with `.animate` class (scroll-triggered)

### Key Style Files

- `src/styles/global.css` - Base styles, animations, prose styling
- `tailwind.config.mjs` - Theme customization, font families

## Deployment

### GitHub Pages (Production)

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`):
- Triggers on push to `main` branch
- Uses `withastro/action@v5`
- Deploys to GitHub Pages with custom domain (harrisonkaminsky.com)

### DNS Configuration (One-Time Setup)

To complete custom domain setup, configure DNS at your registrar:

**Option A - Apex Domain:**
Add A records pointing to GitHub's IPs:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**Option B - With www subdomain:**
Add a CNAME record for `www` pointing to `hkaminsky.github.io`

After DNS propagates, enable "Enforce HTTPS" in GitHub repo Settings > Pages.

### Bolt.new (Development)

When running in Bolt.new:
- No environment variables needed
- Base path is `/`
- Dev server runs on port 4321

## Environment Variables (.env)

The project includes Supabase configuration for potential future features:

```
VITE_SUPABASE_URL=<supabase-project-url>
VITE_SUPABASE_ANON_KEY=<supabase-anon-key>
```

These are available for client-side use via `import.meta.env.VITE_SUPABASE_URL`.

## Common Tasks

### Adding a New Project

1. Create folder: `src/content/projects/[ProjectName]/`
2. Add markdown file: `[ProjectName].md` with frontmatter
3. Add images to: `public/project-images/[project-name]-images/`
4. Reference images in markdown as: `![Alt](/project-images/[project-name]-images/image.png)`

### Adding a Blog Post

1. Create folder: `src/content/blog/[slug]/`
2. Add `index.md` with required frontmatter
3. Set `draft: true` to hide from production

### Modifying Navigation

Edit `src/components/Header.astro` for main navigation links.

### Updating Footer/Copyright

Edit `src/components/Footer.astro`.

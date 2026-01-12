import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { rehypeBaseUrl } from "./src/lib/rehype-base-url.mjs";

const isPreviewBuild = process.env.PREVIEW_BUILD === 'true';

const basePath = isPreviewBuild ? '/personal-site/preview/' : '/';

export default defineConfig({
  site: 'https://harrisonkaminsky.com',
  base: basePath,
  markdown: {
    rehypePlugins: [[rehypeBaseUrl, { base: basePath }]],
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/projects/'),
    }),
    tailwind(),
  ],
});
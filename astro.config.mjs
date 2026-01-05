import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { rehypeBaseUrl } from "./src/lib/rehype-base-url.mjs";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const isPreviewBuild = process.env.PREVIEW_BUILD === 'true';

const getBasePath = () => {
  if (isPreviewBuild) return '/personal-site/preview/';
  if (isGitHubPages) return '/personal-site/';
  return '/';
};

const basePath = getBasePath();

export default defineConfig({
  site: 'https://hkaminsky.github.io',
  base: basePath,
  markdown: {
    rehypePlugins: [[rehypeBaseUrl, { base: basePath }]],
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
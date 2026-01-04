import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: 'https://hkaminsky.github.io',
  base: isGitHubPages ? '/personal-site' : '/',
  integrations: [mdx(), sitemap(), tailwind()],
});
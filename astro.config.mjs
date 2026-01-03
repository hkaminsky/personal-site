import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://hkaminsky.github.io',
  base: '/personal-site',
  integrations: [mdx(), sitemap(), tailwind()],
});
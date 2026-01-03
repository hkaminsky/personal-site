import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.NODE_ENV === "production" ? "https://astro-nano-demo.vercel.app" : "http://localhost:4321",
  integrations: [mdx(), sitemap(), tailwind()],
});
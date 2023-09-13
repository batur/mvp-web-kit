import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    partytown(),
    prefetch(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      customPages: ["https://astro.build"],
    }),
    tailwind(),
  ],
  site: "https://astro.build",
  output: "server",
  adapter:
    process.env.NODE_ENV === "production"
      ? vercel()
      : node({
          mode: "middleware",
        }),
});

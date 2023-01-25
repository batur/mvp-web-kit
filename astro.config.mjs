import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import image from "@astrojs/image";
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
    node(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    partytown(),
    prefetch(),
    sitemap(),
    tailwind(),
  ],
  output: "server",
  adapter: vercel(),
});

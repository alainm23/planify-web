import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), icon(), react()],
  site: "https://useplanify.com/",
  trailingSlash: "never",
  output: "server",
  adapter: vercel(),
});

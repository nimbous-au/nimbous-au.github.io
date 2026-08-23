import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nimbous-au.github.io",
  integrations: [tailwind({ applyBaseStyles: false })],
});

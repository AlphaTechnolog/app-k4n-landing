import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jags1906.github.io",
  base: 'app-k4n-landing',
  integrations: [tailwind(), react()]
});
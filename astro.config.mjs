// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/_error-mw',
  build: {
    format: 'file'
  }
});

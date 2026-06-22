import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        about: resolve(__dirname, 'about.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        'blog-bridal-shower': resolve(__dirname, 'blog/how-to-plan-a-bridal-shower.html'),
        'blog-baby-shower': resolve(__dirname, 'blog/baby-shower-themes-we-love.html'),
        'blog-wedding-decor': resolve(__dirname, 'blog/diy-wedding-decor-ideas.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        process: resolve(__dirname, 'process.html'),
        services: resolve(__dirname, 'services.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        gallery: resolve(__dirname, 'gallery.html'), // redirect to portfolio
        partners: resolve(__dirname, 'partners.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        'blog-bridal-shower': resolve(__dirname, 'blog/how-to-plan-a-bridal-shower.html'),
        'blog-baby-shower-themes': resolve(__dirname, 'blog/baby-shower-themes-we-love.html'),
        'blog-diy-decor': resolve(__dirname, 'blog/diy-decor-ideas-for-any-celebration.html'),
        'blog-color-palette': resolve(__dirname, 'blog/choosing-the-perfect-event-color-palette.html'),
        'blog-bridal-shower-games': resolve(__dirname, 'blog/bridal-shower-games-guests-love.html'),
        'blog-baby-shower-checklist': resolve(__dirname, 'blog/baby-shower-planning-checklist.html'),
        'blog-party-favors': resolve(__dirname, 'blog/creative-party-favor-ideas.html'),
        'blog-venue': resolve(__dirname, 'blog/how-to-choose-the-right-event-venue.html'),
        'blog-balloon-garland': resolve(__dirname, 'blog/balloon-garland-ideas.html'),
        'blog-sweet-sixteen': resolve(__dirname, 'blog/sweet-sixteen-party-ideas.html'),
        'blog-backyard-party': resolve(__dirname, 'blog/backyard-party-ideas.html'),
        'blog-event-planner': resolve(__dirname, 'blog/why-hire-an-event-planner.html'),
      },
    },
  },
});

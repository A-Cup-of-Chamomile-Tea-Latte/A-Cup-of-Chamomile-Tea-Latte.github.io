import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import astroExpressiveCode from 'astro-expressive-code';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import icon from 'astro-icon';
import react from '@astrojs/react';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Font from 'vite-plugin-font';

import mermaid from './src/plugins/mermaid.mjs';
import rehypeLazyLoadImage from './src/plugins/lazyLoadImage.mjs';

// https://astro.build/config
export default defineConfig({
  // ✅ GitHub Pages (User Pages)
  site: 'https://A-Cup-of-Chamomile-Tea-Latte.github.io',

  // Markdown pipeline: math + performance
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeLazyLoadImage],
    syntaxHighlight: false, // disable Astro default, use Expressive Code instead
  },

  integrations: [
    // Diagrams in Markdown / MDX
    mermaid(),

    // High-level code rendering (research-grade)
    astroExpressiveCode({
      themes: ['github-light', 'github-dark'],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
      shiki: {
        langs: [
          // custom grammars can be added here later
        ],
      },
      plugins: [
        pluginCollapsibleSections(),
        pluginLineNumbers(),
      ],
    }),

    mdx(),
    sitemap(),
    icon(),
    react(),
  ],

  // Vite-level optimizations
  vite: {
    plugins: [
      Font.vite({
        scanFiles: ['src/**/*.{ts,tsx,js,jsx,md,mdx,astro,yml}'],
      }),
    ],
  },
});

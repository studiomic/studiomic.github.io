import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSS Grid Layout Guidance",
  description: "トラックリストを理解するまでの例題集",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  markdown: {
    theme: {
      light: 'solarized-light',
      dark: 'kanagawa-wave'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Navigation',
        items: [
          { text: 'CSS Grid の基本', link: '/css-grid-1' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'MDN : Parent Properties',
        items: [
          { text: 'grid', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid' },
          { text: 'grid-template-columns', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-columns' },
          { text: 'grid-template-rows', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-rows' },
          { text: 'grid-template-areas', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-areas' },
          { text: 'grid-template', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-template' },

          { text: 'column-gap', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/column-gap' },
          { text: 'row-gap', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/row-gap' },
          { text: 'gap', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/gap' },

          { text: 'justify-items', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/justify-items' },
          { text: 'align-items', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/align-items' },
          { text: 'place-items', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/place-items' },
          { text: 'justify-content', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/justify-content' },
          { text: 'align-content', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/align-content' },
          { text: 'place-content', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/place-content' },

          { text: 'grid-auto-columns', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-columns' },
          { text: 'grid-auto-rows', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-rows' },
          { text: 'grid-auto-flow', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-flow' }
        ]
      },
      {
        text: 'MDN : Children Properties',
        items: [
          { text: 'grid-column-start', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-column-start' },
          { text: 'grid-column-end', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-column-end' },
          { text: 'grid-row-start', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-row-start' },
          { text: 'grid-row-end', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-row-end' },

          { text: 'grid-column', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-column' },
          { text: 'grid-row', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-row' },
          { text: 'grid-area', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/grid-area' },

          { text: 'justify-self', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/justify-self' },
          { text: 'align-self', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/align-self' },
          { text: 'place-self', link: 'https://developer.mozilla.org/ja/docs/Web/CSS/place-self' }
        ]
      },
      {
        text: 'Recommended Links',
        items: [
          { text: 'GRID: Cheatsheet + Clipboard Copy', link: 'https://grid.malven.co/' },
          { text: 'Grid by Example', link: 'https://gridbyexample.com/examples/' },
          { text: 'CSS Grid Layout Guide', link: 'https://css-tricks.com/snippets/css/complete-guide-grid/' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
    
  }
})

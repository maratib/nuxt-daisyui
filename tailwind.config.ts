// add or update the following in your tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e11d48",
          "secondary": "#00b636",
          "accent": "#ff7600",
          "neutral": "#130a10",
          "base-100": "#172933",
          "info": "#0092e6",
          "success": "#00a140",
          "warning": "#ff8400",
          "error": "#ff3d48",
        },
      },
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
    ],
    logs: false
  }, plugins: [
    "@tailwindcss/forms",
    '@tailwindcss/typography',
    require('daisyui'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require("tailwindcss-debug-screens"),
  ],

} satisfies Config

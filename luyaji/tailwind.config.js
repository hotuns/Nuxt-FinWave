/** @type {import('tailwindcss').Config} */

const svgToDataUri = require('mini-svg-data-uri')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],

  // Fix for dynamic :class
  safelist: [
    'alert-info',
    'alert-success',
    'alert-warning',
    'alert-error',
    'alert-success',
    'btn-primary',
    'btn-secondary',
    'btn-accent',
    'btn-ghost',
    'btn-link',
    'btn-info',
    'btn-success',
    'btn-warning',
    'btn-error',
    'border-success',
    'border-warning',
    'border-error',
    'progress-success',
    'progress-warning',
    'progress-error',
    'max-w-72',
    'from-emerald-300/20',
    'bg-gradient-to-r',
    'font-bold',
    'brightness-125',
    'p-6',
    'pt-4',
    'modal-top',
    'sm:modal-middle',
    // 特定于路亚记的class
    'fish-card',
    'equipment-card',
    'map-container',
    'weather-widget',
    'record-item',
    'record-details',
    'fish-badge',
    'equipment-badge',
    'location-marker',
    'weather-icon',
    'equipment-rating'
  ],

  theme: {
    extend: {
      colors: {
        'fishing': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'equipment': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      backgroundImage: (theme) => ({
        'multiselect-caret': ``,
        'multiselect-spinner': `url("${svgToDataUri(
            `<svg viewBox="0 0 512 512" fill="${theme('colors.green.500')}" xmlns="http://www.w3.org/2000/svg"><path d="M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"></path></svg>`,
        )}")`,
        'multiselect-remove': ``,
      })
    },
  },

  plugins: [
      require("daisyui"),
      require('@neojp/tailwindcss-important-variant')
  ],

  daisyui: {
    themes: [
      'light',
      'dark',
    ],
  },
}

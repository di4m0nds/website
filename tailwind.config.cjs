/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Quicksand', 'sans-serif'],
			poiret: ['Poiret One', 'sans-serif'],
			code: ['Courier New', 'monospace']
		},
		extend: {
			screens: {
        'tall': { 'raw': '(min-height: 800px)' },
      }
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				main: '#333333',
				secondary: '#232323',
				myPurple: '#78258D',
			},
			keyframes: {
				slideDown: {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				slideUp: {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				slideDown: 'slideDown 300ms ease-out',
				slideUp: 'slideUp 300ms ease-out',
			},
		},
	},
	plugins: [],
}

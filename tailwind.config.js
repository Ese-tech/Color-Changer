/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{html,js,ts,tsx}", // Watch all your HTML/JS/TS files in the src folder
		"./*.html", // Add this line to include HTML files in the root directory
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

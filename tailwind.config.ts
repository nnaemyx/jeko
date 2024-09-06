import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./constants/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "800px",
			lg: "1000px",
			xl: "1280px",
		},
		extend: {
			colors: {
				primary: "#02040F",
				secondary: "#34A18C",
				secondaryLight: "#09444A",
			},
			fontFamily: {
				dm_sans: ['var(--font-dm_sans)'],
				space_grotesk: ['var(--font-space_grotesk)'],
			},
		},
	},
	plugins: [],
};
export default config;

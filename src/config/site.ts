import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "Minesweeper: Word Hunt",
	description: "A fun new twist on classic Minesweeper! Each flag could reveal a dangerous mine, or a crucial hint.  Explore over a thousand puzzles across 10 fun categories - from Movies & TV to Countries, Animals, and more.",
	keywords: ["mobile app", "landing page", "astro", "react", "typescript"],
	logo: "/assets/favicon.png",
	storeLinks: {
		apple: "https://apps.apple.com/us/app/minesweeper-word-hunt/id6749333663",
		google: "#",
	},
	socialLinks,
	showReviews: false,
} as const;
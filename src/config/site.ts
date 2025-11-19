import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "Minesweeper: Word Hunt",
	description: "A fun new twist on classic Minesweeper! Each flag could reveal a dangerous mine, or a crucial hint.  Explore over a thousand puzzles across 10 fun categories - from Movies & TV to Countries, Animals, and more.",
	keywords: ["mobile app", "landing page", "astro", "react", "typescript"],
	logo: "/assets/favicon.png",
	storeLinks: {
		apple: "#",
		google: "#",
	},
	socialLinks,
	showReviews: false,
} as const;
import { FiBox, FiStar, FiZap, FiSmile, FiAward } from "react-icons/fi";
import type { Feature } from "@/types/app";

export const features: Feature[] = [
	{
		title: "A New Twist",
		description: "Once you've played Minesweeper with puzzles, you'll never want to go back!",
		icon: FiSmile,
	},
	{
		title: "Over 1,000 Puzzles",
		description: "With over a thousand puzzles across ten fun categories, the fun never ends!",
		icon: FiStar,
	},
	{
		title: "Solve Quickly for High Scores",
		description: "Minesweeper: Word Hunt lets you solve puzzles quickly for higher scores!  Solve the puzzle with less than 1/3 of the mines flagged to achieve a perfect score.",
		icon: FiAward,
	},
];

import GameDisplayItem from "./GameDisplayItem";
import GameSearch from "./GameSearch";

import { AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import { NavLink } from "react-router";

import placeholderImg from "../../img/placeholder.png";

interface Props {
	filteringEnabled?: boolean;
	previewOnly?: boolean;
}

interface GameInfo {
	game: {
		name: string;
		thumbnail: string;
		link?: string;
	};
	working: {
		startingDate: string;
		endDate: string;
		isCurrentWork: boolean;
	};
	me: {
		owners: string[];
		roles: string[];
	};
}

const games = [
	{
		game: {
			name: "Tesdting !!!11121ummmmm",
			thumbnail: placeholderImg,
			link: "https://youtube.com/",
		},
		working: {
			startingDate: "01/20/2019",
			endDate: "",
			isCurrentWork: true,
		},
		me: {
			owners: ["me", "ummm idk"],
			roles: ["Scripter"],
		},
	},
	{
		game: {
			name: "hajime no ippo",
			thumbnail: placeholderImg,
			link: undefined,
		},
		working: {
			startingDate: "01/20/2019",
			endDate: "",
			isCurrentWork: true,
		},
		me: {
			owners: ["me", "ummm idk"],
			roles: ["Scripter"],
		},
	},
	{
		game: {
			name: "that dame da ne game or smt",
			thumbnail:
				"https://media1.tenor.com/m/HnnSCCP5cGEAAAAd/dame-da-ne-guy-yakuza.gif",
			link: undefined,
		},
		working: {
			startingDate: "01/20/2019",
			endDate: "",
			isCurrentWork: true,
		},
		me: {
			owners: ["me", "ummm idk"],
			roles: ["Scripter"],
		},
	},
	{
		game: {
			name: "you just gotta love cp man",
			thumbnail: "src/img/placeholder.png",
			link: undefined,
		},
		working: {
			startingDate: "01/20/2019",
			endDate: "",
			isCurrentWork: true,
		},
		me: {
			owners: ["me", "ummm idk"],
			roles: ["Scripter"],
		},
	},
	{
		game: {
			name: "cool awesome sauce game",
			thumbnail: "src/img/placeholder.png",
			link: undefined,
		},
		working: {
			startingDate: "01/20/2019",
			endDate: "",
			isCurrentWork: true,
		},
		me: {
			owners: ["me", "ummm idk"],
			roles: ["Scripter"],
		},
	},
	{
		game: {
			name: "hello this ummmmmmmm",
			thumbnail: "src/img/placeholder.png",
			link: undefined,
		},
		working: {
			startingDate: "01/20/2019",
			endDate: "",
			isCurrentWork: true,
		},
		me: {
			owners: ["me", "ummm idk"],
			roles: ["Scripter"],
		},
	},
];

const GameDisplay = ({ filteringEnabled, previewOnly }: Props) => {
	const [searchPrompt, setSearchPrompt] = useState("");
	const gamesToDisplay = useMemo(() => {
		if (searchPrompt == "") return games;
		const filtered: GameInfo[] = [];
		const loweredSearchPrompt = searchPrompt.toLowerCase();
		games.forEach((v, k) => {
			const gameName = v.game.name.toLowerCase();
			if (gameName.includes(loweredSearchPrompt)) {
				filtered[k] = v;
			}
		});
		console.log(filtered);
		return filtered;
	}, [searchPrompt]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setSearchPrompt(e.target.value);
	};
	return (
		<div className="relative flex flex-col items-center *:max-sm:max-w-[455px]">
			{filteringEnabled && <GameSearch onChange={onChange} />}
			<div
				className={`grid grid-cols-2 max-sm:grid-cols-1 w-full auto-rows-min gap-2 ${
					previewOnly
						? "h-[800px] overflow-hidden gradient-mask-b-[black,black_70%,transparent_100%]"
						: ""
				}`}
			>
				<AnimatePresence>
					{gamesToDisplay.map((v, k) => {
						return (
							<GameDisplayItem
								gameInfo={{ game: v.game, working: v.working, me: v.me }}
								key={k}
							/>
						);
					})}
				</AnimatePresence>
			</div>
			{previewOnly && (
				<NavLink
					to="/mywork"
					className="absolute p-2 hover:bg-green-50/5 hover:backdrop-blur-sm transition-all duration-200 rounded-md bottom-10 left-1/2 -translate-x-1/2 text-xl flex flex-row gap-1 items-center"
				>
					see more of my work
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="size-6 animate-bounce-rightward"
					>
						<path
							fillRule="evenodd"
							d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
							clipRule="evenodd"
						/>
					</svg>
				</NavLink>
			)}
		</div>
	);
};

export default GameDisplay;

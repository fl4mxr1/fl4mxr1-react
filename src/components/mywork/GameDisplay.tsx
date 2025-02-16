import GameDisplayItem from "./GameDisplayItem";
import GameSearch from "./GameSearch";
import Button from "../Button";

import { AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";

interface Props {
	filteringEnabled?: boolean;
	previewOnly?: boolean;
}

const games = [
	{
		game: {
			name: "Tesdting !!!11121ummmmm",
			thumbnail: "src/img/placeholder.png",
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

const GameDisplayGrid = ({ filteringEnabled, previewOnly }: Props) => {
	const [searchPrompt, setSearchPrompt] = useState("");
	const gamesToDisplay = useMemo(() => {
		const filtered: object[] = [];
		const loweredSearchPrompt = searchPrompt.toLowerCase();
		games.forEach((v, k) => {
			const gameName = v.game.name.toLowerCase();
			if (gameName.includes(loweredSearchPrompt)) {
				filtered[k] = v;
			}
		});
		return filtered;
	}, [searchPrompt]);

	const onChange = (e: React.ChangeEvent) => {
		setSearchPrompt(e.target.value);
	};
	return (
		<div>
			<GameSearch onChange={onChange} />
			<div className="grid grid-cols-2 max-sm:grid-cols-1 auto-rows-min max-sm:max-w-[455px] gap-2 h-[900px]">
				<AnimatePresence>
					{gamesToDisplay.map((v, k) => {
						return <GameDisplayItem gameInfo={v} key={k} />;
					})}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default GameDisplayGrid;

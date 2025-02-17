import OverflowLabel from "../OverflowLabel";
import Button from "../Button";
import Tooltip from "../Tooltip";
import Modal from "../Modal";

import { motion } from "motion/react";
import { useState } from "react";

interface GameInfoProp {
	game: {
		name: string;
		thumbnail: string;
		link?: string;
	};
	working: {
		startingDate: string;
		endDate?: string;
		isCurrentWork?: boolean;
	};
	me: {
		owners: string[];
		roles: string[];
	};
}

interface Props {
	gameInfo: GameInfoProp;
}

const GameDisplayItem = ({ gameInfo }: Props) => {
	const [linkConfirmModalOn, setLinkConfirmModalOn] = useState(false);
	return (
		<motion.div
			className="bg-black border-2 border-green rounded-xl aspect-[10/7] relative"
			initial={{
				opacity: 0,
				y: 10,
			}}
			exit={{
				scale: 1.2,
				opacity: 0,
			}}
			animate={{ opacity: 1, y: 0, rotateY: 0 }}
			layout
			transition={{
				type: "spring",
				damping: 50,
				stiffness: 400,
			}}
		>
			<img
				src={gameInfo.game.thumbnail || "/img/placeholder.png/"}
				alt={gameInfo.game.name + " thumbnail"}
				className="w-full h-[100%] bg-red gradient-mask-b-[rgba(0,0,0,1),rgba(0,0,0,1)_50%,transparent] object-cover select-none"
				draggable="false"
			/>
			<div className="absolute bottom-0 left-0 w-full h-max p-2 grid grid-rows-2 gap-2">
				<OverflowLabel className="text-3xl text-green font-black w-full drop-shadow-md">
					{gameInfo.game.name}
				</OverflowLabel>
				<div className="flex flex-row gap-1">
					<Tooltip
						content={
							<>
								Check out <i className="font-normal">"{gameInfo.game.name}"</i>{" "}
								and support the creator/devs!
							</>
						}
						placement="top"
					>
						<Button
							onClick={() => {
								//window.open(gameInfo.game.link);
								setLinkConfirmModalOn(true);
							}}
						>
							CHECK IT OUT!
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="size-5"
							>
								<path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
								<path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
							</svg>
						</Button>
					</Tooltip>
					<div className="h-full w-auto bg-red/50 relative">
						<div className="absolute b-0 w-full h-1 rounded-full bg-w-primary/5"></div>
					</div>
				</div>
			</div>
			<Modal
				title={<>Confirmation</>}
				buttons={
					<>
						<Button
							onClick={() => {
								window.open(gameInfo.game.link);
								setLinkConfirmModalOn(false);
							}}
						>
							yeah
						</Button>
						<Button
							priority={1}
							onClick={() => {
								setLinkConfirmModalOn(false);
							}}
						>
							nuh uh
						</Button>
					</>
				}
				visible={linkConfirmModalOn}
			>
				this link is taking you to the following page:
				<div className="px-3 py-2 my-3 bg-green/5 rounded-full">
					{gameInfo.game.link}
				</div>
				are you <i>sure</i> you'd like to go?
			</Modal>
		</motion.div>
	);
};

export default GameDisplayItem;

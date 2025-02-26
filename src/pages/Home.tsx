import { useEffect, useRef, useState } from "react";

import SiteWrapper from "../components/site_base/SiteWrapper";

import MatrixRain from "../components/MatrixRain";
import Marquee from "../components/Marquee";
import SocialList from "../components/SocialList";
import LanguageList from "../components/aboutme/LanguageList";

import Section from "../components/site_base/Section";
import Tooltip from "../components/Tooltip";
import Button from "../components/Button";
import Modal from "../components/Modal";

import { NavLink } from "react-router";

import MissileExplosion from "../components/funny/MissileExplosion";

import GameDisplay from "../components/mywork/GameDisplay";

import placeholderImg from "../img/placeholder.png";
import aboutMeBust from "../img/aboutme/flourmixer_bust.png";
import aboutMeTinyGuy from "../img/aboutme/flourmixer_tinyguy.png";
import { AnimatePresence, motion } from "motion/react";

const roles = [
	"GAME DEVELOPER",
	"FRONTEND WEB DEVELOPER (kind of)",
	"UI DESIGNER",
	"WEB DESIGNER",
	"3D MODELLER",
	"PROGRAMMER",
	"ARTIST",
];

const adj = [
	"ANIME ENJOYER",
	"NERD",
	"CAT LOVER (but sadly i don't have one 〒▽〒)",
	"PUBLIC TRANSPORT SIMULATOR ENTHUSIAST",
	"I WANT FOOD SO BAD RN (* ´ ﹃｀*)",
	"CERTIFIED SILLY GUY, LEADER OF THE SILLY COUNCIL",
	"MEATBALL LOVER (i'm swedish (. ❛ ᴗ ❛.))",
	"HE/HIM",
];

const App = () => {
	const [scrollTipVisible, setScrollTipVisible] = useState(true);
	const scrollTipTriggerRef = useRef<HTMLDivElement>(null);

	const [testModalVisible, setTestModalVisible] = useState(false);

	const [showMissileExplosion, setShowMissileExplosion] = useState(false);
	const [showAboutMePictures, setShowAboutMePictures] = useState(true);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollTipVisible(window.scrollY < 200);
		});
	}, [scrollTipTriggerRef]);

	return (
		<SiteWrapper
			unrestrained={
				<>
					<div
						className={`${
							scrollTipVisible ? "opacity-100" : "opacity-0"
						} z-10 transition-opacity p-4 sm:pr-6 rounded-full fixed bottom-5 left-5 bg-green motion-safe:animate-bounce flex justify-center items-center gap-2 font-black text-black`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="size-6"
						>
							<path
								fillRule="evenodd"
								d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 8 2Z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="max-sm:hidden">
							YOU SHOULD SCROLL DOWN... NOW!
						</span>
					</div>
					<MatrixRain className="w-full h-full [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] absolute inset-0 opacity-40" />
				</>
			}
		>
			<header className="mb-10 h-dvh flex flex-col justify-center items-center gap-2 select-none">
				<div className="w-full h-max p-5 relative">
					<div className="absolute inset-0 bg-black blur-2xl w-full h-full -z-10"></div>
					<Marquee
						className="pb-5 w-full text-7xl max-sm:text-5xl transition-[font-size] duration-700 ease-in-out font-display font-black"
						speed={1}
					>
						<div className="px-5">fl4mxr1.</div>
					</Marquee>
					<Marquee
						className="w-full text-xl font-display"
						speed={0.5}
						invert={true}
						stopOnHover={true}
					>
						{roles.map((v, k) => {
							return (
								<span className={`border-x border-x-green/30 px-5`} key={k}>
									{v}
								</span>
							);
						})}
					</Marquee>
					<Marquee
						className="w-full text-xl font-display"
						speed={0.4}
						invert={true}
						stopOnHover={true}
					>
						{adj.map((v, k) => {
							return (
								<span className={`border-x border-x-green/30 px-5`} key={k}>
									{v}
								</span>
							);
						})}
					</Marquee>
					<SocialList />
				</div>
			</header>
			<div ref={scrollTipTriggerRef} className="mt-[3px] sticky"></div>
			<Section>
				<h1 className="text-3xl font-black my-7 text-center w-full">
					‧₊˚✧ about me !!! ✧˚₊‧
				</h1>
				<div className="w-full h-full grid grid-cols-10 grid-rows-1">
					<div className="col-span-4 max-sm:col-span-3 relative h-[500px]">
						{showAboutMePictures && (
							<AnimatePresence>
								<motion.div
									className="absolute top-0 left-0 w-full h-full"
									animate={{
										opacity: 1,
										scale: 1,
									}}
									initial={{
										opacity: 0,
										scale: 0,
									}}
									exit={{
										opacity: 0,
									}}
									transition={{
										type: "spring",
										stiffness: 620,
										damping: 20,
										mass: 2,
									}}
								>
									<img
										src={aboutMeBust}
										alt="drawing of flour mixer, leaning onto the text that is to the right of the screen."
										className="absolute -right-4 w-full h-full object-contain object-right pointer-events-none"
										draggable={false}
									/>
									<img
										src={aboutMeTinyGuy}
										alt="drawing of flour mixer, flating above the big flour mixer. he is very tiny."
										className="absolute left-1/4 -bottom-1 w-5/12 animate-bob drop-shadow-[0_3px_4px_black] z-10 pointer-events-none"
										draggable={false}
									/>
								</motion.div>
							</AnimatePresence>
						)}
						{showMissileExplosion && (
							<div className="w-[800px] h-[500px] absolute top-1/4 left-3/4 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
								<MissileExplosion
									onEnd={() => {
										setShowMissileExplosion(false);
										setTimeout(() => {
											console.log("YEAAAAAAAAAAAA");
											setShowAboutMePictures(true);
										}, 3000);
									}}
									onLoad={() => {
										setTimeout(() => {
											setShowAboutMePictures(false);
										}, 3500);
									}}
									className="w-[100%] h-[calc(100%+50%)] object-fill"
								/>
							</div>
						)}
						<button
							className="p-1 fill-green/30 bg-black/70 rounded-full absolute bottom-0 left-0"
							onClick={() => {
								setShowMissileExplosion(true);
								setTimeout(() => {
									setShowAboutMePictures(false);
								}, 3500);
							}}
						>
							<Tooltip
								content={
									<span className="text-nowrap">
										<i>KILL</i> him.
									</span>
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="size-5 animate-spin-slow"
								>
									<path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 448a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-256c0-20.7 11.3-38.8 28-48.5l-36-62.3c-8.8-15.3-28.7-20.8-42-9-25.6 22.6-43.9 53.3-50.9 88.1-3.4 17.2 11.2 31.7 28.9 31.7zm28 48.5-36 62.4c-8.8 15.3-3.6 35.2 13.1 40.8 16 5.4 33.1 8.3 50.9 8.3s34.9-2.9 50.9-8.3c16.7-5.6 21.9-25.5 13.1-40.8l-36-62.4c-8.2 4.8-17.8 7.5-28 7.5s-19.8-2.7-28-7.5m84-48.5h72c17.7 0 32.3-14.5 28.8-31.8-7-34.8-25.3-65.5-50.9-88.1-13.2-11.7-33.1-6.3-42 9l-36 62.3c16.7 9.7 28 27.8 28 48.5zm-56 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"></path>
								</svg>
							</Tooltip>
						</button>
					</div>
					<div className="col-span-6 max-sm:col-span-7 p-3">
						<h1 className="text-3xl font-black">
							hi! i'm flour mixer <span>(aka. fl4mxr1)</span>
						</h1>
						<p className="pt-3">
							i am a programmer, ui designer, 3d modeller, web
							designer/developer and game dev from 🇸🇪🇹🇭. i am also planning to
							learn backend and other languages like maybe Java or C#. i can
							currently code in:
						</p>
						<LanguageList />
						<p className="pb-3">
							in my free time i enjoy drawing and playing public transport
							simulators such as Bus Simulator 18, Stepford County Railway and
							more
							<br />i also love cats {">:3"}
						</p>
						<div className="flex flex-row gap-2 items-center text-green-50 fill-green-50 w-max text-sm font-black mb-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="size-4"
							>
								<path
									fillRule="evenodd"
									d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z"
									clipRule="evenodd"
								/>
							</svg>
							this <i>AWESOME !!!</i> art was made by
							<a
								href="https://tiktok.com/@isuckedmyowntoes"
								className="underline decoration-wavy decoration-green-50/20"
							>
								<Tooltip
									content={<>TikTok (if you can't tell)</>}
									placement="top"
									className="pr-1"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
										className="size-4 inline"
									>
										<path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3v89.9a74.6 74.6 0 1 0 52.2 71.2V0h88a121 121 0 0 0 1.9 22.2 122.2 122.2 0 0 0 53.9 80.2 121.4 121.4 0 0 0 67 20.1z"></path>
									</svg>
								</Tooltip>
								@isuckedmyowntoes
							</a>
						</div>
						<NavLink
							to="/aboutme"
							className="underline decoration-wavy decoration-green/20 italic text-lg"
						>
							MORE about me !!
						</NavLink>
					</div>
				</div>
			</Section>

			<Section>
				<h1 className="text-3xl font-black my-7 text-center w-full">
					‧₊˚✧ my work !!! ✧˚₊‧
				</h1>
				<GameDisplay previewOnly={true} />
			</Section>

			<Button
				onClick={() => {
					console.log("modal opening");
					setTestModalVisible(true);
				}}
			>
				Open test modal !!!!
			</Button>
			<Modal
				title={
					<>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
						molestias.
					</>
				}
				size="md"
				visible={testModalVisible}
				buttons={
					<>
						<Button onClick={() => setTestModalVisible(false)}>
							I HAVE NUTTING !!! 💔
						</Button>
					</>
				}
			>
				modal text here!!!!!!!!! i can also put{" "}
				<span className="text-4xl">BIG TEXT !!!!</span> and{" "}
				<span className="text-xs">small text....</span>
				and also some{" "}
				<Tooltip
					content={<>this is a tooltip!</>}
					placement="top"
					className="underline decoration-wavy decoration-green-50/50"
				>
					text with a tooltip!
				</Tooltip>
				<img src="src/img/placeholder.png" alt="big poo" />
			</Modal>

			<Button
				onClick={() => setShowMissileExplosion(true)}
				className="relative my-32"
			>
				Exploding button
				{showMissileExplosion && (
					<MissileExplosion
						className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2 min-w-[500px] min-h-[500px]"
						onEnd={() => {
							setShowMissileExplosion(false);
						}}
					/>
				)}
			</Button>
		</SiteWrapper>
	);
};

export default App;

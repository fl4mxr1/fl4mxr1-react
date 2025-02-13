import MatrixRain from "./components/MatrixRain";
import Marquee from "./components/Marquee";
import { useEffect, useRef, useState } from "react";

const App = () => {
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
		"CERTIFIED BIG BACK",
		"CERTIFIED SILLY GUY, LEADER OF THE SILLY COUNCIL",
		"MEATBALL LOVER (i'm swedish (. ❛ ᴗ ❛.))",
		"HE/HIM",
	];

	const [scrollTipVisible, setScrollTipVisible] = useState(true);
	const scrollTipTriggerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollTipTrigger = scrollTipTriggerRef.current;
		const intersectObs = new IntersectionObserver((entries) => {
			setScrollTipVisible(!entries[0].isIntersecting);
		});
		intersectObs.observe(scrollTipTrigger);
		return () => intersectObs.disconnect;
	}, [scrollTipTriggerRef]);

	return (
		<div className="w-full h-full m-0 text-w-primary font-mono overflow-auto">
			<div
				className={`${
					scrollTipVisible ? "opacity-100" : "opacity-0"
				} transition-opacity p-4 sm:pr-6 rounded-full fixed bottom-5 left-5 bg-green motion-safe:animate-bounce flex justify-center items-center gap-2 font-black text-black`}
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
				<span className="max-sm:hidden">YOU SHOULD SCROLL DOWN... NOW!</span>
			</div>
			<MatrixRain className="w-full h-full [mask-image:linear-gradient(to_bottom,black_60%,transparent)] absolute inset-0 opacity-10" />
			<div className="h-max min-h-full max-w-[750px] w-full text-neutral-100 px-10 absolute left-1/2 -translate-x-1/2">
				<section className="mb-10 h-dvh flex flex-col justify-center gap-2">
					<Marquee
						className="pb-5 w-full text-7xl max-sm:text-5xl transition-[font-size] duration-700 ease-in-out text-green font-display font-black"
						speed={1}
					>
						<div className="px-5">fl4mxr1.</div>
					</Marquee>
					<Marquee
						className="w-full text-xl text-green font-display"
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
						className="w-full text-xl text-green font-display"
						speed={0.25}
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
				</section>
				<div ref={scrollTipTriggerRef} className="mt-[3px]"></div>
				<h1 className="text-3xl font-black">‧₊˚✧ socials !!! ✧˚₊‧</h1>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
				tempore doloremque officia distinctio animi accusamus amet aliquam,
				itaque quam hic facilis tempora, harum adipisci labore perferendis illo
				est, sint aliquid rem quia dolore beatae dolorum commodi! Unde, amet
				cum. Error saepe laudantium ipsa adipisci velit aspernatur
				exercitationem delectus placeat deleniti et quaerat, corrupti numquam
				sequi rem quasi pariatur suscipit cum temporibus quae assumenda vero
				eligendi ex corporis! Quibusdam quisquam magni pariatur maxime dolores
				esse! Vero quibusdam accusamus exercitationem veniam, voluptates commodi
				repellat quam ratione corporis sequi architecto nisi in eos eaque
				officiis culpa. Similique maiores, corporis consectetur molestiae
				molestias enim!
			</div>
		</div>
	);
};

export default App;

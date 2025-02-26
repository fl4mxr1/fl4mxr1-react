import SiteWrapper from "../components/site_base/SiteWrapper";

import Marquee from "../components/Marquee";
import GameDisplay from "../components/mywork/GameDisplay";
import Tooltip from "../components/Tooltip";
import { NavLink } from "react-router";

const MyWork = () => {
	return (
		<SiteWrapper maxWidth={1000}>
			<div className="flex flex-row gap-2 items-center">
				<NavLink to="/" className="flex flex-row items-center group">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="size-10 transition-transform group-hover:-translate-x-2 duration-700"
					>
						<path
							fillRule="evenodd"
							d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="text-nowrap text-xl font-black max-sm:hidden">
						go back
					</span>
				</NavLink>
				<Marquee className="my-12 text-5xl font-black basis-full" speed={1}>
					<span className="px-3">my work! (❁´◡`❁)</span>
				</Marquee>
			</div>
			<GameDisplay filteringEnabled={true}></GameDisplay>
		</SiteWrapper>
	);
};

export default MyWork;

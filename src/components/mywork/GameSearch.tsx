import { useState } from "react";

interface Props {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GameSearch = ({ onChange }: Props) => {
	const [searchPrompt, setSearchPrompt] = useState("");

	const onSearchPromptChanged = (ev) => {
		const newSearchPrompt = ev.target.value;
	};

	return (
		<div className="mb-2 w-full">
			<div className="flex flex-row gap-2">
				<div className="basis-full px-3 py-3 rounded-lg bg-black border-2 border-green flex flex-row items-center gap-2 text-green focus-within:outline outline-green/50 outline-offset-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="size-6"
					>
						<path
							fillRule="evenodd"
							d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
							clipRule="evenodd"
						/>
					</svg>

					<input
						type="text"
						className="bg-transparent text-lg w-[90%] rounded-md focus:outline-none font-medium placeholder-green-50"
						autoComplete="false"
						placeholder="search..."
						onChange={onChange}
					/>
				</div>
				<button className="h-full rounded-lg bg-black border-2 border-green px-5 py-4 flex flex-row items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="size-5"
					>
						<path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
					</svg>
					<span className="max-xs:hidden">filters</span>
				</button>
			</div>
			<div className="flex flex-row gap-2 mt-2">
				<button className="py-1 px-3 bg-black border-2 border-green flex flex-row gap-1 items-center rounded-full">
					Filter Name
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="size-4"
					>
						<path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default GameSearch;

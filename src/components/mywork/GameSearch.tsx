import GameSearchFilterDropDown from "./GameSearchFilterDropDown";

interface Props {
	onChange: (e: React.ChangeEvent) => void;
}

const GameSearch = ({ onChange }: Props) => {
	return (
		<div className="flex flex-row gap-2 mb-2">
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
			<GameSearchFilterDropDown />
		</div>
	);
};

export default GameSearch;

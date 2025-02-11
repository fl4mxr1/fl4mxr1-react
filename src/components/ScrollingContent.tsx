import { useState, useRef, useEffect } from "react";

interface Props {
	children?: React.ReactNode;
	className?: string;
	invert?: boolean;
}

const ScrollingContent = ({ children, className, invert }: Props) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [repetitions, setRepetitions] = useState(2);

	useEffect(() => {
		const calculateRepetitions = () => {
			const container = containerRef.current;
			const content = contentRef.current;
			if (!container || !content) return;

			const containerWidth = container.offsetWidth;
			const contentWidth = content.offsetWidth;
			// Calculate how many repetitions needed to fill container twice (for smooth infinite scroll)
			const needed = Math.ceil((containerWidth * 2) / contentWidth) + 1;
			setRepetitions(needed);
		};

		calculateRepetitions();
		window.addEventListener("resize", calculateRepetitions);
		return () => window.removeEventListener("resize", calculateRepetitions);
	}, []);

	return (
		<div ref={containerRef} className={`overflow-x-hidden ${className}`}>
			<div
				className={`flex flex-row gap-2 animate-scrollingcontent-scroll${
					(invert && "-invert") || ""
				}`}
			>
				{Array.from({ length: repetitions }, (_, index) => (
					<div
						key={index}
						ref={index === 0 ? contentRef : undefined}
						className="w-max text-nowrap px-2"
					>
						{children}
					</div>
				))}
			</div>
		</div>
	);
};

export default ScrollingContent;

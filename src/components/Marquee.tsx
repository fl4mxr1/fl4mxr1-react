import { useState, useRef, useEffect } from "react";
import React from "react";

interface Props {
	children?: React.ReactNode;
	className?: string;
	invert?: boolean;
	speed?: number;
	stopOnHover?: boolean;
}

const Marquee = ({
	children,
	className,
	invert,
	speed,
	stopOnHover,
}: Props) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [repetitions, setRepetitions] = useState(2);
	const [animationDuration, setAnimationDuration] = useState(20);
	const [contentWidthPx, setContentWidthPx] = useState(0);
	const [animState, setAnimState] = useState("running");

	useEffect(() => {
		const calculate = () => {
			const container = containerRef.current;
			const content = contentRef.current;
			if (!container || !content) return;

			const containerWidth = container.clientWidth;
			const contentWidth = content.clientWidth;
			// Calculate how many repetitions needed to fill container twice (for smooth infinite scroll)
			const needed = Math.ceil((containerWidth * 2) / contentWidth) + 1;
			setRepetitions(needed);

			// Calculate animation duration based on content width
			// Adjust the multiplier (20) to control speed
			const duration = contentWidth / 100 / (speed || 2);
			setAnimationDuration(duration);

			setContentWidthPx(contentWidth);
		};

		calculate();
		window.addEventListener("resize", calculate);
		const resizeObs = new ResizeObserver(calculate);
		if (contentRef.current) resizeObs.observe(contentRef.current);
		return () => {
			window.removeEventListener("resize", calculate);
			resizeObs.disconnect();
		};
	}, [speed]);

	return (
		<div
			ref={containerRef}
			className={`overflow-x-hidden overflow-y-hidden gradient-mask-r-[transparent,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%] ${className}`}
		>
			<div
				className={`flex flex-row motion-reduce:animate-none`}
				style={
					{
						"--content-width": `${contentWidthPx}px`,
						animation: `scrollContent${
							invert ? "Invert" : ""
						} ${animationDuration}s linear infinite`,
						animationPlayState: stopOnHover ? animState : "running",
					} as React.CSSProperties
				}
			>
				{Array.from({ length: repetitions }, (_, index) => (
					<div
						key={index}
						ref={index === 0 ? contentRef : undefined}
						className="w-max text-nowrap"
						onMouseEnter={() => setAnimState("paused")}
						onMouseLeave={() => setAnimState("running")}
					>
						{children}
					</div>
				))}
			</div>
		</div>
	);
};

export default Marquee;

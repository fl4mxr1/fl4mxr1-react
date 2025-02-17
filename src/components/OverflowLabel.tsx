import {
	ReactNode,
	type CSSProperties,
	useState,
	useEffect,
	useRef,
} from "react";
//import { motion } from "motion";

interface Props {
	children?: ReactNode;
	className?: string;
}

const OverflowLabel = ({ children, className }: Props) => {
	//const [isOverflowing, setIsOverflowing] = useState(false);
	const [overflow, setOverflow] = useState(0);
	const [animEnabled, setAnimEnabled] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const content = contentRef.current;

		function calc() {
			const containerWidth = container?.clientWidth || 0;
			const contentWidth = content?.clientWidth || 0;
			const diff = contentWidth - containerWidth;
			//setIsOverflowing(diff > 0);
			setOverflow(Math.max(0, diff));
		}

		calc();
		const resizeObs = new ResizeObserver(calc);
		if (container) {
			resizeObs.observe(container);
		}
		if (content) {
			resizeObs.observe(content);
		}
		document.addEventListener("resize", calc);

		return () => {
			resizeObs.disconnect();
			document.removeEventListener("resize", calc);
		};
	}, []);

	return (
		<div
			className={`text-nowrap overflow-hidden h-min transition-all duration-300 ${
				animEnabled
					? "gradient-mask-r-[rgba(0,0,0,1),rgba(0,0,0,1)_calc(100%-20px),rgba(0,0,0,1)_100%]"
					: "gradient-mask-r-[rgba(0,0,0,1),rgba(0,0,0,1)_calc(100%-20px),transparent_100%]"
			} duration-200 ${className || ""}`}
			ref={containerRef}
			onMouseEnter={() => {
				setAnimEnabled(true);
			}}
			onMouseLeave={() => {
				setAnimEnabled(false);
			}}
		>
			<div
				className="w-max h-min"
				style={
					{
						animation: animEnabled
							? "overflowLabelReveal 15s cubic-bezier(.34,0,.61,1) infinite"
							: "none",
						"--overflow": `${overflow}px`,
					} as CSSProperties
				}
				ref={contentRef}
			>
				{children}
			</div>
		</div>
	);
};

export default OverflowLabel;

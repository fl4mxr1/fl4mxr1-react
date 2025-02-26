import {
	FloatingArrow,
	autoUpdate,
	useFloating,
	offset,
	shift,
	arrow,
	useHover,
	useInteractions,
	useTransitionStyles,
	autoPlacement,
	limitShift,
} from "@floating-ui/react";
import { useRef, useState, type ReactNode } from "react";

interface Props {
	children?: ReactNode;
	placement?: string;
	content?: ReactNode;
	shouldShift?: boolean;
	className?: string;
}

const Tooltip = ({
	children,
	placement,
	content,
	shouldShift,
	className,
}: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const arrowRef = useRef<SVGSVGElement>(null);
	const { refs, floatingStyles, context } = useFloating({
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(15),
			(shouldShift == undefined ? true : shouldShift) &&
				shift({
					limiter: limitShift({
						offset: 10,
					}),
				}),
			!placement && autoPlacement(),
			arrow({ element: arrowRef }),
		],
		placement: "top",
		open: isOpen,
		onOpenChange: setIsOpen,
	});
	const hover = useHover(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
	const { isMounted, styles } = useTransitionStyles(context, {
		duration: 300,
		common: ({ side }) => ({
			transformOrigin: {
				top: "bottom",
				bottom: "top",
				left: "right",
				right: "left",
			}[side],
		}),
		initial: ({ side }) => ({
			opacity: 0,
			transform:
				side === "right"
					? "translateX(-20px)"
					: side === "left"
					? "translateX(20px)"
					: side === "bottom"
					? "translateY(-20px)"
					: side === "top"
					? "translateY(20px)"
					: "",
			filter: "blur(3px)",
		}),
	});

	return (
		<>
			<span
				ref={refs.setReference}
				className={className ? className : ""}
				{...getReferenceProps()}
			>
				{children}
			</span>
			{isMounted && (
				<div
					ref={refs.setFloating}
					style={floatingStyles}
					{...getFloatingProps()}
					className="z-[9999]"
				>
					<div
						style={{ ...styles }}
						className={`px-2 py-1 rounded-lg bg-black border-2 border-green text-green font-bold text-sm drop-shadow-lg relative z-10`}
					>
						{content}
						<FloatingArrow
							ref={arrowRef}
							context={context}
							tipRadius={3}
							width={13}
							fill="black"
							stroke="rgb(0,255,0)"
							strokeWidth={2}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default Tooltip;

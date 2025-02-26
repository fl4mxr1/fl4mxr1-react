import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	priority?: number;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
}

const Button = ({
	children,
	priority,
	className,
	onClick,
	disabled,
}: Props) => {
	const priorityStyle = [
		"bg-green text-black font-bold",
		"bg-black text-green border-2 border-green",
	];

	return (
		<button
			className={`px-3 py-2 rounded-md box-border flex flex-row items-center gap-2  disabled:opacity-20 ${
				priorityStyle[priority || 0] || priorityStyle[0]
			} ${className || ""}`}
			onClick={onClick}
			{...(disabled && { disabled: true })}
		>
			{children}
		</button>
	);
};

export default Button;

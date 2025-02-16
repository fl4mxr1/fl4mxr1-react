import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	priority?: number;
	className?: string;
	onClick?: () => undefined;
}

const Button = ({ children, priority, className, onClick }: Props) => {
	const priorityStyle = [
		"bg-green text-black font-bold",
		"bg-black text-green border-2 border-green",
	];

	return (
		<button
			className={`px-3 py-2 rounded-md box-border flex flex-row items-center gap-2 ${
				priorityStyle[priority || 0] || priorityStyle[0]
			} ${className || ""}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;

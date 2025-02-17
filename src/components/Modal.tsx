import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

interface Props {
	children?: ReactNode;
	title?: ReactNode;
	buttons?: ReactNode;
	size?: string;
	visible: boolean;
}

const Modal = ({ children, title, buttons, size, visible }: Props) => {
	const spring = {
		type: "spring",
		damping: 25,
		stiffness: 200,
	};

	return createPortal(
		<AnimatePresence>
			{visible && (
				<motion.div
					className="text-green font-mono fixed inset-0 w-screen h-screen bg-black/70 flex justify-center items-center p-3 backdrop-blur-md backdrop-brightness-[0.25]"
					initial={{
						opacity: 0,
					}}
					exit={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={spring}
				>
					{visible && (
						<motion.div
							className={`px-5 py-3 bg-black border-2 border-green rounded-md ${
								size === "xl"
									? "max-w-[900px] w-full"
									: size === "lg"
									? "max-w-[720px] w-full"
									: size === "md"
									? "max-w-[550px] w-full"
									: size === "sm"
									? "max-w-[300px] w-full"
									: "w-max"
							}`}
							style={{
								perspective: "1500px",
								transformStyle: "preserve-3d",
								transformOrigin: "center center",
							}}
							transition={spring}
							initial={{
								transform:
									"perspective(1500px) rotateY(90deg) rotateX(-50deg) scale(0.5)",
								filter: "blur(10px) brightness(-100%)",
							}}
							exit={{
								transform:
									"perspective(1500px) rotateY(90deg) rotateX(-50deg) scale(0.5)",
								filter: "blur(10px) brightness(-100%)",
							}}
							animate={{
								transform:
									"perspective(1500px) rotateY(0deg) rotateX(0deg) scale(1)",
								filter: "blur(0) brightness(100%)",
							}}
						>
							{title != undefined && (
								<h1 className="text-2xl font-black w-full border-b-2 border-green/5 pb-1 mb-2">
									{title}
								</h1>
							)}
							{children}
							{buttons != undefined && (
								<div className="flex flex-row gap-2 mt-2 pt-2">{buttons}</div>
							)}
						</motion.div>
					)}
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	);
};

export default Modal;

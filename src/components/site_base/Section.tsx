import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	className?: string;
}

const Section = ({ children, className }: Props) => {
	return <section className={`my-3 ${className}`}>{children}</section>;
};

export default Section;

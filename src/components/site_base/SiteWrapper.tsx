import type { ReactNode } from "react";
import Twemoji from "react-twemoji";

interface Props {
	children?: ReactNode;
	unrestrained?: ReactNode;
	maxWidth?: number;
}

const SiteWrapper = ({ children, unrestrained, maxWidth }: Props) => {
	return (
		<div className="w-full h-full m-0 text-green font-mono overflow-auto">
			<Twemoji options={{ className: "size-5 inline" }}>
				{unrestrained}
				<div
					className={`h-max min-h-full w-full text-neutral-100 px-10 absolute left-1/2 -translate-x-1/2`}
					style={{
						maxWidth: maxWidth || 900,
					}}
				>
					{children}
				</div>
			</Twemoji>
		</div>
	);
};

export default SiteWrapper;

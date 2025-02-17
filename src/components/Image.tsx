import { useState } from "react";

interface Props {
	src: string;
	alt: string;
	draggable: boolean;
	className: string;
}

const Image = ({ src, alt, draggable, className }) => {
	const [loaded, setLoaded] = useState(false);
	return (
		<span>
			<img src={src} alt={alt} draggable={draggable} className={className} />
			<div className="w-full h-full"></div>
		</span>
	);
};

export default Image;

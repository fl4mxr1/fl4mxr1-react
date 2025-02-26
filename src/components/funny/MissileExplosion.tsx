import React from "react";

import h265 from "../../videos/missiles_H265.mp4";
import vp9 from "../../videos/missiles_VP9.webm";

interface Props {
	onEnd: () => void;
	onLoad: () => void;
	className: string;
}

const MissileExplosion = ({ onEnd, onLoad, className }: Props) => {
	return (
		<video
			muted
			playsInline
			autoPlay
			disableRemotePlayback
			disablePictureInPicture
			preload=""
			onEnded={onEnd}
			onLoad={onLoad}
			className={className}
		>
			<source src={h265} type="video/mp4;codecs=hvc1" />
			<source src={vp9} type="video/webm" />
		</video>
	);
};

export default MissileExplosion;

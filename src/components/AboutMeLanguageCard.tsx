import { FastAverageColor } from "fast-average-color";
import { useState, useEffect } from "react";

interface Props {
  language: string;
  image: string;
}

const AboutMeLanguageCard = ({ language, image }: Props) => {
  const [color, setColor] = useState([0, 0, 0, 1]);
  useEffect(() => {
    const fac = new FastAverageColor();
    fac
      .getColorAsync(image, {
        algorithm: "dominant",
        ignoredColor: [0, 0, 0, 0],
      })
      .then((color) => {
        setColor(color.value);
      });
  }, [image]);
  return (
    <div className="flex flex-row gap-1 items-center py-1 pl-1 pr-2 border border-neutral-900 bg-neutral-950/40 rounded-md w-fit select-none">
      <img src={image} alt={language} className="w-6 h-6 object-contain" />
      <div style={{ color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>
        {language}
      </div>
    </div>
  );
};

export default AboutMeLanguageCard;

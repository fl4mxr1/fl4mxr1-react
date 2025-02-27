/*
 written by: Lawrence McDaniel
 modified by: fl4mxr1
 original file: https://github.com/FullStackWithLawrence/react-mdr/blob/main/src/matrixRainingLetters.jsx

 This is a refactored implementation of the Matrix Raining Letters effect based on this blog post
 https://dev.to/javascriptacademy/matrix-raining-code-effect-using-javascript-4hep


*/
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const renderMatrix = (ref, color) => {
  let canvas = ref.current;
  let context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const katakana =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const alphabet = katakana + latin + nums;

  const fontSize = 21;
  const columns = canvas.width / (fontSize/2);

  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const render = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.05)"; // black w a tiny bit of alpha
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = color ? color : "#0F0";
    context.font = fontSize + "px monospace";

    for (let i = 0; i < rainDrops.length; i++) {
      // randomize the string of characters to render
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };
  return render;
};

const MatrixRain = (props) => {
  const ref = useRef();
  const keyName = "mrl-" + props.key;
  const thisClassName = props.className;
  useEffect(() => {
    const render = renderMatrix(ref, props.color);
    const intervalId = setInterval(render, 30);
    return () => clearInterval(intervalId);
  }, [props.color]);

  return (
    <React.Fragment>
      <canvas key={keyName} className={thisClassName} ref={ref} style={{background: "rgba(0,0,0,0.05)"}} />
    </React.Fragment>
  );
};

export default MatrixRain;
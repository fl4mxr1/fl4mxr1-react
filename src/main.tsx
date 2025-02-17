import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="aboutme" element={<AboutMe />} />
			<Route path="mywork" element={<MyWork />} />
		</Routes>
	</BrowserRouter>
);

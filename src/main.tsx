import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import Error404 from "./pages/404";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children;
};

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Wrapper>
			<Routes>
				<Route index element={<Home />} />

				<Route path="aboutme" element={<AboutMe />} />
				<Route path="mywork" element={<MyWork />} />

				<Route path="*" element={<Error404 />} />
			</Routes>
		</Wrapper>
	</BrowserRouter>
);

import MatrixRain from "./components/MatrixRain";
import ScrollingContent from "./components/ScrollingContent";

const App = () => {
	return (
		<div className="w-full h-full m-0 text-w-primary">
			<MatrixRain className="w-full h-full [mask-image:linear-gradient(to_bottom,black_60%,transparent)] absolute inset-0 opacity-20" />
			<div className="h-full max-w-[750px] w-full text-neutral-100 px-10 absolute left-1/2 -translate-x-1/2 border-l border-r border-green/50">
				<ScrollingContent className="w-full">hello nigga</ScrollingContent>
			</div>
		</div>
	);
};

export default App;

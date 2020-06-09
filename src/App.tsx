import React from "react";
import Characters from "./Characters";
import Planets from "./Planets";

const App: React.FC = () => {
	return (
		<>
			<h1>React Query Testing</h1>
			<hr />
			<div style={{ display: "flex" }}>
				<div style={{ flex: 1 }}>
					<h2>Characters</h2>
					<Characters />
				</div>
				<div style={{ flex: 1 }}>
					<h2>Planets</h2>
					<Planets />
				</div>
			</div>
		</>
	);
};

export default App;

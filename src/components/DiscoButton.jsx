import { useState } from "react";

const DiscoButton = () => {
	const [likes, setLikes] = useState(0);
	const colours = ["purple", "blue", "green", "yellow", "orange", "red"];

	const increment = () => {
		setLikes(likes + 1);
	};

	const modulo = (likes + 1) % 6;

	return (
		<button
			style={{
				backgroundColor: colours[modulo],
				margin: "0.5rem",
				padding: "0.25rem",
				color: "white",
			}}
			onClick={increment}
		>
			{likes} Likes
		</button>
	);
};
export default DiscoButton;

import { useState } from "react";

const LikeButton = () => {
	const [likes, setLikes] = useState(0);

	const increment = () => setLikes(likes + 1);

	return (
		<button style={{ margin: "0.5rem" }} onClick={increment}>
			{likes} Likes
		</button>
	);
};
export default LikeButton;

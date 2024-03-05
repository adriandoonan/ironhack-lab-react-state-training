import { useState } from "react";

const buttonStyle = {
	margin: "0.5rem",
	height: "25px",
	width: "25px",
	backgroundColor: "blue",
	color: "white",
};

const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => {
		if (count === 0) return;
		setCount(count - 1);
	};

	return (
		<div
			style={{
				border: "1px blue solid",
				display: "inline-block",
				padding: "0.5rem",
				margin: "0.5rem",
			}}
		>
			<button style={buttonStyle} onClick={decrement}>
				-
			</button>
			{count}
			<button style={buttonStyle} onClick={increment}>
				+
			</button>
		</div>
	);
};
export default Counter;

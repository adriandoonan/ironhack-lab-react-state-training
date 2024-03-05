import { useContext, useState } from "react";
import emptyDie from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const Dice = () => {
	const [diceFace, setDiceFace] = useState(emptyDie);
	const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];

	const randomFace = () => {
		const randomInt = Math.floor(Math.random() * 6);
		const random = diceFaces[randomInt];

		setDiceFace(emptyDie);

		setTimeout(() => {
			setDiceFace(random);
		}, 1000);
	};

	return (
		<div>
			<img
				height="100px"
				width="100px"
				src={diceFace}
				alt="a six sided die"
				onClick={randomFace}
			/>
		</div>
	);
};
export default Dice;

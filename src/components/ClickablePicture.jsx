import { useState } from "react";
import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

const ClickablePicture = () => {
	// const image1 = "../assets/images/maxence.png";
	// const image2 = "../assets/images/maxence-glasses.png";

	const [image, setImage] = useState(image1);

	const toggleImage = (currentImage) => {
		const toggled = currentImage === image1 ? image2 : image1;
		setImage(toggled);
	};

	return (
		<div style={{ padding: "0.5rem" }}>
			<img
				style={{ height: "250px" }}
				src={image}
				onClick={() => toggleImage(image)}
				alt="cool guy with or without glasses"
			/>
		</div>
	);
};
export default ClickablePicture;

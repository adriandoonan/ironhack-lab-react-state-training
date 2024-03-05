import { useState } from "react";

const Carousel = ({ images }) => {
	const [currentImage, setCurrentImage] = useState(images[0]);

	const currentIndex = images.indexOf(currentImage);

	const goLeft = () => {
		if (currentIndex > 0) {
			setCurrentImage(images[currentIndex - 1]);
		}
	};

	const goRight = () => {
		if (currentIndex < images.length - 1) {
			setCurrentImage(images[currentIndex + 1]);
		}
	};

	return (
		<div style={{ padding: "1rem" }}>
			<button onClick={goLeft} disabled={currentIndex === 0}>
				Left
			</button>
			<img src={currentImage} style={{ width: "250px", margin: "10px" }} />
			<button onClick={goRight} disabled={currentIndex === images.length - 1}>
				Right
			</button>
		</div>
	);
};
export default Carousel;

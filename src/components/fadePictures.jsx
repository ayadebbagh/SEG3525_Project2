import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div
      className="image-slider"
      style={{
        position: "relative",
        width: "300px", // Set your desired width
        height: "300px", // Set your desired height
        overflow: "hidden", // Ensure images larger than the container do not overflow
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Cover the container while preserving aspect ratio
            objectPosition: "center", // Center the image within the container
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;

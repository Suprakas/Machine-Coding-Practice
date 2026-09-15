import { useState } from "react";
import { GoDotFill, GoDot } from "react-icons/go";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <p>
        Image {currentIndex + 1} of {images.length}
      </p>
      <img src={images[currentIndex]} alt={`Carousel ${currentIndex + 1}`} />

      <div className="dots">
        {images.map((_, index) => {
          const isActive = currentIndex === index;
          return (
            <button key={index} onClick={() => handleDotClick(index)}>
              {isActive ? <GoDotFill /> : <GoDot />}
            </button>
          );
        })}
      </div>

      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      
    </div>
  );
}

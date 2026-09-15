import { useEffect, useState } from "react";
import { GoDot, GoDotFill } from "react-icons/go";

export default function ImageCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    if (images.length <= 1) return;

    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % images.length;
    });
  };

  const handlePrevious = () => {
    if (images.length <= 1) return;

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

  // Autoplay + pause on hover
  useEffect(() => {
    if (isHovered || images.length <= 1) {
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered, images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((prevIndex) => {
          return (prevIndex + 1) % images.length;
        });
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === 0) {
            return images.length - 1;
          }

          return prevIndex - 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length]);

  // Empty-array edge case
  if (images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>
        Image {currentIndex + 1} of {images.length}
      </p>

      <img
        src={images[currentIndex]}
        alt={`Carousel image ${currentIndex + 1}`}
      />

      {/* Only show controls when there is more than one image */}
      {images.length > 1 && (
        <>
          <div className="dots">
            {images.map((_, index) => {
              const isActive = currentIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {isActive ? <GoDotFill /> : <GoDot />}
                </button>
              );
            })}
          </div>

          <div>
            <button
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              aria-label="Next image"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
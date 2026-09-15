import "./App.css";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  const images = [
    "https://picsum.photos/id/10/600/350",
    "https://picsum.photos/id/20/600/350",
    "https://picsum.photos/id/30/600/350",
    "https://picsum.photos/id/40/600/350",
  ];

  return (
    <div>
      <h3>Image Carousel</h3>
      <ImageCarousel images={images}/>
    </div>
  );
}

export default App;

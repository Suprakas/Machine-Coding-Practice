import "./App.css";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
   <button onClick={handleClick}>
   {
    !isVisible ? "Show Details" : "Hide Details"
    }
    </button>
      {isVisible && <p>This is some detail information.</p>}
    </>
  );
}

export default App;

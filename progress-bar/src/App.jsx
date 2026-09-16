import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [progress, setProgress] = useState(0);

  const handleIncrease = (step) => {
    setProgress((prev) => Math.min(100, prev + step));
  };

  const handleReset = () => {
    setProgress(0);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prev) => Math.min(100, prev + 10))
    }, 1000)

    return () => {
      clearInterval(intervalId);
    }
  }, [])
  return (
    <>
      <h3>Progress bar</h3>
      <ProgressBar progress={progress}/>

      {progress===100 && <p>Already completed</p>}
      <div className="progress-bar-buttons">

      <button onClick={() => handleIncrease(30)} disabled={progress === 100}>
        Increase
      </button>
      <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;

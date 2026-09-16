import { useState } from "react";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : prev));
  };

  const handleReset = () => {
    setProgress(0);
  };

  console.log(progress);
  return (
    <>
      <h3>Progress bar</h3>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          
        </div>
        <span className="progress-text">{progress}%</span>
      </div>
      <button onClick={handleIncrease} disabled={progress === 100}>
        Increase
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;

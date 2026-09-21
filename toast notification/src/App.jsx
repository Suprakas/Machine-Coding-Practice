import { ImCross } from "react-icons/im";
import { useState } from "react";

import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowToast = () => {
    setIsVisible(true);
  };

  const handleHideToast = () => {
    setIsVisible(false);
  };

  return (
    <>
      <h3>Toast Notification</h3>
      {isVisible && (
        <div className="toast">
          <span>Operation successful !!</span>

          <button
            className="toast-close"
            onClick={handleHideToast}
            aria-label="Close notification"
          >
            <ImCross />
          </button>
        </div>
      )}
      <button onClick={handleShowToast}>Show Toast</button>
    </>
  );
}

export default App;

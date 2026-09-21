import { useState } from "react";
import "./App.css";
import Toast from "./components/Toast";

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
        <Toast
          onHide={handleHideToast}
          message="Operation successful !!"
          duration={5000}
          type="error"
        />
      )}
      <button onClick={handleShowToast}>Show Toast</button>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Toast from "./components/Toast";

function App() {
  const [toasts, setToasts] = useState([
    //   {
    //   id: 1,
    //   message: "Saved successfully!",
    //   type: "success"
    // },
    // {
    //   id: 2,
    //   message: "Something went wrong!",
    //   type: "error"
    // }
  ]);

  const addToast = () => {
    const newToast = {
      id: Date.now(),
      message: "Operation successful!",
      type: "success",
    };

    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <>
      <h3>Toast Notification</h3>

      <button onClick={addToast}>Show Toast</button>

      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={3000}
            onHide={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;

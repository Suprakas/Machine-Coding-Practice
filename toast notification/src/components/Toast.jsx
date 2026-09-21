import { ImCross } from "react-icons/im";
import { useEffect } from "react";

export default function Toast({ type, message, duration, onHide }) {
  
    useEffect(() => {
        const timerId = setTimeout(() => {
            onHide();
        }, duration)

        return () => {
            clearTimeout(timerId)
        }
    }, [onHide, duration])

    return (

    <div className={`toast ${type}`}>
      <span>{message}</span>

      <button
        className="toast-close"
        onClick={onHide}
        duration={duration}
        aria-label="Close notification"
      >
        <ImCross />
      </button>
    </div>
  );
}

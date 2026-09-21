import { useEffect } from "react";
import { ImCross } from "react-icons/im";

export default function Toast({
  message,
  type,
  duration = 3000,
  onHide,
}) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onHide();
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [duration, onHide]);

  return (
    <div
      className={`toast ${type}`}
      role="status"
      aria-live="polite"
    >
      <span>{message}</span>

      <button
        className="toast-close"
        onClick={onHide}
        aria-label="Close notification"
      >
        <ImCross />
      </button>
    </div>
  );
}
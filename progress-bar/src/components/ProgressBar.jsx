export default function ProgressBar({ progress }) {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${safeProgress}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeProgress}
        aria-label="progress"
      ></div>
      <span className="progress-text">{safeProgress}%</span>
    </div>
  );
}

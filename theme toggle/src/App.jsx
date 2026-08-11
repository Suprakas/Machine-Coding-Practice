import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "light";
  });

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <h1>Theme Toggle</h1>
      <button onClick={handleThemeToggle}>Switch Theme</button>
      <h2>Current theme: {theme}</h2>
    </div>
  );
}

export default App;

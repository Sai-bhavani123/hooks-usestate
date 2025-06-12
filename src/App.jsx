import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [showForm, setShowForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClick = (type) => {
    setBgColor(getRandomColor());
    setShowForm(true);
    if (type === "inc") setCount(count + 1);
    else if (type === "dec") setCount(count - 1);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`container ${isDarkMode ? "dark" : ""}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="content-box">
        <h1 className="count-text">Count: {count}</h1>

        <div className="button-group">
          <button className="click-button" onClick={() => handleClick("inc")}>
            Increment
          </button>
          <button className="click-button" onClick={() => handleClick("dec")}>
            Decrement
          </button>
          <button className="theme-toggle" onClick={toggleTheme}>
            Toggle Theme
          </button>
        </div>

        {showForm && (
          <div className="form-box">
            <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
            {isSignUp && <input type="text" placeholder="Name" required />}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
            <p onClick={() => setIsSignUp(!isSignUp)} className="toggle-link">
              {isSignUp
                ? "Already have an account? Login here"
                : "Don't have an account? Sign up"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

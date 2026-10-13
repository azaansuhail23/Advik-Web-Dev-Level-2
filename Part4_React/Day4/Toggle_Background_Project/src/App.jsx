import "./App.css";
import {useState} from "react';


// !false ==> true
// !true ==> false

function App(){
  const [isDark,setIsDark]=useState(false);

  function toggleTheme(){
    setIsDark((prevMode)=>
      !prevMode
    )
  }

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <h1>Dark Mode Toggle</h1>

      <p>
        Current Theme: {isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </p>

      <button onClick={toggleTheme}>
        {isDark ? "Switch to Light ☀️" : "Switch to Dark 🌙"}
      </button>
    </div>
  )
}

export default App;
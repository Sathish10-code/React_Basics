
import React,{useState} from "react";

  const App =()=>{
  const[theme, setTheme] = useState("light");

  const lightTheme =()=>{
    console.log("Setting the Light Theme");
    setTheme("light");
  }

  const darkTheme =()=>{
    console.log("Setting the Dark Theme");
    setTheme("dark");
  }
  

    return(
      <div className={`theme-container ${theme}`}>
        <div className="btn-container">
          <button id='light' onClick={lightTheme}>Light</button>
          <button id='dark' onClick={darkTheme}>Dark</button>
        </div>

      </div>
    )
}

export default App;
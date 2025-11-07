import React, { useState,useRef, useEffect } from "react";

const App =()=>{

  const [timer,setTimer] = useState(0);

  const [isRunning,setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  const startTimer=()=>{
    if(isRunning) return;
    setIsRunning(true);

    intervalRef.current = setInterval(()=>{
      setTimer((prev)=> prev+1);
    },1000) 
  }

  const stopTimer = ()=>{
    clearInterval(intervalRef.current);
    if(!isRunning)return;
    setIsRunning(false);
  }

  const resetTimer =()=>{
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimer(0);
  }

  useEffect(()=>{
    return ()=>{clearInterval(intervalRef.current);}
  },[])

  
  return(
    <div name="container" style={{
      display:"flex",
      flexDirection:"row",
      gap:"12px",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
    }
    }>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Time:{timer}s</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      
    </div>
  )
}

export default App
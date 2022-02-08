import React, { useState, useRef, useEffect } from "react";

function Timer({ sessionLen, breakLen }) {
  const [length, setLength] = useState(sessionLen);
  const [isPaused, setPaused] = useState(true);
  const [isBreak, setBreak] = useState(false);
  let intervalRef = useRef();

  const decrementTime = () => {
    setLength((prev) => prev - 1);
  };

  useEffect(() => {
    if(length=== 0){
      console.log('beep');
      if (isBreak) {
        setLength(sessionLen);
        setBreak((prev) => !prev);
      } else {
        setLength(breakLen);
        setBreak((prev) => !prev);
      }
    }
  }, [length, setLength, breakLen, isBreak, sessionLen]);

  const playPause = () => {
    if (isPaused) {
      intervalRef.current = setInterval(decrementTime, 1000);
      setPaused(false);
    } else {
      clearInterval(intervalRef.current);
      setPaused(true);
    }
  };

  return (
    <>
      <h2> {isBreak ? "Break" : "Session"} </h2>
      <h3>{length}</h3>
      <button onClick={() => playPause()}> Play / Pause </button>
    </>
  );
}

export default Timer;

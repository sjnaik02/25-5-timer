import React, { useState, useRef, useEffect } from "react";

function Timer({ sessionLen, breakLen, reset }) {
  const [length, setLength] = useState(sessionLen);
  const [isPaused, setPaused] = useState(true);
  const [isBreak, setBreak] = useState(false);
  let intervalRef = useRef(null);

  const decrementTime = () => {
    setLength((prev) => prev - 1);
  };

  useEffect(() => {
    if (length === 0) {
      console.log("beep");
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

  const triggerReset = () => {
    setLength(sessionLen);
    clearInterval(intervalRef.current);
    setPaused(true);
    reset();
  };

  return (
    <>
      <h2 id="timer-label"> {isBreak ? "Break" : "Session"} </h2>
      <h3 id="time-left">{length}</h3>
      <button id="time-left" onClick={() => playPause()}>
        Play / Pause
      </button>
      <button id="reset" onClick={() => triggerReset()}>
        Reset
      </button>
    </>
  );
}

export default Timer;

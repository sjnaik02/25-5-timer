import React, { useState, useRef, useEffect } from "react";
import '../index.css'

function Timer({ sessionLen, breakLen, reset }) {
  const [length, setLength] = useState(sessionLen*60);
  const [isPaused, setPaused] = useState(true);
  const [isBreak, setBreak] = useState(false);
  let intervalRef = useRef(null);
  let audioElement = useRef(null);

  const decrementTime = () => {
    setLength((prev) => prev - 1);
  };

  useEffect(() => {
    if (length === 0) {
      console.log("beep");
      audioElement.current.currentTime = 0;
      audioElement.current.play();
      if (isBreak) {
        setLength(sessionLen*60);
        setBreak((prev) => !prev);
      } else {
        setLength(breakLen*60);
        setBreak((prev) => !prev);
      }
    }
  }, [length, setLength, breakLen, isBreak, sessionLen]);
  
  useEffect(() => {
    setLength(sessionLen*60);
  }, [sessionLen, breakLen]);
  
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
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
    setLength(sessionLen*60);
    clearInterval(intervalRef.current);
    setPaused(true);
    setBreak(false);
    reset();
  };

  return (
    <>
      <h2 className=" text-center text-lg " id="timer-label"> {isBreak ? "break" : "session"} </h2>
      <h3 className=" text-center text-4xl " id="time-left">{String(Math.floor(length / 60)).padStart(2,'0')}:{String(length % 60).padStart(2, '0')}</h3>
      <div className="flex justify-center">
        <button className="border-2 rounded-md p-2 m-4 border-emerald-500 hover:bg-emerald-500 active:bg-emerald-500 transition-colors" id="start_stop" onClick={() => playPause()}>
          Play / Pause
        </button>
        <button className="border-2 rounded-md p-2 m-4 border-emerald-500 hover:bg-emerald-500 active:bg-emerald-500 transition-colors" id="reset" onClick={() => triggerReset()}>
          Reset
        </button>
      </div>
      <audio
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        id="beep"
        ref={audioElement}
      ></audio>
    </>
  );
}

export default Timer;
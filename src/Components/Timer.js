import React, { useState, useRef } from "react";
import accurateInterval from "../utils/accurateInterval";

function Timer({ sessionLen, breakLen }) {
  const [length, setLength] = useState(sessionLen);
  const [isPaused, setPaused] = useState(true);
  let intervalRef = useRef();



  return (
    <>
      <h3>{length}</h3>
      <button onClick={() => playPause()}> Play / Pause </button>
    </>
  );
}

export default Timer;

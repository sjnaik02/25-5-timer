import React, { useState, useRef } from "react";

(function() {
  window.accurateInterval = function(time, fn) {
    var cancel, nextAt, timeout, wrapper, _ref;
    nextAt = new Date().getTime() + time;
    timeout = null;
    if (typeof time === 'function') _ref = [time, fn], fn = _ref[0], time = _ref[1];
    wrapper = function() {
      nextAt += time;
      timeout = setTimeout(wrapper, nextAt - new Date().getTime());
      return fn();
    };
    cancel = function() {
      return clearTimeout(timeout);
    };
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return {
      cancel: cancel
    };
  };
}).call(this);

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

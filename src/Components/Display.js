import React from "react";

const Display = ({ label, length, incrementor, decrementor }) => {
  return (
    <>
      <h2 id={label.concat("-label")}> {label} length: </h2><h2 id={label.concat("-length")}>{length}</h2>
      <button id={label.concat("-increment")} onClick={() => incrementor(label)}> Increment </button>
      <button id={label.concat("-decrement")} onClick={() => decrementor(label)}> Decrement </button>
    </>
  )
}

export default Display;
import React from "react";

const Display = ({ label, length, incrementor, decrementor }) => {
  return (
    <>
      <div className="flex flex-col m-4">
        <h2 className="text-center" id={label.concat("-label")}> {label} length: </h2>
        <h2 className="text-center text-lg" id={label.concat("-length")}>{length}</h2>
        <div className="w-full flex justify-around">
          <button className="border-2 rounded-full w-12 h-12 m-2 border-emerald-500 hover:bg-emerald-500 active:bg-emerald-500 transition-colors" id={label.concat("-increment")} onClick={() => incrementor(label)}> + </button>
          <button className="border-2 rounded-full w-12 h-12 m-2 border-emerald-500 hover:bg-emerald-500 active:bg-emerald-500 transition-colors" id={label.concat("-decrement")} onClick={() => decrementor(label)}> - </button>
        </div>
      </div>
    </>
  )
}

export default Display;
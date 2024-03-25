// import React from 'react'
// import trashlogo from "./trash-solid.svg";
const ClearButton = ({ clearAll }) => {
  return (
    <div>
      <button
        className="text-slate-50 rounded-full p-2 bg-slate-100 m-2 hover:bg-sky-500 hover:shadow-xl"
        onClick={clearAll}
      >
        <img
          className="opacity-75"
          src="./trash-solid.svg"
          alt="clear all"
          width="15"
        />
      </button>
    </div>
  );
};

export default ClearButton;

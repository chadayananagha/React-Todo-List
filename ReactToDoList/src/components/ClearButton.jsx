// import React from 'react'

const ClearButton = ({ clearAll }) => {
  return (
    <div>
      <button className="text-slate-50" onClick={clearAll}>
        clear all
      </button>
    </div>
  );
};

export default ClearButton;

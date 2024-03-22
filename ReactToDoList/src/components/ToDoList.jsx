import { useState } from "react";

// import React from 'react'
const ToDoList = ({ task, deleteTodos }) => {
  const [isChecked, setIsChecked] = useState(false);
  const HandleChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex gap-4 container-item">
      <input
        type="checkbox"
        onClick={HandleChecked}
        className="p-2 mr-2 ml-2 w-6 h-6 rounded-full shadow-inner transition-all duration-300 ease-in-out checked:shadow-xl peer bg-slate-400/20 text-sky-500 checked:bg-sky-500 hover:bg-sky-500/30 focus:ring-sky-500"
      />
      <p
        className="w-full font-bold text-slate-700"
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {task.task}
      </p>
      <button className="btn-style-2">Edit</button>
      <button className="btn-style-2" onClick={() => deleteTodos(task.id)}>
        Delete
      </button>
    </div>
  );
};
export default ToDoList;

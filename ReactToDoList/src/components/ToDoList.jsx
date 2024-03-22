import { useState } from "react";

// import React from 'react'
const ToDoList = ({ task, deleteTodos }) => {
  const [isChecked, setIsChecked] = useState(false);
  const HandleChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex gap-4 container-item">
      <input type="checkbox" onClick={HandleChecked} />
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

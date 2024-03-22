// import { useState,useEffect } from "react";
import { useState } from "react";
// import React from 'react'
const AddTask = ({ createTodos }) => {
  const [value, setValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    createTodos(value);
    if (!value) {
      alert("Please add a task");
      return;
    }
    setValue("");
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 w-full h-full">
        <form className="container-input" onSubmit={handleSubmit}>
          <input
            name="task"
            className="input-style placeholder-slate-800"
            type="text"
            placeholder="Add a task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick=""
            className="p-2 px-5 ml-4 rounded-xl border-t border-white shadow-md transition-all duration-300 ease-out cursor-pointer hover:shadow-xl text-slate-700 bg-slate-100 hover:text-slate-700 hover:bg-sky-500 text-sm font-semibold"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};
export default AddTask;

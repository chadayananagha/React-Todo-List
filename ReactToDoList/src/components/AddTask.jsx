// import { useState,useEffect } from "react";
import { useState } from "react";
// import React from 'react'
const AddTask = ({ createTodos }) => {
  const [value, setValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (!value) {
      alert("Please add a task");
      return;
    }
    setValue("");
    createTodos(value);
  }
  return (
    <>
      <div className="flex flex-wrap max-h-20 w-full justify-center mt-8 mb-8">
        <form className="container-input" onSubmit={handleSubmit}>
          <input
            name="task"
            className="input-style placeholder-slate-600"
            type="text"
            placeholder="Add a task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick="" className="btn-style">
            Add
          </button>
        </form>
      </div>
    </>
  );
};
export default AddTask;

// import { useState,useEffect } from "react";
import { useState } from "react";
// import React from 'react'
const AddTask = ({createTodos}) => {

  const [value, setValue] = useState('');
  function handleSubmit(event)
  {
    event.preventDefault();
    createTodos(value);
    if(!value){
      alert("Please add a task");
      return;
    }
    setValue('');
  }
  return (
  <>
      <div className="flex flex-col justify-center items-center px-4 w-full h-full">
          <form className="flex static bottom-8 justify-between items-center p-4 w-4/5 rounded-3xl border-t shadow-2xl transition-all duration-300 ease-in-out hover:w-5/6 border-slate-100 bg-slate-50/50 backdrop-blur p2" onSubmit={handleSubmit}> 
            <input
            name="task"
            className="p-2 w-5/6 h-10 font-bold text-gray-700 rounded-xl shadow-inner bg-slate-500/20 hover:bg-slate-500/30 focus:ring-sky-400"
            type="text"
            placeholder="Add a task"
            value={value}
            onChange={(e) => setValue(e.target.value)} />
            <button
            onClick=""
            className="p-2 px-5 ml-4 rounded-xl border-t border-white shadow-md transition-all duration-300 ease-out cursor-pointer hover:shadow-xl text-slate-700 bg-slate-100 hover:text-slate-900 hover:bg-sky-500 text-sm font-semibold"
            >Add
          </button>
          </form>
    </div>
    
    </>
  )
}
export default AddTask;

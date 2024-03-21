import { useState } from "react";

// import React from 'react'
const ToDoList = ({task, deleteTodos}) => {
  const [isChecked,setIsChecked] = useState(false);
  const HandleChecked = ()=>
  {
    setIsChecked(!isChecked);
  }
  return (
    <div className="flex gap-4 container-item">
      <input type='checkbox' onClick={HandleChecked}/>
      <p style={{textDecoration: isChecked? 'line-through' : 'none'}}>{task.task}</p>
      <button className="border-2 p-2 border-red-500">Edit</button>
      <button className="border-2 p-2 border-red-500" onClick={()=> deleteTodos(task.id)}>Delete</button>
    </div>
  )
}
export default ToDoList;

// import React from 'react'
const ToDoList = ({task}) => {
  return (
    <div className="flex gap-4">
      <input type='checkbox'/>
      <p>{task}</p>
      <button className="border-2 p-2 border-red-500">Edit</button>
      <button className="border-2 p-2 border-red-500" >Delete</button>
    </div>
  )
}
export default ToDoList;

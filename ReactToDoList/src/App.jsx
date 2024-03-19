// import { useState } from 'react'
import Header from "../src/components/Header";
import AddTask from "../src/components/AddTask";
import ToDoList from "./components/ToDoList";
import ClearButton from "./components/ClearButton";

function App() {
  return (
    <div className="">
      <Header />
      <ToDoList />
      <AddTask />
      <ClearButton />
    </div>
  )
}
export default App;

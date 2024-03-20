import { useState,useEffect } from "react";
import Header from "../src/components/Header";
import AddTask from "../src/components/AddTask";
import ToDoList from "./components/ToDoList";
import ClearButton from "./components/ClearButton";

function App() {
  function getStoredTodos()
  {
    let data= localStorage.getItem("todos");
    let json = JSON.parse(data);
    if(json)
    {
      return json;
    }
    return[];
  }
  const [todos, setTodos] = useState(getStoredTodos());
  useEffect( () =>
    {
      localStorage.setItem("todos",JSON.stringify(todos),[todos]);
    })
    const createTodos = (todo) =>
    {
      setTodos([...todos, {task: todo}]);
    }
  return (
    <div className="">
      <Header />
      {todos.map((todo,index) => (
      <ToDoList task={todo} key={index} />
      ))
      }
      <AddTask getStoredTodos={getStoredTodos} createTodos={createTodos} />
      <ClearButton />
    </div>
  )
}
export default App;

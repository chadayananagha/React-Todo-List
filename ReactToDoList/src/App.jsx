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
      localStorage.setItem("todos",JSON.stringify(todos));

  const createTodos = (todo) =>
    {
      setTodos([...todos, {id:Math.random(),task:todo}]);
    }
    const deleteTodos = (id) =>
    {
      setTodos(todos.filter(todo => todo.id!== id));
    }

  const clearAll = () => {
    setTodos([]);
  }
  return (
    <div className="body-style">
      <header>
      <Header />
    </header>
    <main className="h-2/3 bg-red-500 ">
      {todos.map((todo,index) => (
      <ToDoList task={todo} key={index} deleteTodos={deleteTodos}/>
      ))
    }
    </main>
    <AddTask getStoredTodos={getStoredTodos} createTodos={createTodos} />
      <ClearButton clearAll={clearAll} />
    </div>
  )
}
export default App;

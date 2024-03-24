import { useRef, useState, useEffect } from "react";
import Header from "../src/components/Header";
import AddTask from "../src/components/AddTask";
import ToDoList from "./components/ToDoList";
import ClearButton from "./components/ClearButton";

function App() {
  const mainRef = useRef();
  function getStoredTodos() {
    let data = localStorage.getItem("todos");
    let json = JSON.parse(data);
    if (json) {
      return json;
    }
    return [];
  }
  const [todos, setTodos] = useState(getStoredTodos());
  localStorage.setItem("todos", JSON.stringify(todos));

  const createTodos = (todo) => {
    setTodos([...todos, { id: Math.random(), task: todo }]);
    mainRef.current.classList.remove("opacity-0");
  };
  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (todos.length == 1) {
      mainRef.current.classList.add("opacity-0");
    }
  };

  const clearAll = () => {
    setTodos([]);
    mainRef.current.classList.add("opacity-0");
  };

  return (
    <div className="body-style">
      <Header />
      <main
        ref={mainRef}
        className="max-h-[75%] rounded-3xl flex justify-between items-center p-2 w-4/5 rounded-3xl border-t shadow-2xl transition-all duration-300 ease-in-out border-slate-100 bg-slate-300/50 backdrop-blur-sm"
      >
        <div className="h-full no-scrollbar overflow-scroll w-full p-4 rounded-2xl flex justify-start flex-col items-center border-b border-t shadow-inner transition-all duration-300 ease-in-out border-b-slate-100 border-t-slate-500 bg-slate-500/30">
          {todos.map((todo, index) => (
            <ToDoList task={todo} key={index} deleteTodos={deleteTodos} />
          ))}
          <ClearButton clearAll={clearAll} />
        </div>
      </main>
      <AddTask getStoredTodos={getStoredTodos} createTodos={createTodos} />
    </div>
  );
}
export default App;

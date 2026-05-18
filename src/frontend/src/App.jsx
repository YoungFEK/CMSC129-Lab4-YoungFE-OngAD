import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");

  function addTodo() {

    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };

    setTodos([...todos, newTodo]);

    setTitle("");
  }

  function toggleTodo(id) {

    setTodos(
        todos.map((todo) =>
            todo.id === id
                ? {
                  ...todo,
                  completed: !todo.completed
                }
                : todo
        )
    );
  }

  function deleteTodo(id) {

    setTodos(
        todos.filter((todo) => todo.id !== id)
    );
  }

  return (

      <div className="app">

        <div className="todo-container">

          <h1>Todo List</h1>

          <TodoForm
              title={title}
              setTitle={setTitle}
              addTodo={addTodo}
          />

          <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
          />

        </div>

      </div>

  );
}

export default App;
import { useState } from "react";
import "./App.css";

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

          <div className="todo-input-group">

            <input
                data-testid="todo-input"
                type="text"
                placeholder="Add a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button
                data-testid="add-button"
                onClick={addTodo}
            >
              + Add
            </button>

          </div>

          <div className="todo-list">

            {todos.length === 0 ? (

                <p className="empty-text">
                  No tasks yet. Add one to get started!
                </p>

            ) : (

                todos.map((todo) => (

                    <div
                        key={todo.id}
                        className={`todo-item ${
                            todo.completed
                                ? "completed"
                                : ""
                        }`}
                    >

        <span className="todo-title">
            {todo.title}
        </span>

                      <div className="todo-actions">

                        <label className="switch">

                          <input
                              type="checkbox"
                              checked={todo.completed}
                              onChange={() =>
                                  toggleTodo(todo.id)
                              }
                          />

                          <span className="slider"></span>

                        </label>

                        <button
                            data-testid="delete-button"
                            className="delete-btn"
                            onClick={() =>
                                deleteTodo(todo.id)
                            }
                        >
                          Delete
                        </button>

                      </div>

                    </div>


                ))

            )}

          </div>

        </div>

      </div>

  );
}

export default App;
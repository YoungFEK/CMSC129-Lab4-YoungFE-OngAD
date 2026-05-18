function TodoItem({
                      todo,
                      toggleTodo,
                      deleteTodo
                  }) {

    return (

        <div
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

    );
}

export default TodoItem;
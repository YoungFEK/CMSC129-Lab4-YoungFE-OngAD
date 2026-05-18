function TodoForm({
                      title,
                      setTitle,
                      addTodo
                  }) {

    return (

        <div className="todo-input-group">

            <input
                data-testid="todo-input"
                type="text"
                placeholder="Add a new task..."
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
            />

            <button
                data-testid="add-button"
                onClick={addTodo}
            >
                + Add
            </button>

        </div>

    );
}

export default TodoForm;
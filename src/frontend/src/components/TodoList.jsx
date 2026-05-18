import TodoItem from "./TodoItem";

function TodoList({
                      todos,
                      toggleTodo,
                      deleteTodo
                  }) {

    if (todos.length === 0) {

        return (
            <p className="empty-text">
                No tasks yet. Add one to get started!
            </p>
        );
    }

    return (

        <div className="todo-list">

            {todos.map((todo) => (

                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />

            ))}

        </div>

    );
}

export default TodoList;
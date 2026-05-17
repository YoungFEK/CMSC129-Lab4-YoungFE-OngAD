function createTodo(title) {

    return {
        id: Date.now(),
        title,
        completed: false
    };
}

module.exports = createTodo;
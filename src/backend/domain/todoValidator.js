function validateTodo(title) {

    if (!title) {
        return false;
    }

    if (title.length > 100) {
        return false;
    }

    return true;
}

module.exports = validateTodo;
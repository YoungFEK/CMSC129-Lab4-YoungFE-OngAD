const MAX_TITLE_LENGTH = 100;

function validateTodo(title) {

    if (!title) {
        return false;
    }

    if (title.length > MAX_TITLE_LENGTH) {
        return false;
    }

    return true;
}

module.exports = validateTodo;
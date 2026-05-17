const express = require("express");

const app = express();

app.use(express.json());

let todos = [];

function createTodo(title) {

    return {
        id: Date.now(),
        title,
        completed: false
    };
}

app.post("/api/todos", (req, res) => {

    const { title } = req.body;

    const newTodo = createTodo(title);

    todos.push(newTodo);

    res.status(201).json({
        success: true,
        data: newTodo
    });

});

app.get("/api/todos", (req, res) => {

    res.status(200).json({
        success: true,
        data: todos
    });

});

module.exports = app;
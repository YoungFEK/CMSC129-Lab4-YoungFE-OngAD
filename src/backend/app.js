const express = require("express");
const createTodo = require("./domain/createTodo");

const app = express();

app.use(express.json());

let todos = [];

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
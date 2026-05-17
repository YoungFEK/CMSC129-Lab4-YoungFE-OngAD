const request = require("supertest");
const app = require("../../src/backend/app");

describe("Todo Routes", () => {

    test("POST /api/todos creates a todo", async () => {

        const response = await request(app)
            .post("/api/todos")
            .send({
                title: "Buy groceries"
            });

        expect(response.statusCode).toBe(201);
    });

    test("GET /api/todos returns todos", async () => {

        const response = await request(app)
            .get("/api/todos");

        expect(response.statusCode).toBe(200);
    });

});
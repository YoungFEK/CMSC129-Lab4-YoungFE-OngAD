const validateTodo = require("../../src/backend/domain/todoValidator");

describe("Todo Validator", () => {

    test("rejects empty todo title", () => {
        expect(validateTodo("")).toBe(false);
    });

    test("rejects titles longer than 100 characters", () => {
        const longTitle = "a".repeat(101);

        expect(validateTodo(longTitle)).toBe(false);
    });

    test("accepts valid todo title", () => {
        expect(validateTodo("Buy groceries")).toBe(true);
    });

});
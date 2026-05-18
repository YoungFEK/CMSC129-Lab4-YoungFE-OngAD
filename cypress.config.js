const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "tests/system/**/*.spec.js",
    baseUrl: "http://localhost:5173"
  }
});
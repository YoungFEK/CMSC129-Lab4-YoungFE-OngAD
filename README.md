# CMSC129-Lab4-YoungFE OngAD

A todolist application which uses Express, React, and Node. It allows the user to create tasks, edit them, and delete them.

User stories:
-As a busy user, I want to type a task title and submit it, So that I can securely store the item in my daily list without forgetting it.

-As a meticulous user, I want to check or mark a specific task as done so that I can visually differentiate my unfinished responsibilities from completed work.

- As a minimalist user, I want to click a delete button next to an existing task item so that I can instantly clear clutter from my display once a task is no longer relevant.

Testing Strategy:


Unit tests:
validateTodo(title) — checks whether the inputted task title is valid when creating a task
createTodo(title) - Verifies that when a valid title is successfully processed, the resulting task entity object is automatically initialized with correct default properties.
toggleTodo(todo) - tests whether state transformation Takes a todo object and returns a new one with done flipped. 


Integration tests:
test POST/tasks — create a task (happy path + validation)
test GET/tasks — read all tasks

System tests
each user story will be tested


## 🛠️ Tech Stack & Testing Tools

This application is built using a lightweight JavaScript ecosystem designed to run efficiently without the overhead of external database engines.

### 1. Core Application Stack
*   **Frontend Interface:** **React (Single Page Application)**
    *   *Role:* Manages the user interface, renders real-time state changes, and coordinates asynchronous HTTP communication with the backend.
*   **Backend Application Server:** **Node.js with Express.js**
    *   *Role:* Acts as a RESTful API gateway, processes routing logic, and orchestrates domain input validation.
*   **Data Persistence Layer:** **Server-Side In-Memory Storage**
    *   *Role:* Utilizes a native server-side global array (`let todos = [];`) to store task records. This guarantees rapid, isolated data resets between automated test configurations without requiring an external database connection.

### 2. Automated Testing Stack
*   **Unit Testing Tier:** **Jest**
    *   *Responsibility:* Asserts the deterministic behavior of pure domain business rules (such as character limits and title validation checks) completely isolated from HTTP or browser execution environments.
*   **Integration Testing Tier:** **Jest + Supertest**
    *   *Responsibility:* Verifies complete HTTP request-response cycles. It tests Express route mappings, response payloads, and HTTP status codes (e.g., verifying a successful task returns a `201 Created` status while malformed data triggers a `400 Bad Request`).
*   **System / E2E Testing Tier:** **Cypress**
    *   *Responsibility:* Orchestrates a headless or visible automated browser engine to execute complete user journeys, explicitly validating the 3 defined user stories from an end-user perspective.

---

## 📋 Setup Instructions

Follow these steps chronologically to pull down, install, and execute the repository environment locally or within automated CI runner containers.

### 1. Prerequisites
Ensure you have the following software runtimes installed on your local operating system:
*   **Node.js:** Version `20.x` or higher
*   **npm:** Version `10.x` or higher
*   **Git:** Accessible via CLI or GitHub Desktop

### 2. Repository Cloning & Workspace Setup
Clone the public repository to your local computer using your terminal or by opening the project URL inside GitHub Desktop:

```bash
# Clone the repository using the required naming convention
git clone [https://github.com/YOUR-GITHUB-USERNAME/CMSC129-Lab4-LastNameFNInitials.git](https://github.com/YOUR-GITHUB-USERNAME/CMSC129-Lab4-LastNameFNInitials.git)

# Move into the root project directory
cd CMSC129-Lab4-LastNameFNInitials


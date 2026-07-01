const { Router } = require("express");
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

const router = Router();

// GET    /api/todos       - List all todos
// POST   /api/todos       - Create a new todo
router.route("/").get(getAllTodos).post(createTodo);

// GET    /api/todos/:id   - Get a single todo
// PUT    /api/todos/:id   - Update a todo
// DELETE /api/todos/:id   - Delete a todo
router.route("/:id").get(getTodoById).put(updateTodo).delete(deleteTodo);

module.exports = router;

const TodoStore = require("../data/todos");

/* GET /api/todos */
const getAllTodos = (req, res) => {
  try {
    const todos = TodoStore.getAll();
    return res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/* GET /api/todos/:id */
const getTodoById = (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    const todo = TodoStore.findById(id);
    if (!todo) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }

    return res.status(200).json({ success: true, data: todo });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/* POST /api/todos */
const createTodo = (req, res) => {
  try {
    const { title } = req.body;

    if (title === undefined || title === null) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }

    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({ success: false, message: "Title cannot be empty" });
    }

    const newTodo = TodoStore.create(title);
    return res.status(201).json({
      success: true,
      message: "Todo created successfully",
      data: newTodo,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/* PUT /api/todos/:id */
const updateTodo = (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
      if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({ success: false, message: "Title cannot be empty" });
      }
    }

    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({ success: false, message: "Completed must be a boolean" });
    }

    const updatedTodo = TodoStore.update(id, { title, completed });
    if (!updatedTodo) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: updatedTodo,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/* DELETE /api/todos/:id */
const deleteTodo = (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    const deleted = TodoStore.remove(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }

    return res.status(200).json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

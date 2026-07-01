/**
 * In-memory data store for todos.
 * Acts as the single source of truth for all CRUD operations.
 */

let todos = [];
let nextId = 1;

/**
 * Returns the current list of todos.
 * @returns {Array} todos
 */
const getAll = () => todos;

/**
 * Finds a todo by its ID.
 * @param {number} id
 * @returns {Object|undefined}
 */
const findById = (id) => todos.find((todo) => todo.id === id);

/**
 * Creates and stores a new todo.
 * @param {string} title
 * @returns {Object} created todo
 */
const create = (title) => {
  const newTodo = {
    id: nextId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
  todos.push(newTodo);
  return newTodo;
};

/**
 * Updates an existing todo by ID.
 * @param {number} id
 * @param {Object} fields - { title?, completed? }
 * @returns {Object|null} updated todo or null if not found
 */
const update = (id, fields) => {
  const todo = findById(id);
  if (!todo) return null;

  if (fields.title !== undefined) todo.title = fields.title.trim();
  if (fields.completed !== undefined) todo.completed = fields.completed;

  return todo;
};

/**
 * Removes a todo by ID.
 * @param {number} id
 * @returns {boolean} true if deleted, false if not found
 */
const remove = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return false;
  todos.splice(index, 1);
  return true;
};

module.exports = { getAll, findById, create, update, remove };

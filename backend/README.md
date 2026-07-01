# Todo REST API

A simple RESTful API for managing todos, built with Node.js and Express.

## Getting Started

### Installation

```bash
cd backend
npm install
```

### Run in Development

```bash
npm run dev
```

### Run in Production

```bash
npm start
```

Server runs on `http://localhost:4000` by default.

---

## API Endpoints

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/api/todos`      | Get all todos      |
| GET    | `/api/todos/:id`  | Get a todo by ID   |
| POST   | `/api/todos`      | Create a new todo  |
| PUT    | `/api/todos/:id`  | Update a todo      |
| DELETE | `/api/todos/:id`  | Delete a todo      |

---

## Request & Response Examples

### GET /api/todos

**Response `200 OK`**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Learn Express",
      "completed": false,
      "createdAt": "2026-07-02T10:30:00.000Z"
    }
  ]
}
```

---

### GET /api/todos/:id

**Response `200 OK`**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Learn Express",
    "completed": false,
    "createdAt": "2026-07-02T10:30:00.000Z"
  }
}
```

**Response `404 Not Found`**
```json
{
  "success": false,
  "message": "Todo not found"
}
```

---

### POST /api/todos

**Request Body**
```json
{
  "title": "Study Node"
}
```

**Response `201 Created`**
```json
{
  "success": true,
  "message": "Todo created successfully",
  "data": {
    "id": 1,
    "title": "Study Node",
    "completed": false,
    "createdAt": "2026-07-02T10:30:00.000Z"
  }
}
```

**Response `400 Bad Request`** (missing or empty title)
```json
{
  "success": false,
  "message": "Title is required"
}
```

---

### PUT /api/todos/:id

**Request Body**
```json
{
  "title": "Study Express",
  "completed": true
}
```

**Response `200 OK`**
```json
{
  "success": true,
  "message": "Todo updated successfully",
  "data": {
    "id": 1,
    "title": "Study Express",
    "completed": true,
    "createdAt": "2026-07-02T10:30:00.000Z"
  }
}
```

---

### DELETE /api/todos/:id

**Response `200 OK`**
```json
{
  "success": true,
  "message": "Todo deleted successfully"
}
```

---

## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── todo.controller.js   # Business logic for each endpoint
│   ├── routes/
│   │   └── todo.routes.js       # Route definitions using Express Router
│   ├── data/
│   │   └── todos.js             # In-memory data store
│   └── index.js                 # Express app setup and server start
├── package.json
└── README.md
```

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Storage**: In-memory (array)
- **Language**: JavaScript

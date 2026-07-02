const express = require("express");
const todoRoutes = require("./routes/todo.routes");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware 
app.use(express.json());

// Routes 
app.get("/", (req, res) => {
  res.status(200).json({ message: "Todo API is running. Visit /api/todos to get started." });
});

app.use("/api/todos", todoRoutes);

// 404 Handler 
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global Error Handler 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong" });
});

// Start Server 
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

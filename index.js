// server initiate
const express = require("express");
const app = express();

// Load configuration from .env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import routes from Todo API
const todoRoutes = require("./routes/todos");

// Mount todo routes
app.use("/api/v1", todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to the Database
const dbConnect = require("./config/database");
dbConnect();

// Default Route
app.get("/", (req, res) => {
  res.send(`<h1>This is HOMEPAGE BABY</h1>`);
});

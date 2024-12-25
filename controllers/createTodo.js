// Import the model
const Todo = require("../models/Todo");

// Define route handler
exports.createTodo = async (req, res) => {
  try {
    // Extract title and description from request body
    const { title, description } = req.body;

    // Create a todo object and insert it into DataBase
    const response = await Todo.create({ title, description });

    // Send a JSON response with a success message
    res.status(200).json({
      success: true,
      data: response,
      message: "Todo Entry created successfully.",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

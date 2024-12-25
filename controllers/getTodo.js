const Todo = require("../models/Todo");

// Define route handler
exports.getTodo = async (req, res) => {
  try {
    // fetch all todo items from the database
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "All Todos are fetched successfully.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    // Extract todo item based on id
    const { id } = req.params;
    // const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // if data is not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found with given id",
      });
    }

    //data is found
    res.status(200).json({
      success: true,
      data: todo,
      message: `todo ${id} data found successfully`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

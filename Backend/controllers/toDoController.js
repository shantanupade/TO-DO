const Todo = require("../models/todoModel");

exports.home = (req, res) => {
    res.send("Hello  Alph ");
  };

exports.createToDo = async (req,res) => {
    try{
        title = "Tommorow"
        tasks = ["two","three"]
        const todo = await Todo.create({ title, tasks });
        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            todo,
        });
    }catch (error){
        console.log(error)
    }
}
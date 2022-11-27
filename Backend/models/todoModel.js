const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    title: String,
    tasks: [String]
})

const TodoModel = mongoose.model("Todo",TodoSchema)
export default TodoModel;
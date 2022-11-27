const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    title: String,
    tasks: [String]
})

module.exports = mongoose.model("Todo",TodoSchema)

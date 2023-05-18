import mongoose from "mongoose";

mongoose

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const ToDoModel = mongoose.model("ToDo", todoSchema);

module.exports = ToDoModel;

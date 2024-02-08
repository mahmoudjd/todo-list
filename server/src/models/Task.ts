import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  name: String,
  completed: Boolean,
});

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;

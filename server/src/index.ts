import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { getTask } from "./controllers/getTask";
import { getTasks } from "./controllers/getTasks";
import { createTask } from "./controllers/createTask";
import { updateTask } from "./controllers/updateTask";
import { deleteTask } from "./controllers/deleteTask";

config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/tasks", getTasks);
app.post("/tasks", createTask);
app.get("/tasks/:taskId", getTask);
app.put("/tasks/:taskId", updateTask);
app.delete("/tasks/:taskId", deleteTask);

const PORT = process.env.PORT ?? 3000;
const MONGO_URL = process.env.MONGO_URL ?? "mongodb://127.0.0.1:27017/tasks";

mongoose.connect(MONGO_URL!).then(() => {
  console.log(`listening on ${PORT}`);
  app.listen(PORT);
});

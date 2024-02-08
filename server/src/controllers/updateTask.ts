import Task from "../models/Task";
import { Response, Request } from "express";

export async function updateTask(req: Request, res: Response) {
  const taskId = req.params.taskId;
  const task = await Task.findById(taskId);
  if (!task) {
    return res.status(404).send("not found Error");
  }

  task.name = req.body.name;
  task.completed = req.body.completed;

  await task.save();
  res.json(task);
}

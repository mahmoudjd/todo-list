import Task from "../models/Task";
import { Response, Request } from "express";

export async function deleteTask(req: Request, res: Response) {
  const taskId = req.params.taskId;
  const task = await Task.findByIdAndDelete(taskId);
  res.json(task);
}

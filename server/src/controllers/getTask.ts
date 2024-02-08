import Task from "../models/Task";
import { Response, Request } from "express";

export async function getTask(req: Request, res: Response) {
  const { taskId } = req.params;
  const task = await Task.findById(taskId);
  res.json(task);
}

import Task from "../models/Task";
import { Response, Request } from "express";

export async function getTasks(req: Request, res: Response) {
  const tasks = await Task.find();
  res.json(tasks);
}

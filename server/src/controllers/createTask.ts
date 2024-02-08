import { Request, Response } from "express";
import Task from "../models/Task";

export async function createTask(req: Request, res: Response) {
  const newTask = new Task({
    name: req.body.name,
    completed: req.body.completed,
  });

  const createTask = await newTask.save();
  res.json(createTask);
}

import { Request, Response } from "express";
import { Task } from "../types/tasks";
import { addTask } from "../services/tasks.service";
import { handleError } from "../utils/error/error-handler";

export const addTaskController = async (req: Request, res: Response) => {
  const task: Task = req.body;
  try {
    const result = await addTask(task);
    return res.status(200).json({
      success: true,
      message: "Task Added successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};

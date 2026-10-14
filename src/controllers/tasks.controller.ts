import { Request, Response } from "express";
import { Task, UpdateTask } from "../types/tasks";
import {
  addTask,
  deleteTask,
  getTask,
  getTaskById,
  updateTask,
} from "../services/tasks.service";
import { handleError } from "../utils/error/error-handler";

export const addTaskController = async (req: Request, res: Response) => {
  const task: Task = req.body;
  try {
    const user_id = req.user!.userId;
    const result = await addTask({
      user_id,
      ...task,
    });
    return res.status(200).json({
      success: true,
      message: "Task Added successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  const { task_id } = req.params as { task_id: string };
  const task: UpdateTask = req.body;
  try {
    const user_id = req.user!.userId;
    const result = await updateTask({
      user_id: user_id,
      task_id: task_id,
      ...task,
    });
    return res.status(200).json({
      success: true,
      message: "Task Updated successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};

export const getTaskController = async (req: Request, res: Response) => {
  try {
    const user_id = req.user!.userId;
    const result = await getTask(user_id);
    return res.status(200).json({
      success: true,
      message: "Task Fetched Successfully",
      data: result,
    });
  } catch (error) {
    handleError(error, res);
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  const { task_id } = req.params as { task_id: string };
  try {
    const user_id = req.user!.userId;
    const result = await deleteTask(user_id, task_id);
    return res.status(200).json({
      success: true,
      message: "Task Deleted Successfully",
    });
  } catch (error) {
    handleError(error, res);
  }
};

export const getTaskByIdController = async (req: Request, res: Response) => {
  const { task_id } = req.params as { task_id: string };
  try {
    const user_id = req.user!.userId;
    const result = await getTaskById(user_id, task_id);
    return res.status(200).json({
      success: true,
      message: "Task Fetched Successfully",
      data: result,
    });
  } catch (error) {
    handleError(error, res);
  }
};

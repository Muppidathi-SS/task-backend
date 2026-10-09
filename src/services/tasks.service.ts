import pool from "../config/db";
import { ADD_TASK_QUERY } from "../queries/tasks/task.query";
import { Task } from "../types/tasks";

export const addTask = async (task: Task) => {
  const result = await pool.query(ADD_TASK_QUERY, Object.values(task));
  return result.rows;
};

import pool from "../config/db";
import {
  ADD_TASK_QUERY,
  DELETE_TASK_QUERY,
  GET_TASK_QUERY,
  GET_TASK_QUERY_BY_ID,
  UPDATE_TASK_QUERY,
} from "../queries/tasks/task.query";
import { TaskPayload, UpdateTaskPayload } from "../types/tasks";

export const addTask = async (task: TaskPayload) => {
  const result = await pool.query(ADD_TASK_QUERY, Object.values(task));
  return result.rows;
};

export const updateTask = async (task: UpdateTaskPayload) => {
  const result = await pool.query(UPDATE_TASK_QUERY, Object.values(task));
  return result.rows;
};

export const getTask = async (user_id: string) => {
  const result = await pool.query(GET_TASK_QUERY, [user_id]);
  return result.rows;
};

export const deleteTask = async (user_id: string, task_id: string) => {
  const result = await pool.query(DELETE_TASK_QUERY, [user_id, task_id]);
  return result.rows;
};

export const getTaskById = async(user_id: string, task_id: string) => {
  const result = await pool.query(GET_TASK_QUERY_BY_ID, [user_id, task_id]);
  return result.rows;
};
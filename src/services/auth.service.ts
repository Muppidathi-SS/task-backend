import pool from "../config/db";
import { ADD_USER } from "../queries/auth/auth.query";
import type { User } from "../types/auth";

export const addUser = async (data: User) => {
  const result = await pool.query(ADD_USER, [
    data.name,
    data.email,
    data.password,
  ]);
  return result.rows;
};

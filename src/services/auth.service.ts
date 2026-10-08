import pool from "../config/db";
import { ADD_USER, GET_USER_BY_EMAIL_QUERY } from "../queries/auth/auth.query";
import type { User } from "../types/auth";
import { generateToken } from "../utils/auth/jwt";
import { comparePassword } from "../utils/auth/password";

export const addUser = async (data: User) => {
  const result = await pool.query(ADD_USER, [
    data.name,
    data.email,
    data.password,
  ]);
  return result.rows;
};

export const loginUser = async (email: string, password: string) => {
  const result = await pool.query(GET_USER_BY_EMAIL_QUERY, [email]);

  if (result.rows.length === 0) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const user = result.rows[0];

  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const token = generateToken(user.user_id);

  return {
    user: {
      user_id: user.user_id,
      name: user.name,
      email: user.email,
    },
    token,
  };
};

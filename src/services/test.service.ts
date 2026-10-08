import pool from "../config/db.js";
import { TEST_QUERY } from "../queries/query.js";

export const testService = async () => {
  const result = await pool.query(TEST_QUERY);
  return result.rows;
};

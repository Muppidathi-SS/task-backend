import pool from "../config/db";
import { DASHBOARD_HEADER } from "../queries/dashboard/dashboard.query";

export const dashboardRecords = async (user_id: string) => {
  const result = await pool.query(DASHBOARD_HEADER, [user_id]);
  return result.rows;
};

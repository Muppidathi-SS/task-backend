import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const isProduction = process.env.DB_MODE === "production";

const pool = isProduction
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
    })
  : new Pool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

export default pool;
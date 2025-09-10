import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "postgres",
  password: process.env.PASSWORD || "2008",
  database: process.env.DATABASE || "integraSeo",
  port: process.env.PORT || 5432,
});

pool.connect()
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Database connection error:", err));

export default pool;
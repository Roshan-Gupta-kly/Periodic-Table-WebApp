import { Pool } from "pg";

const pool = new Pool({
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

// Optional: test connection once at startup
(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("PostgreSQL connected at:", res.rows[0].now);
  } catch (err) {
    console.error(" PostgreSQL connection error:", err);
  }
})();

export default pool;

import { Pool } from "pg";

const pool = new Pool({
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

export async function getQuizQuestions() {
  const client = await pool.connect();
  try {
    const res = await client.query(`
      SELECT id, question, option_a, option_b, option_c, option_d
      FROM quiz_questions
    `);
    return res.rows;
  } catch (error) {
    throw new Error("Error fetching quiz questions: " + error.message);
  } finally {
    client.release();
  }
}

export default pool;

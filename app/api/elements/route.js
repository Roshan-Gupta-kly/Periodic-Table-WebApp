// app/api/elements/route.js
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT * FROM elements ORDER BY atomic_number ASC LIMIT 20"
    );
    console.log(result.rows);
    console.log(
      "Connecting to DB:",
      process.env.PGDATABASE,
      process.env.PGUSER
    );
    return Response.json(result.rows);
  } catch (error) {
    console.error("Error fetching elements:", error);
    return new Response("Failed to fetch elements", { status: 500 });
  }
}

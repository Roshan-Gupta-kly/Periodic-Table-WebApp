// app/api/element/[id]/properties/route.js
import pool from "@/lib/db";

export async function GET(req, { params }) {
  const client = await pool.connect();
  try {
    const result = await client.query(`
      SELECT p.*
      FROM properties p
      WHERE p.element_id = $1
    `, [params.id]);
    return Response.json(result.rows[0]);
  } catch (e) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  } finally {
    client.release();
  }
}

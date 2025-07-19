// app/api/elements/[id]/route.js
import pool from "@/lib/db";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const result = await pool.query("SELECT * FROM elements WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return new Response("Element not found", { status: 404 });
    }

    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching element by ID:", error);
    return new Response("Failed to fetch element", { status: 500 });
  }
}

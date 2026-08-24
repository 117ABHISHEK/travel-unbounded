// app/api/test/route.ts
import dbConnect from "@/lib/mongodb";

export async function GET() {
  await dbConnect();
  return Response.json({ ok: true });
}
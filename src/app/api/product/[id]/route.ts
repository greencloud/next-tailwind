import { NextResponse } from 'next/server';

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const apiRes = await fetch(
    `${process.env.API_URL}/api/product/${id}`,
    {
      headers: { 'x-api-jwt': process.env.API_JWT || '' },
      cache: 'no-store'
    }
  );

  if (!apiRes.ok) {
    return NextResponse.json({ error: "Backend error" }, { status: apiRes.status });
  }

  const data = await apiRes.json();
  return NextResponse.json(data);
}

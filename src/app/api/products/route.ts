import { NextResponse } from 'next/server';

export async function GET() {
  const apiRes = await fetch(`${process.env.API_URL}/api/products`, {
    headers: { 'x-api-jwt': process.env.API_JWT || '' },
    cache: 'no-store'
  });

  const data = await apiRes.json();
  return NextResponse.json(data);
}
import { NextResponse } from 'next/server';

// Create data
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const apiRes = await fetch(`${process.env.API_URL}/api/create-product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-jwt': process.env.API_JWT || ''
      },
      body: JSON.stringify(body),
      next: { revalidate: 60 }
    });

    if (!apiRes.ok) {
      return NextResponse.json(
        { message: 'Backend rejected the request' },
        { status: apiRes.status }
      );
    }

    const data = await apiRes.json();
    return NextResponse.json({ success: true, message: 'Saved!', data: body });
  } catch (err) {
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}

// Read data
export async function GET() {
  const start = performance.now();

  const apiRes = await fetch(`${process.env.API_URL}/api/all-products`, {
    headers: { 'x-api-jwt': process.env.API_JWT || '' },
    next: { revalidate: 60 }
  });

  const end = performance.now();

  const data = await apiRes.json();

  console.log(`Fetch /api/products took ${end - start} ms`);

  return NextResponse.json(data);
}
import { NextResponse } from 'next/server';

// Update data
export async function PATCH(req: Request, { params }: any) {
  const body = await req.json();

  const apiRes = await fetch(`${process.env.API_URL}/api/update-product/${params.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'x-api-jwt': process.env.API_JWT || '',
    },
    body: JSON.stringify(body),
    next: { revalidate: 60 }
  });

  return NextResponse.json(await apiRes.json(), { status: apiRes.status });
}

// Delete data
export async function DELETE(req: Request, { params }: any) {
  const apiRes = await fetch(`${process.env.API_URL}/api/delete-product/${params.id}`, {
    method: 'DELETE',
    headers: {
      'x-api-jwt': process.env.API_JWT || '',
    },
    next: { revalidate: 60 }
  });

  return NextResponse.json(await apiRes.json(), { status: apiRes.status });
}
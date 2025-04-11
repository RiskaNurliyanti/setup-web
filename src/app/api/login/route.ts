// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Cek username dan password
  if (username === 'admin' && password === '1234') {
    return NextResponse.json({ isSuccess: true });
  }

  return NextResponse.json(
    { isSuccess: false, message: 'Username atau password salah' },
    { status: 401 }
  );
}

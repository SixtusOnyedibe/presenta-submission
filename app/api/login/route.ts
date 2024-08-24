import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request | NextRequest) {
  try {
    const { username, password } = await req.json();
    const response = await fetch(
      'https://devapi.thepresenta.com/Account/login',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserName: username,
          Password: password,
        }),
      }
    );

    const data = await response.json();

    if (response.status !== 200) {
      return new NextResponse(JSON.stringify(data), {
        status: response.status,
      });
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: 'Login failed please check your credentials',
        error,
      }),
      { status: 400 }
    );
  }
}

import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ];

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const { name } = await request.json();

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const newUser = { id: Date.now(), name };

  // Here you would typically save the new user to a database

  return NextResponse.json(newUser, { status: 201 });
}

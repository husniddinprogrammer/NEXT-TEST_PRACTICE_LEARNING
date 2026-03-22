import { cookies } from "next/headers";
import { signToken } from "@/app/lib/jwt";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  
  if (username === "admin@gmail.com" && password === "123") {
    const token = signToken({ username });
    (await cookies()).set("token", token);

    return Response.json({ message: "Login success" });
  }

  return new Response("Invalid credentials", { status: 401 });
}
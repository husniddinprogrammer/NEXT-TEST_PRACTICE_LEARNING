import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { SECRET } from "./jwt";

export const getUserFromToken = async () => {
  const token = (await cookies()).get("token")?.value;
  
  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, SECRET) as { username: string };
    return decoded;
  } catch {
    return null;
  }
};

export const isAuthenticated = async () => {
  const user = await getUserFromToken();
  return user !== null;
};

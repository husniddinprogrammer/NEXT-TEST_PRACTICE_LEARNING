import jwt from "jsonwebtoken";

export const SECRET = "my-secret-key";

export const signToken = (payload: object) => {
  return jwt.sign(payload, SECRET, { expiresIn: 2 * 60 * 60 });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
};

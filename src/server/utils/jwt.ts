import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret_token';
const JWT_EXPIRATION =process.env.JWT_EXPIRATION || '1';

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, SECRET,{expiresIn: JWT_EXPIRATION} as any);
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (e) {
    return null;
  }
};
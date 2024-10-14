import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const JWT_SECRET = process.env['JWT_SECRET'] as string;
  const token = req.headers['authorization'];
  let { user } = req.body;
  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to authenticate token' });
    }
    user = decoded;
    next();
  });
};

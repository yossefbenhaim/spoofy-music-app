import { TRPCError } from '@trpc/server';
import jwt from 'jsonwebtoken';

export const verifyTokenMiddleware = (token: string) => {
  const NX_JWT_SECRET = process.env['NX_JWT_SECRET'] as string;

  try {
    const decoded = jwt.verify(token, NX_JWT_SECRET);
    console.log({ decoded });

    return decoded;
  } catch (err) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Failed to authenticate token',
    });
  }
};

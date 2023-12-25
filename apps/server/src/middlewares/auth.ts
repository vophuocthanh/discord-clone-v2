import jwt from 'jsonwebtoken';
import { UnauthorizedException } from '@/utils/exceptions';
import { Context, Next } from 'hono';
import { db } from '@/lib/db';
import { JWT_SECRET } from '@/utils/constants';

export const auth = async (c: Context, next: Next) => {
  try {
    const authHeader = c.req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Unauthorized');
    }
    const data = jwt.verify(token, JWT_SECRET) as { userID: string };

    const user = await db.user.findUnique({
      where: {
        id: data.userID,
      },
    });

    c.set('user', user);
    await next();
  } catch (error) {
    console.log(error);
    throw new UnauthorizedException('Unauthorized');
  }
};

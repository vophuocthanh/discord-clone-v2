import { db } from '@prisma/db';

export class AuthService {
  static async signIn(email: string, password: string) {
    return {
      token: '123',
    };
  }
  static async signUp(email: string, password: string) {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      throw new Error(`User ${email} already exists`);
    }
    const newUser = await db.user.create({
      data: {
        email: email,
        password: password,
      },
    });
  }
}

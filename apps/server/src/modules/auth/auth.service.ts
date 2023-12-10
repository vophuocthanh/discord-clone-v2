import { db } from '@/lib/db';
import { hashPassword } from '@/utils/password';
import * as bcrypt from 'bcrypt';

export class AuthService {
  static async signIn(email: string, password: string) {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new Error(`User ${email} not found`);
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error(`Invalid password`);
    }
    return '12312321321';
  }
  static async signUp(email: string, password: string) {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      throw new Error(`Email ${email} already exists`);
    }
    const salt = '124124';
    const hashedPassword = await hashPassword(password, salt);

    const newUser = await db.user.create({
      data: {
        email: email,
        password: hashedPassword,
        salt: salt,
      },
    });

    return newUser;
  }
}

import { Prisma, User } from '@prisma/client';
import { db } from '@/lib/db';
import { BadRequestException, UnauthorizedException } from '@/utils/exceptions';
import { hashPassword } from '@/utils/password';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { mailService } from '@/lib/mail.service';
import { JWT_SECRET, WEB_URL, API_URL } from '@/utils/constants';

export const ACCESS_TOKEN_EXPIRE_IN = 60 * 60 * 24;

export const AuthService = {
  verifyUser: async (user: User) => {
    if (user.isVerified) return;
    return db.user.update({
      where: {
        id: user.id,
      },
      data: {
        isVerified: true,
      },
    });
  },
  sendVerifyEmail: async (user: User) => {
    const accessToken = AuthService.createToken(user);
    return mailService.sendMail({
      to: user.email,
      html: `Click <a href="${API_URL}/verify-email?token=${accessToken}">here</a> to verify email!`,
      subject: 'Verify Email',
    });
  },
  signIn: async (email: string, password: string) => {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new UnauthorizedException(`Email ${email} not found`);
    }
    if (!user.isVerified) {
      throw new UnauthorizedException(
        'Email not verified! Please verify your email before login'
      );
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const accessToken = AuthService.createToken(user);

    return { accessToken };
  },
  signUp: async (email: string, password: string) => {
    try {
      if (!email || !password) {
        throw new BadRequestException('Email and password are required');
      }

      const salt = bcrypt.genSaltSync();
      const hashedPassword = await hashPassword(password, salt);

      const newUser = await db.user.create({
        data: {
          email: email,
          password: hashedPassword,
          salt: salt,
        },
      });

      return newUser;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new UnauthorizedException(`User ${email} already exists`);
      }
      throw error;
    }
  },
  createToken: (user: User) => {
    return jwt.sign(
      { userID: user.id, isVerified: user.isVerified },
      JWT_SECRET,
      {
        expiresIn: ACCESS_TOKEN_EXPIRE_IN,
      }
    );
  },
  forgotPassword: async (email: string) => {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new BadRequestException(`Email ${email} not found`);
    }
    const accessToken = AuthService.createToken(user);

    await mailService.sendMail({
      to: email,
      html: `Click <a href="${WEB_URL}/reset-password?token=${accessToken}">here</a> to reset your password`,
      subject: 'Reset  password',
    });
  },
  resetPassword: async (user: User, newPassword: string) => {
    const isSamePassword = await bcrypt.compare(newPassword, user.password);

    if (isSamePassword) {
      throw new BadRequestException(
        'New password cannot be the same as old password'
      );
    }

    const salt = bcrypt.genSaltSync();
    const hashedPassword = await hashPassword(newPassword, salt);

    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
        salt: salt,
      },
    });
  },
};

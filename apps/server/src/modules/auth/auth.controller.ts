import { Hono } from 'hono';
import { AuthService } from './auth.service';
import {
  forgotPasswordDto,
  resetPasswordDto,
  signInDto,
  signUpDto,
} from './dto/auth.dto';
import { zValidator } from '@hono/zod-validator';
import { auth, verifyToken } from '@/middlewares/auth';
import { UnauthorizedException } from '@/utils/exceptions';
import { WEB_URL } from '@/utils/constants';

export const router = new Hono();

router
  .post('/sign-in', zValidator('json', signInDto), async (c) => {
    const { email, password } = await c.req.json();

    const data = await AuthService.signIn(email, password);

    return c.json(data, 200);
  })
  .post('/sign-up', zValidator('json', signUpDto), async (c) => {
    const { email, password } = await c.req.json();

    const user = await AuthService.signUp(email, password);
    await AuthService.sendVerifyEmail(user);
    return c.json(
      {
        message:
          'Sign up successfully. Please check your email to verify your account.',
      },
      201
    );
  })
  .get('/verify-email', async (c) => {
    const token = c.req.query('token');

    if (!token) throw new UnauthorizedException('Missing token');

    const user = await verifyToken(token);

    await AuthService.verifyUser(user);

    return c.redirect(`${WEB_URL}/verify-email-success`, 302);
  })
  .post(
    '/forgot-password',
    zValidator('json', forgotPasswordDto),
    async (c) => {
      const { email } = await c.req.json();

      await AuthService.forgotPassword(email);

      return c.json(
        {
          message:
            'Reset password link has been sent to your email. Please check your email to reset your password.',
        },
        201
      );
    }
  )
  .put(
    '/reset-password',
    auth,
    zValidator('json', resetPasswordDto),
    async (c) => {
      const user = c.get('user');
      const { password } = await c.req.json();

      await AuthService.resetPassword(user, password);

      return c.json(
        {
          message:
            'Your password has been reset successfully. Please login with your new password.',
        },
        200
      );
    }
  );

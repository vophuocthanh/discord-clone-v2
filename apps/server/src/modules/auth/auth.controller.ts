import { Hono } from 'hono';
import { AuthService } from './auth.service';

export const router = new Hono();

router
  .post('/sign-in', async (c) => {
    const { email, password } = await c.req.json();

    const token = await AuthService.signIn(email, password);

    return c.json(
      {
        token,
      },
      200
    );
  })
  .post('/sign-up', async (c) => {
    const { email, password } = await c.req.json();

    await AuthService.signUp(email, password);

    return c.json(
      {
        message:
          'Sign up successfully. Please check your email to verify your account.',
      },
      201
    );
  });

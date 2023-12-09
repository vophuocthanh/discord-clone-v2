import { Hono } from 'hono';
import { AuthService } from './auth.service';

export const router = new Hono();

router
  .post('/sign-in', async (c) => {
    const { email, password } = await c.req.json();
    if (email === 'phuocthanh@gmail.com' && password === '!Enouvo123') {
      return c.json({ token: '124' });
    }
    return c.json({ error: 'Invalid email or password' }, 401);
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

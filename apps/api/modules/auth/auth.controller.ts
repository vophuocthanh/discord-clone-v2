import { Hono } from 'hono';

export const router = new Hono();

router
  .post('/sign-in', async (c) => {
    const { email, password } = await c.req.json();

    if (email === 'phuocthanh@gmail.com' && password === '!Enouvo123') {
      return c.json({ token: '124' });
    }
    return c.json({ error: 'Invalid email or password' }, 401);
  })
  .post('/sign-up', (c) => c.json({ token: '124' }));

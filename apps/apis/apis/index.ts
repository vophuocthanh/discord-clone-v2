import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');

app.get('/sign-in', (c) => c.json({ token: '123' }));
export default handle(app);

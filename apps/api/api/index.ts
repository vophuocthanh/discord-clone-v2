import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { router as auth } from '../modules/auth/auth.controller';
import { router as orgs } from '../modules/orgs/orgs.controller';

const app = new Hono().basePath('/api');

app.use('*', logger());
app.use(
  '*',
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);
app.route('/', auth);
app.route('/orgs', orgs);

serve(app, () => {
  console.log('Server is running on http://localhost:3000');
});

// export const config = {
//   runtime: 'edge',
// };
// export default handle(app);

import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const bootstrap = async () => {
  const app = new Hono().basePath('/api');
  app.get('/', (c) => c.text('Hello Node.js!'));
  serve(app);
  console.log('Listening on http://localhost:3000/api');
};

bootstrap();

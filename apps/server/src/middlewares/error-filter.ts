import { Context } from 'hono';

export const errorFilter = async (error: Error, c: Context) => {
  return c.json(
    {
      status: error.status ?? 500,
      message: error.message ?? 'Something went wrong',
    },
    error.status
  );
};

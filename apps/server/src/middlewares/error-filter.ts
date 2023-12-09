import { Context } from 'hono';

export const errorFilter = async (error: Error, c: Context) => {
  console.error(error);
  return c.json(
    {
      status: 500,
      message: 'Something went wrong',
    },
    500
  );
};

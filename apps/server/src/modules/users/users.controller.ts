import { Hono } from 'hono';
import { UsersService } from './users.service';
import { zValidator } from '@hono/zod-validator';
import { updateMeDto } from './dto/update-me.dto';

export const router = new Hono();

router
  .get('/me', async (c) => {
    const { password, salt, ...user } = c.get('user');

    return c.json({
      data: user,
      status: 200,
    });
  })
  .put('/me', zValidator('json', updateMeDto), async (c) => {
    const user = c.get('user');
    const updateMeDto = await c.req.json();
    const updatedMe = await UsersService.updateMe(user, updateMeDto);

    return c.json({
      data: updatedMe,
      status: 200,
    });
  });

import { Hono } from 'hono';
import { FriendsService } from './friends.service';
import { sendFriendRequestDto } from './dtos/send-friend-request.dto';
import { zValidator } from '@hono/zod-validator';
import { UsersService } from '../users/users.service';

export const router = new Hono();

router
  .get('/', async (c) => {
    const user = c.get('user');
    const friends = await FriendsService.getAllBy(user.id);

    return c.json({
      data: friends,
      status: 200,
    });
  })
  .post('/', zValidator('json', sendFriendRequestDto), async (c) => {
    const { username } = await c.req.json();
    const user = c.get('user');

    const userOf = await UsersService.getByUsername(username);

    await FriendsService.sendRequest(user, userOf);

    return c.json({
      message: 'Friend sent request successfully',
      status: 201,
    });
  });

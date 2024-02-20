import { z } from 'zod';

export const sendFriendRequestDto = z.object({
  username: z.string().min(1, 'UserName is required'),
});

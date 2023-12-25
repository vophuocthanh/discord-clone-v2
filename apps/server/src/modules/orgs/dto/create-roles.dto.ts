import { z } from 'zod';

export const createRoleDto = z.object({
  name: z.string().min(1, 'Name is required'),
  color: z.string().min(1, 'Icon is required'),
});

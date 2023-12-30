import { z } from 'zod';

export const updateMeDto = z.object({
  fullName: z.string().min(1, 'Name is required'),
});

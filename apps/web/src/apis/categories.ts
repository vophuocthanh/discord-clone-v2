import { request } from '@/lib/request';
import * as z from 'zod';

const createCategorySchema = z.object({
  name: z.string(),
  isPrivate: z.boolean(),
});

type CreateCategory = z.infer<typeof createCategorySchema>;

export const categorySchema = z.object({
  id: z.string(),
  isPrivate: z.boolean(),
  name: z.string(),
  channels: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      isPrivate: z.boolean(),
      type: z.string(),
    })
  ),
});

export type Category = z.infer<typeof categorySchema>;

export const createCategory = async ({
  orgID,
  createCategoryDto,
}: {
  orgID: string;
  createCategoryDto: CreateCategory;
}) => {
  return request.post(`/orgs/${orgID}/categories`, createCategoryDto);
};

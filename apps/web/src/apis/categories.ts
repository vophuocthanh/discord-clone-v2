import { request } from '@/lib/request';
import * as z from 'zod';
import { channelSchema } from './channels';

const createCategorySchema = z.object({
  name: z.string(),
  isPrivate: z.boolean(),
});

type CreateCategory = z.infer<typeof createCategorySchema>;

export const createCategory = async ({
  orgID,
  createCategoryDto,
}: {
  orgID: string;
  createCategoryDto: CreateCategory;
}) => {
  return request.post(`/orgs/${orgID}/categories`, createCategoryDto);
};

export const categorySchema = z.object({
  id: z.string(),
  isPrivate: z.boolean(),
  name: z.string(),
  channels: z.array(channelSchema),
});

export type Category = z.infer<typeof categorySchema>;

export const deleteCategory = async (categoryID: string) => {
  return request.delete(`/categories/${categoryID}`);
};

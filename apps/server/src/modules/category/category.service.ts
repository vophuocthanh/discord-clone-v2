import { db } from '@/lib/db';
import { BadRequestException } from '@/utils/exceptions';
import { Prisma } from '@prisma/client';

export const CategoryService = {
  async getBy(orgId: string) {
    const category = await db.category.findFirst({
      where: {
        id: orgId,
      },
    });

    return category;
  },
  async create(orgId: string, createCategoryDto: Prisma.CategoryCreateInput) {
    const channel = await db.category.create({
      data: {
        id: orgId,
        ...createCategoryDto,
      },
    });

    return channel;
  },

  async delete(categoryId: string) {
    try {
      return await db.category.delete({
        where: {
          id: categoryId,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new BadRequestException('Channel not found');
      }
      throw error;
    }
  },
  async update(
    channelId: string,
    updateCategoryDto: Prisma.CategoryUpdateInput
  ) {
    const updatedCategory = await db.category.update({
      where: {
        id: channelId,
      },
      data: updateCategoryDto,
    });
    return updatedCategory;
  },
};

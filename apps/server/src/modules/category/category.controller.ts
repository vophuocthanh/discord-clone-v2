import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { CategoryService } from './category.service';

export const router = new Hono();

router
  .get('/:categoryId', async (c) => {
    const categoryId = c.req.param('categoryId');
    const channel = await CategoryService.getBy(categoryId);

    return c.json({
      data: channel,
      status: 200,
    });
  })
  .put('/:categoryId', async (c) => {
    const categoryId = c.req.param('categoryId');
    const updateCategoryDto = await c.req.json();
    const updatedCategory = await CategoryService.update(
      categoryId,
      updateCategoryDto
    );

    return c.json({
      data: updatedCategory,
      status: 200,
    });
  })
  .delete('/:categoryId', async (c) => {
    const categoryId = c.req.param('categoryId');
    await CategoryService.delete(categoryId);

    return c.json({
      status: 200,
      message: 'Category deleted successfully',
    });
  });

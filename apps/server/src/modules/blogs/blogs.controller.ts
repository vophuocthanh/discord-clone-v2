import { Hono } from 'hono';
import { BlogsService } from './blogs.service';

export const router = new Hono();

router
  .get('/', async (c) => {
    const blogs = await BlogsService.getAll();
    return c.json({
      data: blogs,
      status: 200,
    });
  })
  .post('/', async (c) => {
    const { image, title, content } = await c.req.json();
    const blog = await BlogsService.create({
      image,
      title,
      content,
    });
    console.log('blog:', blog);

    return c.json(
      {
        data: blog,
        status: 201,
      },
      201
    );
  })
  .put('/:blogId', async (c) => {
    const blogId = c.req.param('blogId');
    const updateBlog = await c.req.json();
    const blog = await BlogsService.update(blogId, updateBlog);
    return c.json({
      data: blog,
      status: 200,
    });
  })
  .get('/:blogId', async (c) => {
    const blogId = c.req.param('blogId');
    const blog = await BlogsService.getBy(blogId);

    return c.json({
      data: blog,
      status: 200,
    });
  })
  .delete('/:blogId', async (c) => {
    const blogId = c.req.param('blogId');

    await BlogsService.deleteBy(blogId);

    return c.json({
      message: 'Blog deleted successfully',
      status: 200,
    });
  });

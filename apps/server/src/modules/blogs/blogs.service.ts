import { db } from '@/lib/db';
import { BadRequestException } from '@/utils/exceptions';
import { Prisma } from '@prisma/client';

interface CreateBlog {
  image: string;
  title: string;
  content: string;
}

export const BlogsService = {
  getAll: async () => {
    const blogs = await db.blog.findMany();

    return blogs;
  },
  create: async ({ image, title, content }: CreateBlog) => {
    const blog = await db.blog.create({
      data: {
        image,
        title,
        content,
      },
    });

    return blog;
  },
  update: async (blogId: string, updateBlogDto: Prisma.BlogUpdateInput) => {
    const blog = await db.blog.update({
      where: {
        id: blogId,
      },
      data: updateBlogDto,
    });
    return blog;
  },
  getBy: async (blogId: string) => {
    const blog = await db.blog.findFirst({
      where: {
        id: blogId,
      },
    });
    return blog;
  },
  deleteBy: async (blogId: string) => {
    const blog = await BlogsService.getBy(blogId);

    if (!blog) throw new BadRequestException('Blog not found!');

    return db.blog.delete({
      where: {
        id: blogId,
      },
    });
  },
};

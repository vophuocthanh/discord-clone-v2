import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';
import { BadRequestException } from '@/utils/exceptions';

export const OrgsService = {
  getAll: async (userId: string, { page = 1, limit = 5, search = '' }) => {
    const orgs = await db.org.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        userID: userId,
        name: {
          contains: search,
        },
      },
    });
    const total = await db.org.count({
      where: {
        userID: userId,
        name: {
          contains: search,
        },
      },
    });

    return {
      data: orgs,
      total: total,
      totalPage: Math.ceil(total / limit),
    };
  },
  getBy: async (orgId: string) => {
    const org = await db.org.findFirst({
      where: {
        id: orgId,
      },
    });
    if (!org) {
      throw new BadRequestException('Org not found!');
    }

    return org;
  },
  create: async (org: Prisma.OrgCreateInput) => {
    const createdOrg = await db.org.create({
      data: org,
    });

    return createdOrg;
  },
  update: async (orgId: string, updateOrgsDto: Prisma.OrgUpdateInput) => {
    const org = await db.org.update({
      where: {
        id: orgId,
      },
      data: updateOrgsDto,
    });
    return org;
  },
  delete: async (orgId: string) => {
    try {
      const org = await db.org.delete({
        where: {
          id: orgId,
        },
      });
      return org;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new BadRequestException('Org not found!');
        }
      }
      throw error;
    }
  },
  getCategory(orgId: string) {
    return db.category.findMany({
      where: {
        orgID: orgId,
      },
    });
  },
  createCategory: async (
    orgId: string,
    createCategoryDto: Prisma.CategoryCreateInput
  ) => {
    const category = await db.category.create({
      data: {
        orgID: orgId,
        name: createCategoryDto.name,
      },
    });
    return category;
  },
  getRoles: async (orgId: string) => {
    const roles = db.role.findMany({
      where: {
        orgID: orgId,
      },
    });
    return roles;
  },
  createRole: async (orgId: string, createRoleDto: Prisma.RoleCreateInput) => {
    const role = await db.role.create({
      data: {
        orgID: orgId,
        name: createRoleDto.name,
        color: createRoleDto.color,
      },
    });
    return role;
  },
  updateRole: async (roleId: string, createRoleDto: Prisma.RoleUpdateInput) => {
    const role = await db.role.update({
      where: {
        id: roleId,
      },
      data: {
        name: createRoleDto.name,
        color: createRoleDto.color,
      },
    });
    return role;
  },
  deleteRole: async (roleId: string) => {
    try {
      if (!roleId) {
        throw new BadRequestException('Role not found!');
      }
      const role = await db.role.delete({
        where: {
          id: roleId,
        },
      });
      return role;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new BadRequestException(`Role ${roleId} not found`);
      } else {
        throw error;
      }
    }
  },
};

import { db } from '@/lib/db';
import { BadRequestException } from '@/utils/exceptions';
import { Prisma } from '@prisma/client';

export class OrgsService {
  static async deleteOrgs() {
    try {
      const orgs = await db.org.deleteMany({
        where: {
          id: {
            not: '1',
          },
        },
      });
      return orgs;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  static async getAll(userID: string, { page = 1, limit = 5, search = '' }) {
    const orgs = await db.org.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        userID: userID,
        name: {
          contains: search,
        },
      },
    });

    const total = await db.org.count({
      where: {
        userID: userID,
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
  }

  static async getBy(orgId: string) {
    const org = await db.org.findFirst({
      where: {
        id: orgId,
      },
    });
    if (!org) {
      throw new BadRequestException('Org not found!');
    }
    return org;
  }
  static async create(org: Prisma.OrgCreateInput) {
    const createOrg = await db.org.create({
      data: org,
    });
    return createOrg;
  }
}

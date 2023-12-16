import { db } from '@/lib/db';

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
}

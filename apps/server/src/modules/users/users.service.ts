import { db } from '@/lib/db';
import { User } from '@prisma/client';

export const UsersService = {
  updateMe: async (user: User, updateMeDto: { fullName: string }) => {
    const { password, salt, ...me } = await db.user.update({
      where: {
        id: user.id,
      },
      data: updateMeDto,
    });

    return me;
  },
};

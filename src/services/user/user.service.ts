import { Injectable } from '@nestjs/common';
import Logger from '@Logger/log';
import { Prisma, User } from '@Db/client';

@Injectable()
export class UserService {
  async findUser(userId: string): Promise<User | null> {
    try {
      return await Prisma.user.findUnique({ where: { id: userId } });
    } catch (e: any) {
      Logger.error(e);
      return null;
    } finally {
      await Prisma.$disconnect();
    }
  }

  async findOrCreate(profile: any): Promise<User | null> {
    try {
      const user = await Prisma.user.findFirst({ where: { facebookId: profile.id } });
      if (user) return user;
      return Prisma.user.create({
        data: {
          email: profile.emails[0].value,
          lastName: profile.name.familyName,
          firstName: profile.name.givenName,
          face: undefined,
          facebook: {
            create: {
              id: profile.id,
              avatar: profile.photos[0].value,
            },
          },
        },
      });
    } catch (e: any) {
      Logger.error(e);
      return null;
    }
  }
}

import { Injectable } from '@nestjs/common';
import Logger from '@Logger/log';
import { Prisma, User } from '@Db/client';
import { Mapper } from '@Utils/mapper';
import { UserDto } from '@Db/dto/user.dto';

@Injectable()
export class UserService {
  constructor(private mapperService: Mapper) {}

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

  async findOrCreate(profile: any): Promise<UserDto | null> {
    try {
      const user = await Prisma.user.findFirst({ where: { facebookId: profile.id } });
      if (user) return this.mapperService.map<UserDto>(user, UserDto);
      const userCreated = Prisma.user.create({
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
      return this.mapperService.map<UserDto>(userCreated, UserDto);
    } catch (e: any) {
      Logger.error(e);
      return null;
    }
  }
}

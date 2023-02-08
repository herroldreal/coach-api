import { FaceDto } from '@Db/dto/face.dto';
import { AutoMap } from '@automapper/classes';

export class UserDto {
  @AutoMap()
  email: string;

  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  @AutoMap()
  fullName: string;

  @AutoMap()
  facebookId: string;

  @AutoMap()
  facePattern?: FaceDto;

  @AutoMap()
  picture: string;
}

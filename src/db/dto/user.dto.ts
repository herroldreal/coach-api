import { FaceDto } from '@Db/dto/face.dto';
import { Expose, Type } from 'class-transformer';

export class UserDto {
  @Expose()
  email: string;

  @Expose()
  fullName: string;

  @Expose()
  facebookId: string;

  @Expose()
  @Type(() => FaceDto)
  facePattern?: FaceDto;

  @Expose()
  picture: string;
}

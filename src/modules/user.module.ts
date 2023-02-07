import { Module } from '@nestjs/common';
import { UserService } from '@Services/user/user.service';

@Module({
  providers: [UserService],
})
export class UserModule {}
